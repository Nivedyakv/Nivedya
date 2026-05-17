# Nivedya KV — Angular Portfolio

Production-ready Angular 17 portfolio with dark navy terminal aesthetic.

## 🛠 Tech Stack

| Layer       | Technology                              |
|-------------|----------------------------------------|
| Framework   | Angular 17 (standalone, no NgModules)   |
| Language    | TypeScript 5.4 (strict mode)            |
| Styling     | SCSS + CSS Custom Properties            |
| State       | RxJS BehaviorSubject (no NgRx needed)   |
| Data        | JSON assets via HttpClient              |
| Forms       | ReactiveFormsModule                     |
| Animations  | IntersectionObserver + CSS transitions  |
| Fonts       | Inter + Space Mono (Google Fonts)       |

## 📋 Prerequisites

```
Node.js  : 20.11.1
npm      : 10.5.0
Angular CLI : 17.3.17
```

## 🚀 Quick Start

```bash
# 1. Navigate into the project
cd nivedya-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
ng serve

# 4. Open browser
# → http://localhost:4200
```

## 🏗 Project Structure

```
src/
├── app/
│   ├── core/services/          ← scroll.service, portfolio.service, contact.service
│   ├── shared/
│   │   ├── components/         ← section-label, skill-bar, badge, terminal-card, stat-item
│   │   ├── directives/         ← scroll-animation.directive (IntersectionObserver)
│   │   └── models/             ← TypeScript interfaces
│   ├── features/               ← hero, about, skills, experience, projects, contact
│   ├── layout/                 ← navbar, footer
│   ├── app.component.ts        ← Shell
│   ├── app.config.ts           ← Bootstrap config
│   └── app.routes.ts           ← Routes
├── assets/data/                ← JSON data (skills, experience, projects)
└── styles/                     ← _variables.scss, _mixins.scss, styles.scss
```

## 📦 Build for Production

```bash
ng build --configuration production
# Output → dist/nivedya-portfolio/
```

## 🌐 Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
# Set output directory to: dist/nivedya-portfolio/browser
```

## 🌐 Deploy to Netlify

1. Build: `ng build --configuration production`
2. Drag `dist/nivedya-portfolio/browser` into Netlify dashboard.
3. Add `_redirects` file inside `src/assets/`:
   ```
   /*  /index.html  200
   ```

## 🎨 Customization

- **Colors** → `src/styles/_variables.scss`
- **Your data** → `src/assets/data/*.json`
- **Resume PDF** → Place at `src/assets/Nivedya_KV_Resume.pdf`
- **Contact API** → `src/app/core/services/contact.service.ts` (replace mock `of(...)`)

## ✅ Features

- [x] Sticky nav with active section tracking (IntersectionObserver)
- [x] Terminal card with typewriter animation
- [x] Animated skill bars (trigger on scroll)
- [x] Vertical experience timeline
- [x] Project card with live mockup
- [x] Reactive contact form with validation
- [x] Scroll fade-in animations for all sections
- [x] Fully responsive (mobile → 1440px)
- [x] WCAG-friendly focus states
- [x] Production SCSS with design tokens
- [x] Lazy-loaded JSON data (shareReplay caching)
