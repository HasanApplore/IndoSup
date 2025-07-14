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
            className="space-y-16 md:space-y-20"
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
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent">
                      IndoSup Global Private Limited
                    </h3>
                    <div className="w-12 h-1 bg-primary mt-2"></div>
                  </div>
                </div>

                <p className="text-lg text-neutral-base leading-relaxed">
                  Leading construction procurement solutions with global reach and local expertise,
                  streamlining supply chain management for modern infrastructure projects.
                </p>

                <p className="text-base text-neutral-base/80 leading-relaxed">
                  Advanced digital platform connecting construction companies with trusted suppliers worldwide,
                  ensuring quality, efficiency, and cost-effectiveness in every project.
                </p>

                {/* Features */}
                <div className="space-y-2 mt-8 mb-6">
                  {globalPrivateServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-accent font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <Link to="/contact">
                    <motion.div
                      className="inline-flex items-center bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group border-2 border-primary/20 hover:border-primary shadow-sm hover:shadow-md"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-3">Learn More About Global Private</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="IndoSup Global Private Limited - Construction Procurement"
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
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
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent">
                      IndoSup Global Assist Limited
                    </h3>
                    <div className="w-12 h-1 bg-primary mt-2"></div>
                  </div>
                </div>

                <p className="text-lg text-neutral-base leading-relaxed">
                  Comprehensive technical consulting and project management support,
                  delivering specialized expertise for complex construction initiatives.
                </p>

                <p className="text-base text-neutral-base/80 leading-relaxed">
                  Expert consulting services providing strategic guidance, technical support, and process optimization
                  to enhance construction project outcomes and operational efficiency.
                </p>

                {/* Features */}
                <div className="space-y-2 mt-8 mb-6">
                  {globalAssistServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-accent font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <Link to="/contact">
                    <motion.div
                      className="inline-flex items-center bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group border-2 border-primary/20 hover:border-primary shadow-sm hover:shadow-md"
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-3">Learn More About Global Assist</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="IndoSup Global Assist Limited - Technical Consulting"
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
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