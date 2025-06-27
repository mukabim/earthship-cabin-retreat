
import { Button } from '@/components/ui/button';
import { CalendarIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-forest-900/80 to-earth-900/80 relative">
          {/* Placeholder for background image - in a real app, this would be an actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-600 to-earth-600 opacity-90"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            EarthShip
            <span className="block text-3xl md:text-4xl font-light text-earth-200">
              Log Cabin House
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Escape to nature's embrace in our unique eco-friendly retreat
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8 text-earth-200">
            <MapPinIcon className="h-5 w-5" />
            <span className="text-lg">Sustainable Wilderness Experience</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToBooking}
              className="btn-earth text-lg px-8 py-4 flex items-center space-x-2"
            >
              <CalendarIcon className="h-5 w-5" />
              <span>Book Your Stay</span>
            </Button>
            
            <a
              href="https://wa.me/254723656445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-white hover:bg-white hover:text-forest-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
