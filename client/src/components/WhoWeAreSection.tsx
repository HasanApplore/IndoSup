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
    <section className="py-12 px-4 md:py-20 md:px-6 mb-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4 font-poppins">
            Why Choose IndoSup?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed">
            We simplify construction procurement with cutting-edge technology and trusted partnerships
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/90 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer border border-gray-200 hover:border-primary hover:bg-white/95 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Content Container */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary transition-all duration-300 mb-4 relative"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300 relative z-10" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-primary transition-all duration-300 font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-all duration-300 font-poppins">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-12 transition-all duration-300 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}