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
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A] via-transparent to-[#FFD95A]"></div>
        
        {/* Floating 3D Geometric Shapes with Complex Animations */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg transform rotate-45 animate-pulse shadow-lg shadow-blue-500/20" style={{
          animation: 'float 6s ease-in-out infinite, rotate 12s linear infinite'
        }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full animate-bounce shadow-lg shadow-yellow-400/20" style={{
          animation: 'bounce 2s infinite, pulse 3s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 transform rotate-12 shadow-lg shadow-purple-500/20" style={{
          animation: 'spin 8s linear infinite, scale 4s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg transform -rotate-12 shadow-lg shadow-cyan-400/20" style={{
          animation: 'pulse 3s ease-in-out infinite, wiggle 5s ease-in-out infinite'
        }}></div>
        
        {/* Additional Dynamic Shapes */}
        <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full shadow-lg shadow-green-400/20" style={{
          animation: 'float 4s ease-in-out infinite reverse, glow 2s ease-in-out infinite'
        }}></div>
        <div className="absolute top-3/4 right-1/6 w-14 h-14 bg-gradient-to-r from-rose-400/40 to-red-400/40 rounded-lg transform rotate-45 shadow-lg shadow-rose-400/20" style={{
          animation: 'rotate 10s linear infinite reverse, breathe 3s ease-in-out infinite'
        }}></div>
        
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" style={{
            animation: 'wave 4s ease-in-out infinite'
          }}></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" style={{
            animation: 'wave 4s ease-in-out infinite reverse'
          }}></div>
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
              className="bg-white/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 p-6 text-center transition-all duration-700 group hover:scale-105 transform-gpu perspective-1000 relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
              }}
              whileHover={{
                rotateY: 15,
                rotateX: 8,
                scale: 1.12,
                z: 60,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              {/* Enhanced 3D Card Inner Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right rounded-b-xl"></div>
              
              {/* Animated Corner Accents */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{
                animation: 'bounce 1.5s ease-in-out infinite'
              }}></div>
              
              {/* 3D Layered Content with Enhanced Depth */}
              <div className="relative z-10 transform group-hover:translateZ-20 transition-transform duration-500">
                <div className="mb-4 transform group-hover:translateZ-30 transition-transform duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <AnimatedCounter 
                      target={item.number} 
                      suffix={item.suffix}
                      duration={2.5}
                    />
                  </div>
                </div>
                <h3 className="text-[#1E293B] font-semibold text-lg mb-2 group-hover:text-[#0F172A] transition-all duration-500 transform group-hover:translateZ-25 group-hover:scale-105">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm transform group-hover:translateZ-20 group-hover:text-gray-700 transition-all duration-500">
                  {item.description}
                </p>
              </div>
              
              {/* Enhanced 3D Floating Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translateZ-40 transition-all duration-500 shadow-lg shadow-blue-400/30" style={{
                animation: 'float 3s ease-in-out infinite'
              }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translateZ-35 transition-all duration-500 shadow-lg shadow-purple-400/30" style={{
                animation: 'bounce 2s ease-in-out infinite'
              }}></div>
              <div className="absolute top-1/2 -right-2 w-3 h-3 bg-gradient-to-r from-yellow-400/40 to-orange-400/40 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translateZ-30 transition-all duration-500 shadow-lg shadow-yellow-400/30" style={{
                animation: 'pulse 1.5s ease-in-out infinite'
              }}></div>
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl" style={{
                  animation: 'ripple 0.8s ease-out'
                }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced 3D Decorative Elements with Complex Animations */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-[#1E3A8A] to-blue-600 rounded-full opacity-15 blur-xl shadow-lg shadow-blue-500/20" style={{
          animation: 'pulse 4s ease-in-out infinite, float 8s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-[#FFD95A] to-yellow-500 rounded-full opacity-15 blur-xl shadow-lg shadow-yellow-400/20" style={{
          animation: 'bounce 3s ease-in-out infinite, glow 2s ease-in-out infinite'
        }}></div>
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-25 blur-lg shadow-lg shadow-green-400/20" style={{
          animation: 'spin 12s linear infinite, breathe 4s ease-in-out infinite'
        }}></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-25 blur-lg shadow-lg shadow-pink-400/20" style={{
          animation: 'ping 3s ease-in-out infinite, wiggle 6s ease-in-out infinite'
        }}></div>
        
        {/* Enhanced Floating Particles System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/30" style={{
            animation: 'ping 2s ease-in-out infinite, float 5s ease-in-out infinite'
          }}></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg shadow-yellow-400/30" style={{
            animation: 'pulse 3s ease-in-out infinite, drift 7s ease-in-out infinite'
          }}></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/30" style={{
            animation: 'bounce 2s ease-in-out infinite, spiral 10s linear infinite'
          }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/30" style={{
            animation: 'ping 2.5s ease-in-out infinite, wave 6s ease-in-out infinite'
          }}></div>
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full opacity-60" style={{
            animation: 'twinkle 1.5s ease-in-out infinite'
          }}></div>
          <div className="absolute bottom-1/6 left-1/5 w-1 h-1 bg-white rounded-full opacity-60" style={{
            animation: 'twinkle 2s ease-in-out infinite reverse'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;