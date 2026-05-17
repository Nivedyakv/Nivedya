// ============================================================
// shared/directives/scroll-animation.directive.ts
// ============================================================
import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  @Input() threshold: number = 0.15;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Set initial hidden state
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    if (this.delay) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition-delay',
        `${this.delay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.threshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
