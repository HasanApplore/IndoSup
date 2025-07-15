import { motion } from 'framer-motion';
import { useState } from 'react';

// Import logos as assets for proper bundling
import ksbLogo from '@/assets/ksb-logo.png';
import sailLogo from '@/assets/sail-logo.png';
import vedantaLogo from '@/assets/vedanta-logo.png';
import finolexLogo from '@/assets/finolex-pipes-logo.png';
import aplapolloLogo from '@/assets/aplapollo-logo.png';
import ashirvadLogo from '@/assets/ashirvad-logo.webp';
import havellsLogo from '@/assets/havells-logo-new.png';
import polycabLogo from '@/assets/polycab-logo.png';
import asianPaintsLogo from '@/assets/asian-paints-logo.png';
import tataSteelLogo from '@/assets/tata-steel-logo.png';

import vectusLogo from '@/assets/vectus-logo.png';

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
    { name: 'Asian Paints', logo: asianPaintsLogo },
    { name: 'Tata Steel', logo: tataSteelLogo },

    { name: 'Vectus', logo: vectusLogo },
  ];

  // Create multiple sets for infinite scroll animation
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 px-6 md:py-20 md:px-6 relative overflow-hidden">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4 font-['Poppins']">
            Our Trusted Partners
          </h2>
          {/* Yellow underline */}
          <div className="w-20 h-1 bg-[#FFD95A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with India's leading construction and infrastructure companies
          </p>
        </motion.div>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 py-8">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              className="group flex-shrink-0 w-32 h-20 flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} - Trusted Partner`}
                className="object-contain h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  console.log(`Failed to load logo: ${client.logo}`);
                  const target = e.currentTarget as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-xs font-bold text-[#1E293B] text-center px-2">${client.name}</span>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}