import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function IndiaMapSection() {
  // Key states where IndoSup has presence
  const stateMarkers = [
    { name: 'Delhi', x: 48, y: 28, delay: 0 },
    { name: 'Mumbai', x: 35, y: 55, delay: 0.2 },
    { name: 'Chennai', x: 52, y: 80, delay: 0.4 },
    { name: 'Kolkata', x: 68, y: 50, delay: 0.6 },
    { name: 'Bangalore', x: 50, y: 75, delay: 0.8 },
    { name: 'Hyderabad', x: 52, y: 65, delay: 1.0 },
    { name: 'Pune', x: 38, y: 58, delay: 1.2 },
    { name: 'Ahmedabad', x: 32, y: 45, delay: 1.4 },
    { name: 'Jaipur', x: 40, y: 35, delay: 1.6 },
    { name: 'Lucknow', x: 55, y: 35, delay: 1.8 },
    { name: 'Bhubaneswar', x: 65, y: 55, delay: 2.0 },
    { name: 'Guwahati', x: 75, y: 40, delay: 2.2 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const markerVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 font-inter">
            Pan-India Reach with Local Expertise
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-neutral-base mt-6 max-w-3xl mx-auto">
            Serving construction projects across India with strategic partnerships and local knowledge
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* India Map SVG */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-auto"
              style={{ aspectRatio: '1' }}
            >
              {/* Simplified India Map Outline */}
              <path
                d="M20 20 L25 15 L35 18 L45 12 L55 15 L65 10 L75 18 L80 25 L85 35 L82 45 L78 55 L75 65 L70 75 L65 85 L55 88 L45 85 L35 80 L25 75 L18 65 L15 55 L12 45 L15 35 L20 25 Z"
                fill="#f8f9fa"
                stroke="#e9ecef"
                strokeWidth="0.5"
                className="drop-shadow-sm"
              />
              
              {/* Additional map details */}
              <path
                d="M30 25 L40 30 L50 25 L60 30 L70 25"
                stroke="#dee2e6"
                strokeWidth="0.3"
                fill="none"
              />
              <path
                d="M25 45 L35 50 L45 45 L55 50 L65 45"
                stroke="#dee2e6"
                strokeWidth="0.3"
                fill="none"
              />
              <path
                d="M20 65 L30 70 L40 65 L50 70 L60 65"
                stroke="#dee2e6"
                strokeWidth="0.3"
                fill="none"
              />

              {/* Animated State Markers */}
              {stateMarkers.map((marker, index) => (
                <motion.g
                  key={marker.name}
                  variants={markerVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: marker.delay }}
                >
                  {/* Pulse Ring */}
                  <motion.circle
                    cx={marker.x}
                    cy={marker.y}
                    r="2"
                    fill="none"
                    stroke="#FFC600"
                    strokeWidth="0.3"
                    opacity="0.6"
                    animate={{
                      r: [2, 4, 2],
                      opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: marker.delay
                    }}
                  />
                  
                  {/* Main Marker */}
                  <motion.circle
                    cx={marker.x}
                    cy={marker.y}
                    r="1.5"
                    fill="#FFC600"
                    stroke="#031D33"
                    strokeWidth="0.3"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* City Label */}
                  <motion.text
                    x={marker.x}
                    y={marker.y + 4}
                    textAnchor="middle"
                    fontSize="2"
                    fill="#031D33"
                    className="font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {marker.name}
                  </motion.text>
                </motion.g>
              ))}
            </svg>

            {/* Floating Background Elements */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-12 h-12 bg-primary/3 rounded-full blur-lg"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          {/* Legend */}
          <motion.div
            className="flex items-center justify-center mt-8 space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-2 h-2 text-accent" />
              </div>
              <span className="text-sm text-neutral-base font-medium">
                Service Centers
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-4 h-4 border-2 border-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm text-neutral-base font-medium">
                Active Operations
              </span>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { number: '25+', label: 'States' },
              { number: '50+', label: 'Cities' },
              { number: '100+', label: 'Districts' },
              { number: '24/7', label: 'Support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-neutral-base">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}