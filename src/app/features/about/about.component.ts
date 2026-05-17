// features/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface FactCard {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionLabelComponent, BadgeComponent, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly facts: FactCard[] = [
    { icon: '📍', label: 'Location',    value: 'Bangalore, India'          },
    { icon: '✉️',  label: 'Email',       value: 'nivedyakv2703@gmail.com',
      href: 'mailto:nivedyakv2703@gmail.com'                               },
    { icon: '🎓', label: 'Education',   value: 'B.Tech CSE — KTU'          },
    { icon: '🏆', label: 'Award',       value: 'Star Performer — Beinex'   },
  ];

  readonly techStack = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS',
    'D3.js', 'HTML5', 'SCSS', 'Git', 'Node.js',
  ];
}
