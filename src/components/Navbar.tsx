import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import profilePic from '../assets/images/profile pic.jpeg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Find active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Documents', href: '#documents' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="font-display font-bold text-2xl md:text-3xl text-light group flex items-center"
          >
            <img 
              src={profilePic} 
              alt="Victor Shammah" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-accent ${
                  activeSection === link.href.substring(1) 
                    ? 'text-accent'
                    : 'text-light/80'
                }`}
              >
                <span className="relative inline-block">
                  {link.title}
                  <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                    activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-light hover:text-accent transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-dark/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className={`group flex items-center text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-accent'
                    : 'text-light/70 hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative w-5 h-5 flex items-center justify-center mr-3 overflow-hidden">
                  <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;