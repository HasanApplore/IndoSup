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
    <section className="section-padding bg-secondary">
      <div className="container">
        {/* Section Heading - Enhanced with consistent typography */}
        <motion.div
          className="text-center section-margin"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent mb-6">
            Why Choose IndoSup?
          </h2>
          <p className="subtitle text-neutral-base max-w-4xl mx-auto mb-8">
            We simplify construction procurement with cutting-edge technology and trusted partnerships
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Feature Cards - Enhanced with 12-column grid system */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group card-base card-hover p-6 md:p-8 text-center cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300 mb-6"
                variants={iconVariants}
                whileHover="hover"
              >
                <feature.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300 font-inter">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-base text-base leading-relaxed group-hover:text-accent/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="w-0 h-0.5 bg-primary mx-auto mt-5 group-hover:w-12 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}