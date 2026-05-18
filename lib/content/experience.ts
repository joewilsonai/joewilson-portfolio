// Experience — the resume content, structured.
// Bullets pulled from the Rapsodo "final version" in the handoff doc.
// Microsoft consolidated as a single 25-year tenure card.

export type ExperienceEntry = {
  company: string;
  logo?: string;       // optional path under /public
  role: string;
  period: string;
  location: string;
  productLines?: string;
  lede: string;        // 1–2 sentence summary at the top of the card
  bullets: string[];
  caseStudyHref?: string;  // optional deep-dive page
  caseStudyLabel?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Rapsodo",
    role: "Director of Customer Success, Golf & Diamond Sports",
    period: "2025 — 2026",
    location: "St. Charles, MO · Remote",
    productLines: "MLM2Pro (golf) · Diamond Sports (baseball)",
    lede: "Built and operated the entire post-sale customer experience system across two product lines — running CS, ops, and data engineering as a solo function, with Claude Code as the engineering partner.",
    bullets: [
      "Owned NRR and GRR across two product lines, led CS and Support, and partnered with the CEO on quarterly reviews of retention, reliability risk, and roadmap priorities.",
      "Designed the four-program CS framework — LaunchPad (activation), KeepSwinging (engagement), NextRound (renewal), Champions (advocacy) — built on behavioral segmentation, not lifecycle assumptions.",
      "Built a real-time Mixpanel → Iterable pipeline on Google Cloud Run that bypassed MuleSoft's 24-hour batch delay, enabling same-day behavioral trigger campaigns for MLM2Pro trial users.",
      "Reframed the retention model after Mixpanel cohort analysis revealed that converting users engage slowly and deeply while speed-runners churn — redesigned Iterable journeys around depth of engagement, not activation velocity.",
      "Built predictive churn and customer health models on sales call and usage data — 99% churn prediction, 96% success prediction — with Claude as the data engineering team.",
      "Unified Zendesk, Jira, and product usage signals into a single customer pipeline feeding weekly issue reviews, a closed-loop product feedback system, and BigQuery-based engineering escalation reporting for Diamond Sports.",
      "Deployed AI-first Tier 1 / Tier 2 support tooling for triage, response drafting, and knowledge base generation — reducing response time and scaling support coverage without expanding headcount.",
      "Built the NPS / VoC framework end-to-end — instrumentation, reporting, qualitative analysis — surfacing onboarding friction, activation gaps, and recurring failure modes for Product and Marketing.",
    ],
    // When the Loom walkthrough lands, link it here:
    // caseStudyHref: "/case-study/rapsodo",
    // caseStudyLabel: "Read: how I built the Rapsodo CS infrastructure",
  },
  {
    company: "Microsoft",
    role: "Multiple roles across enterprise sales, customer success, and technical advisory",
    // PLACEHOLDER — confirm actual start year before ship.
    period: "~2000 — 2024",
    location: "Various",
    lede: "25 years inside Microsoft, across the arc of enterprise tech — from on-prem to cloud, from selling product to running customer outcomes. The operating reps that make the last 18 months legible.",
    bullets: [
      "Held customer-facing roles spanning enterprise account management, customer success, technical advisory, and program leadership across multiple product lines.",
      "Built executive trust at scale — voiced as a top speaker in Microsoft's Executive Briefing Center program.",
      "Operated across the full enterprise lifecycle: discovery, technical validation, deployment, adoption, expansion, advocacy.",
      "Cross-functional leadership across product, engineering, partner, and field organizations.",
    ],
  },
];
