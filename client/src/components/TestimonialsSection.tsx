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
    <section className="py-16 md:py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] font-inter">
              What Our Clients Say
            </h2>
          </div>
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFC600] rounded-full opacity-60"></div>
            <p className="text-[#1F2937] text-lg md:text-xl max-w-2xl mx-auto mb-6 relative z-10">
              Trusted by industry leaders across India for construction procurement excellence
            </p>
          </div>
          <div className="w-24 h-1 bg-[#FFC600] mx-auto mt-4"></div>
        </motion.div>

        {/* Main Testimonial Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >


          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-[#E5E7EB] overflow-hidden relative hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 hover:bg-white/95 cursor-pointer">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#FFC600]/20 rounded-full -translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#031D33]/10 rounded-full translate-x-10 translate-y-10"></div>
              
              {/* Quote Icon - Centered */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#FFC600]/15 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-10 h-10 text-[#FFC600]" />
              </div>

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
                  className="text-center pt-16"
                >
                  {/* Testimonial Quote - First */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl text-[#1F2937] font-medium leading-relaxed mb-10 max-w-3xl mx-auto relative">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Client Info - Last and smaller */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Avatar - smaller */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFC600] to-[#FFD700] rounded-2xl flex items-center justify-center text-[#031D33] font-bold text-lg shadow-lg">
                      {currentTestimonial.avatar}
                    </div>
                    
                    {/* Client Details - smaller */}
                    <div className="text-left">
                      <h4 className="font-bold text-[#1F2937] text-lg mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-sm text-[#1F2937]/70 mb-0.5">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <p className="text-sm text-[#1F2937]/50">
                        {currentTestimonial.location} • {currentTestimonial.project}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-[#FFC600] w-12 shadow-lg' 
                  : 'bg-[#E5E7EB] w-3 hover:bg-[#FFC600]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}