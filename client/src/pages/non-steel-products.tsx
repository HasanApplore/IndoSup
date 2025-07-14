import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Wrench, CheckCircle, Star, ArrowUp, Building2, Package, Shield, ArrowDown } from 'lucide-react';
import { Link } from 'wouter';

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
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Non-Steel Products - Premium Construction Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/25 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/products/steel">
              <motion.button
                className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Steel Products</span>
                <Building2 className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary text-accent px-6 py-3 rounded-full backdrop-blur-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-5 h-5" />
              <span>Premium Non-Steel Products</span>
            </motion.div>
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Essential Infrastructure
            <span className="block text-primary">Non-Steel Products</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our comprehensive range of non-steel construction products including plumbing, electrical, and specialized infrastructure solutions.
          </motion.p>
          

          
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            From plumbing and electrical to fire safety and warehouse infrastructure, we have everything for your projects.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-white text-sm text-center">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
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
      <section className="py-16 md:py-20 bg-[#FBF5EA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="non-steel-categories-section"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-inter">
              Non-Steel Product Categories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Plumbing</h3>
              <p className="text-neutral-base text-sm">Solutions</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Electrical</h3>
              <p className="text-neutral-base text-sm">Systems</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Fire Fighting</h3>
              <p className="text-neutral-base text-sm">Equipment</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Warehouse</h3>
              <p className="text-neutral-base text-sm">Infrastructure</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Site</h3>
              <p className="text-neutral-base text-sm">Utilities</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Pumping</h3>
              <p className="text-neutral-base text-sm">Water System</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mr-6">
                <Wrench className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-inter">Non-Steel Products</h1>
                <p className="text-black text-lg mt-2">Specialized construction systems and utilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
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
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                  <p className="text-neutral-base leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-accent mb-3">Key Features:</h4>
                    {category.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-neutral-base">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-accent transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Quote
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 py-2 px-4 rounded-lg"
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