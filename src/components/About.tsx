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
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              About Me
            </h2>
            
            <div className="h-1 w-16 bg-indigo-600 mb-6"></div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hello! I'm Omkar Soni, from Ranchi and currently pursuing my B.Tech in Computer Science Engineering at RCET Bhilai (2023–2027).
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm the co-founder of Techserve Nexus, a startup focused on delivering full-stack digital solutions to MSMEs and startups. We help businesses establish their digital presence and streamline their operations through custom-tailored technology solutions.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Beyond my technical endeavors, I'm passionate about education. I teach CBSE Class 10 students, helping them build strong foundations in key subjects. This has honed my communication skills and reinforced my belief in the power of knowledge sharing.
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              In my free time, I enjoy video editing and gaming, which provide me with creative outlets and help me unwind. These hobbies complement my technical skills and contribute to my well-rounded approach to problem-solving.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-indigo-100 rounded-lg transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Omkar Soni"
                className="w-full h-auto rounded-lg shadow-lg relative z-10 transform rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;