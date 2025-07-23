import { motion } from 'framer-motion';
import { Globe, Building2, Package } from 'lucide-react';

export default function AboutIndoSupSection() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "🌐 Global Reach",
      description: "Serving clients across multiple countries with our extensive network and digital platform"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "🏗️ 25+ Years of Industry Experience",
      description: "Decades of expertise in construction material procurement and supply chain management"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "📦 2000+ Projects Supplied",
      description: "Successfully delivered materials for thousands of construction projects nationwide"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
    <section className="py-16 md:py-20 px-4 md:px-10 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            About IndoSup
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto">
            Leading the construction industry with innovative digital solutions and unmatched expertise
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-1 bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}