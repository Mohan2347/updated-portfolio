import React from 'react';
import { Mail, Linkedin, Github, Phone, Download } from 'lucide-react';
import { contact } from '../data/portfolio';
import { motion } from 'framer-motion';
import {res} from "../assests/resume.pdf";

const Contact: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Let's Connect
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300">
                I'm currently looking for new opportunities in the field of Computer Science, Machine Learning, and AI. 
                Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
              </p>
              
              <div className="space-y-6">
                <motion.a 
                  variants={item}
                  href={`mailto:${contact.email}`} 
                  className="flex items-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{contact.email}</span>
                </motion.a>
                
                <motion.a 
                  variants={item}
                  href={`https://${contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{contact.linkedin}</span>
                </motion.a>
                
                <motion.a 
                  variants={item}
                  href={`https://${contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <Github size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{contact.github}</span>
                </motion.a>
                
                <motion.div 
                  variants={item}
                  className="flex items-center p-4 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{contact.phone}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Resume
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Need a copy of my resume? You can download a PDF version by clicking the button below.
                </p>
              </div>
              
              <div className="text-center">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="..src/assests/resume.pdf" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;