import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';

export default function OurStrengthSection() {
  const strengths = [
    {
      icon: <Target className="w-6 h-6" />,
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

  return (
    <section className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-6">
            Our Strength
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built on years of expertise, innovation, and unwavering commitment to excellence in construction procurement
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="group bg-white/95 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-white/30 transition-all duration-300 p-6 text-center cursor-pointer border border-white/20 hover:border-primary hover:bg-white/95 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Content Container */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary transition-all duration-300 mb-4 relative"
                  variants={{
                    hover: {
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  whileHover="hover"
                >
                  <div className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300 relative z-10">
                    {strength.icon}
                  </div>
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-primary transition-all duration-300">
                  {strength.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-all duration-300 text-sm">
                  {strength.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-12 transition-all duration-300 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}