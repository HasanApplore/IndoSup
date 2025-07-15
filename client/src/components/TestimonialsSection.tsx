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
    <section className="py-20 px-6 md:py-20 md:px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4 font-['Poppins']">
            What Our Clients Say
          </h2>
          {/* Yellow underline */}
          <div className="w-20 h-1 bg-[#FFD95A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          <div className="relative max-w-3xl mx-auto">

            <div className="bg-white rounded-2xl shadow-lg p-6 relative">
              {/* Quote Icon - Centered */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#FFD95A] rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
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
                  className="text-center pt-12"
                >
                  {/* Testimonial Quote - First */}
                  <blockquote className="text-lg text-[#1E293B] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Client Info - Last and smaller */}
                  <div className="flex items-center justify-center gap-3">
                    {/* Avatar - smaller */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD95A] to-[#FFC107] rounded-full flex items-center justify-center text-[#1E293B] font-semibold text-sm shadow-md">
                      {currentTestimonial.avatar}
                    </div>
                    
                    {/* Client Details - smaller */}
                    <div className="text-left">
                      <h4 className="font-semibold text-[#1E293B] text-base mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-0.5">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <p className="text-sm text-gray-500">
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
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#FFD95A] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}