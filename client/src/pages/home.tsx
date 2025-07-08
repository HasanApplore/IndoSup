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
    <div>
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