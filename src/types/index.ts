// ============================================================
// Global TypeScript types & interfaces
// ============================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  imageAlt: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlight?: boolean;
}

export interface Skill {
  name: string;
  level?: 'proficient' | 'learning';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'milestone';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights?: string[];
  current?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
