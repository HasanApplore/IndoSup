import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "IndoSup has revolutionized our procurement process. Their digital platform and reliable supply chain have reduced our project timelines by 30%.",
      name: "Rajesh Kumar",
      position: "Project Director",
      company: "L&T Construction",
      logo: "LT",
      rating: 5
    },
    {
      quote: "Outstanding quality control and timely delivery. IndoSup's local expertise across different states has been invaluable for our pan-India projects.",
      name: "Priya Sharma",
      position: "Procurement Head",
      company: "Tata Projects",
      logo: "TP",
      rating: 5
    },
    {
      quote: "The transparency and efficiency IndoSup brings to construction procurement is unmatched. They've become our preferred sourcing partner.",
      name: "Amit Patel",
      position: "Operations Manager",
      company: "Godrej Properties",
      logo: "GP",
      rating: 5
    },
    {
      quote: "From steel to specialty materials, IndoSup's comprehensive network ensures we get the best prices without compromising on quality.",
      name: "Sunita Reddy",
      position: "Senior Engineer",
      company: "Mahindra Lifespaces",
      logo: "ML",
      rating: 5
    },
    {
      quote: "Their 24/7 support and real-time tracking have transformed how we manage our supply chain. Highly recommended for any construction company.",
      name: "Vikram Singh",
      position: "Supply Chain Lead",
      company: "Shapoorji Pallonji",
      logo: "SP",
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 md:mb-3 font-inter">
            What Our Clients Say
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-sm md:text-base text-neutral-base mt-2 md:mt-3 max-w-lg mx-auto">
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-4 md:p-6 shadow-lg overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-primary/5 rounded-full -translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 rounded-full translate-x-10 translate-y-10"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.blockquote
                  className="text-sm md:text-base lg:text-lg text-accent font-medium leading-relaxed mb-6 max-w-xl mx-auto relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="text-primary text-4xl font-bold absolute -top-2 -left-2 opacity-20">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-primary text-4xl font-bold absolute -bottom-4 -right-2 opacity-20">"</span>
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  className="flex flex-col items-center justify-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* Client Logo */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {testimonials[currentIndex].logo}
                    </div>

                    {/* Client Details */}
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-accent mb-0.5">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs text-neutral-base font-medium mb-0.5">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-primary font-semibold text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-accent hover:text-white hover:bg-primary hover:shadow-xl transition-all duration-300 z-10 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-accent hover:text-white hover:bg-primary hover:shadow-xl transition-all duration-300 z-10 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#041d33] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}