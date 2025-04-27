import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <button
                    aria-label={expandedProject === project.id ? "Collapse details" : "Expand details"}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {expandedProject === project.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedProject === project.id ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                    Project Details
                  </h4>
                  
                  <ul className="space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 transition-colors duration-300">•</span>
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 text-right">
                    <span className="text-gray-500 dark:text-gray-400 text-sm italic transition-colors duration-300">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;