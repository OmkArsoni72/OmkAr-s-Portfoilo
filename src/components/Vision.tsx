import React, { useEffect, useRef } from 'react';
import { TargetIcon, RocketIcon } from 'lucide-react';

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="vision" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">My Vision</h2>
            <div className="h-1 w-16 bg-indigo-600 mx-auto mb-6"></div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 md:p-12 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="bg-white p-4 rounded-full">
                <RocketIcon size={48} className="text-indigo-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Growth & Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  My vision is to grow Techserve Nexus into a national technology platform that bridges the digital divide for small and medium businesses across India. We aim to provide accessible, high-quality tech solutions that empower businesses to thrive in the digital economy.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-4 rounded-full order-first md:order-last">
                <TargetIcon size={48} className="text-indigo-600" />
              </div>
              
              <div className="order-last md:order-first md:text-right">
                <h3 className="text-2xl font-bold mb-2">Impact & Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond business growth, I'm committed to making technology education more accessible. Through workshops, courses, and mentorship programs, I aim to help young developers build the skills they need to succeed in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <blockquote className="text-xl italic text-gray-700">
              "Technology is most powerful when it empowers everyone."
            </blockquote>
            <p className="mt-4 font-medium">— Omkar Soni</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;