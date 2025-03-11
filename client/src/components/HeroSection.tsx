import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Expertly crafted CVs, cover letters, LinkedIn profiles, and portfolio websites designed to get you noticed globally.";
  const typingSpeed = 50; // ms per character
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    let i = 0;
    
    // Start typing effect
    typingRef.current = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
        setIsTypingComplete(true);
      }
    }, typingSpeed);
    
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-montserrat font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Elevate Your Career with a <span className="text-red-600">Winning Resume!</span>
            </motion.h1>
            <p className={`text-lg md:text-xl font-roboto text-gray-700 mb-8 ${!isTypingComplete ? 'after:content-[""] after:inline-block after:animate-[blink_0.7s_infinite]' : ''}`}>
              {typedText}
            </p>
            <motion.a 
              href="https://wa.me/254706874794" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              target="_blank" rel="noopener noreferrer"
            >
              Start Your Journey Today – Connect on WhatsApp!
            </motion.a>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Professional Resume" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
              width="500" 
              height="375"
            />
          </motion.div>
        </div>
        
        {/* Key Value Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:shadow-xl hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-2">Lightning Fast Delivery</h3>
            <p className="text-gray-600">From 3 to 72 hours turnaround</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:shadow-xl hover:-translate-y-2" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-2">Proven Success</h3>
            <p className="text-gray-600">98% interview success rate</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:shadow-xl hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Trusted in Kenya, USA, UK, Canada, UAE, Ghana, Nigeria & Egypt</p>
          </motion.div>
        </div>
        
        {/* Quick Navigation */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-lg font-roboto text-gray-700">
            Explore our services, read client success stories, learn our story, or get in touch!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
