# Personal Portfolio

Single-page portfolio/CV built with Next.js.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

The app uses the Next App Router. The main page is rendered from `app/page.jsx`.
Portfolio data is fetched on the server in parallel and passed into server-rendered
section components, while `src/App.jsx` only keeps the interactive shell.
