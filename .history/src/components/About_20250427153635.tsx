import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import { Award } from 'lucide-react';
import {img1} from '../assests/img1.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto md:mx-0 md:ml-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <motion.img 
                src={img1} 
                alt="Profile"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              👋
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300 leading-relaxed text-lg">
              I'm a Computer Science Engineering student with a passion for artificial intelligence, machine learning, and 
              signal processing. My journey in tech is driven by a curiosity to solve complex problems and build 
              intelligent systems that make a difference.
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300 leading-relaxed text-lg">
              With strong foundations in Python, Java, and C++, I've developed projects ranging from neural networks for 
              handwritten digit recognition to signal processing systems for noise reduction.
            </p>
            
            <div className="pt-4">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  Recent Achievement
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Achieved a 5-star badge on HackerRank for exceptional Python programming skills and problem-solving abilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;