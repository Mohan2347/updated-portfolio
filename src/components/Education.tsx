import React from 'react';
import { education } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Education
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] h-full w-1 bg-blue-200 dark:bg-blue-900 transition-colors duration-300"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 transition-colors duration-300"></div>
                
                <div className={`sm:w-1/2 ml-10 sm:ml-0 ${
                  index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className={`flex items-center mb-2 ${
                      index % 2 === 0 ? 'justify-end' : ''
                    }`}>
                      <GraduationCap size={20} className={`text-blue-600 ${
                        index % 2 === 0 ? 'ml-2 order-2' : 'mr-2'
                      }`} />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                        {edu.institution}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {edu.location}
                    </p>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-2 transition-colors duration-300">
                      {edu.degree}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between mt-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm transition-colors duration-300">
                        {edu.score}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;