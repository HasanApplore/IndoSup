import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Target, CheckCircle, TrendingUp, Award, Handshake, ExternalLink, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Lightbulb, BarChart3, ShoppingCart, Truck, Database, Network, Users, Settings } from 'lucide-react';
import { Link } from 'wouter';

export default function IndoSupGlobal() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Carousel images for IndoSup Global
  const globalImages = [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
      alt: "Construction Procurement Platform",
      title: "Digital Platform"
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      alt: "Supply Chain Management",
      title: "Supply Chain"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      alt: "Construction Materials Management",
      title: "Materials Management"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % globalImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [globalImages.length]);

  // Add scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setShowScrollTop(scrolled);
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

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % globalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + globalImages.length) % globalImages.length);
  };

  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Advanced Procurement Solutions",
      description: "Comprehensive procurement services that streamline the sourcing and purchasing of construction materials and equipment.",
      features: ["Supplier management", "Cost optimization", "Quality assurance", "Contract negotiation"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization to ensure timely delivery and cost-effective logistics solutions.",
      features: ["Inventory management", "Logistics optimization", "Delivery tracking", "Warehouse management"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Vendor Network Development",
      description: "Building and maintaining a robust network of trusted suppliers and manufacturers worldwide.",
      features: ["Supplier vetting", "Performance monitoring", "Relationship management", "Network expansion"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance Systems",
      description: "Rigorous quality control processes to ensure all materials meet industry standards and project requirements.",
      features: ["Quality testing", "Compliance verification", "Documentation management", "Continuous improvement"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Digital Platform Integration",
      description: "Seamless integration of digital tools and platforms to enhance procurement efficiency and transparency.",
      features: ["API integration", "Real-time tracking", "Data analytics", "Mobile accessibility"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Suppliers Network" },
    { number: "50+", label: "Countries Served" },
    { number: "100M+", label: "Materials Procured" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Access to suppliers and materials from around the world, ensuring the best quality and pricing."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Advanced analytics and bulk purchasing power to deliver significant cost savings."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Optimized logistics and strategic warehouse locations for quick and reliable delivery."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "Rigorous quality control and supplier verification to ensure premium materials."
    }
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
    <div className="min-h-screen bg-[#2A374B]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
            alt="IndoSup Global - Construction Procurement Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-[#FFC600]/30 rounded-full blur-2xl"
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
            className="absolute bottom-1/3 right-10 w-16 h-16 bg-[#FFC600]/20 rounded-full blur-xl"
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
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IndoSup Global
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-[#FFC600] mx-auto mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading construction procurement solutions with global reach and local expertise
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Advanced digital platform connecting construction companies with trusted suppliers worldwide, 
            ensuring quality, efficiency, and cost-effectiveness in every project.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#3e4e66] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-[#FFC600]/5 to-[#FFC600]/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#FFC600] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/90 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#fbf5ea] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-[#FFC600]/5 to-[#FFC600]/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A374B]">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-[#2A374B] max-w-3xl mx-auto leading-relaxed">
              Comprehensive procurement and supply chain solutions designed to meet the unique needs of modern construction projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center text-[#2A374B] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2A374B] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#FFC600] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#3e4e66] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFC600]">
              Why Choose IndoSup Global?
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the advantages that make us the preferred choice for construction procurement worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-[#FFC600] rounded-xl flex items-center justify-center text-[#2A374B] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFC600] mb-2">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-16 bg-[#fbf5ea] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A374B]">
              Our Platform in Action
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-[#2A374B] max-w-3xl mx-auto leading-relaxed">
              See how our digital platform transforms construction procurement and supply chain management
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={globalImages[currentImageIndex].src}
                  alt={globalImages[currentImageIndex].alt}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              
              {/* Dot Indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {globalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-[#FFC600]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3e4e66] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/10 via-[#FFC600]/10 to-[#FFC600]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFC600]">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of construction companies that have already revolutionized their procurement processes with IndoSup Global
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-[#FFC600] text-[#2A374B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFC600]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="border-2 border-[#FFC600] text-[#FFC600] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FFC600] hover:bg-[#FFC600]/90 text-[#2A374B] p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <TrendingUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
