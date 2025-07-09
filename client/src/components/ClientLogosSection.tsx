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
    }, 2000); // Faster transitions

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
    <section className="py-6 md:py-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(3,29,51,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 font-inter">
            Our Trusted Partners
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-sm md:text-base text-neutral-base max-w-xl mx-auto">
            Collaborating with India's leading construction and infrastructure companies
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative pt-4 pb-3"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >


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
                    className="group flex-1 max-w-48 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-6 cursor-pointer border-2 border-gray-100 hover:border-primary/30 relative overflow-hidden"
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
                    
                    <div className="relative z-10 flex items-center justify-center h-20">
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




      </div>
    </section>
  );
}