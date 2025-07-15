import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import StatsSection from '@/components/StatsSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-[#F9F7F1]"> {/* Light ivory background instead of white */}
      <HeroSection />
      
      {/* Diagonal transition shape */}
      <div className="relative -mt-1">
        <svg className="w-full h-12 text-[#F9F7F1]" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,0 L1200,0 L1200,120 L0,60 Z" />
        </svg>
      </div>
      
      <div className="bg-gradient-to-br from-[#FFF9E6] to-[#F9F7F1]">
        <WhoWeAreSection />
      </div>
      
      {/* Diagonal transition to dark section */}
      <div className="relative -mt-1">
        <svg className="w-full h-12 text-[#031D33]" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,60 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
      
      <div className="bg-[#031D33]">
        <StatsSection />
      </div>
      
      {/* Diagonal transition back to light */}
      <div className="relative -mt-1">
        <svg className="w-full h-12 text-[#E5E7EB]" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,0 L1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
      
      <div className="bg-[#E5E7EB]">
        <ClientLogosSection />
      </div>
      
      {/* Diagonal transition to soft yellow */}
      <div className="relative -mt-1">
        <svg className="w-full h-12 text-[#FFF9E6]" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,60 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
      
      <div className="bg-gradient-to-br from-[#FFF9E6] to-[#F9F7F1]">
        <TestimonialsSection />
      </div>
    </div>
  )
}