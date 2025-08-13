import { motion } from 'framer-motion';
import { useState } from 'react';

// Import logos as assets for proper bundling
import plcityLogo from '@/assets/plcity-logo.jpg';
import bryAirLogo from '@/assets/bry-air-logo.webp';
import cbreLogo from '@/assets/cbre-logo-new.webp';
import jaksonLogo from '@/assets/jakson-logo.png';
import cciLogo from '@/assets/cci-logo.jpg';
import allcargoLogo from '@/assets/allcargo-logo.png';


import img1 from '@/assets/1.svg';
import img2 from '@/assets/2.svg';
import img3 from '@/assets/3.svg';
import img4 from '@/assets/4.svg';
import img5 from '@/assets/5.svg';
import img6 from '@/assets/6.svg';
import img7 from '@/assets/7.svg';
import img8 from '@/assets/8.svg';
import img9 from '@/assets/9.svg'; 
import img10 from '@/assets/10.svg';
import img11 from '@/assets/11.svg';
import img12 from '@/assets/12.svg';
import img13 from '@/assets/13.svg';
import img14 from '@/assets/14.svg';
import img15 from '@/assets/15.svg';
import img16 from '@/assets/16.svg';
import img17 from '@/assets/17.svg';
import img18 from '@/assets/18.svg';
import img19 from '@/assets/19.svg';
import img20 from '@/assets/20.svg';
import img21 from '@/assets/21.svg';
import img22 from '@/assets/22.svg';
import img23 from '@/assets/23.svg';
import img24 from '@/assets/24.svg';
import img25 from '@/assets/25.svg';
import img26 from '@/assets/26.svg';
import img27 from '@/assets/27.svg';
import img28 from '@/assets/28.svg';
import img29 from '@/assets/29.svg';
import img30 from '@/assets/30.svg';


export default function OurClientsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Client logos data - using imported assets for proper bundling
  const clientLogos = [
    { name: '1', logo: img1 },
    { name: '2', logo: img2 },
    { name: '3', logo: img3 },
    { name: '4', logo: img4 },
    { name: '5', logo: img5 },
    { name: '6', logo: img6 },
    { name: '7', logo: img7 },
    { name: '8', logo: img8 },
    { name: '9', logo: img9 },
    { name: '10', logo: img10 },
    { name: '11', logo: img11 },
    { name: '12', logo: img12 },
    { name: '13', logo: img13 },
    { name: '14', logo: img14 },
    { name: '15', logo: img15 },
    { name: '16', logo: img16 },  
    { name: '17', logo: img17 },
    { name: '18', logo: img18 },
    { name: '19', logo: img19 },
    { name: '20', logo: img20 },
    { name: '21', logo: img21 },
    { name: '22', logo: img22 },
    { name: '23', logo: img23 },
    { name: '24', logo: img24 },
    { name: '25', logo: img25 },
    { name: '26', logo: img26 },
    { name: '27', logo: img27 },
    { name: '28', logo: img28 },
    { name: '29', logo: img29 },
    { name: '30', logo: img30 },

  ];

  // Create multiple sets for infinite scroll animation
  const repeatedLogos = [...clientLogos];

  return (
    <section className="py-12 px-4 md:py-20 md:px-6 relative overflow-hidden bg-white">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-6">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                  duration: isHovered ? 90 : 80,
                  ease: "linear",
                },
              }}
            >
              {repeatedLogos.map((client, index) => (
                <motion.div
                  key={`logo-${index}`}
                  className="group flex-shrink-0 w-36 h-24 flex items-center justify-center cursor-pointer"
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