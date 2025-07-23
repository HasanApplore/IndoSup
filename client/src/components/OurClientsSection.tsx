import { motion } from 'framer-motion';

// Import logos as assets for proper bundling
import plcityLogo from '@/assets/plcity-logo.jpg';
import bryAirLogo from '@/assets/bry-air-logo.webp';
import cbreLogo from '@/assets/cbre-logo.png';
import jaksonLogo from '@/assets/jakson-logo.png';
import cciLogo from '@/assets/cci-logo.jpg';
import allcargoLogo from '@/assets/allcargo-logo.png';

export default function OurClientsSection() {
  const clients = [
    { 
      name: "PL City", 
      logo: plcityLogo
    },
    { 
      name: "Bry-Air", 
      logo: bryAirLogo
    },
    { 
      name: "CBRE", 
      logo: cbreLogo
    },
    { 
      name: "JAKSON", 
      logo: jaksonLogo
    },
    { 
      name: "CCI", 
      logo: cciLogo
    },
    { 
      name: "Allcargo Logistics", 
      logo: allcargoLogo
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-accent mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Valued Clients
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto mt-8">
            Building successful partnerships across diverse industries
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.08 }}
              className="group relative"
            >
              {/* Elegant client logo card with website theme colors */}
              <div className="bg-gradient-to-br from-white to-[#fbf5e8] rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#FFC600]/20 group-hover:border-[#FFC600]/60 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 to-[#031D33]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Company Logo */}
                <div className="flex items-center justify-center h-20 relative z-10">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - Client Logo`}
                    className="max-h-16 max-w-full object-contain group-hover:scale-115 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-xl"
                  />
                </div>
                
                {/* Subtle accent line */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FFC600] to-transparent mt-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}