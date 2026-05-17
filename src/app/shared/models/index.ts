// ============================================================
// shared/models/project.model.ts
// ============================================================
export interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
}

// ============================================================
// shared/models/contact.model.ts
// ============================================================
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

// ============================================================
// shared/models/terminal.model.ts
// ============================================================
export interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'highlight' | 'empty';
}

// ============================================================
// shared/models/nav.model.ts
// ============================================================
export interface NavLink {
  label: string;
  fragment: string;
}
