import React from 'react';
import { certificates } from '../data/portfolio';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Certificates
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {certificate.title}
                  </h3>
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">
                  {certificate.issuer}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {certificate.date}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;