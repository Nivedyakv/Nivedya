// features/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SkillCategory } from '../../shared/models/skill.model';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { SkillBarComponent } from '../../shared/components/skill-bar/skill-bar.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionLabelComponent, SkillBarComponent, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillCategories$!: Observable<SkillCategory[]>;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillCategories$ = this.portfolioService.getSkills();
  }

  trackByCategory(_: number, cat: SkillCategory): string {
    return cat.category;
  }
}
