import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, ExternalLink, Calendar, TrendingUp, Award, Zap, Quote, X } from 'lucide-react';

// Import newspaper images
import newspaper1 from '@/assets/newspaper-1.png';
import newspaper2 from '@/assets/newspaper-2.webp';

export default function MediaCoverageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const mediaItems = [
    {
      id: 1,
      source: "The Daily Marketer",
      headline: "ATTENTION CONTENT MARKETERS",
      description: "Breaking message from journalism industry: We have work to do. Digital platform transforms traditional construction material sourcing with AI-powered solutions",
      date: "June 2014",
      category: "Technology",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-blue-600 to-purple-600",
      quote: "Game-changer in procurement technology",
      image: newspaper1,
      fullContent: "I've got buckets. I call it S-School buckets. Let me be clear: marketers need to get around. Thousands of people have graduated from journalism school in the years since the financial crisis and the collapse of the 'old media' model..."
    },
    {
      id: 2,
      source: "The Newspaper Line", 
      headline: "BUSINESS REVIEW ON DIGITAL MARKETING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis nibh. How IndoSup is setting new industry standards for material procurement efficiency",
      date: "Nov 2024",
      category: "Business",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-green-600 to-teal-600",
      quote: "Leading innovation in construction tech",
      image: newspaper2,
      fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis nibh. Proin varius tincidunt molestie. Phasellus et congue erat. Proin vitae urna nisl. Nam tristique eget odio quis pellentesque..."
    },
    {
      id: 3,
      source: "Construction World",
      headline: "Streamlining Material Procurement",
      description: "Technology-driven approach reduces costs and improves delivery timelines significantly",
      date: "Nov 2024", 
      category: "Industry",
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-orange-600 to-red-600",
      quote: "Efficiency meets innovation",
      image: newspaper1,
      fullContent: "Technology-driven approach reduces costs and improves delivery timelines significantly. Advanced procurement systems streamline the entire supply chain process..."
    },
    {
      id: 4,
      source: "India Today",
      headline: "Supply Chain Management Innovation",
      description: "Advanced analytics and automation reshape construction material supply chains",
      date: "Oct 2024",
      category: "Innovation",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-purple-600 to-pink-600",
      quote: "Future of supply chain management",
      image: newspaper2,
      fullContent: "Advanced analytics and automation reshape construction material supply chains. Machine learning algorithms optimize inventory management and predict demand patterns..."
    },
    {
      id: 5,
      source: "Financial Express",
      headline: "Construction Tech Investment Surge", 
      description: "Growing investor confidence in digital procurement platforms drives market expansion",
      date: "Oct 2024",
      category: "Finance",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-indigo-600 to-blue-600",
      quote: "Smart investment in construction future",
      image: newspaper1,
      fullContent: "Growing investor confidence in digital procurement platforms drives market expansion. Venture capital funding in construction technology reaches new heights..."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Media Says About Us
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read what top media outlets and publications write about our work and achievements
          </p>
        </motion.div>

        {/* Main Feature Card */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${mediaItems[activeIndex].gradient} rounded-3xl blur opacity-20`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    {/* Source and Category */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${mediaItems[activeIndex].gradient} rounded-xl p-3`}>
                        {mediaItems[activeIndex].icon}
                      </div>
                      <div>
                        <h4 className="text-primary font-bold text-lg">{mediaItems[activeIndex].source}</h4>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {mediaItems[activeIndex].date} • {mediaItems[activeIndex].category}
                        </p>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {mediaItems[activeIndex].headline}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {mediaItems[activeIndex].description}
                    </p>

                    {/* Quote */}
                    <div className="flex items-start gap-3 mb-8">
                      <Quote className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-primary font-semibold text-lg italic">
                        "{mediaItems[activeIndex].quote}"
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedArticle(mediaItems[activeIndex])}
                      className={`bg-gradient-to-r ${mediaItems[activeIndex].gradient} text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className={`w-full h-64 bg-gradient-to-br ${mediaItems[activeIndex].gradient} rounded-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30"></div>
                      {/* Newspaper/Article Background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          {/* Newspaper layout */}
                          <rect x="40" y="40" width="320" height="220" fill="white" rx="8"/>
                          <rect x="60" y="60" width="280" height="30" fill="#333" opacity="0.8"/>
                          <rect x="60" y="100" width="130" height="8" fill="#666" opacity="0.6"/>
                          <rect x="60" y="115" width="120" height="8" fill="#666" opacity="0.6"/>
                          <rect x="60" y="130" width="135" height="8" fill="#666" opacity="0.6"/>
                          <rect x="210" y="100" width="130" height="8" fill="#666" opacity="0.6"/>
                          <rect x="210" y="115" width="125" height="8" fill="#666" opacity="0.6"/>
                          <rect x="210" y="130" width="130" height="8" fill="#666" opacity="0.6"/>
                          <rect x="60" y="160" width="280" height="80" fill="#f0f0f0" opacity="0.7"/>
                        </svg>
                      </div>
                      <div className="relative z-10 flex items-center justify-center h-full text-center">
                        <img 
                          src={mediaItems[activeIndex].image} 
                          alt="Media Coverage" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>



        {/* Bottom Grid - Other Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {mediaItems.filter((_, index) => index !== activeIndex).slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer group transition-all duration-300 hover:bg-white/10"
              onClick={() => setSelectedArticle(item)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`bg-gradient-to-r ${item.gradient} rounded-lg p-2`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm">{item.source}</p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
              </div>
              <h4 className="text-white font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {item.headline}
              </h4>
              <p className="text-gray-400 text-sm line-clamp-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Article Popup Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 relative">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`bg-gradient-to-r ${selectedArticle.gradient} rounded-xl p-3`}>
                    {selectedArticle.icon}
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xl">{selectedArticle.source}</h4>
                    <p className="text-gray-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedArticle.date} • {selectedArticle.category}
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedArticle.headline}</h2>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Article Image */}
                  <div className="mb-6">
                    <img 
                      src={selectedArticle.image} 
                      alt={selectedArticle.headline}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  {/* Article Content */}
                  <div>
                    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mb-6">
                      <p className="text-primary font-semibold italic">
                        "{selectedArticle.quote}"
                      </p>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {selectedArticle.description}
                    </p>
                    
                    <div className="prose prose-lg text-gray-600">
                      <p>{selectedArticle.fullContent}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-6 border-t">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Published by {selectedArticle.source}</p>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}