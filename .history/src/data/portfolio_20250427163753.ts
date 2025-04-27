import { Skill, Project, Certificate, Education, Achievement, NavItem, Experience } from '../types';
// import img1  from "../assests/img1.jpg";

import img0 from '../assests/profile.jpg';
import img2 from "../assests/project1.jpeg";
import img3 from "../assests/project2.png";
import img4 from "../assests/certificate1.jpg";
import img5 from "../assests/certificate2.jpg";
import img6 from "../assests/certificate3.jpg";



export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'language' },
  { name: 'Java', level: 85, category: 'language' },
  { name: 'C++', level: 80, category: 'language' },
  { name: 'PyTorch', level: 85, category: 'framework' },
  { name: 'TensorFlow', level: 80, category: 'framework' },
  { name: 'MatLab', level: 75, category: 'framework' },
  // { name: 'Jupyter Notebook', level: 90, category: 'tool' },
  // { name: 'Google Colab', level: 85, category: 'tool' },
  // { name: 'VS Code', level: 85, category: 'tool' },
  // { name: 'GitHub', level: 80, category: 'tool' },
  { name: 'Analytical Skills', level: 90, category: 'soft' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 85, category: 'soft' }
];

export const experience: Experience[] = [
  {
    title: 'Summer Training in Data Structures & Algorithms',
    company: 'Board Infinity',
    period: 'June 2024 - July 2024',
    location: 'Remote',
    description: 'Intensive training program focused on advanced DSA concepts and problem-solving techniques.',
    details: [
      'Completed a one-month training focused on Data Structures and Algorithms (DSA), strengthening problem-solving and algorithmic skills',
      'Implemented efficient algorithms and data structures such as arrays, linked lists, trees, graphs, and dynamic programming to optimize solutions',
      'Developed optimized solutions using programming languages like Java'
    ],
    techStack: ['Java', 'Data Structures', 'Algorithms'],
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const projects: Project[] = [
  {
    id: 'digit-recognition',
    title: 'Handwritten Digit Recognition Model',
    date: 'December 2024',
    description: 'CNN-based model using PyTorch to classify handwritten digits with 98.5% accuracy',
    techStack: ['Python', 'PyTorch', 'NumPy', 'OpenCV', 'Flask'],
    details: [
      'Built a CNN using PyTorch to classify handwritten digits with 98.5% accuracy',
      'Preprocessed images and optimized model performance using data augmentation',
      'Deployed the model using Flask for real-time digit recognition',
      'Evaluated model performance using confusion matrices and precision-recall curves'
    ],
    image: img2,
  },
  {
    id: 'signal-processing',
    title: 'Signal Processing and Noise Reduction',
    date: 'March 2024',
    description: 'MATLAB-based system to filter noise from real-world audio signals',
    techStack: ['MATLAB', 'Signal Processing Toolbox', 'FFT'],
    details: [
      'Developed a MATLAB-based system to filter noise from real-world audio signals',
      'Applied FFT for frequency analysis and improved Signal-to-Noise Ratio (SNR)',
      'Visualized signal transformations using MATLAB\'s plotting tools',
      'Compared filter performance with traditional noise reduction methods'
    ],
    image: img3,
  }
];

export const certificates: Certificate[] = [
  {
    title: 'C++ Programming Certification',
    issuer: 'Coursera',
    date: 'October 2023 - February 2024',
    description: 'Gained proficiency in C++ programming, covering object-oriented concepts, data structures, and algorithms',
    image: img4
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google (Coursera)',
    date: 'August 2023 - November 2023',
    description: 'Learned networking fundamentals, including TCP/IP, DNS, cloud computing, and network security',
    image: img5
  },
  {
    title: 'SQL For Data Science Certification',
    issuer: 'Great Learning',
    date: 'January 2023 - February 2023',
    description: 'Gained expertise in SQL for data extraction, manipulation, and analysis, focusing on real-world data science applications',
    image: img6
  }
];

export const education: Education[] = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'B. Tech - Computer Science and Engineering',
    score: 'CGPA: 6.03',
    period: 'Since August 2022'
  },
  {
    institution: 'Vignana Bharathi Junior College',
    location: 'Chirala, Andhra Pradesh',
    degree: 'Intermediate',
    score: 'Percentage: 82.9%',
    period: 'April 2020 - March 2022'
  },
  {
    institution: 'Oxford High School',
    location: 'Parchur, Andhra Pradesh',
    degree: 'Matriculation',
    score: 'Percentage: 96%',
    period: 'April 2019 - March 2020'
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Hacker Rank 5-star Python Badge',
    date: 'March 2023',
    description: 'Achieved a 5-star badge on HackerRank for exceptional Python programming skills and problem-solving abilities'
  }
];

export const contact = {
  name: 'Mohan Venkata Rami Reddy Gudibandi',
  email: 'gudibandimohan95@gmail.com',
  phone: '+91-9392409489',
  linkedin: 'linkedin.com/in/mohan-gudibandi/',
  github: 'github.com/Mohan2347',
  photo: img0,
};