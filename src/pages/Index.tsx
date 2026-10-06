import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import AccommodationSection from '@/components/AccommodationSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperiencesSection />
      <AccommodationSection />
      <GallerySection />
      <BookingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
