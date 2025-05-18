import React, { useEffect, useRef } from 'react';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Experience</h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            My professional journey has equipped me with diverse skills in entrepreneurship, 
            education, and software development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-indigo-200"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Circle indicator */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'
                } md:left-1/2 md:transform md:-translate-x-1/2 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center z-10`}>
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  index % 2 === 0 ? 'ml-8 md:ml-0' : 'ml-8 md:ml-0'
                }`}>
                  <div className="mb-2">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <h4 className="text-indigo-600 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;