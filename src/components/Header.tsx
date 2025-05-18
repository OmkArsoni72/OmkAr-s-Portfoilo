import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-600">OmkAr</span> Soni
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-indigo-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Stylish Hamburger Button */}
          <button
            className="flex flex-col items-center justify-center w-10 h-10 transition-colors rounded-full md:hidden bg-indigo-50 hover:bg-indigo-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <span className={`absolute h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'w-6 rotate-45 top-2' : 'w-6 top-0'
              }`}></span>
              <span className={`absolute h-0.5 w-4 bg-indigo-600 rounded-full left-0 top-2 transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 w-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'w-6 -rotate-45 top-2' : 'w-5 top-4 left-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-400 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed inset-x-0 top-0 h-auto max-h-[85vh] bg-white shadow-xl transform transition-transform duration-400 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold">
                <span className="text-indigo-600">Menu</span>
              </span>
              <button 
                className="flex flex-col items-center justify-center w-10 h-10 transition-colors rounded-full bg-indigo-50 hover:bg-indigo-100 focus:outline-none" 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="relative w-6 h-4">
                  <span className="absolute h-0.5 bg-indigo-600 rounded-full w-6 rotate-45 top-2"></span>
                  <span className="absolute h-0.5 bg-indigo-600 rounded-full w-6 -rotate-45 top-2"></span>
                </div>
              </button>
            </div>
            <nav className="flex-grow px-4 py-4 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 my-1 font-medium text-gray-800 transition-colors rounded-lg hover:text-indigo-600 hover:bg-indigo-50"
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;