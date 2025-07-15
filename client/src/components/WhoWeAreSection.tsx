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
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-4 font-inter">
            Why Choose IndoSup?
          </h2>
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFC600] rounded-full opacity-60"></div>
            <p className="text-[#1F2937] text-lg md:text-xl max-w-2xl mx-auto mb-6 relative z-10">
              We simplify construction procurement with cutting-edge technology and trusted partnerships
            </p>
          </div>
          <div className="w-24 h-1 bg-[#FFC600] mx-auto mt-4"></div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center cursor-pointer border border-[#E5E7EB] hover:border-[#FFC600]/50 hover:bg-white/95 hover:scale-105 hover:rotate-1"
              variants={cardVariants}
              whileHover={{
                y: -16,
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#FFC600]/10 group-hover:bg-[#FFC600] transition-all duration-400 mb-6 group-hover:shadow-lg group-hover:shadow-[#FFC600]/30"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon className="w-10 h-10 text-[#FFC600] group-hover:text-[#031D33] transition-colors duration-400" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1F2937] mb-4 group-hover:text-[#031D33] transition-colors duration-400 font-inter">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#1F2937]/70 text-sm leading-relaxed group-hover:text-[#1F2937] transition-colors duration-400">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="w-0 h-1 bg-[#FFC600] mx-auto mt-6 group-hover:w-16 transition-all duration-500 rounded-full"
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFC600]/0 via-[#FFC600]/5 to-[#FFC600]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}