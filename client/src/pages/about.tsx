import { motion } from 'framer-motion';
import { Target, Eye, Heart, Calendar, Users, Award, Building, Lightbulb } from 'lucide-react';

export default function About() {
  // Mission, Vision, Values data
  const mvvData = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To revolutionize construction procurement across India by delivering innovative, transparent, and sustainable sourcing solutions that empower builders and transform communities.",
      color: "bg-primary"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To become India's most trusted construction procurement partner, setting new standards for quality, efficiency, and environmental responsibility in the infrastructure sector.",
      color: "bg-accent"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Integrity in every transaction, innovation in every solution, sustainability in every decision, and excellence in every delivery. Building trust through transparency and results.",
      color: "bg-neutral-dark"
    }
  ];

  // Timeline milestones
  const timeline = [
    {
      year: 2020,
      title: "Foundation & Vision",
      description: "IndoSup founded with a vision to digitize construction procurement across India",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: 2021,
      title: "Digital Platform Launch",
      description: "Launched comprehensive digital procurement platform serving 5 major cities",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: 2022,
      title: "Rapid Expansion",
      description: "Expanded to 15 states, onboarded 200+ vendors, completed 1000+ projects",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: 2023,
      title: "Industry Recognition",
      description: "Received 'Best Construction Tech Innovation' award, reached 25+ states coverage",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: 2024,
      title: "Sustainability Focus",
      description: "Launched green procurement initiative, achieved carbon-neutral supply chain",
      icon: <Heart className="w-6 h-6" />
    },
    {
      year: 2025,
      title: "Market Leadership",
      description: "Established as India's leading construction procurement platform with 400+ vendors",
      icon: <Target className="w-6 h-6" />
    }
  ];

  // Leadership team data
  const leadership = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      experience: "15+ years in construction industry",
      bio: "Visionary leader with extensive experience in construction and technology. Previously led digital transformation at major infrastructure companies. Passionate about sustainable construction practices.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: ["IIT Delhi Alumni", "Construction Tech Pioneer", "Sustainability Advocate"]
    },
    {
      name: "Priya Patel",
      position: "Chief Technology Officer",
      experience: "12+ years in tech leadership",
      bio: "Technology innovator specializing in supply chain digitization. Expert in AI/ML applications for procurement optimization. Drives IndoSup's technological advancement and platform development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: ["Tech Industry Veteran", "AI/ML Expert", "Digital Innovation Leader"]
    },
    {
      name: "Amit Kumar",
      position: "Chief Operations Officer",
      experience: "18+ years in operations",
      bio: "Operations excellence expert with deep understanding of Indian construction markets. Oversees pan-India logistics, vendor relationships, and quality assurance across all IndoSup operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      achievements: ["Operations Strategist", "Market Expansion Expert", "Quality Champion"]
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
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="bg-accent text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About IndoSup
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming India's construction industry through innovative procurement solutions, 
            sustainable practices, and unwavering commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values - Light */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Our Foundation
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
            {mvvData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline - Dark */}
      <section className="bg-neutral-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-inter">
              Our Journey
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              From a visionary startup to India's leading construction procurement platform
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-1 bg-primary rounded-full transform -translate-y-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                  />

                  {/* Timeline Card */}
                  <div className={`bg-white text-accent rounded-xl p-6 ${index % 2 === 0 ? 'mb-16' : 'mt-16'}`}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                        {item.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-base text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Light */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Leadership Team
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
            <p className="text-neutral-base mt-6 max-w-2xl mx-auto">
              Meet the visionary leaders driving IndoSup's mission to transform construction procurement
            </p>
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
                whileHover={{ y: -10 }}
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {leader.position}
                  </p>
                  <p className="text-sm text-neutral-base mb-4">
                    {leader.experience}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1 mb-4">
                    {leader.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs bg-primary/10 text-accent px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Bio - Shows on hover */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-neutral-base leading-relaxed pt-4 border-t border-gray-200">
                      {leader.bio}
                    </p>
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