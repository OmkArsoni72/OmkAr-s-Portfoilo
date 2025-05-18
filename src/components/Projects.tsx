import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Featured Projects</h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full transition-colors duration-300"
                        >
                          View Project <ExternalLink size={16} className="ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;