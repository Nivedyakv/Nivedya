// stat-item.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-item',
  standalone: true,
  template: `
    <div class="stat">
      <span class="stat__value">{{ value }}</span>
      <span class="stat__label">{{ label }}</span>
    </div>
  `,
  styles: [`
    .stat {
      display: flex;
      flex-direction: column;
      gap: 6px;

      &__value {
        font-size: 32px;
        font-weight: var(--fw-bold);
        color: var(--color-white);
        line-height: 1;
      }

      &__label {
        font-size: 13px;
        color: var(--color-gray-dim);
        font-family: var(--font-mono);
      }
    }
  `]
})
export class StatItemComponent {
  @Input({ required: true }) value!: string;
  @Input({ required: true }) label!: string;
}
