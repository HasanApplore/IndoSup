import { motion } from 'framer-motion';
import { Building2, Calculator, Truck, FileText, Package, CheckCircle, ArrowRight } from 'lucide-react';

export default function Solutions() {
  // Solutions data
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Multi-site Procurement",
      description: "Centralized procurement management across multiple construction sites with real-time coordination and unified vendor relationships.",
      subtext: "Streamline operations, reduce costs, and maintain consistent quality standards across all your project locations.",
      features: ["Centralized Ordering", "Site-wise Tracking", "Unified Vendor Management"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "SKU Price Accuracy",
      description: "Real-time price validation and market analysis ensuring competitive rates for every construction material and component.",
      subtext: "Eliminate price discrepancies with our AI-powered pricing engine that monitors market fluctuations across India.",
      features: ["Real-time Pricing", "Market Analysis", "Price Alerts"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Delay Solutions",
      description: "Proactive logistics management with predictive analytics to identify and resolve potential delays before they impact your projects.",
      subtext: "Advanced tracking systems and alternative sourcing options ensure your construction timeline stays on track.",
      features: ["Predictive Analytics", "Alternative Sourcing", "Real-time Tracking"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST/Billing Compliance",
      description: "Automated GST calculations, compliant invoicing, and seamless integration with accounting systems for hassle-free financial management.",
      subtext: "Stay compliant with Indian tax regulations while reducing administrative overhead through intelligent automation.",
      features: ["Automated GST", "Compliant Invoicing", "System Integration"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Mismatched Order Management",
      description: "Intelligent order reconciliation system that identifies, flags, and resolves discrepancies in material deliveries and specifications.",
      subtext: "Advanced matching algorithms ensure what you ordered is exactly what you receive, every single time.",
      features: ["Order Reconciliation", "Discrepancy Detection", "Quality Assurance"]
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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="bg-accent text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Solutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive procurement solutions designed to solve the most critical challenges 
            in construction project management and supply chain operations.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 font-inter">
              Transforming Construction Procurement
            </h2>
            <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
            <p className="text-neutral-base mt-6 max-w-3xl mx-auto text-lg">
              Each solution is designed to address specific pain points in construction procurement, 
              delivering measurable results and operational excellence.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-accent">
                        {solution.title}
                      </h3>
                      <div className="w-12 h-1 bg-primary mt-2"></div>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-base leading-relaxed">
                    {solution.description}
                  </p>

                  <p className="text-base text-neutral-base/80 leading-relaxed">
                    {solution.subtext}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-accent font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-md lg:max-w-lg">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-6">
                        <div className="scale-150">
                          {solution.icon}
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-2 bg-primary/20 rounded-full"
                            style={{ width: `${100 - i * 20}%` }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.1, duration: 0.6 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating accent */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
                      animate={{
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-lg text-neutral-base mb-8 leading-relaxed">
              Join hundreds of construction companies who have revolutionized their 
              procurement operations with IndoSup's comprehensive solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}