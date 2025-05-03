import React from 'react';
import { Mail, Linkedin, Phone, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-dark opacity-80 animate-gradient"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-5"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-purple-500/20 blur-[80px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-light">
            <p className="text-sm uppercase tracking-widest text-accent mb-2 font-medium">Software Engineer</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
              <span className="gradient-text">Victor</span> <span className="text-light">Shammah</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted">
              Building the future, one line of code at a time
            </h2>
            <p className="text-lg md:text-xl text-light/80 mb-8 max-w-xl leading-relaxed">
              Versatile engineer with 4+ years of hands-on experience in Backend, Front-end,
              Cloud/DevOps, Cybersecurity and AI/ML. Crafting scalable, secure, and
              intelligent solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:victorshammah50@gmail.com" className="text-light hover:text-accent transition-colors duration-300 flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/victor-shammah-8949211b2" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors duration-300 flex items-center gap-2">
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="tel:+254725940547" className="text-light hover:text-accent transition-colors duration-300 flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">Contact</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <div className="glass-card p-8 relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-md bg-accent/80 flex items-center justify-center shadow-glow">
                <span className="text-light font-display text-xl font-bold">VS.</span>
              </div>
              <h3 className="text-light text-xl font-semibold mb-6 pl-14">Professional At A Glance</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-accent mr-3 animate-pulse"></div>
                  <p className="text-light text-sm">4+ years of software engineering experience</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-accent mr-3 animate-pulse"></div>
                  <p className="text-light text-sm">Expertise in Backend, Front-end, Cloud/DevOps</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-accent mr-3 animate-pulse"></div>
                  <p className="text-light text-sm">CISSP-certified security professional</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-accent mr-3 animate-pulse"></div>
                  <p className="text-light text-sm">Skilled in AI/ML integration for business solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-accent mr-3 animate-pulse"></div>
                  <p className="text-light text-sm">Team leader with proven track record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#skills" aria-label="Scroll down" className="flex flex-col items-center text-light/50 hover:text-accent transition-colors duration-300">
            <span className="text-xs mb-2">Explore</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;