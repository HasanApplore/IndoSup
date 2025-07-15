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

  return <span ref={ref} className="text-[#FFD95A] font-bold text-4xl md:text-5xl lg:text-6xl">0</span>;
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
    <section className="relative py-20 px-6 md:py-20 md:px-6 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-['Poppins']">
            Our Impact
          </h2>
          {/* Yellow underline */}
          <div className="w-20 h-1 bg-[#FFD95A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and growth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center rounded-lg border border-[#1E3A8A] p-6 shadow-inner"
              variants={itemVariants}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Animated Counter */}
              <div className="mb-3">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2 + index * 0.3}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-2 font-['Poppins']">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}