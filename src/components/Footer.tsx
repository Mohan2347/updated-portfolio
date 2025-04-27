import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                &copy; {currentYear} Mohan Venkata Rami Reddy. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
              
              <a 
                href="#home"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Back to Top
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300 flex items-center justify-center">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;