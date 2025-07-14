import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Globe, Shield, Zap, ArrowDown, ArrowUp, Star, Target, CheckCircle, TrendingUp, Award, Handshake, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import globalInitiativesBanner from '@assets/global-initiatives_1752232647962.jpg';

export default function NewInitiatives() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset hero animation when component mounts
  useEffect(() => {
    setHeroAnimated(false);
  }, []);

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

  const scrollToContent = () => {
    const heroHeight = window.innerHeight;
    setHeroAnimated(true);
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToPrivateSection = () => {
    const element = document.getElementById('global-private-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAssistSection = () => {
    const element = document.getElementById('global-assist-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setHeroAnimated(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={globalInitiativesBanner}
            alt="IndoSup Global Initiatives - Worldwide Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-accent/60 to-accent/40"></div>
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
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-5 h-5 text-primary mr-2" />
            <span className="text-white font-medium">New Initiatives</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our New Global
            <span className="block text-primary">Initiatives</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expanding horizons with two specialized companies driving innovation in construction procurement and technical excellence.
          </motion.p>

          {/* Company Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToPrivateSection}
              className="group relative px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl min-w-[280px] text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                <Building2 className="w-5 h-5 mr-3" />
                <span>IndoSup Global Private Limited</span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={scrollToAssistSection}
              className="group relative px-8 py-4 bg-white/10 text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl min-w-[280px] text-center backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-3" />
                <span>IndoSup Global Assist Limited</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm">New Initiatives</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>



      {/* Company Categories */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Our Global Companies
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-neutral-base max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Two specialized companies driving innovation in global construction markets and technical excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Global Private Limited Card */}
            <motion.div variants={cardVariants} id="global-private-section">
              <Link to="/contact">
                <motion.div
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <motion.div
                      className="text-primary group-hover:text-accent transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6 group-hover:text-primary transition-colors duration-300">
                    IndoSup Global Private Limited
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-base text-lg mb-8 leading-relaxed">
                    Leading construction procurement solutions with global reach and local expertise,
                    streamlining supply chain management for modern infrastructure projects.
                  </p>

                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {globalPrivateServices.map((product, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-accent font-medium">{product}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                    <span className="mr-2">Learn More About Global Private</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Global Assist Limited Card */}
            <motion.div variants={cardVariants} id="global-assist-section">
              <Link to="/contact">
                <motion.div
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8" />
                    </div>
                    <motion.div
                      className="text-primary group-hover:text-accent transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6 group-hover:text-primary transition-colors duration-300">
                    IndoSup Global Assist Limited
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-base text-lg mb-8 leading-relaxed">
                    Comprehensive technical consulting and project management support,
                    delivering specialized expertise for complex construction initiatives.
                  </p>

                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {globalAssistServices.map((product, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-accent font-medium">{product}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                    <span className="mr-2">Learn More About Global Assist</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
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