import { useState, useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  review: string;
  emoji: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      name: "Daniel Mumbi",
      location: "Nairobi, Kenya",
      review: "I was struggling to get interview callbacks until Resume Pros Kenya revamped my CV. Within a week, I secured three interviews, and now I have a job I love. Highly recommended!",
      emoji: "📝"
    },
    {
      name: "Kevin Otieno",
      location: "Migori, Kenya",
      review: "I needed a portfolio website to showcase my work, and they delivered beyond my expectations! The layout, the design—everything was on point. Thank you!",
      emoji: "📝"
    },
    {
      name: "James O.",
      location: "London, UK",
      review: "I had no idea my CV was holding me back until I got a professional rewrite. The difference was night and day—sleek, modern, and impactful. Best decision I made!",
      emoji: "📝"
    },
    {
      name: "Cynthia W.",
      location: "Toronto, Canada",
      review: "My LinkedIn profile went from invisible to eye-catching! Recruiters started reaching out almost immediately. Resume Pros Kenya truly knows what they're doing.",
      emoji: "📝"
    },
    {
      name: "Ahmed S.",
      location: "Accra, Ghana",
      review: "I needed a powerful cover letter that truly represented me. They crafted one that was professional yet personal, and it got me shortlisted for my dream job!",
      emoji: "📝"
    },
    {
      name: "Brian T.",
      location: "Lagos, Nigeria",
      review: "Fast turnaround and top-notch quality! I got my modern CV within 24 hours, and it perfectly showcased my experience. I highly recommend their services.",
      emoji: "📝"
    },
    {
      name: "Fatima R.",
      location: "New York, USA",
      review: "I was skeptical at first, but once I received my new resumé, I was blown away. It's polished, professional, and stands out. Best investment ever!",
      emoji: "📝"
    },
    {
      name: "Aisha K.",
      location: "Dubai, UAE",
      review: "The ATS-compliant CV they created for me was a game-changer! My application finally made it past the system, and I landed an interview within days. Exceptional service!",
      emoji: "📝"
    }
  ];
  
  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Initialize value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Navigate through testimonials
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - slidesPerView));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(testimonials.length - slidesPerView, prev + slidesPerView));
  };
  
  // Create pagination dots based on number of slides and visible slides
  const numDots = Math.ceil(testimonials.length / slidesPerView);
  
  // Calculate current page for pagination dots
  const currentPage = Math.floor(currentIndex / slidesPerView);
  
  // Handle dot click
  const goToSlide = (dotIndex: number) => {
    setCurrentIndex(dotIndex * slidesPerView);
  };
  
  // Calculate transform value for slide track
  const slideWidth = 100 / slidesPerView;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Hear from Our Success Stories!" 
          subtitle="Real clients. Real transformations."
        />
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={testimonialTrackRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className={`w-full flex-shrink-0 px-4`}
                  style={{ width: `${slideWidth}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % slidesPerView), duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl">{testimonial.emoji}</span>
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        <div className="text-yellow-400 mt-1">
                          {"★★★★★"}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">"{testimonial.review}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 focus:outline-none ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - slidesPerView}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 focus:outline-none ${currentIndex >= testimonials.length - slidesPerView ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: numDots }).map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full focus:outline-none ${i === currentPage ? 'bg-red-600' : 'bg-gray-300'}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
