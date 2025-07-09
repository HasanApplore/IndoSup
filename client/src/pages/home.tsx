import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InitiativesSection from '@/components/InitiativesSection';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <div> {/* Remove padding-top to let video go behind navbar */}
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <InitiativesSection />
      <CTABanner />
    </div>
  )
}