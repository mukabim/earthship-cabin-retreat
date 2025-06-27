
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AccommodationSection from '@/components/AccommodationSection';
import BookingSection from '@/components/BookingSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AccommodationSection />
      <BookingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
