import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#fbf5e8] to-[#f8f2e0]"> {/* Overall background theme with light gradient */}
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}