import { ArrowRight, Mountain, PawPrint, Tent, UtensilsCrossed } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GALLERY_FILTER_EVENT, type GalleryCategory } from "@/data/gallery";

const experiences: {
  title: string;
  text: string;
  image: string;
  icon: typeof Mountain;
  category: GalleryCategory;
}[] = [
  {
    title: "Farm-to-Table Dining",
    text: "Hearty breakfasts, slow-cooked stews and grills from our kitchen, with sundowners at the bar.",
    image: "/media/thumbs/n8.webp",
    icon: UtensilsCrossed,
    category: "dining",
  },
  {
    title: "Mt. Kenya Climbs",
    text: "Guided hikes and summit climbs start right from the foot of the mountain.",
    image: "/media/thumbs/n13.webp",
    icon: Mountain,
    category: "adventure",
  },
  {
    title: "Wildlife & Plains",
    text: "Zebra, elephants and wide Laikipia plains within easy reach of the lodge.",
    image: "/media/thumbs/n35.webp",
    icon: PawPrint,
    category: "nature",
  },
  {
    title: "Camping Under the Stars",
    text: "Pitch on our lawns with Mt. Kenya on the horizon and a campfire after dark.",
    image: "/media/thumbs/n83.webp",
    icon: Tent,
    category: "camping",
  },
];

const facts = [
  { value: "KES 2,000", label: "Stays from, per night" },
  { value: "19 km", label: "From Nanyuki town" },
  { value: "5,199 m", label: "Mt. Kenya on the horizon" },
];

const showPhotos = (category: GalleryCategory) => {
  window.dispatchEvent(
    new CustomEvent<GalleryCategory>(GALLERY_FILTER_EVENT, { detail: category })
  );
  document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
};

const ExperiencesSection = () => (
  <section
    id="experiences"
    className="py-24 md:py-28 bg-gradient-to-b from-earth-50 via-white to-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
        <div>
          <p className="section-kicker mb-3">Experiences</p>
          <h2 className="section-title text-balance">
            Wake up to birdsong, end the day by the fire
          </h2>
        </div>
        <p className="text-lg text-forest-700/90 font-light leading-relaxed lg:pb-2">
          EarthShip is more than a bed for the night. Eat well, climb Mount
          Kenya, meet the wildlife of Laikipia, and come home to a warm timber
          lodge in Timau.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {experiences.map(({ title, text, image, icon: Icon, category }, i) => (
          <Reveal key={title} delayMs={i * 80}>
            <article className="group relative h-[26rem] overflow-hidden rounded-3xl bg-forest-900 shadow-[0_30px_60px_-35px_rgba(27,67,50,0.6)]">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md">
                  <Icon className="h-5 w-5 text-earth-200" />
                </span>
                <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed mb-5">
                  {text}
                </p>
                <button
                  type="button"
                  onClick={() => showPhotos(category)}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-earth-200 hover:text-white transition cursor-pointer"
                >
                  See photos
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-earth-200 rounded-3xl border border-earth-200 bg-white/70">
        {facts.map((fact) => (
          <div key={fact.label} className="px-8 py-7 text-center sm:text-left">
            <p className="font-display text-4xl text-forest-900">{fact.value}</p>
            <p className="text-sm text-forest-600 mt-1">{fact.label}</p>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default ExperiencesSection;
