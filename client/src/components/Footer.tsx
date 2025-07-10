import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import indosupLogo from '@assets/Frame-9-2-removebg-preview_1752126166290.png';

export default function Footer() {

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
    { icon: FaFacebook, url: 'https://www.facebook.com/IndoSup/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/indosupofficial/', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/indosup/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Company Info & Quick Links */}
          <div>
            <div className="mb-4">
              <img 
                src={indosupLogo} 
                alt="IndoSup Logo" 
                className="h-8 w-auto mb-2"
              />
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
              <div className="flex items-start text-gray-300 text-xs">
                <MapPin className="w-3 h-3 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>C-120, 2nd Floor, Sector 2<br />Noida, Uttar Pradesh - 201301</span>
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <Phone className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span>Sales Queries: <a href="tel:+918802114204" className="hover:text-primary transition-colors">+91 880 211 4204</a></span>
                  <span>Partner with us: <a href="tel:+918368825766" className="hover:text-primary transition-colors">+91 836 882 5766</a></span>
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <Mail className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                <a href="mailto:sales@indosup.com" className="hover:text-primary transition-colors">
                  sales@indosup.com
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


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-3">
          <div className="flex justify-center items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-xs">
              © {new Date().getFullYear()} IndoSup. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}