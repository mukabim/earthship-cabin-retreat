import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/254758216350?text=Hi%20EarthShip%2C%20I%27d%20like%20to%20book%20a%20stay."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppFloat;
