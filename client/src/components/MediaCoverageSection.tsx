import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';

export default function MediaCoverageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const mediaItems = [
    {
      id: 1,
      source: "Economic Times",
      headline: "IndoSup Revolutionizes Construction Procurement with Digital Platform",
      date: "2024",
      icon: <Newspaper className="w-6 h-6" />
    },
    {
      id: 2,
      source: "Business Standard",
      headline: "Digital Transformation in Construction: IndoSup Leads the Way",
      date: "2024",
      icon: <Newspaper className="w-6 h-6" />
    },
    {
      id: 3,
      source: "Construction World",
      headline: "Streamlining Material Procurement Through Technology",
      date: "2024",
      icon: <Newspaper className="w-6 h-6" />
    },
    {
      id: 4,
      source: "India Today",
      headline: "IndoSup's Innovation in Supply Chain Management",
      date: "2024",
      icon: <Newspaper className="w-6 h-6" />
    },
    {
      id: 5,
      source: "Financial Express",
      headline: "Construction Tech: The Future of Material Sourcing",
      date: "2024",
      icon: <Newspaper className="w-6 h-6" />
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Media Coverage
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto">
            Stay updated with our latest news and industry recognition
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent text-sm">{item.source}</h4>
                    <p className="text-xs text-neutral-base">{item.date}</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-accent leading-tight">
                  {item.headline}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}