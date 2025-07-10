import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Users, Shield, Award } from 'lucide-react';

export default function InitiativesSection() {
  // Company initiatives data
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Green Construction Initiative",
      summary: "Leading India's transition to sustainable construction with eco-friendly materials and carbon-neutral supply chains across all major projects.",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Sustainability"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skill Development Program",
      summary: "Empowering local communities through construction skills training, benefiting over 10,000 workers across rural and urban India.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Social Impact"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance Excellence",
      summary: "Implementing AI-powered quality control systems and rigorous testing protocols to ensure superior material standards.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Innovation"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Digital Transformation",
      summary: "Revolutionizing construction procurement through blockchain technology, IoT integration, and real-time supply chain transparency.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
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
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 md:mb-4 font-inter">
            Our Key Initiatives
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-sm md:text-base text-neutral-base mt-3 md:mt-4 max-w-2xl mx-auto">
            Driving positive change in the construction industry through innovation, sustainability, and community empowerment
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                y: -8
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Card Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white">
                    {initiative.category}
                  </span>
                </div>

                {/* Icon Overlay */}
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <div className="w-6 h-6">{initiative.icon}</div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                  {initiative.title}
                </h3>
                
                <p className="text-neutral-base text-sm leading-relaxed mb-4">
                  {initiative.summary}
                </p>

                {/* Read More Button */}
                <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                  <span className="mr-2">Read More</span>
                  <motion.div
                    animate={{
                      x: [0, 4, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Border Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-primary hover:text-accent transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Explore All Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <motion.div
              className="w-64 h-64 border-2 border-primary rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}