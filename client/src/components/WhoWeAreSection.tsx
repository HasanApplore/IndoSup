import { motion } from 'framer-motion';
import { ShoppingCart, FileCheck, Shield, Truck } from 'lucide-react';

export default function WhoWeAreSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Sourcing",
      description: "We connect you with trusted suppliers and manufacturers across the construction industry."
    },
    {
      icon: FileCheck,
      title: "Procurement",
      description: "Streamlined purchasing processes that save time and reduce costs for your projects."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and validation ensures every material meets the highest standards."
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "On-time delivery coordination that keeps your construction timeline on track."
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 font-inter">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
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
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 p-8 text-center hover:bg-primary/5 cursor-pointer border border-transparent hover:border-primary/20"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6 relative overflow-hidden"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                />
                <feature.icon className="w-9 h-9 text-accent group-hover:text-primary transition-colors duration-300 relative z-10" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300 font-inter">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-base group-hover:text-accent/80 transition-colors duration-300 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="w-0 h-0.5 bg-primary mx-auto mt-6 group-hover:w-12 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}