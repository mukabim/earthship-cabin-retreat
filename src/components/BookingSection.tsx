
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { format } from 'date-fns';

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [accommodation, setAccommodation] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    special_requests: ''
  });

  const accommodationOptions = [
    { value: 'camping', label: 'Camping Experience - KES 2,000/night', price: 2000 },
    { value: 'glamping', label: 'Glamping Retreat - KES 4,000/night', price: 4000 }
  ];

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !accommodation) return 0;
    
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const selectedAccommodation = accommodationOptions.find(opt => opt.value === accommodation);
    const pricePerNight = selectedAccommodation?.price || 0;
    
    return nights * pricePerNight;
  };

  const handleCheckAvailability = () => {
    if (checkIn && checkOut && accommodation) {
      setShowBookingForm(true);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingDetails = {
      checkIn: checkIn ? format(checkIn, 'PPP') : '',
      checkOut: checkOut ? format(checkOut, 'PPP') : '',
      guests,
      accommodation,
      total: calculateTotal(),
      customer: customerDetails
    };
    
    console.log('Booking Details:', bookingDetails);
    
    // In a real app, this would integrate with M-Pesa API and Stripe
    alert(`Booking request submitted! Total: KES ${calculateTotal().toLocaleString()}\n\nWe'll contact you shortly to confirm payment options.`);
  };

  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Book Your Stay
          </h2>
          <p className="text-xl text-forest-700 max-w-2xl mx-auto">
            Select your dates and accommodation type to check availability
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
                  <Label htmlFor="checkin" className="text-forest-900">Check-in Date</Label>
                  <div className="mt-2">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      className="rounded-md border border-earth-200"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="checkout" className="text-forest-900">Check-out Date</Label>
                  <div className="mt-2">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                      className="rounded-md border border-earth-200"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="accommodation" className="text-forest-900">Accommodation Type</Label>
                  <Select value={accommodation} onValueChange={setAccommodation}>
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
                  <Label htmlFor="guests" className="text-forest-900">Number of Guests</Label>
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
                  <h4 className="font-semibold text-forest-900 mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm text-forest-700">
                    <p>Check-in: {format(checkIn, 'PPP')}</p>
                    <p>Check-out: {format(checkOut, 'PPP')}</p>
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
                {showBookingForm ? 'Complete Your Booking' : 'Your Information'}
              </CardTitle>
              <CardDescription>
                {showBookingForm ? 'Fill in your details to confirm the reservation' : 'Select dates first to proceed with booking'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showBookingForm ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-forest-900">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-forest-900">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={customerDetails.email}
                      onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-forest-900">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                      className="mt-2"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requests" className="text-forest-900">Special Requests (Optional)</Label>
                    <textarea
                      id="requests"
                      value={customerDetails.special_requests}
                      onChange={(e) => setCustomerDetails({...customerDetails, special_requests: e.target.value})}
                      className="mt-2 w-full p-3 border border-earth-200 rounded-md resize-none"
                      rows={3}
                      placeholder="Any special requirements or requests..."
                    />
                  </div>

                  <div className="bg-forest-50 p-4 rounded-lg border border-forest-200">
                    <h4 className="font-semibold text-forest-900 mb-2">Payment Options</h4>
                    <div className="space-y-2 text-sm text-forest-700">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">M-Pesa</Badge>
                        <span>Pay securely with M-Pesa Express</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">Card</Badge>
                        <span>Credit/Debit card via Stripe</span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="btn-earth w-full text-lg py-3">
                    Confirm Booking - KES {calculateTotal().toLocaleString()}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CalendarIcon className="h-16 w-16 text-earth-300 mx-auto mb-4" />
                  <p className="text-forest-600">
                    Select your dates and accommodation type to proceed with booking
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
            <p className="mb-6">Our team is here to help you plan your perfect getaway</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254723656445"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-forest-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>WhatsApp: 0723656445</span>
              </a>
              <a
                href="tel:+254723656445"
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
