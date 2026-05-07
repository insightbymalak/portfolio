# Operational Systems Portfolio

A modular portfolio site for **Malak Hussein** — built as a "cozy infrastructure" dashboard with a soft-skeuomorphism + watercolor aesthetic.

Stack: **React 18 · Vite · Tailwind CSS · Framer Motion · lucide-react**

---

## Quick start

```bash
cd portfolio
npm install        # only the first time
npm run dev        # dev server at http://127.0.0.1:5173/
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

To preview from your phone over the same Wi-Fi, run dev with the host flag:

```bash
npx vite --host 0.0.0.0
```

then open `http://<your-laptop-LAN-IP>:5173/` on your phone.

---

## File map (the only files you need to edit)

```
src/
├── data/
│   ├── portfolioData.js   ← name, contact, skills, certs, gauges, experience, education, flow chart
│   └── projects.json      ← every project card in the gallery (the file you edit most)
└── components/            ← only touch if you want to redesign visuals
```

Everything else (configs, shadows, palette, animations) is set up. You add content in those two data files; the UI re-renders automatically.

---

## How to add a new project

Open **`src/data/projects.json`** and add a new object to the array. Copy any existing entry as a template. Field reference:

```jsonc
{
  "id": "my-new-project",                    // unique slug, lowercase + dashes
  "title": "My New Project",                 // shown as the card heading
  "subtitle": "One-line tagline under title",
  "date": "May 2026",                        // free-text date or range
  "status": "done",                          // "done" | "in-progress" | "planned"
  "erpContext": "Odoo",                      // shows as the colored corner badge
  "coverTheme": "odoo",                      // "odoo" | "hr" | "data" | "generic" — picks the watercolor palette
  "summary": "2–3 sentence description shown on the card.",
  "highlights": [                            // up to 3 bullets shown on the card
    "First key thing you built",
    "Second key thing you built",
    "Third key thing you built"
  ],
  "techStack": ["Python", "Odoo", "XML"],    // small chips at the bottom of the card
  "tags": ["ERP", "Odoo"],                   // free-form, currently informational only
  "appliedCerts": ["odoo-bootcamp"],         // cert ids — drives the cert filter
  "links": {
    "repo": "https://github.com/insightbymalak/my-repo",   // shows a "Repo" button on the card
    "demo": "https://my-demo.vercel.app"                   // shows a "Demo" button (optional)
  }
}
```

### Where the repo link shows up

The card footer auto-renders a **Repo** button (linking to GitHub) whenever `links.repo` is non-empty, and a **Demo** button when `links.demo` is non-empty. Set either to `null` or remove the field to hide that button.

### Available `coverTheme` values

| Value | Watercolor wash | Use for |
|---|---|---|
| `odoo` | Lilac + crystal-blue | Odoo or ERP projects |
| `hr` | Pink + honey | Workflow / process projects |
| `data` | Crystal-blue + lilac | Data, BI, reporting |
| `generic` | Honey + pink + blue | Anything else |

### Replacing a "Coming Soon" placeholder

Two cards (`odoo-crm-flow`, `kpi-reporting-dashboard`) are marked `"status": "planned"` and labeled "Concept · Coming soon." When you actually build them:

1. Edit the existing entry in place — keep the `id` if the cert filter still applies, change everything else.
2. Set `"status": "done"` (or `"in-progress"`) and update `subtitle`, `summary`, `highlights`, `techStack`, and `links.repo`.

---

## How to add or edit a certification (with credential link)

Open **`src/data/portfolioData.js`**, find the `certifications` array, and add an entry. Field reference:

```js
{
  id: 'my-new-cert',                          // unique slug
  name: 'My New Certification',               // shown as the heading
  issuer: 'Issuer Name',                      // shown below the name
  date: 'Month YYYY',                         // free-text
  color: 'crystal-blue',                      // 'crystal-blue' | 'dreamy-lilac' | 'fairy-pink' | 'honey-deep'
  link: 'https://www.credly.com/badges/xxx',  // ← paste credential URL here. Shows the verify-arrow icon.
  appliesTo: ['my-new-project'],              // project ids — clicking this cert filters the gallery to these
}
```

### What the `link` field does

- **`link: null`** → the cert chip shows name/issuer/date only. Clicking the chip filters the project gallery (the original behavior).
- **`link: '<url>'`** → a small ↗ icon appears in the top-right corner of the chip. Clicking the icon opens the credential page in a new tab. Clicking anywhere else on the chip still toggles the filter.

Common credential link sources: **Credly**, **Coursera**, **Forage**, the issuer's own "verify" URL, or a link to a PDF you host (e.g., on GitHub).

### Connecting a cert to a project

The cert filter works through **`appliesTo`** (on the cert) **and** **`appliedCerts`** (on the project). Either reference works for filtering — but keep them in sync for clarity. When you add a new project that used a cert, add the project's `id` to that cert's `appliesTo` array.

Example: you finish the Odoo CRM project. Update the cert:

```js
{
  id: 'odoo-bootcamp',
  // ...
  appliesTo: ['odoo-real-estate', 'odoo-crm-flow'],   // ← add the new project id
}
```

---

## How to update the rest

| What | Where in `portfolioData.js` |
|---|---|
| Name, location, title, tagline, goal statement | `identity` |
| Email, phone, WhatsApp, LinkedIn, GitHub | `contact` |
| University / degree | `education` |
| Internship + future jobs (Work History section) | `experience` |
| Skills (Operations / Tools / Code buckets, with 0–100 levels) | `skills` |
| The 3 big radial gauges on the dashboard | `gauges` |
| Stages in the Automation Logic flow chart | `flowChart.stages` |

All of these are plain JS objects — edit, save, the dev server hot-reloads.

---

## Build size & module count

If you run `npm run build` you'll see something like *"1881 modules transformed."* That's Vite's count of every `.js` file it parsed, **mostly from `lucide-react` (~1500 icon files) and `framer-motion` (~250 internal modules)**. The actual production output is `~300 KB raw / ~95 KB gzipped` JS, which is normal for this stack. Nothing to worry about.

---

## Deploying

The site is a static SPA. Any of these work out-of-the-box after `npm run build`:

- **Vercel**: import the repo on vercel.com, framework preset = Vite. No config needed.
- **Netlify**: drag-drop the `dist/` folder, or connect the repo with build command `npm run build` and publish dir `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package). If hosted under a sub-path, add `base: '/repo-name/'` to `vite.config.js`.

---

## Design system reference

| Token | Hex | Where it shows |
|---|---|---|
| Honey Milk | `#ffe3b3` | Primary background |
| Crystal Blue | `#86bada` | Primary action / Automation gauge |
| Dreamy Lilac | `#9f99d1` | Secondary accents / ERP gauge |
| Fairy Pink | `#dbaad7` | Highlights / Data gauge |

Soft-skeuomorphic shadows are defined in `tailwind.config.js` under `boxShadow` (e.g. `shadow-pill`, `shadow-recess`, `shadow-panel`, `shadow-card`). The watercolor noise overlay is a `<feTurbulence>` SVG filter applied to `body::before` in `src/index.css`.
