import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurImpactSection from '@/components/OurImpactSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#fbf5e8] to-white"> {/* Overall background theme gradient to white */}
      <HeroSection />
      <WhoWeAreSection />
      <OurImpactSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}