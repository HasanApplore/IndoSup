import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, Award, Clock, CheckCircle, TrendingUp, Star, Truck, Settings, HeartHandshake } from 'lucide-react';

export default function OurStrengthSection() {
  const strengths = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Quality Assurance",
      description: "Rigorous quality control ensuring superior construction materials"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team & Support",
      description: "Dedicated professionals providing 24/7 customer assistance"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Leadership",
      description: "Industry-leading solutions with proven track record"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Delivery",
      description: "On-time delivery with accurate project specifications"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Recognition",
      description: "Award-winning services recognized across the industry"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Processing",
      description: "Fast procurement cycles with streamlined operations"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Partnership Approach",
      description: "Building long-term relationships with clients and suppliers"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Process Innovation",
      description: "Cutting-edge technology optimizing procurement workflows"
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
                  {strength.icon && (
                    <div className="text-primary group-hover:text-white transition-all duration-300 relative z-10">
                      {strength.icon}
                    </div>
                  )}
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