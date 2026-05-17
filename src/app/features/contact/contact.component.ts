// features/contact/contact.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup,
  Validators, AbstractControl
} from '@angular/forms';
import { Subject, takeUntil, finalize } from 'rxjs';
import { ContactService, ContactStatus } from '../../core/services/contact.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { ContactInfo } from '../../shared/models/index';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionLabelComponent,
    ScrollAnimationDirective
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  status: ContactStatus = 'idle';
  errorMessage = '';

  readonly contactInfos: ContactInfo[] = [
    { icon: '✉',  label: 'Email',    value: 'nivedyakv2703@gmail.com', href: 'mailto:nivedyakv2703@gmail.com' },
    { icon: '📞', label: 'Phone',    value: '+91 8075251906',           href: 'tel:+918075251906'              },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/nivedyakv', href: 'https://linkedin.com/in/nivedyakv' },
    { icon: '📍', label: 'Location', value: 'Bangalore, India'                                                  },
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  isInvalid(field: string): boolean {
    const ctrl = this.f[field];
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  getError(field: string): string {
    const ctrl = this.f[field];
    if (!ctrl || !ctrl.errors) return '';
    if (ctrl.errors['required'])   return 'This field is required.';
    if (ctrl.errors['email'])      return 'Please enter a valid email.';
    if (ctrl.errors['minlength']) {
      const req = ctrl.errors['minlength'].requiredLength;
      return `Minimum ${req} characters required.`;
    }
    return 'Invalid value.';
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    this.errorMessage = '';

    this.contactService.send(this.contactForm.value)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          if (this.status === 'loading') this.status = 'error';
        })
      )
      .subscribe({
        next: () => {
          this.status = 'success';
          this.contactForm.reset();
        },
        error: (err) => {
          this.status = 'error';
          this.errorMessage = err.message || 'Something went wrong. Please try again.';
        }
      });
  }

  resetStatus(): void {
    this.status = 'idle';
  }
}
