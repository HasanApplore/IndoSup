import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, FileText, Calendar, Tag } from 'lucide-react';

export default function Catalogues() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

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
            Product Catalogues
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Download comprehensive product catalogs with detailed specifications, pricing, and technical documentation 
            for all your construction procurement needs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search catalogues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white appearance-none"
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
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white appearance-none"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-neutral-base">
              Showing {filteredCatalogues.length} of {catalogues.length} catalogues
            </p>
          </div>

          {/* Catalogues Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCatalogues.map((catalog) => (
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Need Custom Specifications?
            </h2>
            <p className="text-lg text-neutral-base mb-8 leading-relaxed">
              Can't find exactly what you're looking for? Our team can create custom product 
              specifications and catalogs tailored to your specific project requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Custom Catalog
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}