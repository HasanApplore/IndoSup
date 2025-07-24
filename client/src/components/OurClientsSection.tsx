import { motion } from 'framer-motion';
import { useState } from 'react';

// Import logos as assets for proper bundling
import plcityLogo from '@/assets/plcity-logo.jpg';
import bryAirLogo from '@/assets/bry-air-logo.webp';
import cbreLogo from '@/assets/cbre-logo-new.webp';
import jaksonLogo from '@/assets/jakson-logo.png';
import cciLogo from '@/assets/cci-logo.jpg';
import allcargoLogo from '@/assets/allcargo-logo.png';

export default function OurClientsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Client logos data - using imported assets for proper bundling
  const clientLogos = [
    { name: 'PL City', logo: plcityLogo },
    { name: 'Bry-Air', logo: bryAirLogo },
    { name: 'CBRE', logo: cbreLogo },
    { name: 'JAKSON', logo: jaksonLogo },
    { name: 'CCI', logo: cciLogo },
    { name: 'Allcargo Logistics', logo: allcargoLogo },
  ];

  // Create multiple sets for infinite scroll animation
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden bg-white">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-6 font-poppins">
            Our Valued Clients
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            Building successful partnerships across diverse industries
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden py-6">
          {/* Invisible gradient overlays for smooth carousel transitions */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-transparent to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent via-transparent to-transparent z-20 pointer-events-none"></div>
          
          {/* Moving Strip Container */}
          <div 
            className="flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Continuous Strip */}
            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{
                x: [0, -144 * clientLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isHovered ? 35 : 25,
                  ease: "linear",
                },
              }}
            >
              {repeatedLogos.map((client, index) => (
                <motion.div
                  key={`logo-${index}`}
                  className="group flex-shrink-0 w-32 h-20 flex items-center justify-center cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - Valued Client`}
                    className="max-w-full max-h-full object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-lg"
                    loading="lazy"
                    onError={(e) => {
                      console.log(`Failed to load logo: ${client.logo}`);
                      const target = e.currentTarget as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xs font-bold text-accent text-center px-2">${client.name}</span>`;
                      }
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}