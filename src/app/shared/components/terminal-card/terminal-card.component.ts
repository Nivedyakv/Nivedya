// terminal-card.component.ts
import {
  Component, Input, OnInit, OnDestroy,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalLine } from '../../models/index';

@Component({
  selector: 'app-terminal-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="terminal">
      <!-- Title bar -->
      <div class="terminal__bar">
        <div class="terminal__dots">
          <span class="dot dot--red"></span>
          <span class="dot dot--yellow"></span>
          <span class="dot dot--green"></span>
        </div>
        <span class="terminal__title">nivedya&#64;portfolio:~$</span>
      </div>

      <!-- Content -->
      <div class="terminal__body">
        <div
          *ngFor="let line of visibleLines; let i = index"
          class="terminal__line"
          [class.terminal__line--command]="line.type === 'command'"
          [class.terminal__line--highlight]="line.type === 'highlight'"
          [class.terminal__line--empty]="line.type === 'empty'"
        >
          <ng-container *ngIf="line.text">{{ line.text }}</ng-container>
        </div>
        <span class="terminal__cursor" *ngIf="showCursor">█</span>
      </div>
    </div>
  `,
  styles: [`
    .terminal {
      background: var(--color-bg-card);
      border: var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-card);
      height: 100%;

      &__bar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        background: var(--color-bg-line);
        border-bottom: var(--border-subtle);
      }

      &__dots {
        display: flex;
        gap: 8px;
      }

      &__title {
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--color-gray-dim);
      }

      &__body {
        padding: 24px;
        font-family: var(--font-mono);
        font-size: 13px;
        line-height: 1.8;
        min-height: 300px;
      }

      &__line {
        color: var(--color-gray);
        white-space: pre-wrap;

        &--command {
          color: var(--color-teal);
        }

        &--highlight {
          color: var(--color-accent);
        }

        &--empty {
          min-height: 1.8em;
          display: block;
        }
      }

      &__cursor {
        color: var(--color-teal);
        animation: blink 1s step-end infinite;
      }
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;

      &--red    { background: #FF5F57; }
      &--yellow { background: #FEBC2E; }
      &--green  { background: #28C840; }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }
  `]
})
export class TerminalCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) lines: TerminalLine[] = [];
  @Input() typewriterDelay: number = 60;

  visibleLines: TerminalLine[] = [];
  showCursor = true;

  private timer?: ReturnType<typeof setTimeout>;
  private lineIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typeNextLine();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private typeNextLine(): void {
    if (this.lineIndex >= this.lines.length) return;

    const line = this.lines[this.lineIndex];
    this.visibleLines = [...this.visibleLines, line];
    this.lineIndex++;
    this.cdr.markForCheck();

    const delay = line.type === 'command' ? this.typewriterDelay * 3 : this.typewriterDelay;
    this.timer = setTimeout(() => this.typeNextLine(), delay);
  }
}
