// ============================================================
// shared/models/experience.model.ts
// ============================================================
export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  project: string;
  bullets: string[];
  active: boolean;
  type: 'full-time' | 'intern';
}

export interface Education {
  degree: string;
  institution: string;
  affiliation: string;
  period: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}
