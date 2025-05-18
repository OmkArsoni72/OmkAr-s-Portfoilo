export interface Skill {
  name: string;
  icon: string;
  category: 'tech' | 'tools' | 'soft';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}