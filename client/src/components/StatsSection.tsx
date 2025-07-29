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

  return <span ref={ref} className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">0</span>;
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
    <section className="relative py-6 md:py-8 bg-neutral-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              {/* Animated Counter */}
              <motion.div
                className="mb-3"
                whileHover={{ scale: 1.05 }}
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
                className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                {stat.label}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              >
                {stat.description}
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                className="w-10 h-0.5 bg-primary mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl"
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
      </div>
    </section>
  );
}