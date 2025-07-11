import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Package, Wrench, ArrowDown, ArrowUp, Star, Eye, Target } from 'lucide-react';
import { Link } from 'wouter';
import productsBannerImage from '@assets/image_1752217941194.png';

export default function Products() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reset hero animation when component mounts
  useEffect(() => {
    setHeroAnimated(false);
  }, []);

  // Add scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setShowScrollTop(scrolled);
      
      if (window.scrollY === 0) {
        setHeroAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const heroHeight = window.innerHeight;
    setHeroAnimated(true);
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    setHeroAnimated(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={productsBannerImage}
            alt="IndoSup Products - Construction Materials Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary/40 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-5 h-5 text-primary mr-2" />
            <span className="text-white font-medium">Our Products</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Construction
            <span className="block text-primary">Materials</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive range of construction materials sourced from India's most trusted manufacturers and suppliers.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Package className="w-4 h-4 text-primary mr-2" />
              <span className="text-white text-sm">Steel Products</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Wrench className="w-4 h-4 text-primary mr-2" />
              <span className="text-white text-sm">Non-Steel Products</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Download className="w-4 h-4 text-primary mr-2" />
              <span className="text-white text-sm">Instant Quotes</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Statistics Summary */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-neutral-dark font-medium">Products Available</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-neutral-dark font-medium">Top Brands</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-neutral-dark font-medium">Main Categories</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-neutral-dark font-medium">Support Available</div>
            </motion.div>
          </div>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

    </div>
  );
}