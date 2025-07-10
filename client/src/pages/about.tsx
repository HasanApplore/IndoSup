import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Building, Lightbulb, Zap, Shield, TrendingUp, Clock, CheckCircle, Star, Sparkles, ArrowRight, Globe, Truck, MapPin, Phone, Linkedin } from 'lucide-react';
import indoSupImage from '@assets/image_1752140673594.png';

export default function About() {
  // Leadership team data
  const leadership = [
    {
      name: "Ashmit Sharma",
      position: "Founder & CEO",
      initials: "AS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/ashmit-sharma-49bbb0127/"
    },
    {
      name: "Akshaj Sharma",
      position: "Co-founder & COO",
      initials: "AS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/akshaj-sharma-4936b373/"
    },
    {
      name: "Shivank Saxena",
      position: "Co-founder & CFO",
      initials: "SS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/shivank-saxena-19431aab/"
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
      icon: <Shield className="w-6 h-6" />,
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
      icon: <Heart className="w-6 h-6" />,
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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* What Is IndoSup Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-8 font-inter">
              What Is IndoSup?
            </h1>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-accent leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Indosup is a convenient source for easy, hassle-free purchasing of construction material.
              </motion.h2>
              <motion.p 
                className="text-lg text-neutral-base leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Indosup is a comprehensive Source-to-Deliver company dedicated to the Construction industry. 
                Our AI-enabled Sourcing Platform connects 400+ retailers, 350+ distributors, 300+ brands, 
                and 50+ stockists, simplifying procurement from sourcing to delivery.
              </motion.p>
              
              {/* Statistics Cards */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full mx-auto mb-2 group-hover:bg-accent transition-colors duration-300">
                      <div className="text-white group-hover:text-primary transition-colors duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-accent text-center">{stat.number}</div>
                    <div className="text-sm text-neutral-base text-center">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-full h-64 bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <img 
                  src={indoSupImage} 
                  alt="IndoSup Construction Platform" 
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 right-4 w-6 h-6 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-[#fbf5e8] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4 font-inter">
              Our Leadership
            </h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/30 relative"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating decorations */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-accent mb-1 group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {leader.position}
                  </p>
                  
                  {/* Clean role description */}
                  <div className="mb-4">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {index === 0 && "Visionary leader driving innovation in construction procurement technology"}
                      {index === 1 && "Operations expert focused on streamlining business processes and efficiency"}
                      {index === 2 && "Financial strategist ensuring sustainable growth and market expansion"}
                    </p>
                  </div>

                  {/* LinkedIn Icon - Always visible at bottom */}
                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.15 }}
                  >
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#005885] transition-all duration-300 hover:shadow-lg"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-10 md:py-14 relative overflow-hidden">
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
      <section className="py-10 md:py-14">
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


    </div>
  );
}