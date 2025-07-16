import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Building, Lightbulb, Zap, Shield, TrendingUp, Clock, CheckCircle, Star, Sparkles, ArrowRight, Globe, Truck, MapPin, Phone, Linkedin, ChevronLeft, ChevronRight, Mail, HandHeart, Leaf, ShieldCheck, ArrowUp, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import fireSystemImg from '@assets/OIP (4)_1752150066624.webp';
import electricalSystemImg from '@assets/electrician-working-in-fuse-box-closeup-electrical-panel-ai-generated-photo_1752150070669.jpg';
import pipesFittingImg from '@assets/Merit Brass - Chrome Plated Fittings_1752150074665.jpg';
import aboutBannerImage from '@assets/interior-view-steel-factory_1752495300931.jpg';

export default function About() {
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
    const heroHeight = window.innerHeight * 0.55; // 55% of viewport height
    setHeroAnimated(true);
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setHeroAnimated(true);
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

  // Carousel images data
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      alt: "Steel Framework Construction",
      title: "Steel Framework"
    },
    {
      src: pipesFittingImg,
      alt: "Pipes and Fitting Systems",
      title: "Pipes & Fitting"
    },
    {
      src: electricalSystemImg,
      alt: "Electrical Systems Installation",
      title: "Electrical Systems"
    },
    {
      src: fireSystemImg,
      alt: "Fire Fighting System Equipment",
      title: "Fire Fighting System"
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      alt: "Warehousing Material Storage",
      title: "Warehousing Material"
    }
  ];

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500); // Faster transition - 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Leadership team data
  const leadership = [
    {
      name: "Ashmit Sharma",
      position: "Founder & CEO",
      initials: "AS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/ashmit-sharma-49bbb0127/",
      email: "ashmit@indosup.com"
    },
    {
      name: "Akshaj Sharma",
      position: "Co-founder & COO",
      initials: "AS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/akshaj-sharma-4936b373/",
      email: "akshaj@indosup.com"
    },
    {
      name: "Shivank Saxena",
      position: "Co-founder & CFO",
      initials: "SS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/shivank-saxena-19431aab/",
      email: "shivank@indosup.com"
    }
  ];

  // Strengths data
  const strengths = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "End-to-End Sourcing Platform",
      description: "Complete procurement solution from sourcing to delivery"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streamlined Procurement Process",
      description: "Efficient and transparent procurement workflows"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Expertise in Value Engineering",
      description: "Optimizing costs while maintaining quality standards"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Cost Efficiency & Timely Delivery",
      description: "Delivering value with speed and reliability"
    }
  ];

  // Values data
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity",
      description: "Honest and transparent business practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuous improvement and technology adoption"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Putting customer needs at the center of everything"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Environmental responsibility in all operations"
    }
  ];

  // Statistics data
  const stats = [
    { number: "400+", label: "Retailers", icon: <Building className="w-6 h-6" /> },
    { number: "350+", label: "Distributors", icon: <Truck className="w-6 h-6" /> },
    { number: "300+", label: "Brands", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Stockists", icon: <MapPin className="w-6 h-6" /> }
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
    <div className="min-h-screen bg-[#2a374b]">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutBannerImage}
            alt="About IndoSup - Construction Procurement Excellence"
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
              About IndoSup
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
            Transforming Construction Procurement Through Innovation
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



      {/* What Is IndoSup Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5"></div>
        
        {/* Key Highlights Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <motion.div
              className="text-center bg-gradient-to-b from-white to-gray-50 rounded-xl p-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#F5A623] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">10+ Years Experience</h3>
              <p className="text-gray-200 leading-relaxed">Proven track record in construction procurement with decades of industry expertise</p>
            </motion.div>
            
            <motion.div
              className="text-center bg-gradient-to-b from-white to-gray-50 rounded-xl p-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#F5A623] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0E2F44' }}>500+ Projects Supplied</h3>
              <p className="text-gray-600 leading-relaxed">Successfully delivered construction materials to projects across India</p>
            </motion.div>
            
            <motion.div
              className="text-center bg-gradient-to-b from-white to-gray-50 rounded-xl p-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#F5A623] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0E2F44' }}>Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">Expanding networks nationwide with strategic partnerships and distribution channels</p>
            </motion.div>
          </div>
        </div>

        
        {/* Main Content */}
        <div className="container mx-auto px-4" style={{ padding: '60px 20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '40px' }}>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E2F44' }}>What Is IndoSup?</h2>
              <p className="text-gray-600 mb-6" style={{ lineHeight: '1.6' }}>
                IndoSup is revolutionizing India's construction procurement landscape through innovative digital solutions. 
                We connect builders, contractors, and suppliers through a seamless platform that ensures quality, 
                transparency, and efficiency in every transaction.
              </p>
              <p className="text-gray-600 mb-6" style={{ lineHeight: '1.6' }}>
                Our mission is to transform how construction materials are sourced, procured, and delivered across India. 
                With a focus on technology-driven solutions, we're building the future of construction procurement.
              </p>
            </motion.div>
            
            {/* Image Content - Enhanced Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Main Carousel Image */}
                <div key={currentImageIndex} className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src={carouselImages[currentImageIndex]?.src}
                    alt={carouselImages[currentImageIndex]?.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Label at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {carouselImages[currentImageIndex]?.title}
                    </h3>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                
                {/* Dot Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex ? 'bg-[#F5A623]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      {/* Our Leadership */}
      <section id="leadership" className="py-8 bg-gradient-to-br from-[#fbf5e8] to-white">
        <div className="container mx-auto px-4" style={{ padding: '10px 20px 60px 20px' }}>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E2F44' }}>
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#F5A623] mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F5A623]/10 to-[#0E2F44]/10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  

                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F5A623] transition-colors duration-300" style={{ color: '#0E2F44' }}>
                    {leader.name}
                  </h3>
                  <p className="text-[#F5A623] font-semibold text-base mb-4">
                    {leader.position}
                  </p>
                  
                  {/* Enhanced role description */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm" style={{ lineHeight: '1.6' }}>
                      {index === 0 && "Visionary leader driving innovation in construction procurement technology with over 10 years of industry experience"}
                      {index === 1 && "Operations expert focused on streamlining business processes and ensuring operational excellence across all verticals"}
                      {index === 2 && "Financial strategist ensuring sustainable growth and market expansion through strategic financial planning"}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <motion.div
                    className="flex justify-center space-x-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#0E2F44] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#F5A623] transition-all duration-300 hover:shadow-lg"
                      title="Connect on LinkedIn"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-[#F5A623] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#0E2F44] transition-all duration-300 hover:shadow-lg"
                      title="Send Email"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Card corner decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Our Mission & Vision */}
      <section id="mission-vision" className="py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-16 right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          {/* Section Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent font-inter">
              Our Mission & Vision
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              id="mission"
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-primary/20 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Card header */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#082338] rounded-full flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-accent">Mission</h3>
                </div>
                
                {/* Mission content */}
                <div className="relative">
                  <motion.div
                    className="text-primary text-3xl absolute -top-1 -left-1 opacity-30"
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    "
                  </motion.div>
                  <p className="text-base md:text-lg text-accent leading-relaxed font-medium pl-5">
                    Empowering the construction ecosystem by reducing complexity in procurement, 
                    enabling transparency, and ensuring timely, high-quality delivery.
                  </p>
                  <motion.div
                    className="text-primary text-3xl absolute -bottom-4 -right-1 opacity-30"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    "
                  </motion.div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 bg-primary/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              id="vision"
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="bg-gradient-to-br from-accent to-accent/90 rounded-2xl p-6 md:p-8 shadow-xl h-full relative overflow-hidden text-white"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Card header */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Vision</h3>
                </div>
                
                {/* Vision content */}
                <div className="relative">
                  <motion.div
                    className="text-primary text-3xl absolute -top-1 -left-1 opacity-60"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    "
                  </motion.div>
                  <p className="text-base md:text-lg text-white leading-relaxed font-medium pl-5">
                    To streamline construction sourcing and procurement using smart, cost-effective, 
                    and scalable technology solutions to build efficient and sustainable infrastructure.
                  </p>
                  <motion.div
                    className="text-primary text-3xl absolute -bottom-4 -right-1 opacity-60"
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    "
                  </motion.div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative elements */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex space-x-3">
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strength & Values */}
      <section id="values" className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4 font-inter">
              Strength & Values
            </h2>
            <div className="w-20 md:w-28 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-6 flex items-center">
                <Target className="w-6 h-6 text-primary mr-3" />
                Strengths
              </h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 6 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:bg-[#092137] shadow-md group-hover:shadow-lg">
                      {strength.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-accent mb-1 text-base group-hover:text-primary transition-colors duration-300">
                        {strength.title}
                      </h4>
                      <p className="text-neutral-base group-hover:text-gray-800 transition-colors duration-300 leading-relaxed text-sm">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-6 flex items-center">
                <Heart className="w-6 h-6 text-primary mr-3" />
                Our Values
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 6 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 group-hover:bg-[#092137] shadow-md group-hover:shadow-lg">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-accent mb-1 text-base group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-neutral-base group-hover:text-gray-800 transition-colors duration-300 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#0E2F44] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-[#F5A623] z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

    </div>
  );
}