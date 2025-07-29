import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Mr S Kumar",
      company: "BRY Air Asia",
      location: "",
      role: "",
      rating: 5,
      testimonial: "Indosup has revolutionized the way we source construction materials. Their digital platform has made the entire procurement process streamlined and convenient. With just a few clicks, we can compare prices, check product specifications, and place orders. It has saved us a tremendous amount of time and effort.",
      project: "",
      avatar: "SK"
    },
    {
      id: 2,
      name: "Harish Mittal",
      company: "Aerocoach Pvt Ltd",
      location: "",
      role: "",
      rating: 5,
      testimonial: "I highly recommend Indosup for anyone in the construction industry. Their platform has transformed the way we source and procure materials. The competitive pricing, reliable delivery, and excellent customer service have made them an indispensable partner in our projects. It's a game-changer for efficiency and cost-effectiveness.",
      project: "",
      avatar: "HM"
    },
    {
      id: 3,
      name: "Bharat Gupta",
      company: "Jakson Group",
      location: "",
      role: "",
      rating: 5,
      testimonial: "Indosup has made our material procurement a breeze. The platform's intuitive interface allows us to quickly browse through various options, compare prices, and make informed decisions. The hassle-free ordering process and prompt delivery have significantly reduced our downtime and kept our projects running smoothly.",
      project: "",
      avatar: "BG"
    },
    {
      id: 4,
      name: "Rahul Pandey",
      company: "ATS Group",
      location: "",
      role: "",
      rating: 5,
      testimonial: "Using Indosup for our construction material procurement needs has been a game-changer. The platform is incredibly user-friendly, and their vast product catalog ensures we can find everything we need for our projects. The efficient order processing and on-time delivery have helped us stay on schedule and complete projects smoothly.",
      project: "",
      avatar: "RP"
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
    enter: () => ({
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-12 bg-white/95 backdrop-blur-lg relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#1E293B] mb-2">
            Testimonials
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-2">
            Trusted by industry leaders across India for construction procurement excellence
          </p>
        </motion.div>

        {/* Main Testimonial Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 }
                }}
                className="bg-white/95 backdrop-blur-lg shadow-xl px-6 py-8 sm:px-8 md:px-10 lg:px-12 rounded-2xl border border-white/20 transition-all hover:shadow-2xl hover:shadow-[#FFC600]/20 hover:scale-[1.01] hover:border-[#FFC600]/40 duration-300"
              >
                {/* Quote Icon - Centered at top */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#FFC600] w-12 h-12 flex items-center justify-center rounded-full">
                    <Quote className="w-6 h-6 text-[#1E293B]" />
                  </div>
                </div>

                <div className="text-center">
                  {/* Testimonial Quote */}
                  <blockquote className="text-lg text-[#374151] text-center leading-relaxed mb-6 font-cardo">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center gap-3">
                    {/* Client Profile Circle */}
                    <div className="bg-[#FFC600] text-[#1E293B] font-semibold w-10 h-10 rounded-full flex items-center justify-center text-sm">
                      {currentTestimonial.avatar}
                    </div>
                    
                    {/* Client Details */}
                    <div className="text-left">
                      <h4 className="text-xl text-[#1E293B] font-semibold mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-sm text-[#6B7280] mb-0.5">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
                  ? 'bg-[#FFC600]' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}