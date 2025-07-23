import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Shield } from 'lucide-react';

export default function SolarProducts() {
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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white pt-20">
      <div className="container mx-auto px-4 md:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Solar Products
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto">
            Comprehensive solar energy solutions for sustainable and efficient power generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solarProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-4 text-center">
                {product.title}
              </h3>
              <p className="text-neutral-base text-center leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}