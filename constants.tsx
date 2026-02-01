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
  Smartphone,
  Cpu,
  ShieldCheck,
  TrendingUp
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
    url: "https://github.com/guillermopr94",
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
  description: "Senior Engineer & Tech Lead with a proven track record in platform modernization, scalable cloud architectures, and advanced automation. I act as a player-coach, bridging the gap between product strategy and engineering reality through direct implementation of high-impact changes."
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "mahle",
    role: "Tech Lead (Hands-On) / Senior Full-Stack Engineer",
    company: "MAHLE SmartBike Systems",
    period: "2021 – Present",
    location: "Remote",
    description: "Technical owner of the digital ecosystem and internal systems, leading a team of 4 Full-Stack engineers. Orchestrated the complete transformation of a high-traffic legacy platform used by thousands of global users.",
    achievements: [
      "Technical Leadership & Strategy: Managed team workflows, led technical decision-making, and aligned product requirements with architectural scalability.",
      "Legacy Modernization: Transformed a severe tech-debt React/Express monolith into a clean, modern architecture, eliminating manual bash deployments and file-based logging.",
      "Cloud Infrastructure & Dockerization: Fully dockerized the environment and migrated to AWS ECS (Fargate) with auto-scaling, ALB, and S3/CloudFront orchestration.",
      "Advanced CI/CD & Security: Engineered automated pipelines with branch synchronization, release blocking mechanisms, and security gates using Snyk and SonarQube.",
      "React Evolution: Executed a zero-downtime progressive migration from Class Components to Hooks and TypeScript, significantly improving frontend maintainability.",
      "Data Layer Decoupling: Optimized data storage by separating raw location data to S3, session management to Redis, and volatile configurations to NoSQL.",
      "Electron & Low-Level Hardware: Built and maintain an Electron desktop app for EOL manufacturing, integrating low-level CAN bus/UDS protocols for firmware management.",
      "Observability & Monitoring: Implemented comprehensive monitoring with CloudWatch alarms and health-check systems to ensure high availability and rapid incident response."
    ],
    techStack: ["React", "Node.js", "AWS (ECS/S3/CloudFront/Secrets)", "TypeScript", "Redis", "Docker", "Electron", "CAN bus", "UDS"]
  },
  {
    id: "izertis",
    role: "QA-DevOps & Full-Stack Developer / Tech Lead",
    company: "Izertis S.A. (Client: Inditex)",
    period: "2020 – 2023",
    location: "Remote",
    description: "Core member of a cross-functional enablement team defining software quality and DevOps standards for Inditex's global landscape (thousands of repositories).",
    achievements: [
      "Enterprise Automation: Developed mass-analysis scripts to audit thousands of repositories, centralizing health metrics in Grafana for technical leadership.",
      "Application Discovery Platform: Led as Technical Lead the development of the internal 'Yellow Pages' platform (React/Spring Boot), coordinating a distributed team.",
      "Standardization & Quality: Enforced quality gates (SonarQube, Jacoco) and migrated legacy Bamboo pipelines to modern GitHub Actions at scale.",
      "Distributed Systems: Integrated real-time data synchronization using Kafka and intelligent search engines to scale application discovery across the entire organization."
    ],
    techStack: ["React", "Spring Boot", "Kafka", "GitHub Actions", "Grafana", "Go", "SonarQube", "Snyk"]
  },
  {
    id: "cognizant",
    role: "Full-Stack Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2018 – 2020",
    location: "International / Valladolid",
    description: "Full-stack development for KBC Bank (Belgium) in a high-demand microservices environment, working in 100% English-speaking international squads.",
    achievements: [
      "Digital Banking Evolution: Developed and modernized banking flows, migrating legacy AngularJS components to modern Angular while ensuring transactional integrity.",
      "Microservices Architecture: Designed and implemented high-criticality microservices from scratch using Spring Boot and Scala.",
      "Engineering Excellence: Acted as a technical reference within the squad, conducting rigorous code reviews and mentoring team members on best practices.",
      "Agile Delivery: Operated within complex Scrum/SAFe frameworks, delivering frequent updates to thousands of bank customers."
    ],
    techStack: ["Angular", "Spring Boot", "Microservices", "Jenkins", "Scrum", "Scala", "AWS"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Leadership & Architecture",
    icon: Layers,
    skills: ["Tech Leadership", "Player-Coach Model", "Legacy Modernization", "System Design", "Agile (SAFe/Scrum)", "Technical Mentoring"]
  },
  {
    name: "Frontend & Apps",
    icon: Code2,
    skills: ["React (Hooks, Context)", "TypeScript", "Next.js", "Electron", "Tailwind CSS", "Angular", "Responsive Design"]
  },
  {
    name: "Backend & Systems",
    icon: Server,
    skills: ["Node.js (Express/NestJS)", "Java (Spring Boot)", "Go", "Scala", "Kafka", "RESTful APIs", "Microservices"]
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS (ECS, S3, CloudFront, Secrets)", "Docker", "CI/CD (GitHub Actions, Jenkins)", "IaC", "Monitoring (Grafana, CloudWatch)"]
  },
  {
    name: "Data & Security",
    icon: ShieldCheck,
    skills: ["PostgreSQL", "MongoDB", "Redis", "NoSQL", "Snyk / SonarQube", "Data Decoupling"]
  },
  {
    name: "AI & Innovation",
    icon: TrendingUp,
    skills: ["AI Agent Integration", "Generative AI APIs", "Prompt Engineering", "Model Fallback Strategies", "AI-Driven Automation"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "adventure-forge",
    title: "Adventure Forge",
    description: "An AI-powered 'choose your own adventure' engine. Built with a high-availability fallback system for LLMs and image generation models, featuring persistent game states and multi-genre support.",
    tags: ["React", "AI Agents", "NestJS", "MongoDB", "Google OAuth", "Generative AI"],
    repo: "https://github.com/guillermopr94/adventure-forge",
    link: "https://guillermopr94.github.io/adventure-forge/",
    image: "https://picsum.photos/id/10/800/600",
    status: "Live"
  },
  {
    id: "galactic-conquest",
    title: "Galactic Conquest",
    description: "A space-themed procedural deckbuilder roguelike. Utilizes AI to dynamically generate cards, encounters, and world content via modular JSON architectures.",
    tags: ["React 19", "Vite", "Lucide", "AI Integration", "Procedural Generation"],
    image: "https://picsum.photos/id/235/800/600",
    status: "In Development"
  },
  {
    id: "crearesarte",
    title: "Crearte es Arte",
    description: "Professional e-commerce platform for artisan crafts. Features automated deployment pipelines, SEO optimization, and a seamless checkout experience.",
    tags: ["React", "Vercel", "E-commerce", "Deployment Automation"],
    link: "https://crearesarte.vercel.app/",
    image: "https://picsum.photos/id/312/800/600",
    status: "Live"
  }
];