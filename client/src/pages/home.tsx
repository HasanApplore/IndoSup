import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#ffc600] via-[#fbf5e8] to-[#f8f2e0] relative"> {/* Overall background theme with yellow arch */}
      {/* Yellow arch effect on left side */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#ffc600]/20 via-[#ffc600]/10 to-transparent pointer-events-none"></div>
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}