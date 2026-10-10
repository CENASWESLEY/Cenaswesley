# Cenaswesley Portfolio

Personal portfolio website built with HTML, CSS, and JavaScript. The current goal of this codebase is to keep the UI visually identical while making the structure easier to maintain and ready for a future React migration.

## Project Structure

```text
.
├── index.html
├── assets/
├── src/
│   ├── scripts/
│   │   ├── components/
│   │   ├── utils/
│   │   └── main.js
│   ├── sections/
│   │   ├── hero/
│   │   │   ├── hero.html
│   │   │   └── hero.css
│   │   ├── about/
│   │   ├── professional-experience/
│   │   │   ├── companies/
│   │   │   │   ├── mea.html
│   │   │   │   └── seagate.html
│   │   │   ├── professional-experience.html
│   │   │   └── professional-experience.css
│   │   ├── awards/
│   │   ├── projects/
│   │   ├── creative-portfolio/
│   │   ├── channel/
│   │   └── contact/
│   └── styles/
│       ├── base/
│       ├── responsive/
│       └── main.css
├── eslint.config.js
└── package.json
```

## Naming Rules

- Files and folders use `kebab-case`.
- CSS classes and IDs use `kebab-case`.
- Section names are based on content, such as `professional-experience`, `projects`, and `creative-portfolio`.
- JavaScript modules export clear feature initializers, such as `initVideoPlayer`.
- Comments are written in English and kept short.

## CSS Architecture

- `src/styles/base/tokens.css` stores design tokens.
- `src/styles/base/reset.css` stores base element rules.
- `src/styles/base/utilities.css` stores reusable utility classes.
- `src/sections/<section-name>/<section-name>.css` stores the styles for the matching HTML partial.
- `src/styles/responsive/responsive.css` stores responsive overrides for desktop, tablet, and mobile breakpoints.
- `src/styles/main.css` controls the import order.

## HTML Section Modules

- `index.html` is a lightweight shell.
- Each section lives in `src/sections/<section-name>/<section-name>.html`.
- Each section keeps its matching CSS beside it for easier editing.
- The shell loads section HTML modules before initializing JavaScript behavior.
- Professional experience company tabs are defined in `src/scripts/data/professional-experience.data.js`.
- Each professional experience company detail lives in `src/sections/professional-experience/companies/`.

## JavaScript Architecture

- `src/scripts/main.js` is the only module loaded by `index.html`.
- `src/scripts/components/` contains feature-level behavior.
- `src/scripts/utils/` contains shared helpers.
- Third-party libraries are loaded from CDN and used as browser globals.

## Commands

```bash
npm install
npm run lint
npm run format
```

For local preview, open `index.html` through a static server so ES modules load correctly.
