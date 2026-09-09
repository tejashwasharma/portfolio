# Tejashwa Sharma — Portfolio

Single-page personal portfolio. Built with **React 18 + Vite**, plain CSS Modules,
and no UI framework. All content is data-driven; components are presentational.

## Requirements

- Node.js **>= 18** and npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command           | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                      |
| `npm run build`   | Production build into `dist/`                  |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | ESLint (React + hooks rules)                   |
| `npm run format`  | Prettier write over `src/`                     |

## Project structure

```
portfolio/
├── public/
│   └── tejashwasharma_resume.pdf    # served at /tejashwasharma_resume.pdf
├── src/
│   ├── assets/images/               # profile.jpg, massif.jpg, aura.jpg
│   ├── components/
│   │   ├── layout/                  # TopBar, Footer
│   │   ├── sections/                # Hero, Impact, Summary, Experience, Skills,
│   │   │                            #   Work, Interests, Credentials, Contact
│   │   └── ui/                      # Section, RichText, ThemeToggle,
│   │                                #   ResumeDownloadButton, BackgroundLayer
│   ├── data/                        # all copy lives here (profile, experience,
│   │                                #   skills, work, interests, credentials, …)
│   ├── hooks/                       # useTheme (3-state light/dark/system)
│   ├── styles/                      # tokens.css (theme vars) + global.css (reset)
│   ├── App.jsx                      # section composition
│   └── main.jsx                     # entry
├── index.html                       # includes a pre-paint theme script
├── firebase.json / .firebaserc      # Firebase Hosting config
└── vite.config.js
```

### Editing content

Nothing user-facing is hard-coded in components — edit the files under
`src/data/`. Résumé bullets support `**bold**` markup, rendered by
`src/components/ui/RichText.jsx`.

### Résumé download

`public/tejashwasharma_resume.pdf` is the source of truth. Replace that file to
update the download. The highlighted **Download résumé** button appears in the top
bar, the hero, and the contact section (`src/components/ui/ResumeDownloadButton.jsx`).

### Theming

`useTheme` supports three states: follow the OS (default, no attribute), or an
explicit `light` / `dark` override persisted to `localStorage`. Colours are CSS
custom properties defined in `src/styles/tokens.css` — never hard-code a colour in
a component.

## Firebase

- **Project:** `tejashwasharma-ae995` · **Hosting site:** `tejashwasharma`
- **Config:** supplied via `VITE_FIREBASE_*` env vars. Copy `.env.example` to
  `.env` and fill in the values from the Firebase console. `.env` is git-ignored;
  for CI, set the same vars as build secrets.
- **Web SDK init:** `src/lib/firebase.js` — no-ops if the env is absent; Analytics
  loads only in production builds where the browser supports it (`analyticsReady`).

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools     # once
firebase login                    # once
cp .env.example .env              # then fill in the values
npm run build                     # -> dist/
firebase deploy --only hosting
```

Serves at `https://tejashwasharma.web.app`. `firebase.json` points Hosting at
`dist/` (target `portfolio`) with an SPA rewrite and long-cache headers.
