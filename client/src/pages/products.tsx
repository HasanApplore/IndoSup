import { motion } from 'framer-motion';
import { ArrowRight, Download, Package, Wrench } from 'lucide-react';
import { Link } from 'wouter';

export default function Products() {
  const steelProducts = [
    "Structural Steel",
    "Pipes & Fittings", 
    "Roofing Materials",
    "Doors & Windows",
    "Reinforcement Products"
  ];

  const nonSteelProducts = [
    "Plumbing",
    "Electrical", 
    "Fire Fighting",
    "Warehouse Infra",
    "Site Utilities"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive range of construction materials and products sourced from India's 
            most trusted manufacturers and suppliers.
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Product Categories
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
            <p className="text-neutral-base mt-6 max-w-2xl mx-auto text-lg">
              Choose from our comprehensive range of steel and non-steel construction products
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Steel Products Card */}
            <motion.div variants={cardVariants}>
              <Link to="/products/steel">
                <motion.div
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Package className="w-8 h-8" />
                    </div>
                    <motion.div
                      className="text-primary group-hover:text-accent transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6 group-hover:text-primary transition-colors duration-300">
                    Steel Products
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-base text-lg mb-8 leading-relaxed">
                    Essential steel construction materials including structural components, 
                    piping systems, and architectural elements for modern infrastructure.
                  </p>

                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {steelProducts.map((product, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-accent font-medium">{product}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                    <span className="mr-2">Explore Steel Products</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Non-Steel Products Card */}
            <motion.div variants={cardVariants}>
              <Link to="/products/non-steel">
                <motion.div
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Wrench className="w-8 h-8" />
                    </div>
                    <motion.div
                      className="text-primary group-hover:text-accent transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6 group-hover:text-primary transition-colors duration-300">
                    Non-Steel Products
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-base text-lg mb-8 leading-relaxed">
                    Specialized construction systems and utilities including electrical, 
                    plumbing, safety, and infrastructure support solutions.
                  </p>

                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {nonSteelProducts.map((product, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-accent font-medium">{product}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                    <span className="mr-2">Explore Non-Steel Products</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Complete Product Catalogs Available
            </h2>
            <p className="text-lg text-neutral-base mb-8 leading-relaxed">
              Access detailed specifications, pricing, and availability for our entire 
              product range through our comprehensive digital catalogs.
            </p>
            
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Catalog
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}