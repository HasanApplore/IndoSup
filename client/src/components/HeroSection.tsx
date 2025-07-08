import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Primary gradient background */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div
              className="absolute w-64 h-64 bg-primary/15 rounded-full blur-2xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
              style={{ top: '60%', right: '15%' }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-primary/8 rounded-full blur-3xl"
              animate={{
                x: [0, 60, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10
              }}
              style={{ bottom: '20%', left: '20%' }}
            />
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight font-inter text-shadow-lg"
              variants={itemVariants}
            >
              Revolutionizing{' '}
              <span className="text-primary drop-shadow-lg">Construction</span>{' '}
              Procurement
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-shadow-lg"
              variants={itemVariants}
            >
              End-to-End Digital Sourcing for Modern Infrastructure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div 
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-accent font-bold px-10 py-5 text-xl rounded-lg transition-all duration-300 shadow-2xl hover:shadow-primary/25"
                >
                  Explore Solutions
                </Button>
              </motion.div>
              
              <motion.div 
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-accent font-bold px-10 py-5 text-xl rounded-lg transition-all duration-300 bg-transparent backdrop-blur-custom shadow-xl hover:shadow-white/25"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}