// ============================================================
// shared/models/skill.model.ts
// ============================================================
export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}
