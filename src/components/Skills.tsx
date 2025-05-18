import React, { useEffect, useRef } from 'react';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
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

  const categories = [
    { id: 'tech', name: 'Technical Skills' },
    { id: 'tools', name: 'Tools & Software' },
    { id: 'soft', name: 'Soft Skills' }
  ];

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ];
    return Icon ? <Icon size={24} className="text-indigo-600" /> : null;
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">My Skills</h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            A combination of technical expertise, creative problem-solving, and effective communication
            drives my approach to projects and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-indigo-600">{category.name}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                    >
                      <div className="mr-3">
                        {renderIcon(skill.icon)}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;