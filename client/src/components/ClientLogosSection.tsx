import { motion } from 'framer-motion';
import { useState } from 'react';

// Import logos as assets for proper bundling
import ksbLogo from '@/assets/ksb-logo.png';
import sailLogo from '@/assets/sail-logo.png';
import vedantaLogo from '@/assets/vedanta-logo.png';
import finolexLogo from '@/assets/finolex-pipes-logo.png';
import aplapolloLogo from '@/assets/aplapollo-logo.png';
import ashirvadLogo from '@/assets/ashirvad-logo.webp';
import havellsLogo from '@/assets/havells-logo.webp';
import polycabLogo from '@/assets/polycab-logo.png';

export default function ClientLogosSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Client logos data - using imported assets for proper bundling
  const clientLogos = [
    { name: 'KSB', logo: ksbLogo },
    { name: 'Steel Authority of India (SAIL)', logo: sailLogo },
    { name: 'Vedanta Limited', logo: vedantaLogo },
    { name: 'Finolex Pipes', logo: finolexLogo },
    { name: 'APL Apollo', logo: aplapolloLogo },
    { name: 'Ashirvad by Aliaxis', logo: ashirvadLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo },
  ];

  // Create multiple sets for infinite scroll animation
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-6 md:py-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,198,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(3,29,51,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 font-inter">
            Our Trusted Partners
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-sm md:text-base text-neutral-base max-w-xl mx-auto">
            Collaborating with India's leading construction and infrastructure companies
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm py-6">
          {/* Seamless Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/80 via-white/40 to-transparent z-20 pointer-events-none"></div>
          
          {/* Moving Strip Container */}
          <div 
            className="flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Continuous Strip */}
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap"
              animate={{
                x: [0, -120 * clientLogos.length],
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
                  className="group flex-shrink-0 w-24 h-16 flex items-center justify-center cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - Trusted Partner`}
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