import { motion } from 'framer-motion';
import { Building2, Star, Award, TrendingUp } from 'lucide-react';

export default function OurClientsSection() {
  const clients = [
    { 
      name: "HL City", 
      industry: "Real Estate",
      partnership: "3+ Years",
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Bry-Air", 
      industry: "Industrial",
      partnership: "5+ Years",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "CBRE", 
      industry: "Commercial",
      partnership: "2+ Years",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600"
    },
    { 
      name: "JAKSON", 
      industry: "Infrastructure",
      partnership: "4+ Years",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      name: "CCI", 
      industry: "Construction",
      partnership: "6+ Years",
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-600"
    },
    { 
      name: "all Cargo", 
      industry: "Logistics",
      partnership: "3+ Years",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-teal-500 to-green-600"
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
              {/* Main card with gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${client.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-r ${client.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {client.icon}
                </div>
                
                {/* Client name */}
                <h3 className="text-2xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </h3>
                
                {/* Industry tag */}
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {client.industry}
                </div>
                
                {/* Partnership duration */}
                <p className="text-neutral-base font-medium">
                  Partnership: <span className="text-primary font-semibold">{client.partnership}</span>
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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