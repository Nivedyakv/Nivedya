// badge.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeColor = 'teal' | 'accent' | 'default';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [class]="'badge--' + color">{{ label }}</span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 12px;
      padding: 5px 12px;
      border-radius: var(--radius-sm);
      border: 1px solid;
      white-space: nowrap;
      transition: all var(--transition-fast);

      &--teal {
        color: var(--color-teal);
        background: rgba(50, 193, 197, 0.08);
        border-color: rgba(50, 193, 197, 0.2);

        &:hover {
          background: rgba(50, 193, 197, 0.15);
        }
      }

      &--accent {
        color: var(--color-accent);
        background: rgba(255, 98, 50, 0.08);
        border-color: rgba(255, 98, 50, 0.25);
      }

      &--default {
        color: var(--color-gray);
        background: var(--color-bg-card);
        border-color: var(--color-bg-line);

        &:hover {
          color: var(--color-white);
          border-color: var(--color-gray-dim);
        }
      }
    }
  `]
})
export class BadgeComponent {
  @Input({ required: true }) label!: string;
  @Input() color: BadgeColor = 'teal';
}
