import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Building, Lightbulb, Zap, Shield, TrendingUp, Clock, CheckCircle, Star, Sparkles, ArrowRight, Globe, Truck, MapPin, Phone, Linkedin } from 'lucide-react';
import indoSupImage from '@assets/image_1752140673594.png';
import ashmitImage from '@assets/image_1752140873464.png';
import akshajImage from '@assets/image_1752140881350.png';
import shivankImage from '@assets/image_1752140885431.png';

export default function About() {
  // Leadership team data
  const leadership = [
    {
      name: "Ashmit Sharma",
      position: "Founder & CEO",
      image: ashmitImage,
      linkedin: "https://www.linkedin.com/in/ashmit-sharma-49bbb0127/"
    },
    {
      name: "Akshaj Sharma",
      position: "Co-founder & COO",
      image: akshajImage,
      linkedin: "https://www.linkedin.com/in/akshaj-sharma-4936b373/"
    },
    {
      name: "Shivank Saxena",
      position: "Co-founder & CFO",
      image: shivankImage,
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
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparency",
      description: "Open communication and clear processes"
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
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4 font-inter">
              Our Leadership
            </h2>
            <div className="w-18 md:w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7"
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
                whileHover={{ y: -9, scale: 1.02 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold text-base mb-4">
                    {leader.position}
                  </p>
                  
                  {/* Clean role description */}
                  <div className="mt-3 pt-3 border-t border-gray-100 mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {index === 0 && "Visionary leader driving innovation in construction procurement technology"}
                      {index === 1 && "Operations expert focused on streamlining business processes and efficiency"}
                      {index === 2 && "Financial strategist ensuring sustainable growth and market expansion"}
                    </p>
                  </div>

                  {/* LinkedIn Button - Always visible at bottom */}
                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0077B5] text-white px-5 py-2 rounded-full font-medium text-sm shadow-lg hover:bg-[#005885] transition-all duration-300 flex items-center space-x-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent font-inter">
                Our Vision
              </h2>
            </div>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-12"></div>
            
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-accent leading-relaxed relative">
                  <span className="text-primary text-6xl absolute -top-4 -left-4 opacity-20">"</span>
                  To streamline construction sourcing and procurement using smart, cost-effective, 
                  and scalable technology solutions to build efficient and sustainable infrastructure.
                  <span className="text-primary text-6xl absolute -bottom-8 -right-4 opacity-20">"</span>
                </p>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8 font-inter">
              Our Mission
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-8 border-primary">
              <p className="text-lg md:text-xl text-accent leading-relaxed font-medium">
                "Empowering the construction ecosystem by reducing complexity in procurement, 
                enabling transparency, and ensuring timely, high-quality delivery."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strength & Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Strength & Values
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8 flex items-center">
                <Target className="w-8 h-8 text-primary mr-3" />
                Strengths
              </h3>
              <div className="space-y-6">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 8 }}
                  >
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-125 transition-all duration-300 group-hover:bg-[#092137] shadow-lg group-hover:shadow-xl">
                      {strength.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-accent mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                        {strength.title}
                      </h4>
                      <p className="text-neutral-base group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
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
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8 flex items-center">
                <Heart className="w-8 h-8 text-primary mr-3" />
                Our Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 8 }}
                  >
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-125 transition-all duration-300 group-hover:bg-[#092137] shadow-lg group-hover:shadow-xl">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-accent mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-neutral-base group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
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