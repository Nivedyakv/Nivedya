// layout/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  // ✅ Correct order: About → Experience → Projects → Contact
  readonly links = [
    { label: 'About',      fragment: 'about'      },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects',   fragment: 'projects'   },
    { label: 'Contact',    fragment: 'contact'    },
  ];

  constructor(public scrollService: ScrollService) {}
}
