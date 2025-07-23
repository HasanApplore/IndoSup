import { motion } from 'framer-motion';
import { Building2, Star, Award, TrendingUp } from 'lucide-react';

export default function OurClientsSection() {
  const clients = [
    { 
      name: "HL City", 
      industry: "Real Estate",
      partnership: "3+ Years",
      logo: "/attached_assets/hqdefault_live_1753268448612.jpg"
    },
    { 
      name: "Bry-Air", 
      industry: "Industrial",
      partnership: "5+ Years",
      logo: "/attached_assets/Bry-Air%20_Logo-comp245921_1753268466230.webp"
    },
    { 
      name: "CBRE", 
      industry: "Commercial",
      partnership: "2+ Years",
      logo: "/attached_assets/cb5381ccf3-cbre-logo-cbre_1753268471965.png"
    },
    { 
      name: "JAKSON", 
      industry: "Infrastructure",
      partnership: "4+ Years",
      logo: "/attached_assets/jakson_1753268476294.png"
    },
    { 
      name: "CCI", 
      industry: "Construction",
      partnership: "6+ Years",
      logo: "/attached_assets/CCI_1753268480375.jpg"
    },
    { 
      name: "all Cargo", 
      industry: "Logistics",
      partnership: "3+ Years",
      logo: "/attached_assets/ALLCARGO.NS_BIG_1753268487926.png"
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
            Trusted by Industry Leaders
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto mt-8">
            Partnering with leading companies across diverse industries to deliver exceptional results
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Minimal clean card */}
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                {/* Company Logo */}
                <div className="flex items-center justify-center mb-3 h-16">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Client info */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-accent mb-1 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-xs text-neutral-base mb-2">{client.industry}</p>
                  <div className="text-xs text-primary font-medium">
                    {client.partnership}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-base mb-6">
            Join these industry leaders in transforming your procurement process
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Become Our Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}