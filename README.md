# Rami Almasri — Portfolio

A hand-built, zero-dependency portfolio site. No framework, no build step — just open `index.html`.

```
portfolio/
├── index.html      # Structure & content
├── styles.css      # All styling (custom, no Tailwind/Bootstrap)
├── script.js       # Project data + interactions (vanilla JS)
├── PROJECTS.md      # Per-project engineering notes
└── README.md       # This file
```

## Run locally
Just double-click `index.html`, or serve it:
```bash
# Python
python -m http.server 5500
# then open http://localhost:5500
```

## Deploy (pick one — all free)

### Option A — GitHub Pages (recommended, free, permanent URL)
1. Create a new repo named **`Rami-Almasri.github.io`** (use exactly your username).
2. Push these files to it:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Rami-Almasri/Rami-Almasri.github.io.git
   git push -u origin main
   ```
3. Your site is live at **https://rami-almasri.github.io** in ~1 minute.

### Option B — Vercel CLI (exact commands)
Run these from inside the `portfolio` folder (PowerShell):
```powershell
npm i -g vercel          # install the CLI once
cd "C:\Users\Rami Almasri\portfolio"
vercel login             # opens browser / emails a code
vercel --prod            # accept defaults; static site auto-detected
```
You get a live `https://<name>.vercel.app` URL printed in the terminal.

### Option C — Netlify CLI (exact commands)
```powershell
npm i -g netlify-cli
cd "C:\Users\Rami Almasri\portfolio"
netlify login
netlify deploy --prod --dir .
```

### Drag & drop (no terminal)
- vercel.com or app.netlify.com/drop → drag the `portfolio` folder. Done.

## Make it yours (2-minute checklist)
- [ ] Add your **LinkedIn** URL — in `index.html` find `data-placeholder="linkedin"` and replace the `href="#"`.
- [ ] Confirm the contact email (currently `ai.engineer.faster@gmail.com`).
- [ ] Optional: add a real **location** in the About card (`index.html`, “Syria · Remote-ready”).
- [ ] Optional: add **screenshots** — drop images in `assets/` and reference them in `script.js`.
- [ ] Pin the site repo + your top 4 projects on your GitHub profile.

## Why it's built this way
No build tools means it can never break from a dependency update, loads instantly,
and runs anywhere. Everything you see — the gradient mesh, scroll reveals, animated
counters, card glow, filtering — is written by hand. That's the point.
