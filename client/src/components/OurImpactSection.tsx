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
    <span ref={ref} className="text-[#0E2F44] font-bold text-3xl md:text-4xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Enhanced Framer Motion Background Component
const AdvancedMotionBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Dynamic Particle System */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(255, 255, 0, ${0.4 + Math.random() * 0.5})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Morphing Energy Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              background: `radial-gradient(circle, rgba(255, 255, 0, 0.3) 0%, transparent 70%)`,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [0.8, 2, 0.8],
              opacity: [0.1, 0.6, 0.1],
              rotate: [0, 180, 360],
              borderRadius: ['50%', '30%', '50%']
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Interactive Lightning Lines */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: '1px',
              height: `${30 + Math.random() * 80}px`,
              background: `linear-gradient(to bottom, transparent, rgba(255, 255, 0, 0.5), transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformOrigin: 'center',
            }}
            animate={{
              rotate: [0, 360],
              scaleY: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.7, 0.1],
              x: mousePosition.x * 0.1,
              y: mousePosition.y * 0.1
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Sweeping Wave Effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"
            style={{
              top: `${15 + i * 20}%`,
              left: '-100px',
              right: '-100px',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Pulsing Energy Centers */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`energy-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + Math.random() * 15}px`,
              height: `${10 + Math.random() * 15}px`,
              background: `radial-gradient(circle, rgba(255, 255, 0, 0.9) 0%, rgba(255, 255, 0, 0.3) 50%, transparent 100%)`,
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 2) * 50}%`,
              boxShadow: '0 0 20px rgba(255, 255, 0, 0.4)',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
              boxShadow: [
                '0 0 20px rgba(255, 255, 0, 0.4)',
                '0 0 40px rgba(255, 255, 0, 0.7)',
                '0 0 20px rgba(255, 255, 0, 0.4)'
              ]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-yellow-300/60"
            style={{
              width: '8px',
              height: '8px',
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 0.8, 0.3],
              borderRadius: ['0%', '50%', '0%']
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6
            }}
          />
        ))}
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, rgba(255, 255, 0, 0.08) 0%, transparent 70%)`,
              left: `${i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
              filter: 'blur(2px)',
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.02, 0.1, 0.02],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>
    </div>
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
      {/* Advanced Motion Background */}
      <AdvancedMotionBackground />
      
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
              className="bg-white/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:shadow-white/30 p-6 text-center transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-4">
                <AnimatedCounter 
                  target={item.number} 
                  suffix={item.suffix}
                  duration={2.5}
                />
              </div>
              <h3 className="text-[#0E2F44] font-semibold text-lg mb-2 group-hover:text-[#0F172A] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#555555] text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default OurImpactSection;