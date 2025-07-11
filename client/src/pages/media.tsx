import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Filter, Search } from 'lucide-react';

export default function Media() {
  const [activeTab, setActiveTab] = useState('media-coverage');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tabs = [
    { id: 'media-coverage', label: 'Media Coverage', icon: '📰' },
    { id: 'awards', label: 'Awards', icon: '🏆' },
    { id: 'newsletters', label: 'Newsletters', icon: '📧' },
    { id: 'blogs', label: 'Blogs', icon: '📝' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' }
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
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Media & Resources
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Stay updated with IndoSup's latest news, insights, and success stories from the construction industry.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-accent shadow-lg'
                    : 'bg-gray-100 text-neutral-base hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Content Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredContent.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-neutral-base text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.source}</span>
                    </div>

                    <h3 className="text-xl font-bold text-accent mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-neutral-base leading-relaxed mb-4 line-clamp-3">
                      {item.preview}
                    </p>

                    <motion.button
                      className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredContent.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-accent mb-2">No Content Found</h3>
              <p className="text-neutral-base">
                Try adjusting your search terms or filter selection.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Stay Updated with IndoSup
            </h2>
            <p className="text-lg text-neutral-base mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest industry insights, company updates, and construction trends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <motion.button
                className="px-6 py-3 bg-primary text-accent font-bold rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}