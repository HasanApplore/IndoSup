import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurImpactSection from '@/components/OurImpactSection';
import OurClientsSection from '@/components/OurClientsSection';
import MediaCoverageSection from '@/components/MediaCoverageSection';
import AboutIndoSupSection from '@/components/AboutIndoSupSection';
import LeadershipSection from '@/components/LeadershipSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#fbf5e8] to-white"> {/* Overall background theme gradient to white */}
      <HeroSection />
      <WhoWeAreSection />
      <OurImpactSection />
      <OurClientsSection />
      <MediaCoverageSection />
      <AboutIndoSupSection />
      <LeadershipSection />
      <ClientLogosSection />
      <TestimonialsSection />
    </div>
  )
}