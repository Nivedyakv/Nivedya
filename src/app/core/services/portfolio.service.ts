// ============================================================
// core/services/portfolio.service.ts
// ============================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { SkillCategory } from '../../shared/models/skill.model';
import { Experience } from '../../shared/models/experience.model';
import { Project } from '../../shared/models/index';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly BASE = 'assets/data';

  private skills$!: Observable<SkillCategory[]>;
  private experience$!: Observable<Experience[]>;
  private projects$!: Observable<Project[]>;

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillCategory[]> {
    if (!this.skills$) {
      this.skills$ = this.http
        .get<SkillCategory[]>(`${this.BASE}/skills.json`)
        .pipe(shareReplay(1));
    }
    return this.skills$;
  }

  getExperience(): Observable<Experience[]> {
    if (!this.experience$) {
      this.experience$ = this.http
        .get<Experience[]>(`${this.BASE}/experience.json`)
        .pipe(shareReplay(1));
    }
    return this.experience$;
  }

  getProjects(): Observable<Project[]> {
    if (!this.projects$) {
      this.projects$ = this.http
        .get<Project[]>(`${this.BASE}/projects.json`)
        .pipe(shareReplay(1));
    }
    return this.projects$;
  }
}
