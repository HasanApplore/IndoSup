import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                Send us a Message
              </h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-accent font-bold py-4 px-6 rounded-lg hover:bg-[#828d99] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                  Get in Touch
                </h2>
                <div className="w-16 h-1 bg-primary mb-8"></div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <motion.a
                  href="tel:+912245678900"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-accent transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-6 h-6 text-primary group-hover:text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-neutral-base group-hover:text-accent">+91 22 4567 8900</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@indosup.com"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-accent transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-6 h-6 text-primary group-hover:text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-neutral-base group-hover:text-accent">info@indosup.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/912245678900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-accent transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageCircle className="w-6 h-6 text-primary group-hover:text-accent mr-4" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-neutral-base group-hover:text-accent">Chat with us instantly</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-accent mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-accent hover:bg-primary hover:text-accent hover:scale-110 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-inter">
              Our Offices
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-neutral-base mt-6 max-w-2xl mx-auto">
              Visit us at any of our offices across India for in-person consultations and support.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {offices.map((office) => (
              <motion.div
                key={office.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">{office.city}</h3>
                    <p className="text-sm text-primary font-medium">{office.title}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-neutral-base text-sm leading-relaxed">{office.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <a href={`tel:${office.phone}`} className="text-accent hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a href={`mailto:${office.email}`} className="text-accent hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <p className="text-neutral-base text-sm">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-inter">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-neutral-base mt-6 max-w-2xl mx-auto">
              Locate our offices and plan your visit with our interactive map.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992833!2d72.74109919726561!3d19.08252215967138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IndoSup Office Locations"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}