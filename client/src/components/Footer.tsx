import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Send, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Newsletter subscription:', email);
    setEmail('');
    setIsSubmitting(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Media & Resources', path: '/media' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const productCategories = [
    { name: 'Steel Products', path: '/products/steel' },
    { name: 'Non-Steel Products', path: '/products/non-steel' },
    { name: 'TMT Bars', path: '/products/steel' },
    { name: 'Pipes & Fittings', path: '/products/steel' },
    { name: 'Electrical Components', path: '/products/non-steel' },
    { name: 'Fire Safety Equipment', path: '/products/non-steel' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com/indosup', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com/indosup', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/indosup', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://instagram.com/indosup', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/indosup', label: 'YouTube' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info & Quick Links */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary mb-2">IndoSup</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Revolutionizing construction procurement with digital sourcing solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product Categories</h4>
            <ul className="space-y-1">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Connect With Us</h4>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-300 text-xs">
                <MapPin className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                <span>Mumbai, Delhi, Bangalore</span>
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <Phone className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                <a href="tel:+912245678900" className="hover:text-primary transition-colors">
                  +91 22 4567 8900
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <Mail className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                <a href="mailto:info@indosup.com" className="hover:text-primary transition-colors">
                  info@indosup.com
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-neutral-dark transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <IconComponent className="w-3 h-3" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
            <p className="text-gray-300 text-xs mb-3 leading-relaxed">
              Stay updated with latest industry insights.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 text-xs"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-neutral-dark font-semibold py-2 px-3 rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-3 h-3 border-2 border-neutral-dark border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="w-3 h-3 mr-2" />
                )}
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-xs">
              © {new Date().getFullYear()} IndoSup. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200 text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}