// ============================================================
// core/services/scroll.service.ts
// ============================================================
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
  private activeSection$ = new BehaviorSubject<string>('hero');

  readonly activeSection = this.activeSection$.asObservable().pipe(
    distinctUntilChanged()
  );

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll', { passive: true })
        .pipe(throttleTime(80))
        .subscribe(() => this.ngZone.run(() => this.updateActiveSection()));
    });
  }

  private updateActiveSection(): void {
    const scrollY = window.scrollY + 80; // offset for navbar height

    for (const id of [...this.SECTIONS].reverse()) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        this.activeSection$.next(id);
        return;
      }
    }
    this.activeSection$.next('hero');
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - (parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 64);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
