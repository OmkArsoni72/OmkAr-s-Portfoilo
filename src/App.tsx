import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

// Add CSS for animations
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease forwards;
  }
`;

function App() {
  useEffect(() => {
    // Add animation styles to head
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = animationStyles;
    document.head.appendChild(styleSheet);
    
    // Update document title
    document.title = 'Omkar Soni | Portfolio';
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="font-[Inter] text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;