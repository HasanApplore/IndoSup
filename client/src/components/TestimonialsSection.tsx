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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4 md:mb-6 font-inter">
            What Our Clients Say
          </h2>
          <div className="w-24 md:w-32 h-1 bg-primary mx-auto"></div>
          <p className="text-base md:text-lg text-neutral-base mt-4 md:mt-6 max-w-2xl mx-auto">
            Hear from industry leaders who trust IndoSup for their construction procurement needs
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-x-20 translate-y-20"></div>
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
                  className="flex justify-center mb-8"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{currentIndex + 1}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.blockquote
                  className="text-lg md:text-xl lg:text-2xl text-accent font-medium leading-relaxed mb-10 max-w-4xl mx-auto relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="text-primary text-6xl font-bold absolute -top-4 -left-4 opacity-20">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-primary text-6xl font-bold absolute -bottom-6 -right-4 opacity-20">"</span>
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  className="flex flex-col items-center justify-center space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <svg className="w-6 h-6 text-primary fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Client Logo */}
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {testimonials[currentIndex].logo}
                    </div>

                    {/* Client Details */}
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-accent mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-neutral-base font-medium mb-1">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-primary font-semibold text-lg">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-accent hover:text-white hover:bg-primary hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-accent hover:text-white hover:bg-primary hover:shadow-2xl transition-all duration-300 z-10 hover:scale-110"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Testimonial Counter */}
        <div className="flex justify-center mt-8">
          <div className="px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm font-medium text-neutral-base">
              {currentIndex + 1} of {testimonials.length} testimonials
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}