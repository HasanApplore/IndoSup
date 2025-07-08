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
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden">
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
                  className="flex justify-center mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.blockquote
                  className="text-lg md:text-xl lg:text-2xl text-accent font-medium leading-relaxed mb-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {/* Client Logo */}
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].logo}
                  </div>

                  {/* Client Details */}
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg font-bold text-accent">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-neutral-base font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-primary font-semibold">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-accent hover:text-primary hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-accent hover:text-primary hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 mx-auto max-w-md">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-primary h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}