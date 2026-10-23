# Takshil Khurana — React Developer Portfolio

A responsive developer portfolio built with React, Vite, and custom CSS.

## Features
- Responsive layout with mobile navigation
- Hero section, about, skills, projects, experience, education, and contact
- Project category filters
- GitHub links for listed repositories
- Accessible button labels and reduced-motion support
- No Tailwind setup required

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open a terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Before publishing — personalize these items
1. In `src/App.jsx`, replace `YOUR_EMAIL@example.com` with your real professional email.
2. Replace the generic LinkedIn URL with your profile URL.
3. Add a PDF resume link if you want a downloadable CV button.
4. Confirm every project description matches the code in its repository; add live demos if available.
5. Update internship titles, employers, dates, and responsibilities to match your actual experience.
6. Review each listed technology and remove anything you cannot confidently discuss in an interview.
7. Add a professional photo only if you want one; the design works without it.

## Deploy
You can deploy the project using a React-compatible static host such as Vercel, Netlify, or GitHub Pages. For Vite deployment, configure the build command as `npm run build` and output directory as `dist`.

## Notes
This project uses Google Fonts from a remote stylesheet. If you prefer not to load external fonts, remove the `@import` line at the top of `src/styles.css` and use the fallback fonts.
