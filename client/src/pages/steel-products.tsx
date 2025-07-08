import { motion } from 'framer-motion';
import { ArrowLeft, Download, Package, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function SteelProducts() {
  const steelCategories = [
    {
      name: "Structural Steel",
      description: "High-grade structural steel beams, columns, and frameworks for commercial and residential construction projects.",
      specifications: ["IS 2062 Grade", "Various Sizes", "Certified Quality"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pipes & Fittings",
      description: "Comprehensive range of steel pipes, joints, and fittings for plumbing, gas, and structural applications.",
      specifications: ["IS 1239 Standard", "Multiple Diameters", "Corrosion Resistant"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Roofing Materials",
      description: "Durable steel roofing sheets, gutters, and accessories for weather-resistant construction solutions.",
      specifications: ["Galvanized Coating", "Color Options", "Wind Resistant"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Doors & Windows",
      description: "Security-focused steel doors and window frames with modern designs and superior durability.",
      specifications: ["Security Grade", "Custom Sizes", "Powder Coated"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Reinforcement Products",
      description: "TMT bars, rebars, and reinforcement mesh for concrete strengthening and structural integrity.",
      specifications: ["Fe 500/550 Grade", "Earthquake Resistant", "ISI Marked"],
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
      {/* Header */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Link to="/products">
            <motion.button
              className="inline-flex items-center text-primary hover:text-white transition-colors duration-200 mb-6"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Products
            </motion.button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mr-6">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-inter">Steel Products</h1>
                <p className="text-gray-200 text-lg mt-2">Premium quality steel construction materials</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steelCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-base leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-accent mb-3">Key Specifications:</h4>
                    {category.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-neutral-base">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-primary text-accent font-semibold py-2 px-4 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Quote
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-accent transition-all duration-200 py-2 px-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Complete Steel Products Catalog
            </h2>
            <p className="text-lg text-neutral-base mb-8 leading-relaxed">
              Download our comprehensive steel products catalog with detailed specifications, 
              pricing, and technical drawings for all our steel construction materials.
            </p>
            
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Steel Catalog (PDF)
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}