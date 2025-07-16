import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, FileText, Calendar, Tag, ArrowRight, ArrowDown, ArrowUp, Star, Eye, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
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

  // Fetch catalogues from database
  const { data: catalogues = [], isLoading, error } = useQuery({
    queryKey: ['/api/catalogues'],
    queryFn: async () => {
      const response = await fetch('/api/catalogues');
      if (!response.ok) {
        throw new Error('Failed to fetch catalogues');
      }
      return response.json();
    }
  });

  // Extract unique categories and years from database data
  const categories = [...new Set(catalogues.map(catalogue => catalogue.category))];
  const years = [...new Set(catalogues.map(catalogue => 
    new Date(catalogue.createdAt).getFullYear().toString()
  ))].sort().reverse();

  // Use hardcoded data as fallback if no database data
  const hardcodedCatalogues = [
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

  // Use database data if available, otherwise use hardcoded data
  const catalogueData = catalogues.length > 0 ? catalogues.map(catalogue => ({
    ...catalogue,
    year: new Date(catalogue.createdAt).getFullYear().toString(),
    lastUpdated: new Date(catalogue.updatedAt).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    }),
    size: catalogue.fileSize ? `${(catalogue.fileSize / 1024 / 1024).toFixed(1)} MB` : 'N/A',
    pages: 'N/A',
    downloadCount: 0 // This would come from actual download tracking
  })) : hardcodedCatalogues;

  const filteredCatalogues = catalogueData.filter(catalog => {
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
    <div className="min-h-screen bg-[#2A374B] relative overflow-hidden">
      {/* Hero Section */}
      <section 
        className={`hero-section relative h-[55vh] flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out ${
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
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8" style={{ color: '#ffffff' }}>
              Product Catalogues
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
            Comprehensive Product Specifications & Downloads
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            Browse Catalogues
          </motion.button>
        </div>


      </section>

      {/* Main Content */}
      <section 
        id="catalogues-content"
        className={`py-8 md:py-12 bg-[#2a374b] transition-all duration-700 ease-out ${
          heroAnimated ? 'mt-0' : 'mt-0'
        } relative overflow-hidden`}
        style={{ 
          position: 'relative',
          zIndex: heroAnimated ? 50 : 'auto'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-[#FFC600]/10 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-[#FFC600]/5 rounded-full blur-2xl"
            animate={{
              y: [10, -30, 10],
              x: [5, -15, 5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg"
            animate={{
              y: [0, -40, 0],
              x: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#FFC600]/5 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFC600] mb-3 md:mb-4">
              Download Product Catalogues
            </h2>
            <p className="text-[#F5F5F5] text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
              Access detailed specifications, pricing, and technical documentation for all construction materials
            </p>
          </motion.div>


          {/* Search and Filters */}
          <motion.div 
            className="bg-[#3C4A5E] rounded-2xl shadow-lg p-6 mb-8 backdrop-blur-sm border border-[#FFC600]/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(255, 198, 0, 0.1)",
              y: -2
            }}
          >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC600]/5 via-transparent to-[#FFC600]/5 pointer-events-none" />
            
            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FFC600]/10 to-transparent rounded-full blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FFC600]/10 to-transparent rounded-full blur-sm"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F5F5F5] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search catalogues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#475466] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] transition-all duration-300 bg-[#2A374B] text-[#F5F5F5] placeholder-[#F5F5F5]/60 shadow-sm hover:shadow-md hover:border-[#FFC600]/30"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F5F5F5] w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border-2 border-[#475466] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] bg-[#2A374B] text-[#F5F5F5] appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FFC600]/30"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="relative min-w-[150px]">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F5F5F5] w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border-2 border-[#475466] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] bg-[#2A374B] text-[#F5F5F5] appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FFC600]/30"
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
            <p className="text-[#F5F5F5]">
              Showing {displayedCatalogues.length} of {filteredCatalogues.length} catalogues
              {filteredCatalogues.length !== catalogues.length && (
                <span className="text-[#FFC600]"> (filtered from {catalogues.length} total)</span>
              )}
            </p>
          </div>

          {/* Loading Animation */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="animate-pulse">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                      <div className="w-20 h-6 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-6 bg-white/20 rounded"></div>
                      <div className="w-3/4 h-4 bg-white/20 rounded"></div>
                      <div className="w-1/2 h-4 bg-white/20 rounded"></div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="w-full h-4 bg-white/20 rounded"></div>
                      <div className="w-full h-4 bg-white/20 rounded"></div>
                      <div className="w-full h-4 bg-white/20 rounded"></div>
                    </div>
                    <div className="mt-6 w-full h-12 bg-white/20 rounded-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Catalogues Grid */}
          {!isLoading && (
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
                className="bg-[#3C4A5E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-[#475466] hover:border-[#FFC600] relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(255, 198, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FFC600]/5 via-transparent to-[#FFC600]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-transparent via-[#FFC600]/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#FFC600]/10 rounded-xl flex items-center justify-center text-[#FFC600] group-hover:bg-[#FFC600] group-hover:text-[#2A374B] transition-all duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-[#F5F5F5]">
                    <Tag className="w-4 h-4" />
                    <span>{catalog.category}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#FFC600] mb-3 line-clamp-2 group-hover:text-[#FFC600] transition-colors duration-300">
                  {catalog.title}
                </h3>

                <p className="text-[#F5F5F5] leading-relaxed mb-4 line-clamp-3">
                  {catalog.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F5F5F5]">Size:</span>
                    <span className="font-medium text-[#FFC600]">{catalog.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F5F5F5]">Pages:</span>
                    <span className="font-medium text-[#FFC600]">{catalog.pages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F5F5F5]">Updated:</span>
                    <span className="font-medium text-[#FFC600]">{catalog.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F5F5F5]">Downloads:</span>
                    <span className="font-medium text-[#FFC600]">{catalog.downloadCount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Download Button */}
                <motion.button
                  onClick={() => handleDownload(catalog)}
                  className="w-full bg-[#FFC600] text-[#2A374B] font-semibold py-3 px-4 rounded-lg hover:bg-[#E6B200] hover:text-[#2A374B] transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </motion.button>
                </div>
              </motion.div>
            ))}
            </motion.div>
          )}

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
                className="px-8 py-4 bg-[#FFC600] text-[#2a374b] font-bold rounded-xl hover:bg-white hover:text-[#2a374b] transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#FFC600] hover:border-[#FFC600] relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 198, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                <span className="relative z-10 flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-2" />
                  View More Catalogues ({filteredCatalogues.length - displayCount} remaining)
                </span>
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
              <div className="w-24 h-24 bg-[#3C4A5E] rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-[#F5F5F5]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFC600] mb-2">No Catalogues Found</h3>
              <p className="text-[#F5F5F5] max-w-md mx-auto">
                Try adjusting your search terms or filters to find the catalogues you're looking for.
              </p>
            </motion.div>
          )}

          {/* Back to Top Arrow */}
          {showBackToTop && (
            <motion.button
              className="fixed bottom-6 right-6 w-12 h-12 bg-[#FFC600] text-[#2A374B] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-[#E6B200] z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => {
                if (heroAnimated) {
                  setHeroAnimated(false);
                }
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </div>
      </section>


    </div>
  );
}