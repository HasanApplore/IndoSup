import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurImpactSection from '@/components/OurImpactSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-[#2a374b]"> {/* Overall background theme with dark blue-gray */}
      <HeroSection />
      <WhoWeAreSection />
      <OurImpactSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}