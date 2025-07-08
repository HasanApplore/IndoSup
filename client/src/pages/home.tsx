import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Heart, 
  Smartphone, 
  Users, 
  Clock,
  Menu,
  Twitter,
  Linkedin
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-indosup-secondary">
      {/* Navigation */}
      <nav className="bg-indosup-secondary shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indosup-accent">IndoSup</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-indosup-neutral-dark hover:text-indosup-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
                <a href="#" className="text-indosup-neutral-base hover:text-indosup-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Features</a>
                <a href="#" className="text-indosup-neutral-base hover:text-indosup-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
                <a href="#" className="text-indosup-neutral-base hover:text-indosup-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</a>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-indosup-primary hover:bg-indosup-primary/90 text-indosup-accent px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Get Started
              </Button>
            </div>
            <div className="md:hidden">
              <button className="text-indosup-neutral-base hover:text-indosup-accent">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indosup-secondary to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-indosup-accent mb-6 leading-tight"
                variants={fadeInUp}
              >
                Welcome to <span className="text-indosup-primary">IndoSup</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-indosup-neutral-base mb-8 max-w-lg mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Experience the future of technology with our innovative platform designed to empower your digital journey.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <Button className="bg-indosup-primary hover:bg-indosup-primary/90 text-indosup-accent px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="border-2 border-indosup-accent text-indosup-accent hover:bg-indosup-accent hover:text-indosup-secondary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-indosup-primary to-yellow-300 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl text-indosup-accent">🚀</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-indosup-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indosup-accent mb-4">Why Choose IndoSup?</h2>
            <p className="text-lg text-indosup-neutral-base max-w-2xl mx-auto">
              Discover the powerful features that make IndoSup the perfect solution for your needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">Lightning Fast</h3>
                  <p className="text-indosup-neutral-base">Experience blazing-fast performance with our optimized platform built for speed and efficiency.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">Secure & Reliable</h3>
                  <p className="text-indosup-neutral-base">Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">User-Friendly</h3>
                  <p className="text-indosup-neutral-base">Intuitive interface designed with user experience in mind, making complex tasks simple.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">Responsive Design</h3>
                  <p className="text-indosup-neutral-base">Perfectly optimized for all devices - desktop, tablet, and mobile experiences.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">Team Collaboration</h3>
                  <p className="text-indosup-neutral-base">Work seamlessly with your team using our advanced collaboration tools and features.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-indosup-secondary border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-indosup-primary">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-indosup-primary rounded-lg flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-indosup-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-indosup-accent mb-3">24/7 Support</h3>
                  <p className="text-indosup-neutral-base">Get help whenever you need it with our round-the-clock customer support team.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indosup-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indosup-secondary mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join the growing community of satisfied users who have transformed their workflow with IndoSup.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-indosup-primary mb-2">10,000+</div>
              <div className="text-gray-300 text-lg">Active Users</div>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-indosup-primary mb-2">99.9%</div>
              <div className="text-gray-300 text-lg">Uptime</div>
            </motion.div>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-indosup-primary mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indosup-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold text-indosup-accent mb-6" variants={fadeInUp}>
              Ready to Get Started?
            </motion.h2>
            <motion.p className="text-lg text-indosup-neutral-base mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
              Join thousands of users who have already transformed their workflow with IndoSup. 
              Start your journey today and experience the difference.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button className="bg-indosup-primary hover:bg-indosup-primary/90 text-indosup-accent px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-2 border-indosup-accent text-indosup-accent hover:bg-indosup-accent hover:text-indosup-secondary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indosup-neutral-dark text-indosup-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-indosup-primary mb-4">IndoSup</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering your digital journey with innovative technology solutions designed for the modern world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indosup-primary mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indosup-primary mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indosup-primary transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 IndoSup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
