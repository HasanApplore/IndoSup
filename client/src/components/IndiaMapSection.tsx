import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function IndiaMapSection() {
  // Key states where IndoSup has presence - coordinates adjusted for detailed SVG map
  const stateMarkers = [
    { name: 'Delhi', x: 1200, y: 800, delay: 0 },
    { name: 'Mumbai', x: 950, y: 1350, delay: 0.2 },
    { name: 'Chennai', x: 1350, y: 1950, delay: 0.4 },
    { name: 'Kolkata', x: 1550, y: 1300, delay: 0.6 },
    { name: 'Bangalore', x: 1250, y: 1850, delay: 0.8 },
    { name: 'Hyderabad', x: 1320, y: 1600, delay: 1.0 },
    { name: 'Pune', x: 1000, y: 1400, delay: 1.2 },
    { name: 'Ahmedabad', x: 950, y: 1100, delay: 1.4 },
    { name: 'Jaipur', x: 1050, y: 850, delay: 1.6 },
    { name: 'Lucknow', x: 1350, y: 850, delay: 1.8 },
    { name: 'Bhubaneswar', x: 1480, y: 1350, delay: 2.0 },
    { name: 'Guwahati', x: 1750, y: 950, delay: 2.2 }
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
          <div className="relative bg-white rounded-2xl shadow-xl p-4 overflow-hidden">
            <div className="relative">
              {/* Load the detailed India map from the SVG file */}
              <img 
                src="/india-map.svg" 
                alt="India Map" 
                className="w-full h-auto opacity-90"
                style={{ filter: 'brightness(1.1) contrast(0.9)' }}
              />
              
              {/* Overlay for markers */}
              <svg
                viewBox="0 0 2500 2843"
                className="absolute inset-0 w-full h-full"
              >

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
                    r="40"
                    fill="none"
                    stroke="#FFC600"
                    strokeWidth="6"
                    opacity="0.6"
                    animate={{
                      r: [40, 80, 40],
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
                    r="30"
                    fill="#FFC600"
                    stroke="#031D33"
                    strokeWidth="6"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* City Label */}
                  <motion.text
                    x={marker.x}
                    y={marker.y + 80}
                    textAnchor="middle"
                    fontSize="40"
                    fill="#031D33"
                    className="font-medium opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontWeight: 'bold' }}
                  >
                    {marker.name}
                  </motion.text>
                </motion.g>
              ))}
              </svg>
            </div>

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