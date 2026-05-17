// app.routes.ts
import { Routes } from '@angular/router';

// Single-page portfolio — all content is on the landing page.
// Navigation is handled via fragment (#section-id) + smooth scrolling.
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' }
];
