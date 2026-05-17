// layout/navbar/navbar.component.ts
import {
  Component, OnInit, OnDestroy, HostListener,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ScrollService } from '../../core/services/scroll.service';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly navLinks: NavLink[] = [
    { label: 'About',      fragment: 'about'      },
    { label: 'Skills',     fragment: 'skills'     },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects',   fragment: 'projects'   },
    { label: 'Contact',    fragment: 'contact'    },
  ];

  activeSection = 'hero';
  isScrolled     = false;
  menuOpen       = false;

  private destroy$ = new Subject<void>();

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.scrollService.activeSection
      .pipe(takeUntil(this.destroy$))
      .subscribe(section => {
        this.activeSection = section;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrolled = window.scrollY > 20;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      this.cdr.markForCheck();
    }
  }

  navigate(fragment: string): void {
    this.scrollService.scrollToSection(fragment);
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  isActive(fragment: string): boolean {
    return this.activeSection === fragment;
  }
}
