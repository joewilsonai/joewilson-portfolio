// Projects — the credibility receipts.
//
// Architecture note: every project has a `status` flag that drives how it renders.
//   - "public":   has a clickable repo / live URL / case study. Full card.
//   - "shipping": exists, but not yet public. Renders with a "Shipping soon" pill.
//   - "private":  internal-only, never goes on this site (e.g. Chosen — brand-firewalled).
//
// As repos go public, flip status → "public" and add the repo / liveUrl.

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "public" | "shipping" | "private";
  repoUrl?: string;
  liveUrl?: string;
  caseStudyHref?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  // Featured case study — Rapsodo CS infrastructure.
  // Anchor of the section. The work that proves the thesis.
  {
    slug: "rapsodo-cs-infrastructure",
    title: "Rapsodo CS Infrastructure",
    tagline: "The work that proves the thesis.",
    description:
      "Built the entire post-sale customer experience system across two product lines as a solo function. Real-time behavioral pipeline (Mixpanel → Iterable via Cloud Run, bypassing MuleSoft's 24-hour batch delay). Predictive churn + success models. AI-first Tier 1 / Tier 2 support tooling. Unified Zendesk + Jira + product usage feed into one customer pipeline.",
    stack: ["Mixpanel", "Iterable", "Google Cloud Run", "BigQuery", "Zendesk", "Jira", "Claude Code"],
    status: "shipping", // becomes "public" when the Loom walkthrough lands
    metrics: [
      { label: "Churn prediction", value: "99%" },
      { label: "Success prediction", value: "96%" },
      { label: "Product lines", value: "2" },
      { label: "Batch delay bypassed", value: "24h → real-time" },
    ],
    featured: true,
  },

  // Active personal builds. Status flips to "public" once we ship the repo / landing.
  {
    slug: "lunaos",
    title: "LunaOS",
    tagline: "An always-on personal AI operating system.",
    description:
      "Dual local/cloud architecture built on Claude Code CLI with a markdown/bash skill layer. SQLite + Supabase sync, persistent memory across sessions, autonomous scheduled tasks. Inspired by OpenClaw's REM backfill memory system.",
    stack: ["Claude Code", "Python", "MCP", "SQLite", "Supabase"],
    status: "shipping", // ← flip to "public" + add repoUrl when ready to open-source
    // repoUrl: "https://github.com/joewilson/lunaos",
  },
  {
    slug: "leaguecast",
    title: "LeagueCast",
    tagline: "AI-generated fantasy football podcast platform.",
    description:
      "Sleeper API integration for league data. Dual AI hosts via ElevenLabs voice cloning. Personalized weekly audio briefings. Co-built with Hayden (Associate PM).",
    stack: ["Sleeper API", "ElevenLabs", "Claude API", "Next.js"],
    status: "shipping",
    // liveUrl: "https://leaguecast.app",
  },
  {
    slug: "ai-builders-circle",
    title: "AI Builders Circle",
    tagline: "Sprint-based AI enablement community for overwhelmed operators.",
    description:
      "Flagship product: the 14-Day Build sprint ($497–$997). ICP: non-technical operators who need to ship AI-augmented workflows. Organic-first channel strategy on LinkedIn / Twitter.",
    stack: ["Skool", "Claude API", "Next.js"],
    status: "shipping",
    // liveUrl: "https://aibuildersclub.ai",
  },

  // Chosen is intentionally OMITTED — brand-firewalled per the handoff.
  // Do not add to operator portfolio.
];
