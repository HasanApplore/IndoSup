import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import contactBannerImage from '@assets/image_1752154570513.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      id: 1,
      city: "Mumbai",
      title: "Head Office",
      address: "1201, Tower A, Peninsula Business Park, Ganpatrao Kadam Marg, Lower Parel, Mumbai - 400013",
      phone: "+91 22 4567 8900",
      email: "mumbai@indosup.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      id: 2,
      city: "Delhi",
      title: "North India Office",
      address: "Unit 801, Unitech Cyber Park, Sector 39, Gurugram, Haryana - 122002",
      phone: "+91 124 456 7890",
      email: "delhi@indosup.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      id: 3,
      city: "Bangalore",
      title: "South India Office",
      address: "Floor 10, RMZ Ecoworld, Devarabeesanahalli, Outer Ring Road, Bangalore - 560103",
      phone: "+91 80 4567 8901",
      email: "bangalore@indosup.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com/indosup", label: "Facebook" },
    { icon: FaTwitter, url: "https://twitter.com/indosup", label: "Twitter" },
    { icon: FaLinkedin, url: "https://linkedin.com/company/indosup", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://instagram.com/indosup", label: "Instagram" },
    { icon: FaYoutube, url: "https://youtube.com/indosup", label: "YouTube" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-[#FFD700] text-accent py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactBannerImage}
            alt="Contact Us - Customer Service Representative"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-accent/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to transform your construction procurement? Get in touch with our team to discuss 
            your project requirements and discover how IndoSup can streamline your operations.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
                Send us a Message
              </h2>
              <div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-accent font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-5 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 font-inter">
              Find Us
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-base text-neutral-base mt-4 max-w-xl mx-auto">
              Visit our office at C-120, 2nd Floor, Sector 2, Noida, Uttar Pradesh - 201301
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-64 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6167887896447!2d77.3100975!3d28.5984463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc3b7!2sC-120%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1673123456789&markers=color:red%7Clabel:IndoSup%7C28.5984463,77.3100975"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IndoSup Office Location - C-120, 2nd Floor, Sector 2, Noida"
              />
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-accent">IndoSup Office</span>
                </div>
                <p className="text-xs text-neutral-base mt-1">C-120, 2nd Floor, Sector 2</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}