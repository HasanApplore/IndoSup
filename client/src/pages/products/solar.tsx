import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Shield, ArrowUp, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';

import energyStorage from '../../assets/energyStorage.webp';
import miscellaneous from '../../assets/miscellaneous.png';
import mounting from '../../assets/mounting.png';
import solarInverter from '../../assets/solarInverter.png';


export default function SolarProducts() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Function to scroll to specific product sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Offset for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Solar Products - Renewable Energy Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8">
              Solar Products
            </h1>
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
            Renewable Energy & Sustainable Solutions
          </motion.p>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Solar Product Categories Section */}
      <section className="py-8 md:py-12 bg-[#3b4f69] pt-[0px] pb-[0px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFC600] mb-6">
              Solar Product Categories
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-4"></div>
            <p className="text-white/80 text-center mb-6">
              Click on any category below to view detailed product information
            </p>
          </motion.div>

          {/* Category Cards Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              onClick={() => scrollToSection('solar-panels')}
              className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-[#FFC600]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              title="Click to view Solar Panels products"
            >
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#E6B200] transition-colors duration-300">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Solar</h3>
              <p className="text-[#2A374B] text-sm font-bold">Panels</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowDown className="w-4 h-4 text-[#FFC600] mx-auto" />
              </div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('solar-inverters')}
              className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-[#FFC600]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              title="Click to view Solar Inverters products"
            >
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#E6B200] transition-colors duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Solar</h3>
              <p className="text-[#2A374B] text-sm font-bold">Inverters</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowDown className="w-4 h-4 text-[#FFC600] mx-auto" />
              </div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('mounting-racking')}
              className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-[#FFC600]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              title="Click to view Mounting & Racking Systems products"
            >
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#E6B200] transition-colors duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Mounting & Racking</h3>
              <p className="text-[#2A374B] text-sm font-bold">Systems</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowDown className="w-4 h-4 text-[#FFC600] mx-auto" />
              </div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('energy-storage')}
              className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-[#FFC600]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              title="Click to view Energy Storage products"
            >
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#E6B200] transition-colors duration-300">
                <Battery className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Energy</h3>
              <p className="text-[#2A374B] text-sm font-bold">Storage</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowDown className="w-4 h-4 text-[#FFC600] mx-auto" />
              </div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('miscellaneous-accessories')}
              className="bg-white rounded-xl p-4 shadow-lg text-center border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-[#FFC600]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              title="Click to view Miscellaneous & Accessories products"
            >
              <div className="w-10 h-10 bg-[#FFC600] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-[#E6B200] transition-colors duration-300">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2A374B] mb-1">Miscellaneous</h3>
              <p className="text-[#2A374B] text-sm font-bold">& Accessories</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowDown className="w-4 h-4 text-[#FFC600] mx-auto" />
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mt-[80px] mb-[80px]">
              <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center text-[#2A374B] mr-6">
                <Sun className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFC600]">Solar Products</h1>
                <p className="text-white/90 text-lg mt-2">Renewable energy systems and components</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solar Products Details Section */}
      <section className="py-2 md:py-4 ml-[0px] mr-[0px] mt-[-80px] mb-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solar Panels Card */}
            <motion.div
              id="solar-panels"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Solar Panels"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Solar Panels</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Specifications */}
                <div className="mb-6">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-[#2A374B] mb-2"><b>Cell & Module Types:</b></h5>
                      <div className="space-y-1 ml-4">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">Monocrystalline</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">Polycrystalline</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">Thin-Film</span>
                        </div>
                        
                        {!expandedCards['solar-panels'] && (
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                            <span className="text-sm text-gray-600">N-type Technologies...</span>
                          </div>
                        )}
                        
                        {expandedCards['solar-panels'] && (
                          <>
                            <div className="ml-4">
                              <div className="text-sm text-gray-600 mb-1">N-type Technologies:</div>
                              <div className="ml-4 space-y-1">
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">TOPCon</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">HJT</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-[#2A374B] mb-2">Specialty Modules:</h5>
                              <div className="space-y-1 ml-4">
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">Bifacial</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">Transparent PV glass</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-[#2A374B] mb-2">Encapsulation, Sealants & Adhesives:</h5>
                              <div className="space-y-1 ml-4">
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">Encapsulant films (EVA, PVB, POE)</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                                  <span className="text-sm text-gray-600">Edge sealants & moisture barriers</span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* See More Button */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleCardExpansion('solar-panels')}
                    className="text-[#FFC600] text-sm font-medium hover:text-[#E6B200] transition-colors duration-200 flex items-center"
                  >
                    {expandedCards['solar-panels'] ? (
                      <>
                        See Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        See More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Solar Inverters Card */}
            <motion.div
              id="solar-inverters"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solarInverter}
                  alt="Solar Inverters"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Solar Inverters</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#2A374B] mb-3">Solar Inverter Types:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">String Inverters</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Central Inverters</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Microinverters</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Hybrid Inverters</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Power Optimizers</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Mounting & Racking Systems Card */}
            <motion.div
              id="mounting-racking"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mounting}
                  alt="Mounting & Racking Systems"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Mounting & Racking Systems</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-[#2A374B] mb-2"><b>Roof Mounting:</b></h5>
                      <div className="space-y-1 ml-4">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">Pitched Roof Systems – Shingle, tile, metal roof attachments.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-600">Flat Roof Systems – Ballasted (non-penetrating) or penetrating mounts.</span>
                        </div>
                      </div>
                    </div>
                    
                    {!expandedCards['mounting'] && (
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                        <span className="text-sm text-gray-600">Ground Mounting...</span>
                      </div>
                    )}
                    
                    {expandedCards['mounting'] && (
                      <>
                        <div>
                          <h5 className="font-medium text-[#2A374B] mb-2"><b>Ground Mounting:</b></h5>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600">Fixed-Tilt Structures</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600">Solar Trackers – Single-axis, dual-axis </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-[#2A374B] mb-2"><b>Mounting Hardware:</b></h5>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600">Rails, mid/end clamps</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600">Flashings, tilt legs, ballast blocks</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600">Corrosion-resistant fasteners, grounding lugs</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* See More Button */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleCardExpansion('mounting')}
                    className="text-[#FFC600] text-sm font-medium hover:text-[#E6B200] transition-colors duration-200 flex items-center"
                  >
                    {expandedCards['mounting'] ? (
                      <>
                        See Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        See More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Energy Storage Card */}
            <motion.div
              id="energy-storage"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={energyStorage}
                  alt="Energy Storage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Energy Storage</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#2A374B] mb-3">Types of Energy Storage:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Lead-Acid – Flooded, AGM, Gel.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Lithium-Ion – LFP (Lithium Iron Phosphate), NMC.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Flow Batteries – Vanadium redox, zinc-bromine.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Battery racks, enclosures, and cooling/thermal management systems.</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Miscellaneous & Accessories Card */}
            <motion.div
              id="miscellaneous-accessories"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={miscellaneous}
                  alt="Miscellaneous & Accessories"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Miscellaneous & Accessories</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#2A374B] mb-3">Miscellaneous & Accessories:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Tools & Equipment: Solar panel lifters, specialized wrenches, cable strippers.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Enclosures & Boxes: NEMA-rated boxes for electrical components.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Safety Gear: Personal protective equipment (PPE) for installers.</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC600] rounded-full mr-3"></span>
                      <span className="text-sm text-gray-600">Service & Support: You might have a category for procurement services, project 
                      management, or consulting if you offer them.</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-[#FFC600] text-[#2A374B] font-semibold py-2 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center border-2 border-[#FFC600] text-[#FFC600] hover:bg-[#FFC600] hover:text-[#2A374B] transition-all duration-200 py-2 px-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}