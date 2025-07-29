import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Shield, ArrowUp, ArrowDown } from 'lucide-react';

export default function SolarProducts() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setHeroAnimationComplete(false);
  };

  const scrollToContent = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
    setHeroAnimationComplete(true);
  };

  const solarProducts = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Panels",
      description: "High-efficiency monocrystalline and polycrystalline solar panels for residential and commercial applications"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Solar Batteries",
      description: "Advanced lithium-ion and lead-acid battery systems for energy storage and backup power solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solar Inverters",
      description: "Grid-tie and off-grid inverters with maximum power point tracking for optimal energy conversion"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Solar Mounting Systems",
      description: "Durable aluminum and steel mounting structures for rooftop and ground-mounted solar installations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Solar Products - Renewable Energy Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
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
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8">
              Solar Products
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-[#F5A623] mx-auto mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Renewable Energy & Sustainable Solutions
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContent}
          >
            Explore Solutions
          </motion.button>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Products Section */}
      <section className="py-8 md:py-12 bg-[#3b4f69] pt-[0px] pb-[0px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFC600] mb-6">
              Solar Product Categories
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto"></div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Solar</h3>
              <p className="text-gray-700 text-sm font-medium">Panels</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2">
                <Battery className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Solar</h3>
              <p className="text-gray-700 text-sm font-medium">Batteries</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Solar</h3>
              <p className="text-gray-700 text-sm font-medium">Inverters</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Mounting</h3>
              <p className="text-gray-700 text-sm font-medium">Systems</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mt-[80px] mb-[80px]">
              <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center text-[#2A374B] mr-6">
                <Sun className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFC600]">Solar Products</h1>
                <p className="text-white/90 text-lg mt-2">Renewable energy systems and components</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-2 md:py-4 ml-[0px] mr-[0px] mt-[-80px] mb-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solarProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{product.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Quote
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowDown className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}