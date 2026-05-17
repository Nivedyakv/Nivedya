// features/hero/hero.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatItemComponent } from '../../shared/components/stat-item/stat-item.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, StatItemComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  readonly profilePhoto = 'assets/images/nivedya-profile.png';

  readonly highlights = [
    { icon: '⭐', text: 'Star Performer — Beinex' },
    { icon: '⚡', text: '~40% render boost, OnPush CD' },
    { icon: '📦', text: '~35% bundle reduction' },
    { icon: '🔗', text: '10+ reusable components' },
  ];

  readonly stats = [
    { value: '2+',  label: 'Years Exp.'       },
    { value: '⭐',  label: 'Star Performer'   },
    { value: '10+', label: 'Components Built'  },
    { value: '40%', label: 'Perf. Gains'      },
  ];

  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string): void {
    this.scrollService.scrollToSection(section);
  }

  downloadCv(): void {
    const link = document.createElement('a');
    link.href = 'assets/Nivedya_KV_Resume.pdf';
    link.download = 'Nivedya_KV_Resume.pdf';
    link.click();
  }
}
