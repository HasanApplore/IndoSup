import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Globe, Shield, Zap, ArrowDown, ArrowUp, Star, Target, CheckCircle, TrendingUp, Award, Handshake, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import globalInitiativesBanner from '@assets/global-initiatives_1752232647962.jpg';

export default function NewInitiatives() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Carousel images data for Global Private Limited
  const globalPrivateImages = [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      alt: "Construction Procurement Platform",
      title: "Digital Platform"
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      alt: "Supply Chain Management",
      title: "Supply Chain"
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      alt: "Quality Assurance Process",
      title: "Quality Control"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-eefec7b7e7c7?w=600&h=400&fit=crop",
      alt: "Global Reach Network",
      title: "Global Network"
    }
  ];

  // Carousel images data for Global Assist Limited
  const globalAssistImages = [
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      alt: "Technical Consulting Services",
      title: "Technical Consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      alt: "Project Management Support",
      title: "Project Management"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      alt: "Expert Guidance Team",
      title: "Expert Team"
    },
    {
      src: "https://images.unsplash.com/photo-1664382953403-89ba4a1ad99a?w=600&h=400&fit=crop",
      alt: "Process Optimization",
      title: "Process Optimization"
    }
  ];

  // Carousel state
  const [currentPrivateImageIndex, setCurrentPrivateImageIndex] = useState(0);
  const [currentAssistImageIndex, setCurrentAssistImageIndex] = useState(0);

  // Reset hero animation when component mounts
  useEffect(() => {
    setHeroAnimated(false);
  }, []);

  // Auto-advance carousel for Global Private Limited
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrivateImageIndex((prev) => (prev + 1) % globalPrivateImages.length);
    }, 2500); // Same timing as About Us page
    return () => clearInterval(interval);
  }, [globalPrivateImages.length]);

  // Auto-advance carousel for Global Assist Limited
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssistImageIndex((prev) => (prev + 1) % globalAssistImages.length);
    }, 2500); // Same timing as About Us page
    return () => clearInterval(interval);
  }, [globalAssistImages.length]);

  // Add scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setShowScrollTop(scrolled);
      
      if (window.scrollY === 0) {
        setHeroAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash fragment navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, []);

  const scrollToContent = () => {
    const heroHeight = window.innerHeight * 0.55; // 55% of viewport height
    setHeroAnimated(true);
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToPrivateSection = () => {
    const element = document.getElementById('global-private-section');
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAssistSection = () => {
    const element = document.getElementById('global-assist-section');
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    setHeroAnimated(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Carousel navigation functions
  const nextPrivateImage = () => {
    setCurrentPrivateImageIndex((prev) => (prev + 1) % globalPrivateImages.length);
  };

  const prevPrivateImage = () => {
    setCurrentPrivateImageIndex((prev) => (prev - 1 + globalPrivateImages.length) % globalPrivateImages.length);
  };

  const nextAssistImage = () => {
    setCurrentAssistImageIndex((prev) => (prev + 1) % globalAssistImages.length);
  };

  const prevAssistImage = () => {
    setCurrentAssistImageIndex((prev) => (prev - 1 + globalAssistImages.length) % globalAssistImages.length);
  };

  const globalPrivateServices = [
    "Advanced Procurement Solutions",
    "Supply Chain Management", 
    "Vendor Network Development",
    "Quality Assurance Systems",
    "Digital Platform Integration"
  ];

  const globalAssistServices = [
    "Technical Consulting",
    "Project Management Support", 
    "Training & Development",
    "Process Optimization",
    "Strategic Advisory Services"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={globalInitiativesBanner}
            alt="IndoSup Global Initiatives - Worldwide Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary/40 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8" style={{ color: '#ffffff' }}>
              New Initiatives
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-[#F5A623] mx-auto mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expanding Global Presence Through Innovation
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContent}
          >
            Learn More
          </motion.button>
        </div>


      </section>



      {/* Company Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 mt-8 font-inter">
              Our Global Companies
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-neutral-base max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Two specialized companies driving innovation in global construction markets and technical excellence
            </p>
          </motion.div>

          <motion.div
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Global Private Limited Row */}
            <motion.div
              variants={cardVariants}
              id="global-private-section"
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0E2F44] mb-2">
                      IndoSup Global Private Limited
                    </h3>
                    <div className="w-16 h-1 bg-[#F5A623] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-[#0E2F44] leading-relaxed font-medium">
                    Leading construction procurement solutions with global reach and local expertise, 
                    streamlining supply chain management for modern infrastructure projects.
                  </p>

                  <p className="text-lg text-[#0E2F44] leading-relaxed font-medium">
                    Advanced digital platform connecting construction companies with trusted suppliers worldwide, 
                    ensuring quality, efficiency, and cost-effectiveness in every project.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mt-6">
                  {globalPrivateServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                      <span className="text-[#0E2F44] font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/contact">
                    <motion.div
                      className="inline-flex items-center bg-[#F5A623]/10 hover:bg-[#F5A623] text-[#F5A623] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group border-2 border-[#F5A623]/20 hover:border-[#F5A623] shadow-sm hover:shadow-md"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-3">Learn More About Global Private</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Visual Element - Carousel */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={globalPrivateImages[currentPrivateImageIndex].src}
                      alt={globalPrivateImages[currentPrivateImageIndex].alt}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevPrivateImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextPrivateImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  
                  {/* Dot Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {globalPrivateImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPrivateImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentPrivateImageIndex ? 'bg-[#F5A623]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Global Assist Limited Row */}
            <motion.div
              variants={cardVariants}
              id="global-assist-section"
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12"
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0E2F44] mb-2">
                      IndoSup Global Assist Limited
                    </h3>
                    <div className="w-16 h-1 bg-[#F5A623] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-[#0E2F44] leading-relaxed font-medium">
                    Comprehensive technical consulting and project management support, 
                    delivering specialized expertise for complex construction initiatives.
                  </p>

                  <p className="text-lg text-[#0E2F44] leading-relaxed font-medium">
                    Expert consulting services providing strategic guidance, technical support, and process optimization 
                    to enhance construction project outcomes and operational efficiency.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mt-6">
                  {globalAssistServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                      <span className="text-[#0E2F44] font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/contact">
                    <motion.div
                      className="inline-flex items-center bg-[#F5A623]/10 hover:bg-[#F5A623] text-[#F5A623] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group border-2 border-[#F5A623]/20 hover:border-[#F5A623] shadow-sm hover:shadow-md"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-3">Learn More About Global Assist</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Visual Element - Carousel */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={globalAssistImages[currentAssistImageIndex].src}
                      alt={globalAssistImages[currentAssistImageIndex].alt}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevAssistImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextAssistImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  
                  {/* Dot Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {globalAssistImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentAssistImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentAssistImageIndex ? 'bg-[#F5A623]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

    </div>
  );
}