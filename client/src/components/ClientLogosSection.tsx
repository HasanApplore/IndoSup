import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientLogosSection() {
  // Client logos data - using well-known construction/infrastructure companies
  const clientLogos = [
    { name: 'L&T Construction', initial: 'L&T', color: '#FF6B35' },
    { name: 'Tata Projects', initial: 'TATA', color: '#1E3A8A' },
    { name: 'Godrej', initial: 'GOD', color: '#16A34A' },
    { name: 'Mahindra', initial: 'MAH', color: '#DC2626' },
    { name: 'Shapoorji Pallonji', initial: 'S&P', color: '#9333EA' },
    { name: 'Gammon India', initial: 'GAM', color: '#EA580C' },
    { name: 'NCC Limited', initial: 'NCC', color: '#0891B2' },
    { name: 'Simplex', initial: 'SIM', color: '#BE185D' },
    { name: 'DLF Limited', initial: 'DLF', color: '#7C3AED' },
    { name: 'Reliance Industries', initial: 'REL', color: '#059669' },
    { name: 'Adani Group', initial: 'ADA', color: '#DC2626' },
    { name: 'Hindustan Construction', initial: 'HCC', color: '#1F2937' },
    { name: 'Sobha Limited', initial: 'SOB', color: '#F59E0B' },
    { name: 'Prestige Group', initial: 'PRE', color: '#8B5CF6' },
    { name: 'Brigade Group', initial: 'BRI', color: '#10B981' },
    { name: 'Puravankara', initial: 'PUR', color: '#EF4444' },
    { name: 'Embassy Group', initial: 'EMB', color: '#3B82F6' },
    { name: 'Oberoi Realty', initial: 'OBE', color: '#F97316' },
    { name: 'Hiranandani Group', initial: 'HIR', color: '#06B6D4' },
    { name: 'Unitech Limited', initial: 'UNI', color: '#84CC16' },
    { name: 'Lodha Group', initial: 'LOD', color: '#EC4899' },
    { name: 'Raheja Developers', initial: 'RAH', color: '#6366F1' },
    { name: 'Kolte-Patil', initial: 'KOL', color: '#14B8A6' },
    { name: 'Shriram Properties', initial: 'SHR', color: '#F43F5E' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(clientLogos.length / itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

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
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex gap-6 justify-center"
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
                    className="group flex-1 max-w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-primary/20"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-24">
                      {/* Company Logo */}
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${client.color}20, ${client.color}40)`,
                          borderColor: client.color + '30'
                        }}
                      >
                        <span 
                          className="text-lg font-bold transition-colors duration-300"
                          style={{ color: client.color }}
                        >
                          {client.initial}
                        </span>
                      </div>
                      
                      {/* Company Name */}
                      <h3 className="text-sm font-medium text-accent text-center group-hover:text-primary transition-colors duration-300">
                        {client.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex 
                  ? 'bg-primary scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}