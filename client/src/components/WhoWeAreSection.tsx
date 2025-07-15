import { motion } from 'framer-motion';
import { Building2, Zap, Award, Clock } from 'lucide-react';

export default function WhoWeAreSection() {
  const features = [
    {
      icon: Building2,
      title: "Smart Sourcing",
      description: "Connect with verified suppliers and get the best materials for your construction projects."
    },
    {
      icon: Zap,
      title: "Quick Procurement",
      description: "Lightning-fast purchasing processes that cut costs and save valuable time."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every material is rigorously tested to meet industry standards and exceed expectations."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable delivery schedules that keep your projects moving forward without delays."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 md:py-28 md:px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E293B] mb-8 font-poppins leading-tight">
            Why Choose IndoSup?
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
            We simplify construction procurement with cutting-edge technology and trusted partnerships
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center cursor-pointer border border-gray-100 hover:border-primary/50 mt-[12px] mb-[12px] hover:bg-white/95 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -16,
                scale: 1.08,
                transition: { duration: 0.4 }
              }}
            >
              {/* Glossy Neon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
              
              {/* Content Container */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary transition-all duration-500 mb-6 relative"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-all duration-500 relative z-10" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4 group-hover:text-primary transition-all duration-500 font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-base text-base md:text-lg leading-relaxed group-hover:text-accent/90 transition-all duration-500 font-poppins">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="w-0 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-6 group-hover:w-16 transition-all duration-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}