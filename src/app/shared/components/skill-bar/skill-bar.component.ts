// skill-bar.component.ts
import {
  Component, Input, OnInit, ElementRef,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) percentage!: number;

  animated = false;

  constructor(
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.animated = true;
            this.cdr.markForCheck();
          }, 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(this.elRef.nativeElement);
  }
}
