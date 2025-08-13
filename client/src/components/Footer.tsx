import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logoImage from '@/assets/indosup-logo-new.png';
import logoImage2 from '@/assets/logoImage2.svg';
import brochuresPdf from "../assets/bronchure.pdf"

export default function Footer() {

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Initiatives', path: '/new-initiatives' },
    { name: 'Media', path: '/media' },
    { name: 'Careers', path: '/careers' },
    { name: 'Brochures', path: '/brochures' }
  ];

  const productCategories = [
    { name: 'Steel Products', path: '/products/steel' },
    { name: 'Non-Steel Products', path: '/products/non-steel' },
    { name: 'Solar Products', path: '/products/solar' },
    { name: 'Pipes & Fittings', path: '/products/steel#pipes-fittings' },
    { name: 'Electrical Components', path: '/products/non-steel#electrical-components' },
    { name: 'Fire Safety Equipment', path: '/products/non-steel#fire-fighting-systems' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/IndoSup/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/indosupofficial/', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/indosup/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-dark via-gray-900 to-neutral-dark text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Company Info & Quick Links - Positioned at far left */}
          <div className="flex-shrink-0 w-full lg:w-auto pl-4 sm:pl-6 lg:pl-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Link to="/" className="block">
                <img
                  src={logoImage2}
                  alt="IndoSup Logo"
                  className="h-8 sm:h-10 lg:h-12 w-auto filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                />
              </Link>
            </div>

            <div className="flex-1 mt-6">
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white flex items-center">
                <div className="w-1 h-4 sm:h-6 bg-primary mr-2 sm:mr-3 rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                                         {
                       link.name === 'Bronchures' ? (
                         <a 
                           href={brochuresPdf} 
                           target="_blank" 
                           className="text-gray-300 hover:text-primary transition-all duration-300 text-xs sm:text-sm flex items-center group"
                         >
                           <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 sm:group-hover:w-3 group-hover:mr-1 sm:group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                           {link.name}
                         </a>
                       ) : (
                         <Link
                           to={link.path}
                           className="text-gray-300 hover:text-primary transition-all duration-300 text-xs sm:text-sm flex items-center group"
                         >
                           <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 sm:group-hover:w-3 group-hover:mr-1 sm:group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                           {link.name}
                         </Link>
                       )
                     }
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rest of content - Product Categories and Contact Info */}
          <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl lg:ml-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              {/* Product Categories */}
              <div className="h-full flex flex-col lg:col-span-1">
                <div className="flex-1">
                  <h4 className="text-base font-bold mb-4 text-white flex items-center">
                    <div className="w-1 h-6 bg-primary mr-3 rounded-full"></div>
                    Product Categories
                  </h4>
                  <ul className="space-y-3">
                    {productCategories.map((category, index) => (
                      <li key={index}>
                        <Link
                          to={category.path}
                          className="text-gray-300 hover:text-primary transition-all duration-300 text-sm flex items-center group"
                        >
                          <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Info & Social Media */}
              <div className="h-full flex flex-col lg:col-span-2">
                <div className="flex-1">
                  {/* Find Us Section with Map */}
                  <div className="flex flex-col lg:flex-row gap-8 h-full">
                    {/* Contact Information */}
                    <div className="lg:w-1/2 flex flex-col">
                      <h4 className="text-base font-bold mb-4 text-white flex items-center">
                        <div className="w-1 h-6 bg-primary mr-3 rounded-full"></div>
                        Find Us
                      </h4>
                      <div className="space-y-5 flex-1">
                        <div className="flex items-start text-gray-300 text-sm group">
                          <MapPin className="w-5 h-5 mr-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="leading-relaxed">C-120, 2nd Floor, Sector 2<br />Noida, Uttar Pradesh - 201301</span>
                        </div>
                        <div className="flex items-start text-gray-300 text-sm group">
                          
                          <span className="leading-relaxed ml-9">PRIDE PLAZA HOTEL AIRPORT AREA ,Pride Plaza Hotel Aerocity New Delhi, INNOV8 COWORKING Building No./Flat No.: H43F plus 65, Delhi Aerocity New Delhi</span>
                        </div>
                        <div className="flex items-start text-gray-300 text-sm group">
                          <Phone className="w-5 h-5 mr-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div className="flex flex-col space-y-1">
                            <span>Sales Queries: <a href="tel:+918802114204" className="hover:text-primary transition-colors font-medium">+91 880 211 4204</a></span>
                            <span>Partner with us: <a href="tel:+918368825766" className="hover:text-primary transition-colors font-medium">+91 836 882 5766</a></span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm group">
                          <Mail className="w-5 h-5 mr-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <a href="mailto:sales@indosup.com" className="hover:text-primary transition-colors font-medium">
                            sales@indosup.com
                          </a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4 pl-9 mt-auto">
                          {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                              <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-primary hover:to-primary/80 hover:text-neutral-dark transition-all duration-300 shadow-lg hover:shadow-primary/25"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                title={social.label}
                              >
                                <IconComponent className="w-4 h-4" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="lg:w-1/2">
                      <div className="rounded-xl overflow-hidden shadow-xl border border-gray-600 h-full min-h-[280px]">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6761247077843!2d77.31138977550396!3d28.594424775690374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a9e9a4c9a7%3A0x1c2b5a3b4c5d6e7f!2sH8M8%2BM8%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: '280px' }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-xl filter brightness-90 hover:brightness-100 transition-all duration-300"
                          title="IndoSup Office Location - H8M8+M8 Noida, Uttar Pradesh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 relative z-10">
          <div className="flex justify-center items-center">
            {/* Copyright */}
            <div className="text-gray-300 text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} <span className="text-primary font-bold">IndoSup</span>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}