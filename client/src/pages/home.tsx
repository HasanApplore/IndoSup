import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import IndiaMapSection from '@/components/IndiaMapSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InitiativesSection from '@/components/InitiativesSection';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <IndiaMapSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <InitiativesSection />
      <CTABanner />
    </div>
  )
}