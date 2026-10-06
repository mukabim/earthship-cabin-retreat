import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

type Accommodation = {
  id: number;
  name: string;
  price: string;
  period: string;
  image: string;
  features: string[];
  description: string;
  sleeps: string;
  popular?: boolean;
};

const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Camping Experience",
    price: "KES 2,000",
    period: "per night",
    image: "/40.webp",
    sleeps: "Bring your tent",
    features: [
      "Tent setup area",
      "Shared bathroom facilities",
      "Campfire area",
      "Nature trails access",
    ],
    description: "Pitch under highland skies and wake to birdsong.",
  },
  {
    id: 2,
    name: "Glamping Retreat",
    price: "KES 4,000",
    period: "per night",
    image: "/10.webp",
    sleeps: "Sleeps 2",
    popular: true,
    features: [
      "Furnished luxury tent",
      "Private bathroom",
      "Comfortable bedding",
      "Breakfast included",
    ],
    description: "Soft beds, canvas walls, and wilderness ambience.",
  },
  {
    id: 8,
    name: "Attic Rooms",
    price: "KES 5,000",
    period: "per night",
    image: "/50.webp",
    sleeps: "Sleeps 2",
    features: ["Cozy attic loft", "Ensuite", "Quiet retreat"],
    description: "Charming loft rooms tucked into the lodge.",
  },
  {
    id: 3,
    name: "North Room",
    price: "KES 8,000",
    period: "per night",
    image: "/30.webp",
    sleeps: "Sleeps 2",
    features: ["Ensuite", "Mountain-side outlook", "Fresh linens"],
    description: "A cozy ensuite with a northern aspect.",
  },
  {
    id: 6,
    name: "South Room",
    price: "KES 10,000",
    period: "per night",
    image: "/35.webp",
    sleeps: "Sleeps 2",
    features: ["Sunny exposure", "Ensuite", "Comfortable seating"],
    description: "Bright room with warm southern light.",
  },
  {
    id: 5,
    name: "Middle Room",
    price: "KES 12,000",
    period: "per night",
    image: "/45.webp",
    sleeps: "Sleeps 2",
    features: ["Central lodge location", "Ensuite", "Spacious layout"],
    description: "Comfortable lodging in the heart of the house.",
  },
  {
    id: 4,
    name: "Double Room",
    price: "KES 15,000",
    period: "per night",
    image: "/25.webp",
    sleeps: "Sleeps 2",
    features: ["Spacious double bed", "Ensuite", "Ideal for couples"],
    description: "A generous double for couples or friends.",
  },
  {
    id: 7,
    name: "VIP Room",
    price: "KES 20,000",
    period: "per night",
    image: "/55.webp",
    sleeps: "Sleeps 2–3",
    features: [
      "Premium amenities",
      "Private balcony",
      "Ensuite",
      "Best lodge views",
    ],
    description: "Our signature stay — space, privacy, and presence.",
  },
];

const AccommodationSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accommodation"
      className="py-24 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-earth-50 via-white to-forest-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14 md:mb-16">
          <p className="section-kicker mb-3">Stay with us</p>
          <h2 className="section-title mb-4">Accommodation</h2>
          <p className="text-lg text-forest-700/90 max-w-2xl mx-auto font-light">
            From open-air camping to our VIP suite — choose the stay that fits
            your escape.
          </p>
        </Reveal>

        <div className="md:hidden flex justify-center mb-4">
          <span className="text-forest-600 text-sm tracking-wide">
            Swipe to explore rooms
          </span>
        </div>

        <div
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin"
          style={{ paddingLeft: "2vw", paddingRight: "2vw" }}
        >
          {accommodations.map((room, index) => (
            <Reveal
              key={room.id}
              delayMs={index * 60}
              className="w-[82vw] sm:w-[420px] flex-shrink-0 snap-center"
            >
              <article className="group h-full overflow-hidden rounded-2xl bg-white border border-earth-100 shadow-[0_20px_50px_-28px_rgba(27,67,50,0.45)] transition-transform duration-500 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-transparent to-transparent" />
                  {room.popular && (
                    <span className="absolute top-4 left-4 bg-earth-500 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-sm">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <p className="text-white/90 text-sm">{room.sleeps}</p>
                    <div className="text-right text-white">
                      <p className="font-display text-3xl leading-none">
                        {room.price}
                      </p>
                      <p className="text-xs text-white/70 mt-1">{room.period}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-forest-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-forest-700/80 text-sm mb-5 leading-relaxed">
                    {room.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-forest-800"
                      >
                        <Check className="h-4 w-4 text-earth-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToBooking} className="btn-earth w-full">
                    Book {room.name}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-forest-700 mb-6 font-light">
            Camping, glamping, and Mount Kenya climbing gear available on site.
          </p>
          <Button onClick={scrollToBooking} className="btn-earth text-base px-10">
            Check Availability
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default AccommodationSection;
