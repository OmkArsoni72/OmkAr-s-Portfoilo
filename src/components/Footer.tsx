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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-indigo-400">Omkar</span> Soni
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
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
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                aria-label={link.name}
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Omkar Soni. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
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