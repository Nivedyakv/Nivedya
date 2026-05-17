// features/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../shared/models/index';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionLabelComponent, BadgeComponent, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$!: Observable<Project[]>;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects$ = this.portfolioService.getProjects();
  }
}
