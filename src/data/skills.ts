import type { SkillCategory } from '../types';

// ============================================================
// Skills data
// Only list technologies you actually use / are learning.
// level: 'proficient' | 'learning'
// ============================================================
export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'JavaScript', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'React', level: 'proficient' },
      { name: 'HTML5', level: 'proficient' },
      { name: 'CSS3', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'proficient' },
    ],
  },
  {
    category: 'Backend & Mobile',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 'proficient' },
      { name: 'NestJS', level: 'proficient' },
      { name: 'Kotlin (Android SDK)', level: 'proficient' },
      { name: 'REST APIs & WebSockets', level: 'proficient' },
    ],
  },
  {
    category: 'Databases & ORM',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB & Mongoose', level: 'proficient' },
      { name: 'Prisma ORM', level: 'proficient' },
      { name: 'Firebase', level: 'proficient' },
    ],
  },
  {
    category: 'DevOps & Quality',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 'proficient' },
      { name: 'Jenkins CI/CD', level: 'proficient' },
      { name: 'Selenium (Automated E2E)', level: 'proficient' },
      { name: 'Docker', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
    ],
  },
  {
    category: 'AI / Data & Architecture',
    icon: '📐',
    skills: [
      { name: 'Python (Scikit-learn, Pandas)', level: 'proficient' },
      { name: 'Deep Learning & NLP (LSTM)', level: 'proficient' },
      { name: 'SOLID Principles & Clean Code', level: 'proficient' },
      { name: 'Modular Architecture & MVC', level: 'proficient' },
    ],
  },
];
