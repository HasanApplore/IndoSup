import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      
      {/* Additional content sections can be added here */}
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-accent mb-8 font-inter">
            Welcome to IndoSup
          </h2>
          <p className="text-xl text-neutral-base max-w-2xl mx-auto leading-relaxed">
            Experience the future of technology with our innovative platform designed to empower your digital journey.
          </p>
        </div>
      </div>
    </div>
  )
}