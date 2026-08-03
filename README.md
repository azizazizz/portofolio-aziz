# Portfolio

Personal developer portfolio built with React + Vite. Dark/light theme, monospace-accented
editorial design, numbered sections.

## Stack

- React 19 + Vite
- Plain CSS (custom properties for theming, no framework)
- Oxlint

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Project structure

```
src/
  components/    # one folder per section (Hero, About, Skills, Projects, Experience, Contact, ...)
  hooks/         # useTheme, useTypewriter
  index.css      # design tokens (light/dark theme variables) + global styles
```

## Content

All copy (name, bio, projects, experience, contact links) is placeholder — edit the data
arrays at the top of each component in `src/components/*/*.jsx` with real content.
