import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [accommodation, setAccommodation] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    special_requests: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card">("mpesa");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const accommodationOptions = [
    {
      value: "camping",
      label: "Camping Experience - KES 2,000/night",
      price: 2000,
    },
    {
      value: "glamping",
      label: "Glamping Retreat - KES 4,000/night",
      price: 4000,
    },
    {
      value: "attic1",
      label: "Attic 1 - KES 5,000/night",
      price: 5000,
    },
    {
      value: "attic2",
      label: "Attic 2 - KES 5,000/night",
      price: 5000,
    },
    {
      value: "attic3",
      label: "Attic 3 - KES 5,000/night",
      price: 5000,
    },
    {
      value: "attic4",
      label: "Attic 4 - KES 5,000/night",
      price: 5000,
    },
    {
      value: "north-room",
      label: "North Room - KES 8,000/night",
      price: 8000,
    },
    {
      value: "south-room",
      label: "South Room - KES 10,000/night",
      price: 10000,
    },
    {
      value: "middle-room",
      label: "Middle Room - KES 12,000/night",
      price: 12000,
    },
    {
      value: "double-room",
      label: "Double Room - KES 15,000/night",
      price: 15000,
    },
    {
      value: "vip-room",
      label: "VIP Room - KES 20,000/night",
      price: 20000,
    },
  ];

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !accommodation) return 0;

    const nights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
    const selectedAccommodation = accommodationOptions.find(
      (opt) => opt.value === accommodation
    );
    const pricePerNight = selectedAccommodation?.price || 0;

    return nights * pricePerNight;
  };

  const handleCheckAvailability = () => {
    if (checkIn && checkOut && accommodation) {
      setShowBookingForm(true);
    }
  };

  const handlePesapalPayment = async () => {
    // Determine API URL based on environment
    // If running on localhost, always use local backend
    // Otherwise, use env variable or default to production
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname.startsWith('192.168.');
    
    let pesapalApiUrl;
    if (isLocalhost) {
      // Always use local backend for development
      pesapalApiUrl = 'http://localhost:3000/api/pesapal/order';
    } else {
      // Use env variable or fallback to production
      pesapalApiUrl = import.meta.env.VITE_PESAPAL_API_URL || 
                     `${window.location.origin}/api/pesapal/order`;
    }
    
    console.log('Paying with Pesapal...');
    console.log('Environment:', isLocalhost ? 'Development (localhost)' : 'Production');
    console.log('API URL:', pesapalApiUrl);
    
    if (!pesapalApiUrl) {
      alert(
        "Pesapal API endpoint is not configured. Please contact support."
      );
      setIsProcessingPayment(false);
      return;
    }

    // Calculate nights
    const nights = checkIn && checkOut 
      ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
      : 0;

    const bookingData = {
      amount: calculateTotal(),
      currency: "KES",
      description: `Booking: ${accommodationOptions.find((opt) => opt.value === accommodation)?.label || ""} - ${nights} night${nights !== 1 ? 's' : ''}`,
      callback_url: `${window.location.origin}/booking-success`,
      cancellation_url: `${window.location.origin}/booking-cancelled`,
      notification_id: import.meta.env.VITE_PESAPAL_NOTIFICATION_ID || "",
      billing_address: {
        email_address: customerDetails.email,
        phone_number: customerDetails.phone,
        country_code: "KE",
        first_name: customerDetails.name.split(" ")[0] || customerDetails.name,
        middle_name: "",
        last_name: customerDetails.name.split(" ").slice(1).join(" ") || "",
        line_1: "",
        line_2: "",
        city: "",
        state: "",
        postal_code: "",
        zip_code: "",
      },
      booking_details: {
        checkIn: checkIn ? format(checkIn, "PPP") : "",
        checkOut: checkOut ? format(checkOut, "PPP") : "",
        nights: nights,
        guests,
        accommodation:
          accommodationOptions.find((opt) => opt.value === accommodation)
            ?.label || "",
        special_requests: customerDetails.special_requests || "None",
        customer_name: customerDetails.name,
        customer_email: customerDetails.email,
        customer_phone: customerDetails.phone,
      },
    };

    try {
      // Send booking confirmation email (non-blocking - don't wait for it)
      sendBookingConfirmation(undefined, "pending").catch((error) => {
        console.error("Email sending failed (non-critical):", error);
        // Don't block payment flow if email fails
      });

      // Store booking data in sessionStorage for retrieval after payment
      sessionStorage.setItem("pendingBooking", JSON.stringify(bookingData));

      // Call your backend API to create Pesapal order
      const response = await fetch(pesapalApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      // Check if response is HTML (error page) instead of JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Backend returned non-JSON response:", text.substring(0, 200));
        throw new Error(
          `Backend error: Received HTML instead of JSON. Status: ${response.status}. ` +
          `This usually means the backend endpoint is not working. ` +
          `Check if the backend is running and the URL is correct: ${pesapalApiUrl}`
        );
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend error:", response.status, errorData);
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Payment order response:", data);
      
      if (data.redirect_url) {
        // Redirect to Pesapal payment page
        console.log("Redirecting to Pesapal...");
        window.location.href = data.redirect_url;
      } else {
        console.error("No redirect URL in response:", data);
        throw new Error("No redirect URL received from server");
      }
    } catch (error) {
      console.error("Pesapal payment error:", error);
      setIsProcessingPayment(false);
      
      // Show more helpful error message
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to initiate payment";
      
      // More specific error message based on the error
      let userMessage = `Payment Error: ${errorMessage}`;
      
      if (errorMessage.includes("HTML instead of JSON") || errorMessage.includes("Backend error")) {
        userMessage += `\n\n🔧 Troubleshooting:\n` +
          `1. Check if backend is running at: ${pesapalApiUrl}\n` +
          `2. Verify the Node.js app is running in cPanel\n` +
          `3. Check backend logs for errors\n` +
          `4. Ensure the API endpoint path is correct`;
      } else {
        userMessage += `\n\nPlease check:\n1. Backend server is running\n2. Check browser console for details`;
      }
      
      alert(userMessage);
    }
  };

  const sendBookingConfirmation = async (
    paymentReference?: string,
    paymentStatus: string = "pending"
  ) => {
    const bookingDetails = {
      checkIn: checkIn ? format(checkIn, "PPP") : "",
      checkOut: checkOut ? format(checkOut, "PPP") : "",
      guests,
      accommodation,
      total: calculateTotal(),
      customer: customerDetails,
      paymentMethod,
      paymentReference,
      paymentStatus,
    };

    const templateParams = {
      to_email: "booking@earthship.co.ke",
      from_name: customerDetails.name,
      subject: `New Booking ${paymentStatus === "paid" ? "& Payment" : "Request"} from ${customerDetails.name}`,
      message: `
Name: ${customerDetails.name}
Email: ${customerDetails.email}
Phone: ${customerDetails.phone}
Check-in: ${bookingDetails.checkIn}
Check-out: ${bookingDetails.checkOut}
Nights: ${checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0}
Guests: ${guests}
Accommodation: ${
        accommodationOptions.find((opt) => opt.value === accommodation)
          ?.label || ""
      }
Total: KES ${calculateTotal().toLocaleString()}
    Payment Method: ${paymentMethod === "card" ? "Card (Pesapal)" : "M-Pesa"}
Payment Status: ${paymentStatus}
${paymentReference ? `Payment Reference: ${paymentReference}` : ""}
Special Requests: ${customerDetails.special_requests || "None"}
      `.trim(),
    };

    try {
      // Check if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS not configured - skipping email send");
        return;
      }
      
      await emailjs.send(serviceId, templateId, templateParams);
      console.log("✅ Booking confirmation email sent successfully");
    } catch (error) {
      console.error("❌ EmailJS error (non-critical):", error);
      // Don't throw - email failure shouldn't block payment
    }
  };

  const resetForm = () => {
    setCheckIn(undefined);
    setCheckOut(undefined);
    setAccommodation("");
    setGuests("2");
    setShowBookingForm(false);
    setCustomerDetails({
      name: "",
      email: "",
      phone: "",
      special_requests: "",
    });
    setPaymentMethod("mpesa");
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      // Process Pesapal payment
      setIsProcessingPayment(true);
      await handlePesapalPayment();
    } else {
      // M-Pesa - send booking request without payment
      try {
        // Determine API URL based on environment
        const isLocalhost = window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1' ||
                           window.location.hostname.startsWith('192.168.');
        
        const apiUrl = isLocalhost
          ? 'http://localhost:3000/api/bookings/mpesa'
          : `${window.location.origin}/api/bookings/mpesa`;

        // Store booking in backend
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customer: {
              name: customerDetails.name,
              email: customerDetails.email,
              phone: customerDetails.phone,
            },
            booking_details: {
              checkIn: checkIn ? format(checkIn, "PPP") : "",
              checkOut: checkOut ? format(checkOut, "PPP") : "",
              guests,
              accommodation: accommodationOptions.find((opt) => opt.value === accommodation)?.label || "",
            },
            payment: {
              amount: calculateTotal(),
              currency: "KES",
            },
            special_requests: customerDetails.special_requests,
          }),
        });

        // Send email confirmation
        await sendBookingConfirmation();
        
        alert(
          `Booking request submitted successfully! Total: KES ${calculateTotal().toLocaleString()}\n\nPlease complete payment via M-Pesa using the details provided above.\n\nWe'll contact you shortly to confirm your booking.`
        );
        resetForm();
      } catch (error) {
        console.error('Error storing M-Pesa booking:', error);
        // Still send email even if backend storage fails
        await sendBookingConfirmation();
        alert(
          `Booking request submitted successfully! Total: KES ${calculateTotal().toLocaleString()}\n\nPlease complete payment via M-Pesa using the details provided above.\n\nWe'll contact you shortly to confirm your booking.`
        );
        resetForm();
      }
    }
  };

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0;

  return (
    <section id="booking" className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Reserve directly</p>
          <h2 className="section-title mb-4">
            Book Your Stay
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto font-light">
            Choose dates and a room — pay securely by card or M-Pesa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar and Selection */}
          <Card className="card-earth">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-forest-900">
                <CalendarIcon className="h-6 w-6" />
                <span>Select Your Dates</span>
              </CardTitle>
              <CardDescription>
                Choose your check-in and check-out dates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkin" className="text-forest-900">
                    Check-in Date
                  </Label>
                  <div className="mt-2">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      className="rounded-md border border-earth-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="checkout" className="text-forest-900">
                    Check-out Date
                  </Label>
                  <div className="mt-2">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) =>
                        date < new Date() || (checkIn && date <= checkIn)
                      }
                      className="rounded-md border border-earth-200"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="accommodation" className="text-forest-900">
                    Accommodation Type
                  </Label>
                  <Select
                    value={accommodation}
                    onValueChange={setAccommodation}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-forest-900">
                    Number of Guests
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {checkIn && checkOut && accommodation && (
                <div className="bg-earth-50 p-4 rounded-lg border border-earth-200">
                  <h4 className="font-semibold text-forest-900 mb-2">
                    Booking Summary
                  </h4>
                  <div className="space-y-1 text-sm text-forest-700">
                    <p>Check-in: {format(checkIn, "PPP")}</p>
                    <p>Check-out: {format(checkOut, "PPP")}</p>
                    <p>Nights: {nights}</p>
                    <p>Guests: {guests}</p>
                    <p className="font-semibold text-lg text-earth-600">
                      Total: KES {calculateTotal().toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              <Button
                onClick={handleCheckAvailability}
                disabled={!checkIn || !checkOut || !accommodation}
                className="btn-earth w-full"
              >
                Check Availability & Book
              </Button>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="card-earth">
            <CardHeader>
              <CardTitle className="text-forest-900">
                {showBookingForm ? "Complete Your Booking" : "Your Information"}
              </CardTitle>
              <CardDescription>
                {showBookingForm
                  ? "Fill in your details to confirm the reservation"
                  : "Select dates first to proceed with booking"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showBookingForm ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-forest-900">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={customerDetails.name}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          name: e.target.value,
                        })
                      }
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-forest-900">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={customerDetails.email}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          email: e.target.value,
                        })
                      }
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-forest-900">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={customerDetails.phone}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          phone: e.target.value,
                        })
                      }
                      className="mt-2"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requests" className="text-forest-900">
                      Special Requests (Optional)
                    </Label>
                    <textarea
                      id="requests"
                      value={customerDetails.special_requests}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          special_requests: e.target.value,
                        })
                      }
                      className="mt-2 w-full p-3 border border-earth-200 rounded-md resize-none"
                      rows={3}
                      placeholder="Any special requirements or requests..."
                    />
                  </div>

                  <div className="bg-forest-50 p-4 rounded-lg border border-forest-200">
                    <h4 className="font-semibold text-forest-900 mb-4">
                      Payment Options
                    </h4>
                    <div className="space-y-4 text-sm text-forest-700">
                      {/* M-Pesa Option */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="payment-mpesa"
                            name="payment-method"
                            value="mpesa"
                            checked={paymentMethod === "mpesa"}
                            onChange={(e) =>
                              setPaymentMethod(e.target.value as "mpesa" | "card")
                            }
                            className="w-4 h-4 text-green-600 border-forest-300 focus:ring-green-500"
                          />
                          <label
                            htmlFor="payment-mpesa"
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-300"
                            >
                              M-Pesa
                            </Badge>
                            <span>Pay securely with M-Pesa Express</span>
                          </label>
                        </div>
                        {paymentMethod === "mpesa" && (
                          <div className="ml-6 pl-4 border-l-2 border-green-300 space-y-1 text-forest-600">
                            <p>
                              <span className="font-semibold">
                                Paybill Number:
                              </span>{" "}
                              542542
                            </p>
                            <p>
                              <span className="font-semibold">Account No.:</span>{" "}
                              417722
                            </p>
                            <p>
                              <span className="font-semibold">Account Name:</span>{" "}
                              Earthship Log Cabin
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Card Option */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="payment-card"
                            name="payment-method"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) =>
                              setPaymentMethod(e.target.value as "mpesa" | "card")
                            }
                            className="w-4 h-4 text-blue-600 border-forest-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="payment-card"
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700 border-blue-300"
                            >
                              Card
                            </Badge>
                            <span>Credit/Debit card (Pesapal)</span>
                          </label>
                        </div>
                        {paymentMethod === "card" && (
                          <div className="ml-6 pl-4 border-l-2 border-blue-300 space-y-1 text-forest-600">
                            <p className="text-forest-700">
                              Secure payment via Pesapal. You'll be redirected
                              to complete payment after submitting the form.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="btn-earth w-full text-lg py-3"
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment
                      ? "Processing Payment..."
                      : paymentMethod === "card"
                      ? `Pay KES ${calculateTotal().toLocaleString()}`
                      : `Confirm Booking - KES ${calculateTotal().toLocaleString()}`}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CalendarIcon className="h-16 w-16 text-earth-300 mx-auto mb-4" />
                  <p className="text-forest-600">
                    Select your dates and accommodation type to proceed with
                    booking
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact for assistance */}
        <div className="text-center mt-12">
          <div className="bg-gradient-earth rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="mb-6">
              Our team is here to help you plan your perfect getaway
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254758216350"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-forest-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>WhatsApp: +254 758 216 350</span>
              </a>
              <a
                href="tel:+254758216350"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-900 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
