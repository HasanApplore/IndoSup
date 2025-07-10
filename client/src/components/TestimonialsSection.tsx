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

  // Auto-play functionality - faster transitions
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Faster - 3 seconds instead of 5

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
    <section className="py-5 md:py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent font-inter">
              What Our Clients Say
            </h2>
          </div>
          <div className="w-16 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-sm md:text-base text-neutral-base max-w-xl mx-auto">
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

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 overflow-hidden relative hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:bg-white/90">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent/10 rounded-full translate-x-8 translate-y-8"></div>
              
              {/* Quote Icon - Centered */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
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
                  <blockquote className="text-base md:text-lg lg:text-xl text-accent font-medium leading-relaxed mb-8 max-w-2xl mx-auto relative">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Client Info - Last and smaller */}
                  <div className="flex items-center justify-center gap-3">
                    {/* Avatar - smaller */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {currentTestimonial.avatar}
                    </div>
                    
                    {/* Client Details - smaller */}
                    <div className="text-left">
                      <h4 className="font-bold text-accent text-base mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-xs text-neutral-base mb-0.5">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <p className="text-xs text-neutral-base opacity-75">
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}