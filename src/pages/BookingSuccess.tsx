import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Home, Loader2, XCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(true);
  const orderTrackingId = searchParams.get("OrderTrackingId");
  
  // Determine payment status from API response
  const getPaymentStatusInfo = () => {
    if (!paymentStatus) {
      return {
        status: 'unknown',
        title: 'Verifying Payment...',
        message: 'Please wait while we verify your payment status.',
        icon: Loader2,
        iconColor: 'text-earth-600',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-800',
      };
    }
    
    const status = paymentStatus.payment_status_description || 
                   paymentStatus.payment_status || 
                   paymentStatus.status || 
                   'UNKNOWN';
    
    const statusUpper = status.toUpperCase();
    
    if (statusUpper === 'COMPLETED' || statusUpper === 'PAID') {
      return {
        status: 'success',
        title: 'Payment Successful!',
        message: 'Your booking has been confirmed. We\'ve sent a confirmation email to your registered email address.',
        icon: CheckCircle2,
        iconColor: 'text-green-500',
        bgColor: 'bg-green-50',
        textColor: 'text-green-800',
      };
    } else if (statusUpper === 'PENDING' || statusUpper === 'INITIATED') {
      return {
        status: 'pending',
        title: 'Payment Pending',
        message: 'Your payment is being processed. We\'ll notify you once it\'s confirmed. Please check your email for updates.',
        icon: Clock,
        iconColor: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-800',
      };
    } else if (statusUpper === 'FAILED' || statusUpper === 'DECLINED') {
      return {
        status: 'failed',
        title: 'Payment Failed',
        message: 'Unfortunately, your payment could not be processed. This may be due to insufficient funds, card issues, or network problems. Please try again or contact support.',
        icon: XCircle,
        iconColor: 'text-red-500',
        bgColor: 'bg-red-50',
        textColor: 'text-red-800',
      };
    } else if (statusUpper === 'CANCELLED' || statusUpper === 'CANCELED') {
      return {
        status: 'cancelled',
        title: 'Payment Cancelled',
        message: 'Your payment was cancelled. No charges were made. You can try booking again when you\'re ready.',
        icon: AlertCircle,
        iconColor: 'text-orange-500',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-800',
      };
    } else {
      return {
        status: 'unknown',
        title: 'Payment Status Unknown',
        message: 'We couldn\'t determine your payment status. Please contact support with your transaction reference.',
        icon: AlertCircle,
        iconColor: 'text-gray-500',
        bgColor: 'bg-gray-50',
        textColor: 'text-gray-800',
      };
    }
  };
  
  const statusInfo = getPaymentStatusInfo();
  const StatusIcon = statusInfo.icon;

  useEffect(() => {
    // Retrieve booking data from sessionStorage
    const storedBooking = sessionStorage.getItem("pendingBooking");
    if (storedBooking) {
      setBookingData(JSON.parse(storedBooking));
    }

    // Verify payment status with backend
    if (orderTrackingId) {
      verifyPaymentStatus(orderTrackingId);
    } else {
      setIsVerifying(false);
    }
  }, [orderTrackingId]);

  const verifyPaymentStatus = async (trackingId: string) => {
    try {
      // Get base API URL from environment or use current origin
      // Determine base URL based on environment
      // If running on localhost, always use local backend
      // Otherwise, use env variable or current origin
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname.startsWith('192.168.');
      
      const baseUrl = isLocalhost 
        ? 'http://localhost:3000'
        : (import.meta.env.VITE_PESAPAL_API_URL 
           ? import.meta.env.VITE_PESAPAL_API_URL.replace('/api/pesapal/order', '')
           : window.location.origin);
      
      const apiUrl = `${baseUrl}/api/pesapal/status/${trackingId}`;
      
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        setPaymentStatus(data);
      }
    } catch (error) {
      console.error('Error verifying payment status:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-50 to-forest-50 py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <StatusIcon className={`h-20 w-20 ${statusInfo.iconColor} mx-auto mb-4 ${isVerifying ? 'animate-spin' : ''}`} />
            <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${statusInfo.textColor}`}>
              {statusInfo.title}
            </h1>
            <p className={`text-lg ${statusInfo.textColor} opacity-90`}>
              {statusInfo.message}
            </p>
          </div>

          {isVerifying && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-earth-600" />
              <p className="ml-3 text-forest-600">Verifying payment status...</p>
            </div>
          )}

          {!isVerifying && orderTrackingId && (
            <div className="bg-forest-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-forest-600 mb-1">
                Transaction Reference
              </p>
              <p className="font-mono text-forest-900 font-semibold">
                {orderTrackingId}
              </p>
              {paymentStatus && (
                <div className="mt-3 pt-3 border-t border-forest-200">
                  <p className="text-sm text-forest-600">
                    Payment Status: <span className={`font-semibold ${statusInfo.textColor}`}>
                      {paymentStatus.payment_status_description || 
                       paymentStatus.payment_status || 
                       paymentStatus.status || 
                       'Unknown'}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}

          {bookingData && (
            <div className="bg-earth-50 rounded-lg p-6 mb-6 text-left">
              <h2 className="font-semibold text-forest-900 mb-4">
                Booking Details
              </h2>
              <div className="space-y-2 text-sm text-forest-700">
                {bookingData.booking_details && (
                  <>
                    <p>
                      <span className="font-semibold">Accommodation:</span>{" "}
                      {bookingData.booking_details.accommodation}
                    </p>
                    <p>
                      <span className="font-semibold">Check-in:</span>{" "}
                      {bookingData.booking_details.checkIn}
                    </p>
                    <p>
                      <span className="font-semibold">Check-out:</span>{" "}
                      {bookingData.booking_details.checkOut}
                    </p>
                    <p>
                      <span className="font-semibold">Guests:</span>{" "}
                      {bookingData.booking_details.guests}
                    </p>
                    <p>
                      <span className="font-semibold">Total Amount:</span> KES{" "}
                      {bookingData.amount?.toLocaleString()}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {statusInfo.status === 'success' && (
              <p className="text-forest-700">
                Our team will contact you shortly with additional details about your stay.
              </p>
            )}
            {statusInfo.status === 'failed' && (
              <div className={`${statusInfo.bgColor} rounded-lg p-4 mb-4 text-left`}>
                <p className={`text-sm ${statusInfo.textColor} font-semibold mb-2`}>
                  What to do next:
                </p>
                <ul className={`text-sm ${statusInfo.textColor} space-y-1 list-disc list-inside`}>
                  <li>Check that your card has sufficient funds</li>
                  <li>Verify your card details are correct</li>
                  <li>Try using a different payment method</li>
                  <li>Contact your bank if the issue persists</li>
                  <li>Reach out to us at booking@earthship.co.ke for assistance</li>
                </ul>
              </div>
            )}
            {statusInfo.status === 'pending' && (
              <p className="text-forest-700">
                Please check your email for payment confirmation. The booking will be confirmed once payment is received.
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {statusInfo.status === 'failed' && (
                <Button asChild variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
                  <Link to="/#booking">
                    Try Payment Again
                  </Link>
                </Button>
              )}
              <Button asChild className="btn-earth">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;

