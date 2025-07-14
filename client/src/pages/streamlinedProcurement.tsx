import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calculator, Truck, FileText, Package, CheckCircle, ArrowRight, Star, Eye, Clock, Target, ArrowUp, ArrowDown } from 'lucide-react';
import constructionSiteImg from '@assets/Construction-material-management-system-on-project-sites-1024x409_1752230798913.webp';
import pricingImg from '@assets/building-estimation-course-1000x1000_1752230798912.webp';
import supplyChainImg from '@assets/phases-of-construction_1752230798913.webp';
import complianceImg from '@assets/GST-768x512_1752230804835.jpeg';
import orderManagementImg from '@assets/Package-box-recieved-1024_1752230798913.webp';

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
      features: ["Centralized Ordering", "Site-wise Tracking", "Unified Vendor Management"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "SKU Price Accuracy",
      description: "Real-time price validation and market analysis ensuring competitive rates for every construction material and component.",
      subtext: "Eliminate price discrepancies with our AI-powered pricing engine that monitors market fluctuations across India.",
      features: ["Real-time Pricing", "Market Analysis", "Price Alerts"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Delay Solutions",
      description: "Proactive logistics management with predictive analytics to identify and resolve potential delays before they impact your projects.",
      subtext: "Advanced tracking systems and alternative sourcing options ensure your construction timeline stays on track.",
      features: ["Predictive Analytics", "Alternative Sourcing", "Real-time Tracking"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST/Billing Compliance",
      description: "Automated GST calculations, compliant invoicing, and seamless integration with accounting systems for hassle-free financial management.",
      subtext: "Stay compliant with Indian tax regulations while reducing administrative overhead through intelligent automation.",
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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Streamlined Procurement Solutions"
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
            className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4" />
            <span className="font-medium">Digital Innovation</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-inter text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamlined Procurement
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Revolutionary digital procurement platform that transforms how construction companies 
            source, manage, and deliver materials across India's diverse markets.
          </motion.p>
          

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={scrollToContent}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white text-sm">Streamlined Procurement</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                <ArrowDown className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
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
      <section className="py-16 md:py-20 bg-[#FBF5EA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Transforming Construction Procurement
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
            <p className="text-neutral-base mt-6 max-w-3xl mx-auto text-lg">
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
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-5 h-5 text-[#0C2539]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Multi-site</h3>
              <p className="text-neutral-base text-sm">Procurement</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calculator className="w-5 h-5 text-[#0C2539]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Price</h3>
              <p className="text-neutral-base text-sm">Accuracy</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Truck className="w-5 h-5 text-[#0C2539]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Supply Chain</h3>
              <p className="text-neutral-base text-sm">Solutions</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FileText className="w-5 h-5 text-[#0C2539]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">GST</h3>
              <p className="text-neutral-base text-sm">Compliance</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="w-5 h-5 text-[#0C2539]" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">Order</h3>
              <p className="text-neutral-base text-sm">Management</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-12 md:space-y-16"
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
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-[#0C2539] group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-accent">
                        {solution.title}
                      </h3>
                      <div className="w-12 h-1 bg-primary mt-2"></div>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-base leading-relaxed">
                    {solution.description}
                  </p>

                  <p className="text-base text-neutral-base/80 leading-relaxed">
                    {solution.subtext}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-accent font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
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
                      className="w-full h-80 object-cover rounded-3xl shadow-lg"
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