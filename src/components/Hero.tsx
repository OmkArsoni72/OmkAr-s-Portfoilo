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
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-50 to-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div 
        ref={heroRef} 
        className="container z-10 px-4 mx-auto text-center transition-all duration-300"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="block">I'm <span className="text-indigo-600">OmkAr</span> Soni</span>
          </h1>
          
          <div className="w-20 h-1 mx-auto mb-6 bg-indigo-600"></div>
          
          <h2 className="mb-8 text-xl font-medium text-gray-700 md:text-2xl">
            Startup Founder | Developer | Editor
          </h2>
          
          <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-block px-8 py-3 font-medium text-indigo-600 transition-colors duration-300 bg-white border border-indigo-600 rounded-full hover:bg-indigo-50"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-indigo-600" />
      </a>
    </section>
  );
};

export default Hero;