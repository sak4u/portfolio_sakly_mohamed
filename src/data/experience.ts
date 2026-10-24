import type { TimelineItem } from '../types';

// ============================================================
// Experience & Education timeline
// Sourced directly from Mohamed Sakly's professional background.
// ============================================================
export const timeline: TimelineItem[] = [
  {
    id: 'exp-maxim',
    type: 'experience',
    title: 'Software Development Engineer (Final-Year Project)',
    organization: 'MAXIM',
    location: 'Tunisia',
    startDate: '2026',
    endDate: '2026',
    current: false,
    description:
      'Designed and developed Inventiq, a full-stack inventory management platform built on a modular monolithic architecture with a decoupled React SPA frontend and NestJS backend.',
    highlights: [
      'Developed frontend with React.js and backend with NestJS consuming REST APIs',
      'Managed PostgreSQL data storage with Prisma ORM and deployed to Vercel',
      'Automated end-to-end testing with Selenium and configured a Jenkins CI/CD pipeline',
      'Centralized and digitized warehouse inventory workflows across the organization',
    ],
  },
  {
    id: 'exp-bus-software',
    type: 'experience',
    title: 'Software Development Engineer',
    organization: 'BUS Software',
    location: 'Sousse, Tunisia',
    startDate: '2025',
    endDate: '2025',
    current: false,
    description:
      'Designed and developed DineHub, a full-stack restaurant management web application with real-time order processing, client-server architecture, and automated container deployment.',
    highlights: [
      'Built decoupled React.js frontend and NestJS backend connected via REST APIs & WebSockets',
      'Containerized application components with Docker and configured Nginx as reverse proxy',
      'Automated CI/CD pipeline using GitHub Actions for continuous integration',
      'Streamlined kitchen communication and order turnaround times',
    ],
  },
  {
    id: 'edu-epi',
    type: 'education',
    title: 'Engineering Degree in Computer Engineering',
    organization: 'EPI Digital School',
    location: 'Sousse, Tunisia',
    startDate: 'Oct. 2023',
    endDate: 'Jun. 2026',
    description:
      'Specialization in Software Engineering covering modern software architectures, full-stack systems, DevOps practices, clean code, and Agile/Scrum engineering workflows.',
    highlights: [
      'Specialization: Software Engineering & Distributed Systems',
      'Final-Year Project: Inventiq Full-Stack Inventory Management Platform',
      'Core coursework: Software Architecture, Advanced Databases, CI/CD, Agile Methodologies',
    ],
  },
  {
    id: 'edu-iset',
    type: 'education',
    title: 'Bachelor’s Degree in Electrical Engineering',
    organization: 'ISET Sousse',
    location: 'Sousse, Tunisia',
    startDate: 'Oct. 2020',
    endDate: 'Jun. 2023',
    description:
      'Specialization in Automation and Industrial Computing, establishing strong foundations in systems programming, logic controllers, and computing fundamentals.',
    highlights: [
      'Specialization: Automation & Industrial Computing',
      'Foundational algorithms, structured programming, and embedded systems',
    ],
  },
];

