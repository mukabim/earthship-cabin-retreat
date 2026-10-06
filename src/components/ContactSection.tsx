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
import { MapPinIcon, PhoneIcon, InstagramIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { INSTAGRAM_URL, THREADS_URL, TIKTOK_URL, X_URL } from "@/lib/links";

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form:", contactForm);
    alert("Thank you for your message! We will get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Talk to us</p>
          <h2 className="section-title mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto font-light">
            Ready to plan your escape? We&apos;re here to help make your stay
            unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-forest-900">
                  <PhoneIcon className="h-6 w-6" />
                  <span>Direct Contact</span>
                </CardTitle>
                <CardDescription>
                  Get in touch with us directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-earth-100 p-2 rounded-lg">
                    <PhoneIcon className="h-5 w-5 text-earth-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Phone</p>
                    <a
                      href="tel:+254758216350"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      +254 758 216 350
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <MailIcon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">
                      General Inquiries
                    </p>
                    <a
                      href="mailto:info@earthship.co.ke"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      info@earthship.co.ke
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <MailIcon className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Bookings</p>
                    <a
                      href="mailto:booking@earthship.co.ke"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      booking@earthship.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <PhoneIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">WhatsApp</p>
                    <a
                      href="https://wa.me/254758216350"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {/* Facebook SVG icon */}
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Facebook</p>
                    <a
                      href="https://www.facebook.com/share/1DboKhJSG9/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @EarthShip Log Cabin - Timau
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-neutral-100 p-2 rounded-lg">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">TikTok</p>
                    <a
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @earthshiplogcabin
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <svg
                      className="h-5 w-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Instagram</p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @eartshiplogcabin
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-neutral-100 p-2 rounded-lg">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">X (Twitter)</p>
                    <a
                      href={X_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @EarthShip_Timau
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-neutral-100 p-2 rounded-lg">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.03 11.1a7.3 7.3 0 0 0-.28-.13c-.16-3.04-1.83-4.78-4.62-4.8h-.04c-1.67 0-3.06.71-3.92 2.01l1.54 1.06c.64-.97 1.64-1.18 2.38-1.18h.03c.92 0 1.61.27 2.06.79.33.38.55.9.66 1.56a11.7 11.7 0 0 0-2.67-.13c-2.68.15-4.41 1.72-4.29 3.9.06 1.11.61 2.06 1.55 2.68.8.52 1.82.78 2.89.72 1.41-.08 2.51-.62 3.28-1.6.58-.74.95-1.7 1.11-2.91.67.4 1.17.94 1.44 1.58.47 1.09.5 2.88-.96 4.34-1.28 1.28-2.82 1.83-5.14 1.85-2.58-.02-4.53-.85-5.8-2.46-1.19-1.51-1.8-3.69-1.83-6.48.03-2.79.64-4.97 1.83-6.48 1.27-1.61 3.22-2.44 5.8-2.46 2.6.02 4.58.85 5.89 2.48.64.8 1.13 1.8 1.45 2.97l1.8-.48c-.39-1.43-1-2.67-1.83-3.7C17.67 1.92 15.17.86 11.97.84h-.01C8.76.86 6.3 1.93 4.64 4.02 3.17 5.88 2.41 8.47 2.38 11.72v.02c.03 3.25.79 5.84 2.26 7.7 1.66 2.09 4.12 3.16 7.32 3.18h.01c2.84-.02 4.85-.77 6.5-2.42 2.16-2.16 2.1-4.86 1.39-6.52-.51-1.19-1.48-2.15-2.83-2.58zm-4.9 4.6c-1.18.07-2.4-.46-2.46-1.6-.04-.85.6-1.79 2.55-1.9.22-.01.44-.02.65-.02.7 0 1.36.07 1.96.2-.22 2.79-1.53 3.25-2.7 3.32z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Threads</p>
                    <a
                      href={THREADS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 hover:text-forest-900"
                    >
                      @eartshiplogcabin
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="text-forest-900">Quick Actions</CardTitle>
                <CardDescription>
                  Get started with these popular options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://wa.me/254758216350?text=Hi! I'm interested in booking a stay at EarthShip Log Cabin. Can you help me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-earth w-full flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>WhatsApp Booking Inquiry</span>
                </a>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector("#booking");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Check Availability Online
                </Button>              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-forest-900">
                  <MapPinIcon className="h-6 w-6" />
                  <span>Our Location</span>
                </CardTitle>
                <CardDescription>Nestled in nature's embrace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-forest-100 to-earth-100 p-6 rounded-lg">
                  <p className="text-forest-800 text-center font-medium">
                    🌲 Sustainable Wilderness Retreat 🌲
                  </p>
                  <p className="text-forest-600 text-center text-sm mt-2">
                    Exact location provided upon booking confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-earth">
            <CardHeader>
              <CardTitle className="text-forest-900">
                Send us a Message
              </CardTitle>
              <CardDescription>
                Have questions? We'd love to hear from you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName" className="text-forest-900">
                      Your Name *
                    </Label>
                    <Input
                      id="contactName"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail" className="text-forest-900">
                      Email Address *
                    </Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactSubject" className="text-forest-900">
                    Subject *
                  </Label>
                  <Input
                    id="contactSubject"
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        subject: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <Label htmlFor="contactMessage" className="text-forest-900">
                    Message *
                  </Label>
                  <textarea
                    id="contactMessage"
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    className="mt-2 w-full p-3 border border-earth-200 rounded-md resize-none"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" className="btn-earth w-full text-lg py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-earth rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready for Your Adventure?
            </h3>
            <p className="text-xl mb-6">
              Experience the perfect blend of comfort and nature at EarthShip
              Log Cabin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254758216350"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-forest-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Book via WhatsApp</span>
              </a>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-forest-900 transition-colors"
                onClick={() => {
                  const element = document.querySelector("#booking");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Book Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
