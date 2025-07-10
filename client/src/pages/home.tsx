import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white"> {/* Overall background theme */}
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}