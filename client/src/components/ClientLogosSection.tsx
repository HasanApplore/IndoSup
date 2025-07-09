import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientLogosSection() {
  // Client logos data - using well-known construction/infrastructure companies
  const clientLogos = [
    { name: 'L&T Construction', initial: 'L&T', color: '#FF6B35', logo: 'https://logos-world.net/wp-content/uploads/2021/12/Larsen-Toubro-Logo.png' },
    { name: 'Tata Projects', initial: 'TATA', color: '#1E3A8A', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tata-Logo.png' },
    { name: 'Godrej', initial: 'GOD', color: '#16A34A', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Godrej-Logo.png' },
    { name: 'Mahindra', initial: 'MAH', color: '#DC2626', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Mahindra-Logo.png' },
    { name: 'Shapoorji Pallonji', initial: 'S&P', color: '#9333EA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Shapoorji_Pallonji_logo.svg/1200px-Shapoorji_Pallonji_logo.svg.png' },
    { name: 'Gammon India', initial: 'GAM', color: '#EA580C', logo: 'https://www.gammonindia.com/wp-content/uploads/2021/01/gammon-logo.png' },
    { name: 'NCC Limited', initial: 'NCC', color: '#0891B2', logo: 'https://www.nccindia.com/images/logo-ncc.png' },
    { name: 'Simplex', initial: 'SIM', color: '#BE185D', logo: 'https://www.simplexinfra.com/assets/images/logo.png' },
    { name: 'DLF Limited', initial: 'DLF', color: '#7C3AED', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/DLF_Logo.svg/1200px-DLF_Logo.svg.png' },
    { name: 'Reliance Industries', initial: 'REL', color: '#059669', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Reliance-Industries-Logo.png' },
    { name: 'Adani Group', initial: 'ADA', color: '#DC2626', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Adani_2012_logo.svg/1200px-Adani_2012_logo.svg.png' },
    { name: 'Hindustan Construction', initial: 'HCC', color: '#1F2937', logo: 'https://www.hccindia.com/wp-content/uploads/2020/10/hcc-logo.png' },
    { name: 'Sobha Limited', initial: 'SOB', color: '#F59E0B', logo: 'https://www.sobha.com/wp-content/uploads/2020/03/sobha-logo.png' },
    { name: 'Prestige Group', initial: 'PRE', color: '#8B5CF6', logo: 'https://www.prestigeconstructions.com/wp-content/uploads/2020/03/prestige-logo.png' },
    { name: 'Brigade Group', initial: 'BRI', color: '#10B981', logo: 'https://www.brigadegroup.com/wp-content/uploads/2020/03/brigade-logo.png' },
    { name: 'Puravankara', initial: 'PUR', color: '#EF4444', logo: 'https://www.puravankara.com/wp-content/uploads/2020/03/puravankara-logo.png' },
    { name: 'Embassy Group', initial: 'EMB', color: '#3B82F6', logo: 'https://www.embassygroup.com/wp-content/uploads/2020/03/embassy-logo.png' },
    { name: 'Oberoi Realty', initial: 'OBE', color: '#F97316', logo: 'https://www.oberoirealty.com/wp-content/uploads/2020/03/oberoi-logo.png' },
    { name: 'Hiranandani Group', initial: 'HIR', color: '#06B6D4', logo: 'https://www.hiranandani.com/wp-content/uploads/2020/03/hiranandani-logo.png' },
    { name: 'Unitech Limited', initial: 'UNI', color: '#84CC16', logo: 'https://www.unitechgroup.com/wp-content/uploads/2020/03/unitech-logo.png' },
    { name: 'Lodha Group', initial: 'LOD', color: '#EC4899', logo: 'https://www.lodhagroup.in/wp-content/uploads/2020/03/lodha-logo.png' },
    { name: 'Raheja Developers', initial: 'RAH', color: '#6366F1', logo: 'https://www.rahejadevelopers.com/wp-content/uploads/2020/03/raheja-logo.png' },
    { name: 'Kolte-Patil', initial: 'KOL', color: '#14B8A6', logo: 'https://www.koltepatil.com/wp-content/uploads/2020/03/kolte-patil-logo.png' },
    { name: 'Shriram Properties', initial: 'SHR', color: '#F43F5E', logo: 'https://www.shriramproperties.com/wp-content/uploads/2020/03/shriram-logo.png' }
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
                    className="group flex-1 max-w-64 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border-2 border-gray-100 hover:border-primary/30 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Subtle background gradient */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${client.color}05, ${client.color}10)`
                      }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center justify-center h-28">
                      {/* Company Logo Container */}
                      <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 relative overflow-hidden bg-gray-50 group-hover:bg-white">
                        {/* Try to load real logo, fallback to initials */}
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        
                        {/* Fallback initials */}
                        <div 
                          className="absolute inset-0 hidden items-center justify-center rounded-xl transition-all duration-300"
                          style={{ 
                            background: `linear-gradient(135deg, ${client.color}20, ${client.color}40)`
                          }}
                        >
                          <span 
                            className="text-xl font-bold transition-colors duration-300"
                            style={{ color: client.color }}
                          >
                            {client.initial}
                          </span>
                        </div>
                      </div>
                      
                      {/* Company Name */}
                      <h3 className="text-sm font-semibold text-accent text-center group-hover:text-primary transition-colors duration-300 leading-tight">
                        {client.name}
                      </h3>
                      
                      {/* Subtle hover indicator */}
                      <div 
                        className="w-0 h-0.5 mt-2 group-hover:w-8 transition-all duration-300"
                        style={{ backgroundColor: client.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-primary scale-150 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}