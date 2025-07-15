import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className="text-[#FFC600] font-bold text-4xl md:text-5xl lg:text-6xl">0</span>;
}

export default function StatsSection() {
  const stats = [
    {
      value: 400,
      suffix: '+',
      label: 'Vendors',
      description: 'Trusted suppliers across the industry'
    },
    {
      value: 350,
      suffix: '+',
      label: 'Distributors',
      description: 'Strategic partnerships nationwide'
    },
    {
      value: 25,
      suffix: '+',
      label: 'States Served',
      description: 'Coverage across major markets'
    },
    {
      value: 10,
      suffix: 'K+',
      label: 'Deliveries Completed',
      description: 'Successful project completions'
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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

  return (
    <section className="relative py-16 md:py-20 bg-[#031D33] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-inter">
            Our Impact
          </h2>
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFC600] rounded-full opacity-60"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-6 relative z-10">
              Numbers that showcase our commitment to excellence and growth
            </p>
          </div>
          <div className="w-24 h-1 bg-[#FFC600] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FFC600]/50 transition-all duration-500 hover:bg-white/10 cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              {/* Animated Counter */}
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2 + index * 0.3}
                />
              </motion.div>

              {/* Label */}
              <motion.h3
                className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FFC600] transition-colors duration-300 font-inter"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                {stat.label}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              >
                {stat.description}
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                className="w-0 h-1 bg-[#FFC600] mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFC600]/0 via-[#FFC600]/5 to-[#FFC600]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC600]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFC600]/3 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
    </section>
  );
}