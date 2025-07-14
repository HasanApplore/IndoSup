import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageCircle, Clock, Building, ExternalLink, Star, Eye, Target, HeadphonesIcon, ArrowUp, ArrowDown, ChevronDown } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import contactBannerImage from '@assets/contact-page_1752235303334.png';
import constructionImage1 from '@assets/electrician-working-in-fuse-box-closeup-electrical-panel-ai-generated-photo_1752150070669.jpg';
import constructionImage2 from '@assets/assorted-steel-bars-pipes_1077802-159331_1752217650726.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToOffices = () => {
    const element = document.getElementById('find-us-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={contactBannerImage}
            alt="Contact IndoSup - Professional Construction Procurement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/25 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8" style={{ color: '#ffffff' }}>
              Contact IndoSup
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-[#F5A623] mx-auto mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Construction Support & Expert Guidance
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToContactForm}
          >
            Get in Touch
          </motion.button>
        </div>


      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Main Content */}
      <section className="py-5 md:py-8 bg-[#FBF5EA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              Get In Touch With Us
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
            <p className="text-base text-neutral-base mt-4 max-w-xl mx-auto">
              Ready to transform your construction projects? Let's discuss your requirements and build something amazing together.
            </p>
          </motion.div>

          {/* Contact Form and Images Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="contact-form-section">
            
            {/* Left Side - Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Construction Image 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src={constructionImage1} 
                  alt="Professional electrical work and construction services"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Expert Electrical Solutions</h3>
                  <p className="text-sm">Professional installation and maintenance</p>
                </div>
              </div>

              {/* Construction Image 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src={constructionImage2} 
                  alt="Quality steel bars and construction materials"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">Premium Steel Products</h3>
                  <p className="text-sm">High-quality materials for construction</p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-accent mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Sales Queries</p>
                      <a href="tel:+918802114204" className="text-accent hover:text-primary transition-colors">
                        +91 880 211 4204
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email Us</p>
                      <a href="mailto:sales@indosup.com" className="text-accent hover:text-primary transition-colors">
                        sales@indosup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Visit Us</p>
                      <p className="text-accent text-sm">
                        C-120, 2nd Floor, Sector 2<br />
                        Noida, Uttar Pradesh - 201301
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-accent font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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
    </div>
  );
}