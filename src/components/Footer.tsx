import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              VS<span className="text-accent">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Victor Shammah. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1 flex items-center justify-center md:justify-end">
              Developer: Victor Shammah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;