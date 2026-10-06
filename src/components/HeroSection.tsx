import { ArrowRight, BedDouble, Leaf, Mountain, Tent } from "lucide-react";

const highlights = [
  { icon: BedDouble, label: "Ensuite lodge rooms" },
  { icon: Mountain, label: "Mt. Kenya views" },
  { icon: Leaf, label: "Organic farm meals" },
  { icon: Tent, label: "Camping & glamping" },
];

const HeroSection = () => {
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden"
    >
      {/* Full-bleed cinematic media */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-lodge.webp"
          srcSet="/hero-lodge.webp 2560w, /hero-lodge-4k.webp 3840w"
          sizes="100vw"
          alt="EarthShip Log Cabin at golden hour, Timau"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] animate-kenburns motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/25 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-24 pt-32 md:pb-28 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <p className="section-kicker text-earth-300 mb-5">
              Eco lodge · Foot of Mount Kenya
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold text-white leading-[0.95] tracking-tight mb-6 text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
              EarthShip
              <span className="block text-earth-300 italic font-medium text-[0.72em] mt-2">
                Log Cabin – Timau
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed mb-10 font-light">
              A rustic wilderness retreat for travellers who want clean food,
              quiet nights, and Mount Kenya at their doorstep. Eat Clean. Live
              Green.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => scrollTo("#booking")}
                className="btn-earth text-base px-8 cursor-pointer"
              >
                Book Your Stay
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#accommodation")}
                className="btn-outline-light text-base px-8"
              >
                View Rooms
              </button>
            </div>

            <ul className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-white/85"
                >
                  <Icon className="h-4 w-4 text-earth-300 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("#experiences")}
        className="group hidden lg:flex absolute right-8 xl:right-12 bottom-24 z-10 w-80 items-center gap-4 rounded-2xl bg-white/10 p-3 pr-5 text-left ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/15 cursor-pointer animate-fade-up"
      >
        <img
          src="/media/thumbs/n13.webp"
          alt=""
          className="h-20 w-20 shrink-0 rounded-xl object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.25em] text-earth-300">
            Experience
          </p>
          <p className="font-display text-xl leading-tight text-white">
            Climb Mt. Kenya from our doorstep
          </p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-earth-300 text-forest-900 transition group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
