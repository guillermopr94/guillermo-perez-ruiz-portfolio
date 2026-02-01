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
    description: "Technical owner of the company’s digital platform and internal systems. Leading the end-to-end modernization of a high-traffic ecosystem used by thousands of users.",
    achievements: [
      "Orchestrated team workflows and architectural decisions for a squad of 4 Full-Stack engineers.",
      "Modernized a large-scale React/Express legacy platform, eliminating critical technical debt and improving observability.",
      "Full dockerization of frontend/backend and migration to AWS ECS (Fargate) with auto-scaling and S3/CloudFront orchestration.",
      "Implemented advanced CI/CD pipelines with automated release management, deployment gates, and integrated QA (Smoke tests, E2E).",
      "Progressively migrated legacy class components to React Hooks and TypeScript, ensuring 24/7 production stability.",
      "Decoupled monolithic data architecture: migrated geospatial locations to S3, sessions to Redis, and volatile data to NoSQL.",
      "Architected and maintain an Electron desktop app for manufacturing EOL processes, integrating low-level CAN bus/UDS protocols."
    ],
    techStack: ["React", "Node.js", "AWS (ECS/S3/CloudFront)", "TypeScript", "Redis", "Docker", "Electron", "CAN bus"]
  },
  {
    id: "izertis",
    role: "QA-DevOps & Full-Stack Developer / Tech Lead",
    company: "Izertis S.A. (Client: Inditex)",
    period: "2020 – 2023",
    location: "Remote",
    description: "Core member of a cross-functional enablement team defining software quality and DevOps standards for Inditex's global repository landscape.",
    achievements: [
      "Designed and evolved global QA/DevOps strategies, automating CI/CD changes across thousands of repositories.",
      "Developed mass-analysis scripts and centralized health metrics in Grafana to support risk-based prioritization.",
      "Standardized quality gates (SonarQube, Snyk, Jacoco) and migrated pipelines from Bamboo to GitHub Actions.",
      "Technical Lead for the internal Application Discovery Platform ('Yellow Pages'), coordinating full-stack development with Spring Boot and React."
    ],
    techStack: ["React", "Spring Boot", "GitHub Actions", "Grafana", "Go", "SonarQube", "Snyk"]
  },
  {
    id: "cognizant",
    role: "Full-Stack Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2018 – 2020",
    location: "International / Valladolid",
    description: "Full-stack development for KBC Bank (Belgium) in a microservices environment, assuming high technical responsibility within distributed international teams.",
    achievements: [
      "Migrated legacy AngularJS components to modern Angular while maintaining banking platform integrity.",
      "Developed high-criticality microservices from scratch using Spring Boot.",
      "Worked in a 100% English-speaking environment collaborating with teams in Belgium, India, and Czech Republic.",
      "Integrated automated testing and CI/CD flows using Jenkins and SonarQube."
    ],
    techStack: ["Angular", "Spring Boot", "Microservices", "Jenkins", "Scrum", "Scala"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["React (Hooks, Context)", "TypeScript", "Tailwind CSS", "Next.js", "Electron", "HTML5/SASS"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js (Express/NestJS)", "Java (Spring Boot)", "Go (Tooling)", "REST APIs", "Microservices"]
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS (ECS, Fargate, S3, CloudFront)", "Docker", "CI/CD (GitHub Actions, Jenkins)", "Infrastructure as Code", "Monitoring (Grafana, CloudWatch)"]
  },
  {
    name: "Data & Persistence",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "NoSQL", "Geospatial Data", "AWS Secrets Manager"]
  },
  {
    name: "Architecture & Soft Skills",
    icon: Layers,
    skills: ["Legacy Modernization", "Tech Leadership", "System Design", "Agile (SAFe/Scrum)", "Mentoring", "Professional English (C1)"]
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
    id: "crearesarte",
    title: "Crearte es Arte",
    description: "End-to-end development of a professional e-commerce platform for artisan crafts. Managed frontend design, CI/CD deployment on Vercel, and ongoing system maintenance.",
    tags: ["React", "Vercel", "E-commerce", "SEO", "Maintenance"],
    image: "https://picsum.photos/id/312/800/600",
    status: "Live"
  },
  {
    id: "galactic-conquest",
    title: "Galactic Conquest",
    description: "A procedural space-themed deckbuilder roguelike. Leveraging AI APIs for dynamic card generation and world-building (Current project).",
    tags: ["React 19", "Vite", "Lucide", "AI Integration", "TypeScript"],
    image: "https://picsum.photos/id/235/800/600",
    status: "In Development"
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