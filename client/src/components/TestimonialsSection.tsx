import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd",
      location: "Mumbai",
      role: "Project Manager",
      rating: 5,
      testimonial: "IndoSup has revolutionized our procurement process. Their platform provides transparency, competitive pricing, and reliable delivery that we've never experienced before. The quality assurance is exceptional.",
      project: "Commercial Complex Project",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Infrastructure",
      location: "Delhi",
      role: "Purchase Head",
      rating: 5,
      testimonial: "The digital sourcing platform has streamlined our entire supply chain. We've reduced costs by 15% while improving delivery times. The customer support is outstanding and responsive.",
      project: "Residential Township",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Patel Builders",
      location: "Ahmedabad",
      role: "Site Engineer",
      rating: 5,
      testimonial: "Working with IndoSup has been a game-changer for our construction projects. Their comprehensive product range and expert guidance have helped us deliver projects on time and within budget.",
      project: "Industrial Warehouse",
      avatar: "AP"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      company: "Reddy Constructions",
      location: "Hyderabad",
      role: "CEO",
      rating: 5,
      testimonial: "IndoSup's end-to-end digital sourcing has transformed how we approach procurement. The platform's user-friendly interface and comprehensive vendor network make it our go-to solution.",
      project: "Mixed-Use Development",
      avatar: "SR"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality - slower transitions
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Slower - 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-[#FFFDEE] to-[#F4F4F4] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-2 font-poppins">
            What Our Clients Say
          </h2>
          <div className="h-1 w-12 bg-[#0F172D] mx-auto my-4"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto mt-2 font-poppins">
            Trusted by industry leaders across India for construction procurement excellence
          </p>
        </motion.div>

        {/* Main Testimonial Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0F172D] to-[#1E293B] shadow-xl px-6 py-8 sm:px-8 md:px-10 lg:px-12 rounded-2xl border border-gray-700 transition-all hover:shadow-2xl hover:scale-[1.01] duration-300">
              
              {/* Quote Icon - Centered at top */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Container - Only content animates */}
              <div className="text-center min-h-[200px] relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 400, damping: 25 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 }
                    }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    {/* Testimonial Quote */}
                    <blockquote className="text-lg text-white text-center italic leading-relaxed mb-6">
                      "{currentTestimonial.testimonial}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center gap-3">
                      {/* Client Profile Circle */}
                      <div className="bg-white/20 backdrop-blur-sm text-white font-semibold w-10 h-10 rounded-full flex items-center justify-center text-sm">
                        {currentTestimonial.avatar}
                      </div>
                      
                      {/* Client Details */}
                      <div className="text-left">
                        <h4 className="text-xl text-white font-semibold mb-1">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-sm text-gray-300 mb-0.5">
                          {currentTestimonial.role} at {currentTestimonial.company}
                        </p>
                        <p className="text-sm text-gray-300">
                          {currentTestimonial.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex 
                  ? 'bg-[#0F172D]' 
                  : 'bg-[#D1D5DB] hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}