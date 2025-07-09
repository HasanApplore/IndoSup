import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import logos as assets for proper bundling
import ksbLogo from '@/assets/ksb-logo.png';
import sailLogo from '@/assets/sail-logo.png';
import vedantaLogo from '@/assets/vedanta-logo.png';
import finolexLogo from '@/assets/finolex-pipes-logo.png';
import aplapolloLogo from '@/assets/aplapollo-logo.png';
import ashirvadLogo from '@/assets/ashirvad-logo.webp';
import havellsLogo from '@/assets/havells-logo.webp';
import polycabLogo from '@/assets/polycab-logo.png';

export default function ClientLogosSection() {
  // Client logos data - using imported assets for proper bundling
  const clientLogos = [
    { name: 'KSB', logo: ksbLogo },
    { name: 'Steel Authority of India (SAIL)', logo: sailLogo },
    { name: 'Vedanta Limited', logo: vedantaLogo },
    { name: 'Finolex Pipes', logo: finolexLogo },
    { name: 'APL Apollo', logo: aplapolloLogo },
    { name: 'Ashirvad by Aliaxis', logo: ashirvadLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo },
    // Duplicate the companies to fill more slots for carousel
    { name: 'KSB', logo: ksbLogo },
    { name: 'Steel Authority of India (SAIL)', logo: sailLogo },
    { name: 'Vedanta Limited', logo: vedantaLogo },
    { name: 'Finolex Pipes', logo: finolexLogo },
    { name: 'APL Apollo', logo: aplapolloLogo },
    { name: 'Ashirvad by Aliaxis', logo: ashirvadLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo },
    { name: 'KSB', logo: ksbLogo },
    { name: 'Steel Authority of India (SAIL)', logo: sailLogo },
    { name: 'Vedanta Limited', logo: vedantaLogo },
    { name: 'Finolex Pipes', logo: finolexLogo },
    { name: 'APL Apollo', logo: aplapolloLogo },
    { name: 'Ashirvad by Aliaxis', logo: ashirvadLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(clientLogos.length / itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // Slightly longer for better UX

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentPageItems = () => {
    const start = currentIndex * itemsPerPage;
    return clientLogos.slice(start, start + itemsPerPage);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,0,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(23,42,54,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172a36] mb-6 font-inter">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-neutral-base max-w-3xl mx-auto">
            Collaborating with India's leading construction and infrastructure companies to deliver excellence
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative pt-6 pb-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-[#172a36] shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 group hover:scale-110 backdrop-blur-sm border border-[#172a36]/20 hover:border-[#172a36] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-[#172a36] group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-[#172a36] shadow-lg hover:shadow-xl rounded-full p-4 transition-all duration-300 group hover:scale-110 backdrop-blur-sm border border-[#172a36]/20 hover:border-[#172a36] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6 text-[#172a36] group-hover:text-white transition-colors" />
          </button>

          {/* Logos Container */}
          <div className="overflow-visible rounded-2xl py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex gap-3 justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                {getCurrentPageItems().map((client, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    variants={logoVariants}
                    className="group flex-1 max-w-72 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10 cursor-pointer border-2 border-[#172a36]/10 hover:border-[#172a36]/30 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Subtle background gradient on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gray-50 to-white" />
                    
                    <div className="relative z-10 flex items-center justify-center h-28">
                      {/* Company Logo - Optimized for partner logos */}
                      <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <img 
                          src={client.logo} 
                          alt={`${client.name} - Trusted Partner`}
                          className="max-w-full max-h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300 drop-shadow-sm"
                          loading="lazy"
                          onError={(e) => {
                            console.log(`Failed to load logo: ${client.logo}`);
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        
                        {/* Fallback text if logo fails */}
                        <div className="absolute inset-0 hidden items-center justify-center bg-gray-100 rounded-lg">
                          <span className="text-lg font-bold text-accent text-center px-2">
                            {client.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation with Progress */}
        <div className="flex justify-center mt-12 space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-[#172a36] scale-150 shadow-lg' 
                  : 'bg-gray-300 hover:bg-[#172a36]/50'
              }`}
            >
              {/* Auto-play progress indicator */}
              {index === currentIndex && isAutoPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-[#172a36]/30">
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-[#172a36] border-t-transparent animate-spin"
                    style={{ animationDuration: '4s' }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>


      </div>
    </section>
  );
}