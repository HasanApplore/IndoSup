import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calculator, Truck, FileText, Package, CheckCircle, ArrowRight, Star, Eye, Clock, Target, ArrowUp, ArrowDown } from 'lucide-react';
import constructionSiteImg from '@assets/illustration-construction-site (1)_1752496997919.jpg';
import pricingImg from '@assets/building-estimation-course-1000x1000_1752230798912.webp';
import supplyChainImg from '@assets/digital-composite-image-businessman-touching-icon-harbor_1752497026364.jpg';
import complianceImg from '@assets/GST-768x512_1752230804835.jpeg';
import orderManagementImg from '@assets/standard-quality-control-concept-m_1752497041033.jpg';

export default function StreamlinedProcurement() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
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
  };

  const scrollToContent = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Solutions data
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Multi-site Procurement",
      description: "Centralized procurement management across multiple construction sites with real-time coordination and unified vendor relationships.",
      subtext: "Streamline operations, reduce costs, and maintain consistent quality standards across all your project locations.",
      features: ["Order for all sites from one place", "Track materials for each site", "Manage all suppliers easily"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "SKU Price Accuracy",
      description: "Real-time price validation and market analysis ensuring competitive rates for every construction material and component.",
      subtext: "Eliminate price discrepancies with our AI-powered pricing engine that monitors market fluctuations across India.",
      features: ["Faster material ordering and delivery", "Find trusted suppliers easily", "Get the best prices automatically"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Delay Solutions",
      description: "Proactive logistics management with predictive analytics to identify and resolve potential delays before they impact your projects.",
      subtext: "Advanced tracking systems and alternative sourcing options ensure your construction timeline stays on track.",
      features: ["Less manual work in buying materials", "Backup suppliers ready", "Track deliveries in real-time"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST/Billing Compliance",
      description: "Automated GST calculations and compliant invoicing for hassle-free financial management.",
      subtext: "Stay compliant with Indian tax regulations while reducing administrative overhead.",
      features: ["Automated GST", "Compliant Invoicing", "System Integration"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Mismatched Order Management",
      description: "Intelligent order reconciliation system that identifies, flags, and resolves discrepancies in material deliveries and specifications.",
      subtext: "Advanced matching algorithms ensure what you ordered is exactly what you receive, every single time.",
      features: ["Order Reconciliation", "Discrepancy Detection", "Quality Assurance"]
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
    <div className="min-h-screen bg-[#fbf5ea]">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Streamlined Procurement Solutions"
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
              Benefits of Working with Indosup
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
            Digital Innovation for Construction Excellence
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContent}
          >
            Explore Solutions
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

      {/* Solutions Grid */}
      <section className="py-16 md:py-20 bg-[#fbf5ea]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A374B] mb-6 font-inter">
              Transforming Construction Procurement
            </h2>
            <div className="w-24 md:w-32 h-1 bg-[#FFC600] mx-auto"></div>
            <p className="text-[#2A374B] mt-6 max-w-3xl mx-auto text-lg">
              Each solution is designed to address specific pain points in construction procurement, 
              delivering measurable results and operational excellence.
            </p>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="bg-[#35506b] rounded-xl p-4 shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 border-[#E5E7EB] hover:border-[#FFC600]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('multi-site-procurement')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC600] group-hover:shadow-lg transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Building2 className="w-6 h-6 text-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">Multi-site</h3>
              <p className="text-white text-sm group-hover:text-white transition-colors duration-300">Procurement</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#35506b] rounded-xl p-4 shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 border-[#E5E7EB] hover:border-[#FFC600]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('sku-price-accuracy')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC600] group-hover:shadow-lg transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Calculator className="w-6 h-6 text-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">Price</h3>
              <p className="text-white text-sm group-hover:text-white transition-colors duration-300">Accuracy</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#35506b] rounded-xl p-4 shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 border-[#E5E7EB] hover:border-[#FFC600]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('supply-chain-solutions')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC600] group-hover:shadow-lg transition-all duration-300"
                whileHover={{ x: [0, 5, -5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Truck className="w-6 h-6 text-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">Supply Chain</h3>
              <p className="text-white text-sm group-hover:text-white transition-colors duration-300">Solutions</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#35506b] rounded-xl p-4 shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 border-[#E5E7EB] hover:border-[#FFC600]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('gst-billing-compliance')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC600] group-hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.4 }}
              >
                <FileText className="w-6 h-6 text-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">GST</h3>
              <p className="text-white text-sm group-hover:text-white transition-colors duration-300">Compliance</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#35506b] rounded-xl p-4 shadow-lg text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden border-2 border-[#E5E7EB] hover:border-[#FFC600]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('order-management')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFC600] group-hover:shadow-lg transition-all duration-300"
                whileHover={{ rotate: [0, 180, 360] }}
                transition={{ duration: 0.6 }}
              >
                <Package className="w-6 h-6 text-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">Order</h3>
              <p className="text-white text-sm group-hover:text-white transition-colors duration-300">Management</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-16 md:space-y-24 mt-12 md:mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                id={index === 0 ? 'multi-site-procurement' : index === 1 ? 'sku-price-accuracy' : index === 2 ? 'supply-chain-solutions' : index === 3 ? 'gst-billing-compliance' : 'order-management'}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1">
                  {/* Unified Content Block */}
                  <motion.div 
                    className="bg-[#35506b] rounded-xl p-8 shadow-lg border border-[#475466] h-[500px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon and Title Section */}
                    <div className="flex items-center space-x-4 mb-6 flex-shrink-0">
                      <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center text-[#2A374B] shadow-sm">
                        {React.cloneElement(solution.icon, { className: "w-8 h-8" })}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#FFC600] mb-2 truncate">
                          {solution.title}
                        </h3>
                        <div className="w-16 h-1 bg-[#FFC600] rounded-full"></div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="flex-grow overflow-hidden mb-4">
                      <p className="text-[#F5F5F5] leading-relaxed mb-3 line-clamp-3">
                        {solution.description}
                      </p>
                      <p className="text-[#F5F5F5] leading-relaxed line-clamp-2">
                        {solution.subtext}
                      </p>
                    </div>

                    {/* Features Section */}
                    <div className="flex-shrink-0 mb-4">
                      <div className="space-y-2">
                        {solution.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#FFC600] flex-shrink-0" />
                            <span className="text-[#F5F5F5] text-sm truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button Section */}
                    <div className="mt-auto flex-shrink-0">
                      <motion.div
                        className="inline-flex items-center bg-[#FFC600]/10 hover:bg-[#FFC600] text-[#FFC600] hover:text-[#2A374B] px-6 py-3 rounded-xl font-semibold transition-all duration-300 group border-2 border-[#FFC600]/20 hover:border-[#FFC600] shadow-sm hover:shadow-md cursor-pointer"
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="mr-3">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-md lg:max-w-lg">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={index === 0 ? constructionSiteImg : index === 1 ? pricingImg : index === 2 ? supplyChainImg : index === 3 ? complianceImg : orderManagementImg}
                      alt={solution.title}
                      className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </div>
  );
}