import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Sparkles } from "lucide-react";

const EventsSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const event = {
    title: "EARTHSHIP FIRELIT BUSH DINNER",
    date: "Saturday, April 12th, 2026",
    location: "Earthship Log Cabin, Timau",
    description:
      "A fire-lit bush dinner, glamping & breakfast experience in Timau",
    host: "Hosted by: EarthShip Log Cabin",
    tagline: "Fire. Food. Wilderness.",
    details: [
      "A four-course dinner served by lantern light under the stars.",
      "Thoughtfully paired drinks (optional).",
      "Live acoustic vibes around the campfire.",
      "Luxury glamping moments in the wilderness.",
      "Breakfast in the bush to start your day right.",
    ],
    packages: [
      {
        name: "Bush Dinner Only",
        price: "KES 15,000",
        features: [
          "Four-course dinner",
          "Optional drinks pairing",
          "Live acoustic vibes",
        ],
      },
      {
        name: "Dinner + Glamping + Breakfast",
        price: "KES 25,000",
        features: [
          "Four-course dinner",
          "Optional drinks pairing",
          "Live acoustic vibes",
          "Luxury glamping accommodation",
          "Breakfast in the bush",
        ],
        popular: true,
      },
      {
        name: "Dinner + Glamping + Breakfast + Treat Basket",
        price: "KES 35,000",
        features: [
          "Four-course dinner",
          "Optional drinks pairing",
          "Live acoustic vibes",
          "Luxury glamping accommodation",
          "Breakfast in the bush",
          "Curated treat basket",
        ],
      },
    ],
    contact: {
      phone: "0758 216350",
      whatsapp: "254758216350",
      website: "http://earthship.co.ke",
    },
    payment: {
      paybill: "542542",
      account: "417722",
    },
  };

  const whatsappBookingMessage = `Hi! I'm interested in booking the EarthShip firelit bush dinner on ${event.date}. Can you help me?`;

  return (
    <section id="events" className="py-24 md:py-28 bg-gradient-to-b from-white via-earth-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto aspect-[21/9] md:aspect-[24/9] shadow-[0_30px_60px_-35px_rgba(27,67,50,0.55)]">
            <img
              src="/40.webp"
              alt="EarthShip highland evening — firelit bush dinner setting"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="section-kicker text-earth-300 mb-2">Upcoming experience</p>
              <h2 className="font-display text-3xl md:text-5xl text-white font-semibold leading-tight">
                Firelit Bush Dinner
              </h2>
              <p className="text-white/80 mt-2 max-w-xl font-light">
                {event.date} · {event.location}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center mb-4 gap-2">
            <Calendar className="h-5 w-5 text-earth-500" />
            <Badge className="bg-earth-100 text-earth-700 border-earth-200 px-4 py-1">
              Special Event
            </Badge>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-forest-900 mb-3">
            {event.tagline}
          </h3>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto font-light">
            {event.description}
          </p>
        </div>

        {/* Main Event Card */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Event Details */}
          <Card className="card-earth border-2 border-red-200 bg-gradient-to-br from-white to-red-50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-2xl text-forest-900">
                    Event Details
                  </CardTitle>
                </div>
              </div>
              <CardDescription className="text-lg font-semibold text-red-700">
                {event.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-forest-600 mb-2">{event.host}</p>
                <p className="text-lg italic text-red-600 font-medium">
                  {event.tagline}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-forest-900 mb-3 text-lg">
                  Experience Highlights:
                </h4>
                <ul className="space-y-2">
                  {event.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-forest-700">
                      <Sparkles className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-red-200">
                <p className="text-sm font-semibold text-red-700 mb-2">
                  ⚠️ Advance Booking Only!
                </p>
                <p className="text-sm text-forest-600">
                  Limited availability. Book early to secure your romantic
                  getaway.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Packages */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-forest-900 mb-2">
                Booking Packages
              </h3>
              <p className="text-forest-600">
                Choose the perfect experience for you and your loved one
              </p>
            </div>

            {event.packages.map((pkg, index) => (
              <Card
                key={index}
                className={`card-earth ${
                  pkg.popular
                    ? "border-2 border-red-400 bg-gradient-to-br from-red-50 to-white ring-2 ring-red-200"
                    : ""
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {pkg.popular && (
                        <Badge className="bg-red-600 text-white mb-2">
                          Most Popular
                        </Badge>
                      )}
                      <CardTitle className="text-xl text-forest-900">
                        {pkg.name}
                      </CardTitle>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-red-600">
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-forest-700 text-sm"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact & Payment Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="card-earth bg-gradient-to-br from-forest-50 to-earth-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-forest-900">
                <Phone className="h-6 w-6" />
                <span>Book Your Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-forest-900 mb-2">Call Us:</p>
                <a
                  href={`tel:+${event.contact.whatsapp}`}
                  className="text-forest-700 hover:text-forest-900 text-lg font-medium"
                >
                  {event.contact.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-forest-900 mb-2">
                  WhatsApp:
                </p>
                <a
                  href={`https://wa.me/${event.contact.whatsapp}?text=${encodeURIComponent(
                    whatsappBookingMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Chat with us instantly
                </a>
              </div>
              <div>
                <p className="font-semibold text-forest-900 mb-2">Website:</p>
                <a
                  href={event.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 hover:text-forest-900"
                >
                  {event.contact.website}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="card-earth bg-gradient-to-br from-red-50 to-white border-2 border-red-200">
            <CardHeader>
              <CardTitle className="text-forest-900">Payment Information</CardTitle>
              <CardDescription>
                Secure your booking with advance payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-sm text-forest-600 mb-2">Paybill Number:</p>
                <p className="text-2xl font-bold text-red-600">
                  {event.payment.paybill}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-sm text-forest-600 mb-2">Account Number:</p>
                <p className="text-2xl font-bold text-red-600">
                  {event.payment.account}
                </p>
              </div>
              <p className="text-xs text-forest-600 italic">
                After payment, please contact us with your confirmation details.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 rounded-2xl p-8 text-white max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Sparkles className="h-8 w-8 mr-2" />
              Book Your EarthShip Experience Today
            </h3>
            <p className="text-xl mb-6 opacity-95">
              Create unforgettable memories with a fire-lit dinner and glamping in
              Timau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${event.contact.whatsapp}?text=${encodeURIComponent(
                  whatsappBookingMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Book via WhatsApp</span>
              </a>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
