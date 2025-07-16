import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageCircle, Clock, Building, ExternalLink, Star, Eye, Target, HeadphonesIcon, ArrowUp, ArrowDown, ChevronDown } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import contactBannerImage from '@assets/busy-woman-doing-many-things-same-time_1752497557915.jpg';
import constructionImage1 from '@assets/colleagues-working-together-call-center-office_1752497192985.jpg';
import constructionImage2 from '@assets/business-executives-discussing-with-their-colleagues-whiteboa_1752497243265.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  // Contact form submission mutation
  const contactMutation = useMutation({
    mutationFn: async (contactData) => {
      const response = await apiRequest('POST', '/api/contact', contactData);
      if (!response.ok) throw new Error('Failed to submit contact form');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Your message has been sent successfully! We'll get back to you soon." });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to send your message. Please try again.", variant: "destructive" });
    },
  });

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
    contactMutation.mutate(formData);
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
      <section className="py-5 md:py-8 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
              Get In Touch With Us
            </h2>
            <div className="w-16 h-1 bg-[#0D9488] mx-auto"></div>
            <p className="text-base text-[#374151] mt-4 max-w-xl mx-auto leading-relaxed">
              Ready to transform your construction projects? Let's discuss your requirements and build something amazing together.
            </p>
          </motion.div>

          {/* Contact Form and Images Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="contact-form-section">
            
            {/* Left Side - Single Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              {/* Customer Support Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group w-full">
                <img 
                  src={constructionImage1} 
                  alt="Professional customer support team in call center"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                  <p className="text-sm">Dedicated support team ready to assist with your queries</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#E0E0E0] rounded-2xl p-8 shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6 text-center">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#64748B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all duration-300 bg-[#E0E0E0]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#64748B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all duration-300 bg-[#E0E0E0]"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#64748B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all duration-300 bg-[#E0E0E0]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#64748B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all duration-300 bg-[#E0E0E0]"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#64748B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] transition-all duration-300 resize-none bg-[#E0E0E0]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-[#0D9488] text-[#FFFFFF] font-bold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:scale-105"
                  whileHover={{ scale: contactMutation.isPending ? 1 : 1.05 }}
                  whileTap={{ scale: contactMutation.isPending ? 1 : 0.98 }}
                >
                  {contactMutation.isPending ? (
                    <div className="w-5 h-5 border-2 border-[#FFFFFF] border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-5 md:py-8 bg-[#E5E7EB]" id="find-us-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
              Find Us
            </h2>
            <div className="w-16 h-1 bg-[#0D9488] mx-auto"></div>
            <p className="text-base text-[#374151] mt-4 max-w-xl mx-auto leading-relaxed">
              Visit our offices across India for personalized consultation and support.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                variants={itemVariants}
                className="bg-[#E0E0E0] rounded-2xl p-6 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1E3A8A] group-hover:text-[#0D9488] transition-colors duration-300">
                    {office.city}
                  </h3>
                  <Building className="w-6 h-6 text-[#0D9488]" />
                </div>
                
                <p className="text-sm font-medium text-[#1E3A8A] mb-3">
                  {office.title}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#0D9488] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#374151] leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-sm text-[#374151] hover:text-[#0D9488] transition-colors duration-300 hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-sm text-[#374151] hover:text-[#0D9488] transition-colors duration-300 hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                    <p className="text-sm text-[#374151]">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-5 md:py-8 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
              Quick Contact
            </h2>
            <div className="w-16 h-1 bg-[#0D9488] mx-auto"></div>
            <p className="text-base text-[#374151] mt-4 max-w-xl mx-auto leading-relaxed">
              Need immediate assistance? Connect with us directly through these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#E0E0E0] rounded-2xl p-6 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1E3A8A] group-hover:text-[#0D9488] transition-colors duration-300">
                  Phone Support
                </h3>
                <HeadphonesIcon className="w-6 h-6 text-[#0D9488]" />
              </div>
              
              <p className="text-[#374151] mb-4 leading-relaxed">
                Speak directly with our construction experts for immediate assistance with your projects.
              </p>
              
              <a
                href="tel:+912244567890"
                className="inline-flex items-center justify-center w-full bg-[#0D9488] text-[#FFFFFF] font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 22 4456 7890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#E0E0E0] rounded-2xl p-6 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1E3A8A] group-hover:text-[#0D9488] transition-colors duration-300">
                  Email Support
                </h3>
                <MessageCircle className="w-6 h-6 text-[#0D9488]" />
              </div>
              
              <p className="text-[#374151] mb-4 leading-relaxed">
                Send us detailed project requirements and get comprehensive solutions from our team.
              </p>
              
              <a
                href="mailto:support@indosup.com"
                className="inline-flex items-center justify-center w-full bg-[#0D9488] text-[#FFFFFF] font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: support@indosup.com
              </a>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-lg font-bold text-[#1E3A8A] mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#E0E0E0] rounded-full flex items-center justify-center text-[#1E3A8A] hover:bg-[#0D9488] hover:text-[#FFFFFF] transition-all duration-300 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}