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
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              {/* Clean, professional client card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary/30">
                {/* Company Logo */}
                <div className="flex items-center justify-center h-24 mb-4">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} - Client Logo`}
                    className="max-h-20 max-w-full object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm"
                  />
                </div>
                
                {/* Company Name Only */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-accent group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-base">
            Trusted partnerships driving construction excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
}