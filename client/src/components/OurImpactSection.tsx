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

// Clean Animated Network Background Component
const NetworkBackground = () => {
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [connections, setConnections] = useState<Array<{ from: number; to: number }>>([]);

  useEffect(() => {
    // Generate evenly distributed nodes for cleaner look
    const nodeCount = 15;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: 10 + (i % 5) * 20 + Math.random() * 10,
      y: 20 + Math.floor(i / 5) * 25 + Math.random() * 10,
    }));
    setNodes(newNodes);

    // Generate selective connections for cleaner pattern
    const newConnections: Array<{ from: number; to: number }> = [];
    newNodes.forEach((node, i) => {
      newNodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 25 && Math.random() > 0.85) {
            newConnections.push({ from: i, to: j });
          }
        }
      });
    });
    setConnections(newConnections);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Network Pattern */}
      <svg className="w-full h-full opacity-8" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Clean animated connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.08"
              strokeDasharray="2 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Refined animated nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="0.2"
            fill="rgba(255, 217, 90, 0.4)"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.05"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 0.8],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Clean gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
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
      {/* Animated Network Background */}
      <NetworkBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E3A8A] via-transparent to-[#FFD95A]"></div>
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
              className="bg-white/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:shadow-white/30 p-6 text-center transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-4">
                <AnimatedCounter 
                  target={item.number} 
                  suffix={item.suffix}
                  duration={2.5}
                />
              </div>
              <h3 className="text-[#1E293B] font-semibold text-lg mb-2 group-hover:text-[#0F172A] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E3A8A] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FFD95A] rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  );
};

export default OurImpactSection;