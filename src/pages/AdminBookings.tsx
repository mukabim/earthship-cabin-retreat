import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  RefreshCw, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  DollarSign,
  Filter,
  Download
} from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  order_tracking_id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  booking_details: {
    checkIn: string;
    checkOut: string;
    nights?: number;
    guests: string;
    accommodation: string;
    special_requests?: string;
  };
  payment: {
    amount: number;
    currency: string;
    method: string;
    status: string;
    payment_reference?: string;
  };
  special_requests: string;
  created_at: string;
  updated_at: string;
}

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [apiKey, setApiKey] = useState("");

  // Get API key from URL or prompt
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("api_key");
    if (key) {
      setApiKey(key);
      localStorage.setItem("admin_api_key", key);
    } else {
      const stored = localStorage.getItem("admin_api_key");
      if (stored) {
        setApiKey(stored);
      }
    }
  }, []);

  const fetchBookings = async () => {
    if (!apiKey) {
      setError("API key is required. Add ?api_key=your-key to the URL");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://earthship.co.ke/api/admin/bookings?api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch bookings: ${response.status}`);
      }

      const data = await response.json();
      if (data.success && data.bookings) {
        setBookings(data.bookings);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load bookings");
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) {
      fetchBookings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === "completed" || statusLower === "paid") {
      return <Badge className="bg-green-500">Paid</Badge>;
    } else if (statusLower === "pending") {
      return <Badge className="bg-yellow-500">Pending</Badge>;
    } else if (statusLower === "failed") {
      return <Badge className="bg-red-500">Failed</Badge>;
    } else if (statusLower === "cancelled") {
      return <Badge className="bg-gray-500">Cancelled</Badge>;
    }
    return <Badge variant="outline">{status}</Badge>;
  };

  const getPaymentMethodBadge = (method: string) => {
    if (method === "card") {
      return <Badge variant="outline" className="border-blue-500 text-blue-700">Card</Badge>;
    } else if (method === "mpesa") {
      return <Badge variant="outline" className="border-green-500 text-green-700">M-Pesa</Badge>;
    }
    return <Badge variant="outline">{method || "N/A"}</Badge>;
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM dd, yyyy HH:mm");
    } catch {
      return dateString;
    }
  };

  const formatCurrency = (amount: number | null | undefined, currency: string = "KES") => {
    if (amount === null || amount === undefined || isNaN(amount)) {
      return `${currency} 0`;
    }
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const calculateNights = (checkIn: string, checkOut: string, nights?: number): number => {
    // If nights is already provided in booking_details, use it
    if (nights !== undefined && nights > 0) {
      return nights;
    }
    
    // Otherwise, calculate from dates
    try {
      // Try parsing the formatted date strings (e.g., "November 29th, 2025")
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
        // If parsing fails, try to extract date from formatted string
        // Format: "November 29th, 2025" -> "November 29, 2025"
        const normalizedCheckIn = checkIn.replace(/(\d+)(st|nd|rd|th)/, '$1');
        const normalizedCheckOut = checkOut.replace(/(\d+)(st|nd|rd|th)/, '$1');
        const parsedCheckIn = new Date(normalizedCheckIn);
        const parsedCheckOut = new Date(normalizedCheckOut);
        
        if (!isNaN(parsedCheckIn.getTime()) && !isNaN(parsedCheckOut.getTime())) {
          const nights = Math.ceil((parsedCheckOut.getTime() - parsedCheckIn.getTime()) / (1000 * 60 * 60 * 24));
          return nights > 0 ? nights : 0;
        }
        return 0;
      }
      
      const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    } catch {
      return 0;
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.phone.includes(searchTerm) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.booking_details.accommodation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || booking.payment.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const totalRevenue = bookings
    .filter((b) => b.payment.status.toLowerCase() === "completed" || b.payment.status.toLowerCase() === "paid")
    .reduce((sum, b) => sum + (b.payment.amount || 0), 0);

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.payment.status.toLowerCase() === "pending").length,
    completed: bookings.filter((b) => b.payment.status.toLowerCase() === "completed" || b.payment.status.toLowerCase() === "paid").length,
    failed: bookings.filter((b) => b.payment.status.toLowerCase() === "failed").length,
  };

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>API Key Required</CardTitle>
            <CardDescription>
              Please add your API key to the URL: ?api_key=your-key
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              type="password"
              placeholder="Enter API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.currentTarget.value) {
                  setApiKey(e.currentTarget.value);
                  setTimeout(() => fetchBookings(), 100);
                }
              }}
            />
            <Button className="mt-4 w-full" onClick={fetchBookings} disabled={!apiKey}>
              Load Bookings
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-earth-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-forest-900 mb-2">Bookings Management</h1>
          <p className="text-forest-600">View and manage all customer bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-forest-600">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-forest-900">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-forest-600">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-forest-600">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-forest-600">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-earth-600">{formatCurrency(totalRevenue)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filters & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, email, phone, or booking ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-forest-200 rounded-md bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="paid">Paid</option>
                  <option value="failed">Failed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <Button onClick={fetchBookings} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>
                  Showing {filteredBookings.length} of {bookings.length} bookings
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto text-earth-600 mb-4" />
                <p className="text-forest-600">Loading bookings...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <Button onClick={fetchBookings}>Try Again</Button>
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-forest-600">No bookings found</p>
              </div>
            ) : (
              <ScrollArea className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Booking Details</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-semibold text-forest-900 flex items-center gap-2">
                              <User className="h-4 w-4 text-forest-400" />
                              {booking.customer.name}
                            </div>
                            <div className="text-sm text-forest-600 flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {booking.customer.email}
                            </div>
                            <div className="text-sm text-forest-600 flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              {booking.customer.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium text-forest-900">
                              {booking.booking_details.accommodation}
                            </div>
                            <div className="text-sm text-forest-600 flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              {booking.booking_details.checkIn} - {booking.booking_details.checkOut}
                            </div>
                            <div className="text-sm text-forest-600">
                              {calculateNights(
                                booking.booking_details.checkIn,
                                booking.booking_details.checkOut,
                                (booking.booking_details as any).nights
                              )} night{calculateNights(
                                booking.booking_details.checkIn,
                                booking.booking_details.checkOut,
                                (booking.booking_details as any).nights
                              ) !== 1 ? "s" : ""} • {booking.booking_details.guests} guest{booking.booking_details.guests !== "1" ? "s" : ""}
                            </div>
                            {booking.special_requests && booking.special_requests !== "None" && (
                              <div className="text-xs text-forest-500 italic mt-1">
                                Note: {booking.special_requests}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-semibold text-forest-900 flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-earth-600" />
                              {formatCurrency(booking.payment.amount, booking.payment.currency)}
                            </div>
                            <div className="text-sm">
                              {getPaymentMethodBadge(booking.payment.method)}
                            </div>
                            {booking.payment.payment_reference && (
                              <div className="text-xs text-forest-500">
                                Ref: {booking.payment.payment_reference}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(booking.payment.status)}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-forest-600">
                            {formatDate(booking.created_at)}
                          </div>
                          <div className="text-xs text-forest-400">
                            ID: {booking.id.substring(0, 20)}...
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminBookings;

