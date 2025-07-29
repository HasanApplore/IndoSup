import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Wrench, CheckCircle, Star, ArrowUp, Building2, Package, Shield, ArrowDown } from 'lucide-react';
import { Link } from 'wouter';
import pumpingSystemImg from '@assets/OIP (1)_1752499680077.webp';
import fireProtectionSystemImg from '@assets/fireprotectionsystemcomponents_1752499690321.webp';
import waterSystemImg from '@assets/c50b6154-84bf-44da-bffb-3cd660a1fa44_1752499692423.jpg';
import plumbingSystemImg from '@assets/OIP (2)_1752499839297.webp';

export default function NonSteelProducts() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when page loads
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          const yOffset = -100; // Offset for navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setHeroAnimationComplete(false);
  };

  const scrollToContent = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
    setHeroAnimationComplete(true);
  };

  const scrollToCategories = () => {
    const element = document.getElementById('non-steel-categories-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nonSteelCategories = [
    {
      name: "Plumbing",
      description: "Complete plumbing solutions including pipes, fittings, valves, and fixtures for residential and commercial projects.",
      specifications: ["CPVC/PVC Pipes", "Brass Fittings", "ISI Certified"],
      image: plumbingSystemImg
    },
    {
      name: "Electrical",
      description: "Comprehensive electrical systems including wiring, switches, panels, and safety equipment for modern construction.",
      specifications: ["IS 732 Standard", "Modular Switches", "MCB/RCCB"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fire Fighting",
      description: "Advanced fire safety systems including sprinklers, alarms, extinguishers, and emergency response equipment.",
      specifications: ["BIS Approved", "Automatic Systems", "Emergency Lighting"],
      image: fireProtectionSystemImg
    },
    {
      name: "Warehouse Infra",
      description: "Industrial warehouse infrastructure including racking systems, loading equipment, and storage solutions.",
      specifications: ["Heavy Duty Racks", "Loading Docks", "Material Handling"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Site Utilities",
      description: "Essential site utilities including generators, temporary structures, safety equipment, and construction tools.",
      specifications: ["Portable Generators", "Safety Barriers", "Construction Tools"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pumping and Water System",
      description: "Comprehensive water management solutions including pumps, tanks, filtration systems, and water treatment equipment.",
      specifications: ["Submersible Pumps", "Water Storage Tanks", "Filtration Systems"],
      image: waterSystemImg
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Non-Steel Products - Premium Construction Solutions"
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
              Non-Steel Products
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
            Essential Infrastructure & Specialized Solutions
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContent}
          >
            Explore Products
          </motion.button>
        </div>


      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Products Section */}
      <section className="py-8 md:py-12 bg-[#3b4f69] pt-[0px] pb-[0px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="non-steel-categories-section"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFC600] mb-6">
              Non-Steel Product Categories
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto"></div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-[#FFC600]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Wrench className="w-5 h-5 text-[#FFC600]" />
              </div>
              <h3 className="text-xl font-bold text-[#FFC600] mb-1">Plumbing</h3>
              <p className="text-gray-600 text-sm">Solutions</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-[#FFC600]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-[#FFC600]" />
              </div>
              <h3 className="text-xl font-bold text-[#FFC600] mb-1">Electrical</h3>
              <p className="text-gray-600 text-sm">Systems</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-[#FFC600]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-[#FFC600]" />
              </div>
              <h3 className="text-xl font-bold text-[#FFC600] mb-1">Fire Fighting</h3>
              <p className="text-gray-600 text-sm">Equipment</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-[#FFC600]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-5 h-5 text-[#FFC600]" />
              </div>
              <h3 className="text-xl font-bold text-[#FFC600] mb-1">Warehouse</h3>
              <p className="text-gray-600 text-sm">Infrastructure</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-[#FFC600]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-[#FFC600]" />
              </div>
              <h3 className="text-xl font-bold text-[#FFC600] mb-1">Water Systems</h3>
              <p className="text-gray-600 text-sm">& Utilities</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mt-[80px] mb-[80px]">
              <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center text-[#2A374B] mr-6">
                <Wrench className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFC600]">Non-Steel Products</h1>
                <p className="text-white/90 text-lg mt-2">Specialized construction systems and utilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-2 md:py-4 ml-[0px] mr-[0px] mt-[-80px] mb-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {nonSteelCategories.map((category, index) => (
              <motion.div
                key={index}
                id={category.name === "Electrical" ? "electrical-components" : category.name === "Fire Fighting" ? "fire-fighting-systems" : undefined}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-[#FFC600] mb-3">Key Features:</h4>
                    {category.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#FFC600] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Quote
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </div>
  );
}