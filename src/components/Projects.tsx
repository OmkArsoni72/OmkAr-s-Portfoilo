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
      className="py-20 transition-opacity duration-1000 bg-white opacity-0"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-indigo-600"></div>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                {project.image.includes('techserve') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-105 bg-white p-2"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                )}
                {activeProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100">
                    <div className="text-center text-white">
                      <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-white transition-colors duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700"
                        >
                          View Project <ExternalLink size={16} className="ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs text-indigo-800 bg-indigo-100 rounded-full"
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