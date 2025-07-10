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
    <section className="py-6 md:py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 font-inter">
            Why Choose IndoSup?
          </h2>
          <p className="text-neutral-base text-sm md:text-base max-w-xl mx-auto mb-4">
            We simplify construction procurement with cutting-edge technology and trusted partnerships
          </p>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer border border-gray-100 hover:border-primary/30 mt-[9px] mb-[9px]"
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300 mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300 font-inter">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-base text-sm leading-relaxed group-hover:text-accent/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-10 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}