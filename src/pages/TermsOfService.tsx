import React from "react";

const TermsOfService = () => (
  <section className="py-20 bg-earth-50 min-h-screen">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold text-forest-900 mb-6">
        Terms of Service
      </h1>
      <p className="mb-4 text-forest-700">Last updated: June 2024</p>
      <p className="mb-4 text-forest-700">
        These Terms of Service ("Terms") govern your use of the EarthShip Log
        Cabin website and services. By accessing or using our site, you
        agree to these Terms.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        1. Bookings & Payments
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>All bookings are subject to availability and confirmation.</li>
        <li>Payment must be made in full to secure your reservation.</li>
        <li>
          Prices are subject to change without notice until booking is
          confirmed.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        2. Cancellations & Refunds
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>Cancellations must be made in writing via email or WhatsApp.</li>
        <li>
          Refunds (if applicable) will be processed according to our
          cancellation policy.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        3. Guest Responsibilities
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>
          Guests are expected to respect the property, staff, and other guests.
        </li>
        <li>
          Any damage caused by guests will be charged to the responsible party.
        </li>
        <li>Illegal activities are strictly prohibited on the premises.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        4. Liability
      </h2>
      <p className="mb-4 text-forest-700">
        EarthShip Log Cabin is not liable for any loss, injury, or damage
        to persons or property during your stay, except as required by law.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        5. Changes to Terms
      </h2>
      <p className="mb-4 text-forest-700">
        We reserve the right to update these Terms at any time. Continued use of
        our site and services constitutes acceptance of the revised Terms.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        6. Contact Us
      </h2>
      <p className="mb-4 text-forest-700">
        For questions about these Terms, please contact us at{" "}
        <a
          href="mailto:gitumbiwambugu@gmail.com"
          className="text-blue-700 underline"
        >
          gitumbiwambugu@gmail.com
        </a>{" "}
        or call{" "}
        <a href="tel:+254723656445" className="text-blue-700 underline">
          +254 723 656 445
        </a>
        .
      </p>
    </div>
  </section>
);

export default TermsOfService;
