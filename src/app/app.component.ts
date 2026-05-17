// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }     from './layout/navbar/navbar.component';
import { FooterComponent }     from './layout/footer/footer.component';
import { HeroComponent }       from './features/hero/hero.component';
import { AboutComponent }      from './features/about/about.component';
import { SkillsComponent }     from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent }   from './features/projects/projects.component';
import { ContactComponent }    from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar></app-navbar>

    <main>
      @defer (on viewport) {
        <app-hero></app-hero>
      } @placeholder {
        <div style="height: 100vh; background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);"></div>
      }

      @defer (on viewport) {
        <app-about></app-about>
      } @placeholder {
        <div style="height: 400px; background: linear-gradient(135deg, #2d2d44 0%, #1e1e2e 100%);"></div>
      }

      @defer (on viewport) {
        <app-skills></app-skills>
      } @placeholder {
        <div style="height: 600px; background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);"></div>
      }

      @defer (on viewport) {
        <app-experience></app-experience>
      } @placeholder {
        <div style="height: 500px; background: linear-gradient(135deg, #2d2d44 0%, #1e1e2e 100%);"></div>
      }

      @defer (on viewport) {
        <app-projects></app-projects>
      } @placeholder {
        <div style="height: 600px; background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);"></div>
      }

      @defer (on viewport) {
        <app-contact></app-contact>
      } @placeholder {
        <div style="height: 400px; background: linear-gradient(135deg, #2d2d44 0%, #1e1e2e 100%);"></div>
      }
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    main {
      width: 100%;
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {
  title = 'nivedya-portfolio';
}
