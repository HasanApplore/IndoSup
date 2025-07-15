import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]"> {/* Light neutral background */}
      <HeroSection />
      
      {/* Why Choose IndoSup Section */}
      <div className="bg-[#F9FAFB]">
        <WhoWeAreSection />
      </div>
      
      {/* Our Impact Section */}
      <div className="bg-[#0F172A]">
        <StatsSection />
      </div>
      
      {/* Trusted Partners Section */}
      <div className="bg-[#F4F4F5]">
        <ClientLogosSection />
      </div>
      
      {/* What Our Clients Say Section */}
      <div className="bg-[#FFFDF5]">
        <TestimonialsSection />
      </div>
    </div>
  )
}