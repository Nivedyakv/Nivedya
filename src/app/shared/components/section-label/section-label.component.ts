// section-label.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-label">
      <p class="section-meta">/* {{ number }} */&nbsp;&nbsp;{{ label }}</p>
      <h2 class="section-title">{{ title }}</h2>
      <div class="accent-line"></div>
    </div>
  `,
  styles: [`
    .section-label {
      margin-bottom: 0;
    }
    .section-meta {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--color-gray-dim);
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .section-title {
      font-size: clamp(28px, 4vw, 44px);
      font-weight: var(--fw-bold);
      color: var(--color-white);
      margin-bottom: 14px;
      line-height: 1.15;
    }
    .accent-line {
      width: 60px;
      height: 3px;
      background: var(--color-accent);
      border-radius: 2px;
      margin-bottom: 56px;
    }
  `]
})
export class SectionLabelComponent {
  @Input({ required: true }) number!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) title!: string;
}
