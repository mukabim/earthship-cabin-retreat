import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Experiences", href: "#experiences" },
    { name: "Stay", href: "#accommodation" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-earth-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[4.5rem]">
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="EarthShip Logo"
              className="w-10 h-10 object-cover rounded-full border border-earth-300/80 shadow"
            />
            <div className="text-left">
              <p
                className={`font-display text-2xl leading-none font-semibold transition-colors ${
                  scrolled ? "text-forest-900" : "text-white"
                }`}
              >
                EarthShip
              </p>
              <p
                className={`text-[10px] tracking-[0.18em] uppercase mt-0.5 transition-colors ${
                  scrolled ? "text-forest-600" : "text-white/70"
                }`}
              >
                Log Cabin – Timau
              </p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "text-forest-700 hover:text-forest-900"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#booking")}
              className="btn-earth ml-3 h-10 px-5 text-sm"
            >
              Book Now
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={scrolled ? "text-forest-700" : "text-white"}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border border-earth-100 rounded-xl shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-forest-700 hover:text-forest-900 block px-3 py-2.5 rounded-md text-base font-medium w-full text-left cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#booking")}
                className="btn-earth w-full mt-2"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
