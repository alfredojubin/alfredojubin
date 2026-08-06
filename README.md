# Portfolio — Alfredo Jubín

Static site (plain HTML/CSS/JS, no build step, no dependencies) with 3 templates:

- `index.html` — Home. Builds the project grid automatically from `js/data.js`.
- `project.html` — a **single, reusable** template for every project's case study. Pass the project via the URL: `project.html?id=bac`.
- `about.html` — About me (bio, skills, experience, education).

## Opening the site locally
Unzip the whole folder first (don't pull just `index.html` out on its own — it needs the `css/`, `js/` and `images/` folders sitting right next to it). Then either double-click `index.html`, or serve it locally:
```
python3 -m http.server 8000
```
and open `http://localhost:8000`.

## Publishing it as a single shareable link
This is a static site, so any static host works. The fastest option with no account needed:

**Netlify Drop** — go to https://app.netlify.com/drop and drag the whole `portfolio` folder onto the page. It deploys in seconds and gives you a live URL like `yourname.netlify.app` you can send to anyone.

Other solid, free options if you want a custom domain or version control later:
- **Vercel** (vercel.com) — connect a GitHub repo or drag-and-drop the folder.
- **GitHub Pages** — push the folder to a GitHub repo and enable Pages in the repo settings.
- **Cloudflare Pages** — similar drag-and-drop flow to Netlify.

Once deployed, that single URL is the link to send to recruiters — it already includes every page and project (`/`, `/about.html`, `/project.html?id=bac`, etc.).

## Adding a 6th project (or beyond)
All project content lives in one place: **`js/data.js`**.
1. Copy one of the objects in the `PROJECTS` array.
2. Give it a unique `id` (no spaces or accents, e.g. `"new-project"`).
3. Fill in `title`, `category`, `client`, `role`, `year`, `summary`, `problem`, `process` (list of stages), `solution`, `results`, plus either a small `gallery` array or a `caseStudy` object (thumbnail + full document, opens in a modal — see how BAC/Clippers/Keralty/Corporate HUB use it) depending on what you have for that project.
4. Drop the real images into `/images/real` and point `cover`, `heroImage`/`heroVideo` and `gallery`/`caseStudy` to them.

No need to touch `index.html` or `project.html` — both render themselves from `data.js`.

## About the current images
The cover, hero and gallery images for BAC, Alsea and Keralty were cropped directly from the screenshots you shared. Since those source screenshots are relatively low resolution, the crops are usable as thumbnails but will look soft if displayed very large — swap them for original high-res exports (Figma frames, real screenshots, etc.) when you have them, keeping the same file names or updating the paths in `data.js`.
The LA Clippers project currently reuses its home-page thumbnail as both hero and gallery image, since no dedicated case-study screenshot was provided for it yet.

## What's still a placeholder
- `mailto:hola@alfredojubin.com`, LinkedIn and Behance links in the footer — swap for your real ones in `index.html`, `about.html` and `project.html`.
- "Download my resume" button in `about.html` — already points to `Alfredo-Jubin-Resume.pdf` at the root of the site. Replace that file (keeping the same name, or update the `href`) whenever your resume changes.

## Palette & typography
- Background `#111318`, text `#ECECE6`, coral accent `#FF6B45` / `#FF8562`, teal detail `#3FBFA6`.
- Typefaces: Plus Jakarta Sans (headings, italic for emphasis), Inter (body), JetBrains Mono (labels, dates, categories).
- The whole color/type system is centralized as CSS variables at the top of `css/styles.css` (`:root`), so the palette can be retuned by editing just those values.

## Accessibility
- Skip-to-content link on all 3 pages.
- Visible focus outline on every interactive element.
- One `<h1>` per page, correct heading hierarchy.
- Descriptive `alt` text on every meaningful image; purely decorative images use `alt=""` + `role="presentation"`.
- Keyboard-operable nav menu, with `aria-expanded` on the hamburger button.
- `prefers-reduced-motion` respected: reveal/scroll animations only run if the user hasn't asked to reduce motion.
- Text contrast checked against the dark background (coral is used for large headings/accents/links, not small body copy).

