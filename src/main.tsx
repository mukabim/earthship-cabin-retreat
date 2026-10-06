import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BookingSuccess from './pages/BookingSuccess';
import BookingCancelled from './pages/BookingCancelled';
import AdminBookings from './pages/AdminBookings';
import NotFound from './pages/NotFound';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pages/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/pages/TermsOfService" element={<TermsOfService />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/booking-cancelled" element={<BookingCancelled />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
