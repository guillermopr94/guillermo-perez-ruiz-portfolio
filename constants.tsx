import {
  Code2,
  Server,
  Cloud,
  Layers,
  Linkedin,
  Github,
  Mail,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Zap,
  Workflow,
} from 'lucide-react';
import {
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/guillermo-perez-ruiz-569a3815b/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/guillermopr94',
    icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:guillermoperezruiz94@gmail.com',
    icon: Mail,
  },
];

export const HERO_DATA = {
  name: 'Guillermo Pérez Ruiz',
  title: 'Tech Lead (Hands-On) / Senior Full-Stack Engineer',
  tagline: 'Leading from the code. Architecting scalable solutions.',
  description:
    '7+ years transforming legacy systems into modern, cloud-native platforms. I lead by doing—architecting AWS infrastructure, modernizing React codebases, and shipping production-critical features while mentoring engineering teams. Proven track record at enterprise scale (Inditex, KBC Bank) and high-growth startups.',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'usal',
    degree: 'B.Sc. Computer Engineering',
    institution: 'Universidad de Salamanca (USAL)',
    period: '2012 – 2018',
    location: 'Salamanca, Spain',
    description:
      'Official university degree in Computer Engineering with focus on software development, algorithms, and systems architecture.',
    achievements: [
      'Final Degree Project: Android app for yoga and mindfulness practice with expert-curated content',
      'Published to Google Play Store with Laravel-based admin dashboard',
    ],
  },
];

export const MANIFESTO_DATA = [
  {
    title: 'The Player-Coach Model',
    description:
      "Leadership is best executed from the trenches. I don't just delegate; I implement core architectural changes, set coding standards by example, and jump into the most complex bugs to unblock the team.",
    icon: Zap,
  },
  {
    title: 'Clean Modernization',
    description:
      "Legacy code isn't a burden—it's an opportunity. My approach focuses on progressive, zero-downtime migrations from monoliths to micro-services, ensuring stability while adopting modern patterns.",
    icon: Workflow,
  },
  {
    title: 'Automation First',
    description:
      "If a task is repetitive, it's a bug. I prioritize building robust CI/CD pipelines, automated quality gates, and observability systems that allow engineers to focus on creating value rather than manual toil.",
    icon: Cpu,
  },
  {
    title: 'Scalability by Design',
    description:
      'Systems should be built to grow. From cloud-native infrastructure on AWS to decoupled data layers and frontend orchestration, I architect for performance, security, and long-term maintainability.',
    icon: Layers,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'mahle',
    role: 'Tech Lead / Senior Full-Stack Engineer',
    company: 'MAHLE SmartBike Systems',
    period: '2023 – Present',
    location: 'Remote',
    description:
      'Leading a team of 4 engineers. Full ownership of digital platform serving thousands of global users. Drove complete legacy-to-modern transformation.',
    achievements: [
      'Migrated monolithic React/Express to AWS ECS (Fargate) with auto-scaling, reducing operational costs by 40%',
      'Zero-downtime migration from Class Components → Hooks + TypeScript across 200+ components',
      'Built Electron desktop app for manufacturing EOL with CAN bus/UDS hardware integration',
      'Implemented CI/CD with automated quality gates (Snyk, SonarQube), blocking releases on security issues',
      'Decoupled data layer: S3 for geospatial data, Redis for sessions, Secrets Manager for configs',
      'Established Grafana + CloudWatch observability with proactive alerting',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS (ECS/S3/CloudFront)',
      'Docker',
      'Electron',
      'Redis',
      'Grafana',
    ],
    details: [
      {
        title: 'Platform Modernization',
        description:
          'Transformed legacy monolith into modular, testable architecture while maintaining 24/7 availability.',
        icon: 'Layers',
      },
      {
        title: 'Cloud Infrastructure',
        description:
          'Designed and deployed AWS infrastructure: ECS Fargate, ALB, S3, CloudFront, Secrets Manager.',
        icon: 'Cloud',
      },
      {
        title: 'Hardware Integration',
        description:
          'Built Electron app interfacing with CAN bus/UDS protocols for bike diagnostics and firmware loading.',
        icon: 'Cpu',
      },
    ],
  },
  {
    id: 'izertis',
    role: 'QA-DevOps & Full-Stack Developer / Tech Lead',
    company: 'Izertis S.A. (Client: Inditex)',
    period: '2020 – 2023',
    location: 'Remote',
    description:
      "Core member of enablement team defining quality and DevOps standards for Inditex's global landscape (thousands of repositories).",
    achievements: [
      'Built mass-analysis tools auditing 5,000+ repositories for technical health scoring',
      'Led development of enterprise "Yellow Pages" platform (React/Spring Boot) for service discovery',
      'Drove company-wide migration from Bamboo to GitHub Actions',
      'Enforced SonarQube quality gates and Jacoco coverage thresholds at enterprise scale',
      'Integrated Kafka for real-time service registry synchronization',
    ],
    techStack: [
      'React',
      'Spring Boot',
      'Kafka',
      'GitHub Actions',
      'Grafana',
      'Go',
      'SonarQube',
    ],
    details: [
      {
        title: 'Enterprise Quality',
        description:
          'Rolled out quality standards across thousands of Inditex repositories with automated enforcement.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Platform Engineering',
        description:
          'Built centralized service discovery platform with real-time Kafka synchronization.',
        icon: 'Search',
      },
    ],
  },
  {
    id: 'cognizant',
    role: 'Full-Stack Programmer Analyst',
    company: 'Cognizant (Client: KBC Bank)',
    period: '2018 – 2020',
    location: 'Valladolid / International',
    description:
      'Full-stack development for KBC Bank (Belgium) in high-criticality banking environment. 100% English-speaking multicultural team.',
    achievements: [
      'Developed secure financial microservices handling thousands of daily transactions',
      'Led AngularJS → Angular 4+ migration for banking dashboards',
      'Served as technical reference: code reviews, SonarQube standards, architectural decisions',
      'Delivered within SAFe framework across distributed teams (Belgium, India, Czech Republic)',
    ],
    techStack: [
      'Angular',
      'Spring Boot',
      'Microservices',
      'Scala',
      'Jenkins',
      'AWS',
    ],
    details: [
      {
        title: 'Financial Systems',
        description:
          "Built secure transactional microservices for one of Belgium's largest banks.",
        icon: 'Lock',
      },
      {
        title: 'Global Collaboration',
        description:
          'Thrived in multicultural environment with teams across 4 countries.',
        icon: 'Globe',
      },
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Leadership & Architecture',
    icon: Layers,
    skills: [
      'Tech Leadership',
      'Player-Coach Model',
      'Legacy Modernization',
      'System Design',
      'Agile (SAFe/Scrum)',
      'Technical Mentoring',
    ],
  },
  {
    name: 'Frontend & Apps',
    icon: Code2,
    skills: [
      'React (Hooks, Context)',
      'TypeScript',
      'Next.js',
      'Electron',
      'Tailwind CSS',
      'Angular',
      'Responsive Design',
    ],
  },
  {
    name: 'Backend & Systems',
    icon: Server,
    skills: [
      'Node.js (Express/NestJS)',
      'Java (Spring Boot)',
      'Go',
      'Scala',
      'Kafka',
      'RESTful APIs',
      'Microservices',
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      'AWS (ECS, S3, CloudFront, Secrets)',
      'Docker',
      'CI/CD (GitHub Actions, Jenkins)',
      'IaC (Terraform)',
      'Monitoring (Grafana, CloudWatch)',
    ],
  },
  {
    name: 'Data & Security',
    icon: ShieldCheck,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'NoSQL',
      'Snyk / SonarQube',
      'Data Decoupling',
    ],
  },
  {
    name: 'AI & Innovation',
    icon: TrendingUp,
    skills: [
      'AI Agent Integration',
      'Generative AI APIs',
      'Prompt Engineering',
      'Model Fallback Strategies',
      'AI-Driven Automation',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'adventure-forge',
    title: 'Adventure Forge',
    description:
      "An AI-powered 'choose your own adventure' engine. Built with a high-availability fallback system for LLMs and image generation models, featuring persistent game states and multi-genre support.",
    tags: [
      'React',
      'AI Agents',
      'NestJS',
      'MongoDB',
      'Google OAuth',
      'Generative AI',
    ],
    repo: 'https://github.com/guillermopr94/adventure-forge',
    link: 'https://guillermopr94.github.io/adventure-forge/',
    image: '/assets/projects/adventure-forge.webp',
    status: 'Live',
  },
  {
    id: 'galactic-conquest',
    title: 'Galactic Conquest',
    description:
      'A space-themed procedural deckbuilder roguelike. Utilizes AI to dynamically generate cards, encounters, and world content via modular JSON architectures.',
    tags: [
      'React 19',
      'Vite',
      'Lucide',
      'AI Integration',
      'Procedural Generation',
    ],
    repo: 'https://github.com/guillermopr94/galactic-conquest',
    image: '/assets/projects/galactic-conquest.webp',
    status: 'In Development',
  },
  {
    id: 'crearesarte',
    title: 'Crear es Arte',
    description:
      'Professional e-commerce platform for artisan crafts. Features automated deployment pipelines, SEO optimization, and a seamless checkout experience.',
    tags: ['React', 'Vercel', 'E-commerce', 'Deployment Automation'],
    link: 'https://crearesarte.vercel.app/',
    repo: 'https://github.com/guillermopr94/crearesarte',
    image: '/assets/projects/crearesarte.webp',
    status: 'Live',
  },
];
