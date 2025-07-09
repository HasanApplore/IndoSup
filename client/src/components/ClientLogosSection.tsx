import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientLogosSection() {
  // Client logos data - using provided company logos
  const clientLogos = [
    { name: 'KSB', logo: '/image_1752053991095.png' },
    { name: 'Steel Authority of India', logo: '/image_1752053993871.png' },
    { name: 'Vedanta', logo: '/image_1752053997490.png' },
    { name: 'FinOlex Pipes', logo: '/image_1752054000374.png' },
    { name: 'UltraTech Cement', logo: '/image_1752054003624.png' },
    { name: 'Ashirvad by Aliaxis', logo: '/image_1752054007526.png' },
    { name: 'Havells', logo: '/image_1752054012007.png' },
    { name: 'Polycab', logo: '/image_1752054016241.png' },
    { name: 'Jindal Steel & Power', logo: '/image_1752054022101.png' },
    // Duplicate the companies to fill more slots
    { name: 'KSB', logo: '/image_1752053991095.png' },
    { name: 'Steel Authority of India', logo: '/image_1752053993871.png' },
    { name: 'Vedanta', logo: '/image_1752053997490.png' },
    { name: 'FinOlex Pipes', logo: '/image_1752054000374.png' },
    { name: 'UltraTech Cement', logo: '/image_1752054003624.png' },
    { name: 'Ashirvad by Aliaxis', logo: '/image_1752054007526.png' },
    { name: 'Havells', logo: '/image_1752054012007.png' },
    { name: 'Polycab', logo: '/image_1752054016241.png' },
    { name: 'Jindal Steel & Power', logo: '/image_1752054022101.png' },
    { name: 'KSB', logo: '/image_1752053991095.png' },
    { name: 'Steel Authority of India', logo: '/image_1752053993871.png' },
    { name: 'Vedanta', logo: '/image_1752053997490.png' },
    { name: 'FinOlex Pipes', logo: '/image_1752054000374.png' },
    { name: 'UltraTech Cement', logo: '/image_1752054003624.png' },
    { name: 'Ashirvad by Aliaxis', logo: '/image_1752054007526.png' }
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(3,29,51,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4 font-inter">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-neutral-base max-w-2xl mx-auto">
            Proud to partner with India's leading construction and infrastructure companies
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group hover:scale-110 backdrop-blur-sm border border-gray-200 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group hover:scale-110 backdrop-blur-sm border border-gray-200 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
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
                    className="group flex-1 max-w-60 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border-2 border-gray-100 hover:border-primary/30 relative overflow-hidden"
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
                    
                    <div className="relative z-10 flex items-center justify-center h-24">
                      {/* Company Logo - Full Size */}
                      <div className="w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        
                        {/* Fallback text if logo fails */}
                        <div className="absolute inset-0 hidden items-center justify-center">
                          <span className="text-lg font-bold text-accent">
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
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-primary scale-150 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {/* Auto-play progress indicator */}
              {index === currentIndex && isAutoPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-primary/30">
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"
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