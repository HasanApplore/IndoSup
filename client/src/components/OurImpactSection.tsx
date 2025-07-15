import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ target, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-[#0F172A] font-bold text-3xl md:text-4xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const OurImpactSection = () => {
  const impactData = [
    {
      number: 500,
      suffix: '+',
      title: 'Vendors',
      description: 'Trusted partner network'
    },
    {
      number: 450,
      suffix: '+',
      title: 'Distributors',
      description: 'Nationwide coverage'
    },
    {
      number: 30,
      suffix: '+',
      title: 'States Served',
      description: 'Pan-India presence'
    },
    {
      number: 15000,
      suffix: '+',
      title: 'Deliveries',
      description: 'Successfully completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 px-4 md:py-20 md:px-6 bg-[#0F172A] relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A] via-transparent to-[#FFD95A]"></div>
        
        {/* Floating 3D Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/20 rounded-lg transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-purple-500/20 transform rotate-12 animate-spin"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-cyan-400/20 rounded-lg transform -rotate-12 animate-pulse"></div>
        
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-white/10 rounded-sm transform hover:scale-110 transition-transform duration-1000"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Our Impact
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-poppins">
            Transforming construction procurement across India with measurable results
          </p>
        </motion.div>

        {/* Impact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:shadow-white/30 p-6 text-center transition-all duration-500 group hover:scale-105 transform-gpu perspective-1000 hover:rotate-y-12 hover:rotate-x-6 relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              whileHover={{
                rotateY: 12,
                rotateX: 6,
                scale: 1.08,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              {/* 3D Card Inner Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="relative z-10 transform group-hover:translateZ-10">
                <div className="mb-4 transform group-hover:translateZ-20">
                  <AnimatedCounter 
                    target={item.number} 
                    suffix={item.suffix}
                    duration={2.5}
                  />
                </div>
                <h3 className="text-[#1E293B] font-semibold text-lg mb-2 group-hover:text-[#0F172A] transition-colors duration-300 transform group-hover:translateZ-15">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm transform group-hover:translateZ-10">
                  {item.description}
                </p>
              </div>
              
              {/* 3D Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translateZ-30 transition-all duration-300 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translateZ-25 transition-all duration-300 animate-bounce"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced 3D Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E3A8A] rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FFD95A] rounded-full opacity-10 blur-xl animate-bounce"></div>
        <div className="absolute top-0 left-0 w-16 h-16 bg-green-400/20 rounded-full opacity-20 blur-lg animate-spin"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-pink-400/20 rounded-full opacity-20 blur-lg animate-ping"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;