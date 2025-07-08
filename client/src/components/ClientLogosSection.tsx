import { motion } from 'framer-motion';

export default function ClientLogosSection() {
  // Client logos data - using well-known construction/infrastructure companies
  const clientLogos = [
    { name: 'L&T Construction', logo: 'https://logos-world.net/wp-content/uploads/2021/12/Larsen-Toubro-Logo.png' },
    { name: 'Tata Projects', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tata-Logo.png' },
    { name: 'Godrej', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Godrej-Logo.png' },
    { name: 'Mahindra', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Mahindra-Logo.png' },
    { name: 'Shapoorji Pallonji', logo: 'https://www.shapoorjipallonji.com/assets/images/sp-logo.png' },
    { name: 'Gammon India', logo: 'https://www.gammonindia.com/images/logo.png' },
    { name: 'NCC Limited', logo: 'https://www.nccindia.com/images/ncc-logo.png' },
    { name: 'Simplex', logo: 'https://www.simplexinfra.com/images/logo.png' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6 font-inter">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
          <p className="text-base md:text-lg text-neutral-base mt-4 md:mt-6 max-w-2xl md:max-w-3xl mx-auto">
            Proud to partner with India's leading construction and infrastructure companies
          </p>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="group flex items-center justify-center p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                {/* Placeholder logo with company initial */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-yellow-400 transition-all duration-300 filter grayscale group-hover:grayscale-0">
                  <span className="text-xl md:text-2xl font-bold text-accent group-hover:text-white transition-colors duration-300">
                    {client.name.charAt(0)}
                  </span>
                </div>
                
                {/* Company name on hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs md:text-sm text-neutral-base font-medium whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center space-x-2 text-neutral-base text-sm"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>And many more leading companies across India</span>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}