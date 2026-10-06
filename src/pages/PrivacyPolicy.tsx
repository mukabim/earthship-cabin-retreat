import React from "react";

const PrivacyPolicy = () => (
  <section className="py-20 bg-earth-50 min-h-screen">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold text-forest-900 mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4 text-forest-700">Last updated: June 2024</p>
      <p className="mb-4 text-forest-700">
        This Privacy Policy describes how EarthShip Log Cabin ("we", "us",
        or "our") collects, uses, and protects your personal information when
        you use our website and services.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>
          Personal information you provide when booking or contacting us (name,
          email, phone, etc.)
        </li>
        <li>Booking and payment details</li>
        <li>
          Information collected automatically (IP address, browser type, device
          info, etc.)
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>To process bookings and provide our services</li>
        <li>To communicate with you about your stay or inquiries</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        How We Protect Your Information
      </h2>
      <p className="mb-4 text-forest-700">
        We implement appropriate security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        Sharing Your Information
      </h2>
      <p className="mb-4 text-forest-700">
        We do not sell or rent your personal information. We may share your
        information with trusted third parties only as necessary to provide our
        services or comply with the law.
      </p>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        Your Rights
      </h2>
      <ul className="list-disc list-inside mb-4 text-forest-700">
        <li>
          You may request access to, correction, or deletion of your personal
          information.
        </li>
        <li>You may opt out of marketing communications at any time.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-forest-800 mt-8 mb-2">
        Contact Us
      </h2>
      <p className="mb-4 text-forest-700">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
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

export default PrivacyPolicy;
