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
    // Generate structured nodes in a proper grid
    const nodeCount = 20;
    const cols = 5;
    const rows = 4;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: 15 + (i % cols) * 17.5,
      y: 15 + Math.floor(i / cols) * 22.5,
    }));
    setNodes(newNodes);

    // Create meaningful connections - horizontal, vertical, and diagonal
    const newConnections: Array<{ from: number; to: number }> = [];
    
    newNodes.forEach((node, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      
      // Right connection
      if (col < cols - 1) {
        newConnections.push({ from: i, to: i + 1 });
      }
      
      // Down connection
      if (row < rows - 1) {
        newConnections.push({ from: i, to: i + cols });
      }
      
      // Diagonal connections (selective)
      if (col < cols - 1 && row < rows - 1 && Math.random() > 0.5) {
        newConnections.push({ from: i, to: i + cols + 1 });
      }
      
      // Cross connections (selective)
      if (col > 0 && row < rows - 1 && Math.random() > 0.7) {
        newConnections.push({ from: i, to: i + cols - 1 });
      }
    });
    
    setConnections(newConnections);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Network Pattern */}
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Enhanced animated connections with glow effect */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          if (!fromNode || !toNode) return null;
          
          return (
            <g key={index}>
              {/* Outer glow effect */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="rgba(255, 217, 90, 0.8)"
                strokeWidth="0.8"
                filter="blur(3px)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
              {/* Inner glow */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="0.4"
                filter="blur(1px)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.9, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
              {/* Main line */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="rgba(255, 255, 255, 1)"
                strokeWidth="0.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}
        
        {/* Enhanced animated nodes with glow */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Glow effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.6"
              fill="rgba(255, 217, 90, 0.3)"
              filter="blur(2px)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.2, 0.5],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.3"
              fill="rgba(255, 217, 90, 0.8)"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}
      </svg>
      
      {/* 3D Floating Particles with Depth */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {/* Large 3D particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + Math.random() * 6}px`,
              height: `${8 + Math.random() * 6}px`,
              background: `conic-gradient(from ${i * 36}deg, rgba(255, 217, 90, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 217, 90, 0.9) 100%)`,
              boxShadow: `
                0 0 20px rgba(255, 217, 90, 0.8),
                0 0 40px rgba(255, 217, 90, 0.4),
                inset 0 0 10px rgba(255, 255, 255, 0.3)
              `,
              filter: `blur(0.3px)`,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              x: [
                `${5 + i * 10}%`,
                `${25 + i * 8}%`,
                `${45 + i * 6}%`,
                `${5 + i * 10}%`
              ],
              y: [
                `${10 + (i % 4) * 20}%`,
                `${30 + (i % 4) * 15}%`,
                `${50 + (i % 4) * 10}%`,
                `${10 + (i % 4) * 20}%`
              ],
              rotateX: [0, 180, 360],
              rotateY: [0, 360, 720],
              rotateZ: [0, 180, 360],
              scale: [0.8, 1.6, 1.2, 0.8],
              opacity: [0.4, 1, 0.7, 0.4]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Medium 3D particles with morphing */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute"
            style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              background: `radial-gradient(ellipse 70% 30%, rgba(255, 217, 90, 0.8) 0%, rgba(255, 255, 255, 0.4) 60%, transparent 100%)`,
              borderRadius: `${40 + Math.random() * 60}% ${60 + Math.random() * 40}% ${30 + Math.random() * 70}% ${50 + Math.random() * 50}%`,
              boxShadow: `
                0 0 12px rgba(255, 217, 90, 0.6),
                0 0 24px rgba(255, 217, 90, 0.3)
              `,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              x: [
                `${2 + i * 6}%`,
                `${18 + i * 6}%`,
                `${34 + i * 4}%`,
                `${2 + i * 6}%`
              ],
              y: [
                `${8 + (i % 5) * 18}%`,
                `${28 + (i % 5) * 16}%`,
                `${48 + (i % 5) * 12}%`,
                `${8 + (i % 5) * 18}%`
              ],
              rotateX: [0, 120, 240, 360],
              rotateY: [0, 240, 480, 720],
              scaleX: [0.6, 1.4, 1.0, 0.6],
              scaleY: [0.8, 1.2, 1.1, 0.8],
              opacity: [0.3, 0.8, 0.5, 0.3],
              borderRadius: [
                `${40 + Math.random() * 20}% ${60 + Math.random() * 20}% ${30 + Math.random() * 30}% ${50 + Math.random() * 20}%`,
                `${60 + Math.random() * 30}% ${40 + Math.random() * 30}% ${70 + Math.random() * 20}% ${30 + Math.random() * 30}%`,
                `${30 + Math.random() * 40}% ${70 + Math.random() * 20}% ${40 + Math.random() * 30}% ${60 + Math.random() * 20}%`,
                `${40 + Math.random() * 20}% ${60 + Math.random() * 20}% ${30 + Math.random() * 30}% ${50 + Math.random() * 20}%`
              ]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Small 3D sparkle particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              background: `linear-gradient(45deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 217, 90, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: `0 0 8px rgba(255, 217, 90, 0.8)`,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
              rotateZ: [0, 360, 720, 1080],
              scale: [0.3, 1.5, 0.8, 0.3],
              opacity: [0.1, 0.9, 0.4, 0.1]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* 3D Depth layers */}
      <div className="absolute inset-0" style={{ perspective: '800px' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`layer-${i}`}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${20 + i * 15}% ${30 + i * 10}%, rgba(255, 217, 90, 0.1) 0%, transparent 60%)`,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              rotateX: [0, 5, -5, 0],
              rotateY: [0, 10, -10, 0],
              scale: [0.95, 1.05, 0.98, 0.95]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
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