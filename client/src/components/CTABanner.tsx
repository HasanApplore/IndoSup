import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Construction site showing future building projects"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/80 to-accent/70"></div>
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 md:mb-12 font-inter leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Build the{' '}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Future
            </motion.span>{' '}
            Together
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Partner with IndoSup to transform your construction projects with innovative procurement solutions and unmatched industry expertise.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="group inline-flex items-center px-10 md:px-12 py-4 md:py-5 bg-primary text-accent font-bold text-lg md:text-xl rounded-full hover:bg-accent hover:text-primary transition-all duration-300 shadow-2xl hover:shadow-primary/50 border-2 border-primary hover:border-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 198, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-3">Contact Us</span>
              <motion.div
                className="flex items-center justify-center w-8 h-8 bg-accent/20 rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                animate={{
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <div className="relative mt-16 md:mt-20">
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${Math.random() * 100}px`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}

            {/* Bottom accent line */}
            <motion.div
              className="mx-auto w-32 h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC600' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  );
}