import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 transition-opacity duration-1000 bg-white opacity-0"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="order-2 w-full md:w-1/2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h2>
            
            <div className="w-16 h-1 mb-6 bg-indigo-600"></div>
            
            <p className="mb-4 leading-relaxed text-gray-700">
              Hello! I'm Omkar Soni, from Ranchi and currently pursuing my B.Tech in Computer Science Engineering at RCET Bhilai (2023–2027).
            </p>
            
            <p className="mb-4 leading-relaxed text-gray-700">
              I'm the co-founder of Techserve Nexus, a startup focused on delivering full-stack digital solutions to MSMEs and startups. We help businesses establish their digital presence and streamline their operations through custom-tailored technology solutions.
            </p>
            
            <p className="mb-4 leading-relaxed text-gray-700">
              Beyond my technical endeavors, I'm passionate about education. I teach CBSE Class 10 students, helping them build strong foundations in key subjects. This has honed my communication skills and reinforced my belief in the power of knowledge sharing.
            </p>
            
            <p className="mb-4 leading-relaxed text-gray-700">
              In my free time, I enjoy video editing and gaming, which provide me with creative outlets and help me unwind. These hobbies complement my technical skills and contribute to my well-rounded approach to problem-solving.
            </p>
          </div>
          
          <div className="order-1 w-full md:w-1/2 md:order-2">
            <div className="relative">
              <div className="absolute transform bg-indigo-100 rounded-lg -inset-2 md:-inset-4 -rotate-3"></div>
              <img
                src="photo/omkar.jpg"
                alt="Omkar Soni"
                className="relative z-10 w-full h-auto transition-transform duration-500 transform rounded-lg shadow-lg rotate-3 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;