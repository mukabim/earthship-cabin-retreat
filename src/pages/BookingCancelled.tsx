import { Link } from "react-router-dom";
import { XCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingCancelled = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-50 to-forest-50 py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <XCircle className="h-20 w-20 text-orange-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-forest-900 mb-2">
              Payment Cancelled
            </h1>
            <p className="text-lg text-forest-600">
              Your payment was not completed
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <p className="text-forest-700 mb-4">
              No charges have been made to your account. Your booking has not
              been confirmed.
            </p>
            <p className="text-sm text-forest-600">
              If you'd like to complete your booking, please try again or
              contact us for assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/#booking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Try Again
              </Link>
            </Button>
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
  );
};

export default BookingCancelled;

