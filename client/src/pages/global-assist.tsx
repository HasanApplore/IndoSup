import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2, Target, CheckCircle, TrendingUp, Award, Handshake, ExternalLink, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Lightbulb, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';

export default function GlobalAssist() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Carousel images for Global Assist
  const globalAssistImages = [
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      alt: "Technical Consulting Services",
      title: "Technical Consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      alt: "Project Management Support",
      title: "Project Management"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
      alt: "Construction Planning",
      title: "Construction Planning"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % globalAssistImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [globalAssistImages.length]);

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
    setCurrentImageIndex((prev) => (prev + 1) % globalAssistImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + globalAssistImages.length) % globalAssistImages.length);
  };

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Expert technical guidance for complex construction projects, ensuring optimal solutions and best practices implementation.",
      features: ["Structural analysis", "Material selection", "Quality assurance", "Compliance standards"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management Support",
      description: "Comprehensive project management assistance to keep your construction initiatives on track and within budget.",
      features: ["Timeline management", "Resource allocation", "Risk assessment", "Progress monitoring"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Training & Development",
      description: "Specialized training programs to enhance your team's capabilities and project execution skills.",
      features: ["Technical workshops", "Safety training", "Process improvement", "Team development"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process Optimization",
      description: "Streamline your construction processes for maximum efficiency and cost-effectiveness.",
      features: ["Workflow analysis", "Efficiency improvement", "Cost reduction", "Quality enhancement"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strategic Advisory Services",
      description: "High-level strategic guidance to help you make informed decisions for long-term success.",
      features: ["Market analysis", "Growth strategy", "Risk management", "Investment planning"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "25+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede6d3] to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={globalAssistImages[currentImageIndex].src}
            alt={globalAssistImages[currentImageIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8">
              IndoSup Assist Private Limited
            </h1>
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
            Comprehensive Technical Consulting & Project Management Excellence
          </motion.p>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button
              onClick={prevImage}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {globalAssistImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-[#FFC600]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextImage}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A374B]">
              About IndoSup Assist
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              IndoSup Assist is a specialized consulting firm dedicated to delivering 
              exceptional technical expertise and project management support for construction initiatives worldwide.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2A374B] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower construction companies with cutting-edge technical solutions, 
                strategic guidance, and operational excellence that drives project success 
                and sustainable growth in the global construction industry.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#2A374B] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading global consulting partner for construction excellence, 
                recognized for innovation, reliability, and transformative impact on 
                construction projects worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFC600]/10 to-[#FFC600]/5 p-8 rounded-2xl border border-[#FFC600]/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#FFC600] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#fbf5ea]">
        <div className="container mx-auto px-4">
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
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting solutions designed to elevate your construction projects 
              and operational efficiency to new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FFC600]/30 group"
              >
                <div className="w-16 h-16 bg-[#FFC600]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC600] transition-all duration-300">
                  <div className="text-[#FFC600] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#2A374B] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#FFC600] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2A374B]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let our expert team help you achieve excellence in your construction initiatives. 
              Get in touch to discuss how we can support your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-[#FFC600] text-[#2A374B] px-8 py-4 rounded-xl font-semibold hover:bg-[#FFC600]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              
              <Link to="/new-initiatives">
                <motion.button
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#2A374B] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Initiatives
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
