// features/experience/experience.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Experience } from '../../shared/models/experience.model';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionLabelComponent, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences$!: Observable<Experience[]>;

  readonly education = {
    degree: 'B.Tech — Computer Science',
    institution: 'North Malabar Institute of Technology',
    affiliation: 'Kerala Technological University',
    period: '2018–2022'
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences$ = this.portfolioService.getExperience();
  }

  trackById(_: number, exp: Experience): string {
    return exp.id;
  }
}
