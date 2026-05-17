// ============================================================
// core/services/contact.service.ts
// ============================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay, throwError } from 'rxjs';
import { ContactForm } from '../../shared/models/index';

export type ContactStatus = 'idle' | 'loading' | 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  /**
   * Send contact form.
   * Currently mocked — replace the body with a real API call:
   *   return this.http.post('/api/contact', form);
   */
  send(form: ContactForm): Observable<{ message: string }> {
    console.log('[ContactService] Sending form:', form);

    // Mock success after 1.2s
    return of({ message: 'Message sent successfully!' }).pipe(delay(1200));

    // Real implementation example:
    // return this.http.post<{ message: string }>('https://your-api.com/contact', form);
  }
}
