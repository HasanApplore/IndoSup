import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Filter, Search } from 'lucide-react';

export default function Media() {
  const [activeTab, setActiveTab] = useState('media-coverage');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: 'media-coverage', label: 'Media Coverage' },
    { id: 'awards', label: 'Awards' },
    { id: 'newsletters', label: 'Newsletters' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'case-studies', label: 'Case Studies' }
  ];

  const mediaCoverage = [
    {
      id: 1,
      title: "IndoSup Raises $50M Series B to Revolutionize Construction Procurement",
      preview: "Leading construction procurement platform secures significant funding to expand operations across India and enhance AI-driven solutions.",
      date: "December 2024",
      category: "Funding",
      source: "Economic Times",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Digital Transformation in Construction: IndoSup's Success Story",
      preview: "How IndoSup is leveraging technology to streamline construction material procurement and reduce project delays.",
      date: "November 2024",
      category: "Technology",
      source: "Construction Week",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "IndoSup Partners with Top Steel Manufacturers for Pan-India Coverage",
      preview: "Strategic partnerships established to ensure consistent supply chain and competitive pricing across all major Indian markets.",
      date: "October 2024",
      category: "Partnerships",
      source: "Steel Today",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best Construction Tech Startup 2024",
      preview: "Recognized for innovative approach to construction procurement automation and exceptional growth trajectory.",
      date: "November 2024",
      category: "Technology",
      source: "India Construction Awards",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Digital Innovation Excellence Award",
      preview: "Honored for transforming traditional construction procurement through cutting-edge digital solutions.",
      date: "September 2024",
      category: "Innovation",
      source: "Tech Innovation Council",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Startup of the Year - Construction Category",
      preview: "Awarded for outstanding performance in revolutionizing construction material sourcing and procurement processes.",
      date: "August 2024",
      category: "Business",
      source: "Indian Startup Awards",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const newsletters = [
    {
      id: 1,
      title: "IndoSup Monthly - December 2024",
      preview: "Year-end review, new product launches, market insights, and upcoming features for construction professionals.",
      date: "December 2024",
      category: "Monthly",
      source: "IndoSup Newsletter",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Construction Market Trends - Q4 2024",
      preview: "Comprehensive analysis of steel prices, demand forecasts, and procurement strategies for the construction sector.",
      date: "November 2024",
      category: "Market Analysis",
      source: "IndoSup Research",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Technology Update - AI in Procurement",
      preview: "Latest developments in AI-powered procurement solutions and their impact on construction project efficiency.",
      date: "October 2024",
      category: "Technology",
      source: "IndoSup Tech Team",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "5 Ways Digital Procurement is Transforming Construction",
      preview: "Explore how digital transformation is reshaping construction procurement processes and driving efficiency gains.",
      date: "December 2024",
      category: "Digital Transformation",
      source: "IndoSup Blog",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Steel Price Volatility: Strategies for Construction Companies",
      preview: "Expert insights on managing steel price fluctuations and optimizing procurement strategies in volatile markets.",
      date: "November 2024",
      category: "Market Strategy",
      source: "IndoSup Insights",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Sustainable Construction: Green Procurement Practices",
      preview: "How construction companies can adopt sustainable procurement practices without compromising on quality or costs.",
      date: "October 2024",
      category: "Sustainability",
      source: "IndoSup Green Team",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Metro Rail Project: 40% Cost Reduction Through Smart Procurement",
      preview: "How IndoSup helped a major metro rail project achieve significant cost savings through optimized procurement strategies.",
      date: "November 2024",
      category: "Infrastructure",
      source: "IndoSup Case Study",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "High-Rise Development: Streamlined Multi-Site Procurement",
      preview: "Success story of managing procurement for 12 simultaneous construction sites with centralized coordination.",
      date: "October 2024",
      category: "Commercial",
      source: "IndoSup Success Stories",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Industrial Complex: Zero-Delay Material Delivery",
      preview: "How predictive analytics and supply chain optimization ensured on-time delivery for critical industrial project.",
      date: "September 2024",
      category: "Industrial",
      source: "IndoSup Analytics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const contentMap = {
    'media-coverage': mediaCoverage,
    'awards': awards,
    'newsletters': newsletters,
    'blogs': blogs,
    'case-studies': caseStudies
  };

  const currentContent = contentMap[activeTab] || [];

  const filteredContent = currentContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || item.category.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const categories = [...new Set(currentContent.map(item => item.category))];

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
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Media & Resources - News and Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-24 h-24 bg-primary/25 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-36 h-36 bg-primary/35 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.6, 0.2],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-inter text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Media & Resources
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our latest news, insights, and success stories from the construction industry.
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Stay informed with our comprehensive coverage of industry developments and achievements.
          </motion.p>
          
          {/* Scroll indicator */}
          <motion.div
            className="mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              className="w-12 h-12 border-2 border-white/70 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:border-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              onClick={() => {
                const contentSection = document.getElementById('media-content');
                if (contentSection) {
                  const heroSection = document.querySelector('.hero-section');
                  if (heroSection) {
                    heroSection.style.transform = 'translateY(-100vh)';
                    heroSection.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                  }
                  setTimeout(() => {
                    contentSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }, 400);
                }
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </motion.div>
            <motion.p
              className="text-white/70 text-sm mt-3 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Explore Content
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="media-content" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 md:mb-4">
              Explore Our Content
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
              Browse through our comprehensive collection of media coverage, achievements, and industry insights
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setIsLoading(true);
                  setActiveTab(tab.id);
                  setTimeout(() => setIsLoading(false), 300);
                }}
                className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold transition-all duration-300 relative overflow-hidden text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-primary text-accent shadow-lg border-2 border-primary'
                    : 'bg-white text-neutral-base hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, news, and resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white shadow-sm hover:shadow-md hover:border-gray-300 text-sm md:text-base"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="pl-12 pr-8 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white shadow-sm transition-all duration-300 min-w-[160px] md:min-w-[180px] hover:shadow-md hover:border-gray-300 text-sm md:text-base"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Content Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Results Count */}
              <motion.div
                className="col-span-full mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                    Loading content...
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm">
                    Showing {filteredContent.length} {filteredContent.length === 1 ? 'result' : 'results'}
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                )}
              </motion.div>
              {filteredContent.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 relative cursor-pointer"
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-accent px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-center text-gray-500 text-xs md:text-sm mb-3 md:mb-4">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">{item.source}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-accent mb-2 md:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight hover:underline">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 text-xs md:text-sm">
                      {item.preview}
                    </p>

                    <div className="flex items-center justify-between">
                      <motion.button
                        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300 text-xs md:text-sm group-hover:bg-primary/10 px-2 md:px-3 py-1.5 md:py-2 rounded-lg transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-1 md:mr-2">Read More</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                      
                      {/* Engagement Icons */}
                      <div className="flex items-center gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Add to favorites"
                        >
                          <Tag className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                        </motion.button>
                        <motion.button
                          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Share"
                        >
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredContent.length === 0 && (
            <motion.div
              className="text-center py-12 md:py-16 px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">No Content Found</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Try adjusting your search terms or filter selection.
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="px-4 md:px-6 py-2.5 md:py-3 bg-primary text-accent rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>


    </div>
  );
}