import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Building, Lightbulb, Zap, Shield, TrendingUp, Clock, CheckCircle, Star } from 'lucide-react';
import indoSupImage from '@assets/image_1752140673594.png';

export default function About() {
  // Leadership team data
  const leadership = [
    {
      name: "Ashmit Sharma",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Akshaj Sharma",
      position: "Co-founder & COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Shivank Saxena",
      position: "Co-founder & CFO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
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
              <h2 className="text-2xl md:text-3xl font-bold text-accent leading-tight">
                Indosup is a convenient source for easy, hassle-free purchasing of construction material.
              </h2>
              <p className="text-lg text-neutral-base leading-relaxed">
                Indosup is a comprehensive Source-to-Deliver company dedicated to the Construction industry. 
                Our AI-enabled Sourcing Platform connects 400+ retailers, 350+ distributors, 300+ brands, 
                and 50+ stockists, simplifying procurement from sourcing to delivery.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={indoSupImage} 
                  alt="IndoSup Construction Platform" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Our Leadership
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {leader.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8 font-inter">
              Our Vision
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-accent max-w-5xl mx-auto leading-relaxed">
              "To streamline construction sourcing and procurement using smart, cost-effective, 
              and scalable technology solutions to build efficient and sustainable infrastructure."
            </p>
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
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1">
                        {strength.title}
                      </h4>
                      <p className="text-neutral-base text-sm">
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
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1">
                        {value.title}
                      </h4>
                      <p className="text-neutral-base text-sm">
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