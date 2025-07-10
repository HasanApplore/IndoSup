import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function IndiaMapSection() {
  // IndoSup's presence across India - coordinates properly positioned within map boundaries
  const stateMarkers = [
    // Strong presence in North India
    { name: 'Delhi', x: 1100, y: 680, delay: 0, strength: 'strong' },
    { name: 'Chandigarh', x: 1080, y: 650, delay: 0.1, strength: 'strong' },
    { name: 'Jaipur', x: 1020, y: 720, delay: 0.2, strength: 'strong' },
    { name: 'Lucknow', x: 1200, y: 750, delay: 0.3, strength: 'strong' },
    { name: 'Kanpur', x: 1180, y: 780, delay: 0.4, strength: 'strong' },
    
    // Strong presence in Central India
    { name: 'Bhopal', x: 1130, y: 950, delay: 0.5, strength: 'strong' },
    { name: 'Indore', x: 1080, y: 920, delay: 0.6, strength: 'strong' },
    { name: 'Nagpur', x: 1250, y: 1050, delay: 0.7, strength: 'strong' },
    { name: 'Raipur', x: 1300, y: 1000, delay: 0.8, strength: 'strong' },
    
    // Moderate presence in West India
    { name: 'Mumbai', x: 950, y: 1050, delay: 0.9, strength: 'moderate' },
    { name: 'Pune', x: 980, y: 1080, delay: 1.0, strength: 'moderate' },
    { name: 'Ahmedabad', x: 940, y: 880, delay: 1.1, strength: 'moderate' },
    { name: 'Surat', x: 950, y: 930, delay: 1.2, strength: 'moderate' },
    
    // Moderate presence in East India
    { name: 'Kolkata', x: 1380, y: 1000, delay: 1.3, strength: 'moderate' },
    { name: 'Bhubaneswar', x: 1350, y: 1050, delay: 1.4, strength: 'moderate' },
    { name: 'Ranchi', x: 1330, y: 950, delay: 1.5, strength: 'moderate' },
    
    // Moderate presence in Hyderabad region
    { name: 'Hyderabad', x: 1230, y: 1200, delay: 1.6, strength: 'moderate' },
    
    // Minimal presence in South India
    { name: 'Bangalore', x: 1200, y: 1350, delay: 1.7, strength: 'minimal' },
    { name: 'Kochi', x: 1120, y: 1450, delay: 1.8, strength: 'minimal' },
    { name: 'Chennai', x: 1300, y: 1380, delay: 1.9, strength: 'minimal' }
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
    <section className="py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 md:mb-4 font-inter">
            Pan-India Reach with Local Expertise
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-sm md:text-base text-neutral-base mt-3 md:mt-4 max-w-xl md:max-w-2xl mx-auto px-4">
            Strongest presence in North & Central India, expanding nationwide with strategic partnerships
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* India Map SVG */}
          <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 overflow-hidden max-w-4xl mx-auto">
            <div className="relative">
              {/* Load the detailed India map from the SVG file */}
              <img 
                src="/india-map.svg" 
                alt="India Map showing IndoSup's presence across Indian states" 
                className="w-full h-auto opacity-90 transition-opacity duration-300 max-h-[600px] object-contain"
                style={{ filter: 'brightness(1.1) contrast(0.9)' }}
              />
              
              {/* Overlay for markers */}
              <svg
                viewBox="0 0 2500 2843"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >

              {/* Animated State Markers with varying sizes based on presence strength */}
              {stateMarkers.map((marker, index) => {
                const getMarkerSize = (strength: string) => {
                  switch (strength) {
                    case 'strong': return { main: 20, pulse: 25, pulseMax: 40 };
                    case 'moderate': return { main: 15, pulse: 20, pulseMax: 30 };
                    case 'minimal': return { main: 12, pulse: 15, pulseMax: 22 };
                    default: return { main: 15, pulse: 20, pulseMax: 30 };
                  }
                };
                
                const getMarkerColor = (strength: string) => {
                  switch (strength) {
                    case 'strong': return '#FFC600';
                    case 'moderate': return '#FFD700';
                    case 'minimal': return '#FFF4CC';
                    default: return '#FFC600';
                  }
                };
                
                const sizes = getMarkerSize(marker.strength);
                const color = getMarkerColor(marker.strength);
                
                return (
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
                      r={sizes.pulse}
                      fill="none"
                      stroke={color}
                      strokeWidth={marker.strength === 'strong' ? "8" : marker.strength === 'moderate' ? "6" : "4"}
                      opacity={marker.strength === 'strong' ? "0.8" : marker.strength === 'moderate' ? "0.6" : "0.4"}
                      animate={{
                        r: [sizes.pulse, sizes.pulseMax, sizes.pulse],
                        opacity: [0.8, 0.2, 0.8]
                      }}
                      transition={{
                        duration: marker.strength === 'strong' ? 1.5 : marker.strength === 'moderate' ? 2 : 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: marker.delay
                      }}
                    />
                    
                    {/* Main Marker */}
                    <motion.circle
                      cx={marker.x}
                      cy={marker.y}
                      r={sizes.main}
                      fill={color}
                      stroke="#031D33"
                      strokeWidth={marker.strength === 'strong' ? "8" : marker.strength === 'moderate' ? "6" : "4"}
                      className="cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    
                    {/* Strength Indicator - Inner Circle for strong presence */}
                    {marker.strength === 'strong' && (
                      <motion.circle
                        cx={marker.x}
                        cy={marker.y}
                        r="8"
                        fill="#031D33"
                        opacity="0.7"
                        animate={{
                          opacity: [0.7, 0.3, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {/* City Label */}
                    <motion.text
                      x={marker.x}
                      y={marker.y + (sizes.main + 35)}
                      textAnchor="middle"
                      fontSize={marker.strength === 'strong' ? "24" : marker.strength === 'moderate' ? "20" : "16"}
                      fill="#031D33"
                      className="font-medium opacity-70 hover:opacity-100 transition-opacity"
                      style={{ fontWeight: marker.strength === 'strong' ? 'bold' : 'medium' }}
                    >
                      {marker.name}
                    </motion.text>
                  </motion.g>
                );
              })}
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
            className="flex flex-col sm:flex-row items-center justify-center mt-6 md:mt-8 space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <span className="text-sm text-neutral-base font-medium">
                Strong Presence
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <MapPin className="w-2 h-2 text-accent" />
              </div>
              <span className="text-sm text-neutral-base font-medium">
                Moderate Presence
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-3 h-3 border-2 border-yellow-200 bg-yellow-100 rounded-full"
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
                Minimal Presence
              </span>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { number: '15+', label: 'States', description: 'Active Coverage' },
              { number: '35+', label: 'Cities', description: 'Service Centers' },
              { number: '75+', label: 'Districts', description: 'Project Areas' },
              { number: '24/7', label: 'Support', description: 'Customer Care' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2">
                  {item.number}
                </div>
                <div className="text-sm md:text-base font-medium text-accent mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-neutral-base">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}