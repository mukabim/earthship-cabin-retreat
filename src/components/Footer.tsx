import { INSTAGRAM_URL, THREADS_URL, TIKTOK_URL, X_URL } from "@/lib/links";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-3xl font-semibold mb-3">EarthShip</h3>
            <p className="text-earth-200/90 mb-5 font-light leading-relaxed max-w-sm">
              Sustainable wilderness stays at the foot of Mount Kenya. Eat Clean.
              Live Green.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/share/1DboKhJSG9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://wa.me/254758216350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="X"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="TikTok @earthshiplogcabin"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={THREADS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
                aria-label="Threads"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.03 11.1a7.3 7.3 0 0 0-.28-.13c-.16-3.04-1.83-4.78-4.62-4.8h-.04c-1.67 0-3.06.71-3.92 2.01l1.54 1.06c.64-.97 1.64-1.18 2.38-1.18h.03c.92 0 1.61.27 2.06.79.33.38.55.9.66 1.56a11.7 11.7 0 0 0-2.67-.13c-2.68.15-4.41 1.72-4.29 3.9.06 1.11.61 2.06 1.55 2.68.8.52 1.82.78 2.89.72 1.41-.08 2.51-.62 3.28-1.6.58-.74.95-1.7 1.11-2.91.67.4 1.17.94 1.44 1.58.47 1.09.5 2.88-.96 4.34-1.28 1.28-2.82 1.83-5.14 1.85-2.58-.02-4.53-.85-5.8-2.46-1.19-1.51-1.8-3.69-1.83-6.48.03-2.79.64-4.97 1.83-6.48 1.27-1.61 3.22-2.44 5.8-2.46 2.6.02 4.58.85 5.89 2.48.64.8 1.13 1.8 1.45 2.97l1.8-.48c-.39-1.43-1-2.67-1.83-3.7C17.67 1.92 15.17.86 11.97.84h-.01C8.76.86 6.3 1.93 4.64 4.02 3.17 5.88 2.41 8.47 2.38 11.72v.02c.03 3.25.79 5.84 2.26 7.7 1.66 2.09 4.12 3.16 7.32 3.18h.01c2.84-.02 4.85-.77 6.5-2.42 2.16-2.16 2.1-4.86 1.39-6.52-.51-1.19-1.48-2.15-2.83-2.58zm-4.9 4.6c-1.18.07-2.4-.46-2.46-1.6-.04-.85.6-1.79 2.55-1.9.22-.01.44-.02.65-.02.7 0 1.36.07 1.96.2-.22 2.79-1.53 3.25-2.7 3.32z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-earth-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Accommodation", href: "#accommodation" },
                { name: "Gallery", href: "#gallery" },
                { name: "Booking", href: "#booking" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-earth-100/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-earth-300 mb-4">
              Book & Contact
            </h4>
            <div className="space-y-2.5 text-earth-100/85">
              <p>
                <a
                  href="tel:+254758216350"
                  className="hover:text-white transition-colors"
                >
                  +254 758 216 350
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/254758216350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp bookings
                </a>
              </p>
              <p>
                <a
                  href="mailto:booking@earthship.co.ke"
                  className="hover:text-white transition-colors"
                >
                  booking@earthship.co.ke
                </a>
              </p>              <p className="pt-2 text-earth-200/80 text-sm">
                Timau, Laikipia — foot of Mount Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-700/80">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-earth-200/70 text-sm">
              © {year} EarthShip Log Cabin - Timau. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="/pages/PrivacyPolicy"
                className="text-earth-200/70 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/pages/TermsOfService"
                className="text-earth-200/70 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
