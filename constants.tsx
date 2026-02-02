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
  TrendingUp,
  Activity,
  Lock,
  Globe,
  Layout,
  Search,
  Zap,
  Workflow,
  BarChart3,
  ShieldAlert,
  Code
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
  description: "Senior Engineer & Tech Lead with over 7 years of experience in platform modernization, scalable cloud architectures, and advanced automation. I act as a player-coach, bridging the gap between product strategy and engineering execution through direct implementation of high-impact changes."
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
      "Legacy Modernization: Transformed a monolithic React/Express application with severe technical debt (no tests, no clear architecture) into a modern, micro-service ready system.",
      "Cloud Infrastructure: Fully dockerized the environment and migrated all services to AWS ECS (Fargate) with auto-scaling, ALB, and secure IAM policies.",
      "Frontend Orchestration: Migrated web frontend to S3 + CloudFront, optimizing global delivery, reducing costs and implementing custom WAF rules.",
      "Advanced CI/CD & Quality: Engineered automated pipelines with branch synchronization, release blocking mechanisms, and security gates using Snyk and SonarQube.",
      "React Evolution: Executed a zero-downtime progressive migration from Class Components to Hooks and TypeScript, improving development velocity and type safety.",
      "Data Layer Decoupling: Optimized storage by separating raw location data to S3, session management to Redis, and volatile configurations to MongoDB.",
      "Electron & Low-Level Hardware: Built and maintain an Electron desktop app for EOL manufacturing, integrating low-level CAN bus/UDS protocols for bike diagnostics.",
      "Observability & Monitoring: Implemented comprehensive monitoring with Grafana dashboards, CloudWatch alarms and health-check systems."
    ],
    techStack: ["React", "Node.js", "AWS (ECS/S3/ALB/Secrets)", "TypeScript", "Redis", "Docker", "Electron", "CAN bus", "UDS", "Grafana"],
    details: [
      {
        title: "Architecture Modernization",
        description: "Deconstructed a monolithic React/Express app into a clean, modular architecture. Implemented functional components and hooks while maintaining 24/7 service availability.",
        icon: "Layers"
      },
      {
        title: "Cloud & DevOps Excellence",
        description: "Orchestrated the migration to AWS ECS Fargate. Built complex GitHub Actions pipelines featuring branch auto-sync, release locks, and automated deployment gates.",
        icon: "Workflow"
      },
      {
        title: "Hardware & Desktop Apps",
        description: "Developed an Electron-based manufacturing tool for end-of-line bike registration. Integrated CAN bus/UDS protocols, allowing non-dev teams to load firmware and configurations.",
        icon: "Cpu"
      },
      {
        title: "High-Volume Data Handling",
        description: "Redesigned data storage strategy: offloaded multi-GB geospatial logs to S3, moved user sessions to Redis, and migrated sensitive configs to AWS Secrets Manager.",
        icon: "Database"
      },
      {
        title: "Monitoring & Reliability",
        description: "Established comprehensive observability using Grafana and CloudWatch. Configured intelligent alerts to detect platform anomalies before they impact end-users.",
        icon: "Activity"
      }
    ]
  },
  {
    id: "izertis",
    role: "QA-DevOps & Full-Stack Developer / Tech Lead",
    company: "Izertis S.A. (Client: Inditex)",
    period: "2020 – 2023",
    location: "Remote",
    description: "Core member of a cross-functional enablement team defining software quality and DevOps standards for Inditex's global landscape (thousands of repositories).",
    achievements: [
      "Enterprise Automation: Developed mass-analysis scripts to audit thousands of repositories, evaluating technical health across different departments.",
      "Application Discovery Platform: Headed the development of 'Yellow Pages' (React/Spring Boot), a centralized platform used company-wide to discover and manage services.",
      "Quality Standardization: Enforced quality gates (SonarQube, Jacoco) and unit test thresholds. Managed the global migration from Bamboo to GitHub Actions.",
      "Distributed Systems: Integrated real-time data synchronization using Kafka and implemented dedicated search engines for high-performance service discovery.",
      "Technical Auditing & Mentoring: Conducted periodic audits to ensure compliance with quality standards and provided training on testing and pipeline configuration."
    ],
    techStack: ["React", "Spring Boot", "Kafka", "GitHub Actions", "Grafana", "Go", "SonarQube", "Snyk", "Jacoco"],
    details: [
      {
        title: "Global Quality Oversight",
        description: "Defined and rolled out quality standards for thousands of repositories at Inditex. Implemented SonarQube quality gates and Jacoco coverage analysis at scale.",
        icon: "ShieldCheck"
      },
      {
        title: "Platform Engineering",
        description: "Built a centralized 'Yellow Pages' for application discovery. Used Spring Boot, React, and Kafka to keep the service map synchronized across the organization.",
        icon: "Search"
      },
      {
        title: "Business Intelligence",
        description: "Developed a scoring system in Grafana to visualize the technical health of different areas, helping leadership prioritize risk-based technical improvements.",
        icon: "BarChart3"
      }
    ]
  },
  {
    id: "cognizant",
    role: "Full-Stack Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2018 – 2020",
    location: "International / Valladolid",
    description: "Full-stack development for KBC Bank (Belgium) in a high-demand microservices environment, working in 100% English-speaking international squads.",
    achievements: [
      "Digital Banking Evolution: Developed and modernized banking flows, migrating legacy AngularJS components to modern Angular 4+.",
      "Microservices Architecture: Designed and implemented high-criticality financial microservices from scratch using Spring Boot and Scala.",
      "Engineering Excellence: Acted as a technical reference within the squad, conducting rigorous code reviews and implementing SonarQube standards.",
      "Agile Delivery: Operated within complex Scrum/SAFe frameworks, delivering high-integrity transactional features to thousands of bank customers.",
      "International Operations: Collaborated daily with distributed teams in Belgium, India, and the Czech Republic in a highly disciplined environment."
    ],
    techStack: ["Angular", "Spring Boot", "Microservices", "Jenkins", "Scrum", "Scala", "AWS", "SonarQube"],
    details: [
      {
        title: "Financial Microservices",
        description: "Developed secure and scalable transactional systems for KBC Bank. Focused on backend integrity using Spring Boot and microservices architecture.",
        icon: "Lock"
      },
      {
        title: "Modern Frontend Migration",
        description: "Led the transition of complex banking dashboards from AngularJS to modern Angular, improving performance and maintainability.",
        icon: "Code"
      },
      {
        title: "Global Squad Dynamics",
        description: "Thrived in a multicultural, 100% English-speaking environment. Mastered Agile processes and collaborative software development at an enterprise scale.",
        icon: "Globe"
      }
    ]
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
    skills: ["AWS (ECS, S3, CloudFront, Secrets)", "Docker", "CI/CD (GitHub Actions, Jenkins)", "IaC (Terraform)", "Monitoring (Grafana, CloudWatch)"]
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
    repo: "https://github.com/guillermopr94/galactic-conquest",
    image: "https://picsum.photos/id/235/800/600",
    status: "In Development"
  },
  {
    id: "crearesarte",
    title: "Crearte es Arte",
    description: "Professional e-commerce platform for artisan crafts. Features automated deployment pipelines, SEO optimization, and a seamless checkout experience.",
    tags: ["React", "Vercel", "E-commerce", "Deployment Automation"],
    link: "https://crearesarte.vercel.app/",
    repo: "https://github.com/guillermopr94/crearesarte",
    image: "https://picsum.photos/id/312/800/600",
    status: "Live"
  }
];