import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  Layers, 
  Linkedin, 
  Github, 
  Mail,
  Smartphone
} from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/guillermo-perez-ruiz-569a3815b/",
    icon: Linkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/guillermo94",
    icon: Github
  },
  {
    name: "Email",
    url: "mailto:guillermoperezruiz94@gmail.com",
    icon: Mail
  }
];

export const HERO_DATA = {
  name: "Guillermo Pérez Ruiz",
  title: "Tech Lead (Hands-On) / Senior Full-Stack Engineer",
  tagline: "Leading from the code. Architecting scalable solutions.",
  description: "Specialized in modernizing legacy platforms, scalable cloud architectures, and advanced CI/CD. I combine technical decision-making with direct execution to bridge the gap between product strategy and engineering reality."
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "mahle",
    role: "Tech Lead (Hands-On) / Senior Full-Stack Engineer",
    company: "MAHLE SmartBike Systems",
    period: "2021 – Present",
    location: "Remote",
    description: "Technical owner of the company’s digital platform. Led the transformation of a legacy monolithic application into a modern, scalable cloud architecture.",
    achievements: [
      "Orchestrated team workflows and architectural decisions for a squad of 4 Full-Stack engineers.",
      "Migrated infrastructure to AWS ECS (Fargate) with auto-scaling, moving frontend to S3/CloudFront.",
      "Designed automated CI/CD pipelines incorporating Snyk, SonarQube, and E2E testing.",
      "Decoupled monolithic database: raw data to S3, sessions to Redis, volatile data to NoSQL.",
      "Developed an Electron desktop app for manufacturing lines integrating with CAN bus protocols."
    ],
    techStack: ["React", "Node.js", "AWS ECS", "TypeScript", "Redis", "Docker", "Electron"]
  },
  {
    id: "izertis",
    role: "QA-DevOps & Full-Stack Developer / Tech Lead",
    company: "Izertis S.A. (Client: Inditex)",
    period: "2020 – 2023",
    location: "Remote",
    description: "Core member of a cross-functional team defining global quality standards for one of the world's largest fashion retailers.",
    achievements: [
      "Designed global QA/DevOps strategies and mass-analysis scripts for thousands of repositories.",
      "Led the modernization of the internal 'Yellow Pages' discovery platform (Spring Boot + React).",
      "Standardized quality gates (SonarQube, Jacoco) across the organization.",
      "Migrated pipelines from Bamboo to GitHub Actions."
    ],
    techStack: ["React", "Spring Boot", "GitHub Actions", "Grafana", "Go", "Java"]
  },
  {
    id: "cognizant",
    role: "Full-Stack Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2018 – 2020",
    location: "International / Valladolid",
    description: "Full-stack development for a major Belgian digital banking platform in a microservices environment.",
    achievements: [
      "Migrated legacy AngularJS components to modern Angular.",
      "Developed new microservices using Spring Boot.",
      "Collaborated in an international 100% English-speaking agile environment.",
      "Implemented CI/CD integration using Jenkins."
    ],
    techStack: ["Angular", "Spring Boot", "Microservices", "Jenkins", "Scrum"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["React (Hooks, Context)", "TypeScript", "Tailwind CSS", "Next.js", "Angular", "Electron", "HTML5/SASS"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Java (Spring Boot)", "Go (Tooling)", "REST APIs", "Microservices"]
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS (ECS, Fargate, S3)", "Docker", "GitHub Actions", "Jenkins", "Terraform", "SonarQube"]
  },
  {
    name: "Data & Persistence",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "NoSQL", "Geospatial Data"]
  },
  {
    name: "Architecture & Soft Skills",
    icon: Layers,
    skills: ["System Design", "Legacy Modernization", "Tech Leadership", "Agile/SAFe", "English (C1)", "Mentoring"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "adventure-forge",
    title: "Adventure Forge",
    description: "AI-driven 'choose your own adventure' platform. Features dynamic narrative generation, image synthesis, and a custom provider fallback system to ensure availability on free tiers.",
    tags: ["React", "AI Agents", "MongoDB", "Google OAuth", "Generative AI"],
    repo: "https://github.com/guillermopr94",
    link: "https://guillermopr94.github.io/adventure-forge/",
    image: "https://picsum.photos/id/10/800/600",
    status: "Live"
  },
  {
    id: "artisan-ecommerce",
    title: "Artisan Crafts E-commerce",
    description: "End-to-end development of an e-commerce platform for artisan crafts. Handled frontend design, deployment pipelines, and ongoing maintenance to support a small business.",
    tags: ["React", "UX/UI", "Payment Integration", "SEO", "Maintenance"],
    image: "https://picsum.photos/id/312/800/600",
    status: "Live"
  },
  {
    id: "slay-proto",
    title: "Deckbuilder Roguelike Prototype",
    description: "A Slay the Spire-inspired game prototype featuring procedural world generation and AI-generated cards, defined via JSON configuration.",
    tags: ["Game Dev", "Procedural Gen", "JSON Architecture", "TypeScript"],
    image: "https://picsum.photos/id/235/800/600",
    status: "Prototype"
  },
  {
    id: "mindfulness-app",
    title: "Yoga & Mindfulness App",
    description: "Android application for yoga practice tracking and mindfulness sessions. Full lifecycle development from concept to publication on the Google Play Store.",
    tags: ["Android", "Java", "Mobile", "UX/UI"],
    image: "https://picsum.photos/id/180/800/600",
    status: "Published"
  }
];