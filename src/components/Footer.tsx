
import { InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-earth mb-4">EarthShip</h3>
            <p className="text-earth-200 mb-4">
              Your gateway to sustainable wilderness experiences. Reconnect with nature in comfort and style.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/earthship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-200 hover:text-white transition-colors"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Accommodation', href: '#accommodation' },
                { name: 'Booking', href: '#booking' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-earth-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-earth-200">
              <p>📱 0723656445</p>
              <p>💬 WhatsApp Available</p>
              <p>📧 Available upon request</p>
              <p>🌍 Sustainable Wilderness Location</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-forest-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-earth-200 text-sm">
              ©2025 EarthShip Log Cabin House. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-earth-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-earth-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
