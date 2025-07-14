import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, FileText, Calendar, Tag, ArrowRight, ArrowDown, Star, Eye, Clock } from 'lucide-react';
import steelBarsImage from "@assets/assorted-steel-bars-pipes_1077802-159331_1752217650726.jpg";

export default function Catalogues() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [displayCount, setDisplayCount] = useState(6); // Show 6 catalogues initially

  // Reset hero animation when component mounts
  useEffect(() => {
    setHeroAnimated(false);
  }, []);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(6);
  }, [searchQuery, selectedCategory, selectedYear]);

  // Add scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowBackToTop(scrolled);
      
      if (window.scrollY === 0) {
        setHeroAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['Steel Products', 'Non-Steel Products', 'Construction Materials', 'Safety Equipment', 'Tools & Equipment'];
  const years = ['2024', '2023', '2022'];

  const catalogues = [
    {
      id: 1,
      title: "Complete Steel Products Catalog 2024",
      description: "Comprehensive catalog featuring structural steel, pipes, fittings, roofing materials, doors, windows, and reinforcement products with detailed specifications, pricing, and technical drawings.",
      category: "Steel Products",
      year: "2024",
      size: "15.2 MB",
      pages: 156,
      lastUpdated: "December 2024",
      downloadCount: 2847
    },
    {
      id: 2,
      title: "Non-Steel Construction Materials Guide",
      description: "Complete guide to plumbing systems, electrical components, fire safety equipment, warehouse infrastructure, and site utilities with installation guidelines and compatibility charts.",
      category: "Non-Steel Products",
      year: "2024",
      size: "12.8 MB",
      pages: 128,
      lastUpdated: "November 2024",
      downloadCount: 1963
    },
    {
      id: 3,
      title: "TMT Bars & Reinforcement Steel Specifications",
      description: "Detailed specifications for TMT bars, rebars, reinforcement mesh, and structural steel components with grade certifications, strength parameters, and quality standards.",
      category: "Steel Products",
      year: "2024",
      size: "8.4 MB",
      pages: 84,
      lastUpdated: "October 2024",
      downloadCount: 3251
    },
    {
      id: 4,
      title: "Pipes & Fittings Technical Manual",
      description: "Technical manual covering steel pipes, PVC/CPVC pipes, fittings, valves, and joints with pressure ratings, dimensions, and installation procedures for plumbing and structural applications.",
      category: "Steel Products",
      year: "2024",
      size: "11.7 MB",
      pages: 102,
      lastUpdated: "September 2024",
      downloadCount: 2156
    },
    {
      id: 5,
      title: "Electrical Components & Systems Catalog",
      description: "Comprehensive catalog of electrical switches, panels, wiring, MCBs, RCCBs, and safety equipment with technical specifications, ratings, and compliance certifications.",
      category: "Non-Steel Products",
      year: "2024",
      size: "9.6 MB",
      pages: 95,
      lastUpdated: "August 2024",
      downloadCount: 1789
    },
    {
      id: 6,
      title: "Fire Safety & Protection Systems",
      description: "Complete guide to fire safety equipment including sprinklers, alarms, extinguishers, emergency lighting, and detection systems with installation and maintenance guidelines.",
      category: "Safety Equipment",
      year: "2024",
      size: "7.3 MB",
      pages: 68,
      lastUpdated: "July 2024",
      downloadCount: 1432
    },
    {
      id: 7,
      title: "Construction Tools & Equipment Guide",
      description: "Detailed catalog of construction tools, machinery, safety equipment, measuring instruments, and site utilities with specifications, usage guidelines, and safety protocols.",
      category: "Tools & Equipment",
      year: "2024",
      size: "13.5 MB",
      pages: 142,
      lastUpdated: "June 2024",
      downloadCount: 2034
    },
    {
      id: 8,
      title: "Roofing Materials & Solutions",
      description: "Comprehensive guide to steel roofing sheets, insulation materials, gutters, accessories, and weather protection systems with installation procedures and warranty information.",
      category: "Construction Materials",
      year: "2024",
      size: "10.1 MB",
      pages: 78,
      lastUpdated: "May 2024",
      downloadCount: 1675
    },
    {
      id: 9,
      title: "Steel Products Catalog 2023",
      description: "Previous year's comprehensive steel products catalog including structural steel, pipes, fittings, and reinforcement materials with 2023 specifications and pricing.",
      category: "Steel Products",
      year: "2023",
      size: "14.8 MB",
      pages: 148,
      lastUpdated: "December 2023",
      downloadCount: 4562
    },
    {
      id: 10,
      title: "Construction Materials Price Guide 2023",
      description: "Annual price guide covering all construction materials with market trends, regional pricing, and procurement strategies for cost-effective material sourcing.",
      category: "Construction Materials",
      year: "2023",
      size: "6.2 MB",
      pages: 52,
      lastUpdated: "November 2023",
      downloadCount: 3876
    }
  ];

  const filteredCatalogues = catalogues.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         catalog.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || catalog.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || catalog.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const displayedCatalogues = filteredCatalogues.slice(0, displayCount);
  const hasMoreCatalogues = filteredCatalogues.length > displayCount;

  const handleDownload = (catalog) => {
    // Simulate download
    console.log(`Downloading ${catalog.title}`);
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
    <div className="min-h-screen bg-gradient-to-br from-[#fbf5e8] to-white relative overflow-hidden">
      {/* Hero Section */}
      <section 
        className={`hero-section relative min-h-screen flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out ${
          heroAnimated ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ 
          position: heroAnimated ? 'fixed' : 'relative',
          top: heroAnimated ? '0' : 'auto',
          left: heroAnimated ? '0' : 'auto',
          width: heroAnimated ? '100%' : 'auto',
          zIndex: heroAnimated ? 40 : 'auto'
        }}
      >
        <div className="absolute inset-0">
          <img 
            src={steelBarsImage}
            alt="Steel Bars and Pipes - Product Catalogues"
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4" />
            <span className="font-medium">Premium Construction Materials</span>
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construction Materials
            <span className="block text-primary">Product Catalogues</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Download comprehensive product catalogs with detailed specifications and technical documentation.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white font-medium">10+ Catalogues</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Download className="w-5 h-5 text-white" />
              <span className="text-white font-medium">PDF Downloads</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Eye className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Updated 2024</span>
            </div>
          </motion.div>
          
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Everything you need for informed construction procurement decisions.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            className="cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => {
              const contentSection = document.getElementById('catalogues-content');
              if (contentSection) {
                setHeroAnimated(true);
                setTimeout(() => {
                  contentSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }, 400);
              }
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <ArrowDown className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-white text-sm font-medium">Browse Catalogues</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        id="catalogues-content"
        className={`py-8 md:py-12 bg-[#FBF5EA] transition-all duration-700 ease-out ${
          heroAnimated ? 'mt-0' : 'mt-0'
        }`}
        style={{ 
          position: 'relative',
          zIndex: heroAnimated ? 50 : 'auto'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 md:mb-4">
              Download Product Catalogues
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
              Access detailed specifications, pricing, and technical documentation for all construction materials
            </p>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">10+</h3>
              <p className="text-neutral-base text-sm">Active Catalogues</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">45K+</h3>
              <p className="text-neutral-base text-sm">Downloads</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Tag className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">5</h3>
              <p className="text-neutral-base text-sm">Categories</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-1">2024</h3>
              <p className="text-neutral-base text-sm">Latest Updates</p>
            </div>
          </motion.div>
          {/* Search and Filters */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search catalogues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white shadow-sm hover:shadow-md hover:border-primary/30"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="relative min-w-[150px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-neutral-base">
              Showing {displayedCatalogues.length} of {filteredCatalogues.length} catalogues
              {filteredCatalogues.length !== catalogues.length && (
                <span className="text-primary"> (filtered from {catalogues.length} total)</span>
              )}
            </p>
          </div>

          {/* Catalogues Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedCatalogues.map((catalog) => (
              <motion.div
                key={catalog.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-base">
                    <Tag className="w-4 h-4" />
                    <span>{catalog.category}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {catalog.title}
                </h3>

                <p className="text-neutral-base leading-relaxed mb-4 line-clamp-3">
                  {catalog.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-base">Size:</span>
                    <span className="font-medium text-accent">{catalog.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-base">Pages:</span>
                    <span className="font-medium text-accent">{catalog.pages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-base">Updated:</span>
                    <span className="font-medium text-accent">{catalog.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-base">Downloads:</span>
                    <span className="font-medium text-primary">{catalog.downloadCount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Download Button */}
                <motion.button
                  onClick={() => handleDownload(catalog)}
                  className="w-full bg-primary text-accent font-semibold py-3 px-4 rounded-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {hasMoreCatalogues && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="px-8 py-4 bg-primary text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Catalogues ({filteredCatalogues.length - displayCount} remaining)
              </motion.button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredCatalogues.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2">No Catalogues Found</h3>
              <p className="text-neutral-base max-w-md mx-auto">
                Try adjusting your search terms or filters to find the catalogues you're looking for.
              </p>
            </motion.div>
          )}

          {/* Back to Top Arrow */}
          {showBackToTop && (
            <motion.button
              className="fixed bottom-8 right-8 z-40 w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center bg-white/90 hover:bg-white hover:border-primary transition-all duration-300 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (heroAnimated) {
                  setHeroAnimated(false);
                }
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              title="Back to Top"
            >
              <ArrowRight className="w-6 h-6 text-primary -rotate-90" />
            </motion.button>
          )}
        </div>
      </section>


    </div>
  );
}