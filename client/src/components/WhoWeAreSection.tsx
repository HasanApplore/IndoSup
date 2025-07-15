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
    <section className="py-20 px-6 md:py-20 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4 font-['Poppins']">
            Why Choose IndoSup?
          </h2>
          {/* Yellow underline */}
          <div className="w-20 h-1 bg-[#FFD95A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We simplify construction procurement with cutting-edge technology and trusted partnerships
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF3BF] mb-4">
                <feature.icon className="w-6 h-6 text-[#FFD95A]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1E293B] mb-3 font-['Poppins']">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}