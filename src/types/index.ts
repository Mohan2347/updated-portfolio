export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'soft';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  techStack: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  techStack: string[];
  details: string[];
  image: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}