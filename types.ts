import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image: string;
  status?: 'Live' | 'Prototype' | 'Published' | 'In Development';
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}