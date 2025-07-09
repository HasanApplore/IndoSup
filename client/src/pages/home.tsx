import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IndiaMapSection from '@/components/IndiaMapSection';
import InitiativesSection from '@/components/InitiativesSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="overflow-hidden"> {/* Remove padding-top to let video go behind navbar */}
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ClientLogosSection />
      <IndiaMapSection />
      <InitiativesSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  )
}