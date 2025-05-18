import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition / 500);
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-50 to-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 z-10 text-center transition-all duration-300"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block">I'm Omkar Soni</span>
          </h1>
          
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
            Startup Founder | Developer | Educator
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-block bg-white text-indigo-600 border border-indigo-600 py-3 px-8 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-indigo-600" />
      </a>
    </section>
  );
};

export default Hero;