import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ];
    return Icon ? <Icon size={18} className="text-white" /> : null;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-indigo-400">OmkAr</span> Soni
            </a>
            <p className="max-w-md mt-2 text-gray-400">
              Startup Founder | Developer | Educator
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-indigo-600"
                aria-label={link.name}
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-800 md:flex-row">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Omkar Soni. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 mt-4 transition-colors duration-300 bg-indigo-600 rounded-full md:mt-0 hover:bg-indigo-700"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;