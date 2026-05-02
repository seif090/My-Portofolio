export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud?: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools';
  level: number; // 0-100
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
