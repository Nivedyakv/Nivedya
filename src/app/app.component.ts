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
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
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
