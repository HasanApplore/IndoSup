import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurImpactSection from '@/components/OurImpactSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#FAFAFA] to-white"> {/* Overall background theme gradient to white */}
      <HeroSection />
      <div className="h-px bg-[#CFCFCF]"></div>
      <WhoWeAreSection />
      <div className="h-px bg-[#CFCFCF]"></div>
      <OurImpactSection />
      <div className="h-px bg-[#CFCFCF]"></div>
      <ClientLogosSection />
      <div className="h-px bg-[#CFCFCF]"></div>
      <TestimonialsSection />
    </div>
  )
}