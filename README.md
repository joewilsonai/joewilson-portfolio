# joewilson.ai

Personal portfolio site for Joe Wilson — AI-native customer experience operator.

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel.

---

## Mental model

This site is the **aggregator** for a credibility stack — not the credibility itself. Every section reads from a typed data file in `lib/content/`. Sections that depend on artifacts that don't yet exist (press, certifications, speaking) render `null` until their data array has entries. As proof artifacts land, you push entries to the relevant content file and the section materializes.

**Sections that are always visible:** Hero, Manifesto, Experience, Projects, Stack, Contact.
**Sections that appear when populated:** Press, Certifications, Speaking.

---

## Repo layout

```
joewilson-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata (OG, Twitter, robots)
│   ├── page.tsx            # Composes all sections in order
│   └── globals.css         # Design tokens + Tailwind v4 @theme
├── components/
│   ├── nav.tsx             # Sticky top nav
│   └── sections/
│       ├── hero.tsx
│       ├── press.tsx       # Renders null if press[] is empty
│       ├── manifesto.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── speaking.tsx    # Renders null if speaking[] is empty
│       ├── certifications.tsx  # Renders null if certifications[] is empty
│       ├── stack.tsx
│       └── contact.tsx
├── lib/
│   └── content/            # ← edit these files to change site content
│       ├── identity.ts     # Name, headline, manifesto
│       ├── experience.ts   # Rapsodo + Microsoft cards
│       ├── projects.ts     # Featured case study + project grid
│       ├── press.ts        # Press hits (empty by default)
│       ├── certifications.ts # Anthropic certs (empty by default)
│       ├── speaking.ts     # Talks (empty by default)
│       └── stack.ts        # Tech stack groupings
├── public/                 # Static assets (favicon, OG image, headshot)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## How to update the site

### Add a new project (when a repo goes public)

Open `lib/content/projects.ts` and either edit the existing entry or push a new one:

```ts
{
  slug: "lunaos",
  title: "LunaOS",
  // ...
  status: "public",                              // ← was "shipping"
  repoUrl: "https://github.com/joewilson/lunaos",  // ← add this
}
```

The `status: "public"` flag flips the pill from "Shipping soon" to a clay-colored "● Public" badge.

### Add a certification

Edit `lib/content/certifications.ts`:

```ts
{
  title: "Building with the Claude API",
  issuer: "Anthropic",
  year: 2026,
  verifyUrl: "https://verify.skilljar.com/c/<token>",
}
```

The Certifications section will auto-appear once there's at least one entry.

### Add a press hit

Edit `lib/content/press.ts`. The "Featured in" strip will appear when there's at least one entry.

### Change the headline / manifesto

Edit `lib/content/identity.ts`. Headline has three parts (`pre`, `accent`, `post`) — `accent` renders in italic clay.

### Change the design tokens

`app/globals.css` → the `@theme` block. Colors, fonts, container widths all live there.

---

## Pre-deploy checklist

Things to confirm before `vercel --prod`:

- [ ] **LinkedIn slug** — `lib/content/identity.ts` → `linkedin` field. Currently placeholder.
- [ ] **Microsoft start year** — `lib/content/experience.ts` → Microsoft entry `period`. Currently `~2000 — 2024`.
- [ ] **OG image** — drop a 1200×630 PNG at `public/og-image.png`.
- [ ] **Favicon** — drop a 32×32 ICO/PNG at `public/favicon.ico`.
- [ ] **Headshot (optional)** — if not using initials, drop at `public/avatar.png` and wire it into `nav.tsx` + `hero.tsx`.
- [ ] **Visual QA** — `npm run dev`, eyeball hero / experience / projects on mobile + desktop.

---

## Deploying to Vercel

Domain `joewilson.ai` is already purchased.

### Option A — via Vercel MCP (recommended, drives the whole flow)

1. Push this repo to GitHub.
2. From the Cowork session, ask Claude to run the Vercel deploy via the MCP. It can create the project, link the repo, attach the `joewilson.ai` domain, and push a preview + production build.
3. Verify DNS auto-configuration in the Vercel dashboard.

### Option B — manual (Vercel CLI)

```bash
npm i -g vercel
vercel login
vercel              # preview
vercel --prod       # production
vercel domains add joewilson.ai
```

---

## The credibility-manufacturing plan

Where this site is going over the next 60 days:

1. **Anthropic certifications** (week 1–2) — earn 4–6 and populate `certifications.ts`.
2. **LunaOS public repo** (week 2) — flip the `status` to `"public"` and link the repo.
3. **Rapsodo Loom walkthrough** (week 2–3) — record 6–8 minute architecture demo, link from the featured project card.
4. **One signal LinkedIn post** (week 3) — wait for it to land, then add to a future `social.ts` content file.
5. **First press / podcast feature** (week 4–8) — populate `press.ts`.

Each step is a single content-file edit. The structure is already here.
