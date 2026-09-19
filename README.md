# Ahmed Waled — Portfolio

A static, dependency-free portfolio site (plain HTML/CSS/JS — no build step, no framework, nothing to compile). This makes it trivial to deploy and cheap to maintain.

## File structure

```
portfolio/
├── index.html              → page structure (all sections)
├── assets/
│   ├── styles.css          → design system + all styling
│   ├── script.js           → rendering, filtering, modal, theme toggle, animations
│   ├── data.js              → ⭐ ALL your content lives here
│   ├── images/              → profile photo + project screenshots
│   └── cv/                  → your downloadable CV PDF
```

## How to add a new project (no redesign needed)

Open `assets/data.js`, find the `PROJECTS` array, and add a new object at the top or bottom, e.g.:

```js
{
  title: "My New Project",
  shortDescription: "One sentence for the card.",
  description: "Longer description.",
  image: "assets/images/my-new-project.jpg", // omit this line if you have no screenshot
  category: "Machine Learning",               // reuse an existing category or add a new one — filters update automatically
  technologies: ["Python", "Scikit-learn"],
  date: "2026",
  features: ["Feature 1", "Feature 2"],
  githubUrl: "https://github.com/...",         // optional
  liveUrl: "https://...",                       // optional
  overview: "What the project does and why.",
  methodology: "How you built it.",
  results: "What it achieved.",
  keyInsights: ["Insight 1", "Insight 2"]
}
```

Save the image into `assets/images/` first. Any field you leave out (image, githubUrl, liveUrl, keyInsights...) is automatically hidden — nothing breaks. It will appear on the site immediately, filterable by its category, with no other code changes.

The same pattern applies to `CERTIFICATIONS`, `EXPERIENCE`, `EDUCATION`, and `SKILLS` — all in the same file.

## Before you publish — 3 things to fill in

1. **Social links** — in `assets/data.js`, `PROFILE.social`, add your real GitHub and LinkedIn URLs (left blank since you hadn't sent them — nothing was invented).
2. **Contact form delivery** — right now "Send Message" opens the visitor's email client pre-filled to `aw915008@gmail.com` (works everywhere, zero setup). If you'd rather have messages land silently in your inbox, wire the form up to a service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (both free, no backend needed — just point the form's `action` at the endpoint they give you) — happy to do this for you if you want.
3. **GitHub/live-demo links per project** — add `githubUrl` / `liveUrl` to any project in `data.js` once you have public repos to link.

## Deploying (get a public URL)

**Easiest — Vercel:**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: "Other" (it's static, no build command needed). Deploy.
4. You get a URL like `ahmed-waled.vercel.app` — free custom domain support too.

**Also easy — Netlify:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this whole `portfolio` folder in. Done — instant live URL. (Reconnect it to GitHub later for auto-redeploys on push.)

**Free & simple — GitHub Pages:**
1. Push this folder to a GitHub repo (as the repo root, or a `/docs` folder).
2. Repo Settings → Pages → set source to the branch/folder.
3. You get `https://<username>.github.io/<repo>`.

No environment variables, database, or server are required for any of these — it's pure static hosting.

## Notes on the "admin dashboard" ask

A full authenticated CMS (login-gated add/edit/delete UI with a database) is real backend work — a separate app with its own auth, database, and hosting. Given you're the only editor and updates are infrequent, `data.js` is the leaner version of the same idea: a single, plain-English file that drives the entire site, editable in any text editor, with zero risk of exposing admin functionality to visitors (there's no admin surface to secure because there's no backend at all). If you outgrow this — e.g. you want to add projects from your phone without touching code — say the word and I'll build the CMS version with authentication and a database on top of this same design.
