import { motion } from 'framer-motion';
import { Target, Shield, Users, Zap, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';

export default function OurStrengthSection() {
  const strengths = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "End-to-End Solutions",
      description: "Complete construction procurement management from sourcing to delivery, ensuring seamless project execution."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Industry professionals with deep knowledge of construction materials and procurement best practices."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technology-Driven",
      description: "Advanced digital platforms for real-time tracking, inventory management, and streamlined operations."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring all materials meet industry standards and specifications."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Reliable supply chain management with on-time delivery to keep your projects on schedule."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Successfully managed 10,000+ deliveries across 25+ states with 400+ trusted vendor network."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Strategic procurement planning and bulk purchasing power delivering significant cost savings."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Dedicated support teams ensuring personalized service and long-term partnership success."
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
                scale: 1.08, 
                y: -12,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  {strength.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-primary transition-colors duration-300">
                  {strength.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-all duration-300 text-sm">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}