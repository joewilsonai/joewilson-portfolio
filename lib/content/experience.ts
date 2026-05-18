// Experience — the career arc.
//
// Sourced from Joe's LinkedIn (joewilsonjr) + handoff doc.
// Five entries, latest first: Obey → Rapsodo → Microsoft (Sr. GenAI) → AWS → Microsoft (22-year arc).
// The Rapsodo card teaser links to /rapsodo for the full case file.

export type ExperienceEntry = {
  company: string;
  logo?: string;
  role: string;
  period: string;
  location: string;
  productLines?: string;
  lede: string;
  bullets: string[];
  caseStudyHref?: string;
  caseStudyLabel?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Obey",
    role: "Founder & Chief Strategist",
    period: "March 2025 — Present",
    location: "Greater St. Louis · Remote",
    lede: "Founded Obey to democratize AI application development — enabling non-technical founders and solopreneurs to ship sophisticated AI products without coding expertise. Building a behavior-adaptive platform with edge-served personalization at sub-10ms latency.",
    bullets: [
      "Filed provisional patent US 63/793,621 — a privacy-first AI engine that maps real-time context → taste archetype → edge-served hero image in under 10 milliseconds.",
      "Architecting a behavior-adaptive platform that delivers personalized content, predictive engagement models, and dynamic feedback across digital storytelling, consumer commerce, and professional-growth use cases.",
      "Shipped Nimbus — a Chrome extension + web app that transforms job searching into strategic career development. Save jobs from LinkedIn, get AI analysis of resume-to-role fit, and engage in natural conversations for personalized career insights. Built on LangChain, LangGraph, and LangSmith.",
      "Own product strategy, AI solution architecture, and initial go-to-market end-to-end.",
      "Stack: LangChain, Python, MLOps, diffusion pipelines, real-time feature stores.",
    ],
  },
  {
    company: "Rapsodo",
    role: "Director of Customer Success, Golf & Diamond Sports",
    period: "May 2025 — April 2026",
    location: "St. Louis · Remote",
    productLines: "MLM2Pro (golf) · Diamond Sports (baseball)",
    lede: "Built and operated the entire post-sale customer experience system across two product lines — running CS, ops, and data engineering as a solo function, with Claude Code as the engineering partner. What normally takes a five-person team. Shipped solo.",
    bullets: [
      "Owned NRR and GRR across two product lines, led CS and Support, and partnered with the CEO on quarterly reviews of retention, reliability risk, and roadmap priorities.",
      "Designed the four-program CS framework — LaunchPad (activation), KeepSwinging (engagement), NextRound (renewal), Champions (advocacy) — built on behavioral segmentation, not lifecycle assumptions.",
      "Built a real-time Mixpanel → Iterable pipeline on Google Cloud Run, bypassing MuleSoft's 24-hour batch delay. Predictive churn and customer health models at 99% / 96% accuracy on sales call data. Unified Zendesk + Jira + product usage into a single customer signal layer.",
      "AI-first Tier 1 / Tier 2 support tooling for triage, response drafting, and KB generation. Made the $184K ARR business case for legacy device EOL across 253 accounts.",
    ],
    caseStudyHref: "/rapsodo",
    caseStudyLabel: "Read the full case file",
  },
  {
    company: "Microsoft",
    role: "Sr. GenAI Strategist | Cloud Adoption & Customer Innovation Leader",
    period: "August 2021 — March 2025",
    location: "Greater St. Louis · Remote",
    lede: "Spearheaded enterprise adoption of GenAI and Microsoft Copilot. Translated complex AI concepts into executable roadmaps that drove revenue, satisfaction, and partner consumption across high-stakes Fortune 500 accounts.",
    bullets: [
      "Designed and led creation of an AI sales co-pilot — awarded Top Honorable Mention at Microsoft's 2023 Global Hackathon, selected from 40,000+ submissions.",
      "Drove a 35% uplift in cloud adoption through precision-aligned customer engagement and executive influence.",
      "Launched a field training initiative achieving 100% delivery rate in 90 days — scaling Copilot fluency across global field roles.",
      "Orchestrated virtual sales and success teams across enterprise clients, aligning execution with evolving CxO priorities.",
      "Influenced partner GTM with Microsoft ISVs and internal cloud teams to build scalable, repeatable GenAI consumption frameworks.",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Principal, Data Platforms",
    period: "July 2020 — August 2021",
    location: "Greater St. Louis · Remote",
    lede: "Cloud strategy advisor for global enterprise clients — translating Microsoft-centric environments into AWS-native solutions with scalable impact. Partnered across engineering, sales, and customer success to deliver cloud roadmaps, technical strategy, and platform transition plans for mission-critical workloads.",
    bullets: [
      "Led customer-facing architecture strategy sessions, providing executive-ready roadmaps for cloud adoption, data modernization, and infrastructure optimization.",
      "Bridged Microsoft ecosystem fluency with AWS expertise to guide clients through high-risk migrations — ensuring performance, continuity, and long-term alignment with AWS capabilities.",
      "Mentored internal AWS field teams and partner stakeholders on enterprise transformation best practices, co-creating repeatable GTM patterns across industries.",
      "Identified friction in customer journeys and proactively restructured solution frameworks, improving retention and increasing expansion potential across cloud engagements.",
    ],
  },
  {
    company: "Microsoft",
    role: "22 years of progressive seniority across enterprise sales, technical advisory, and field leadership",
    period: "1998 — 2020",
    location: "Greater St. Louis Area · Greater Seattle Area",
    lede: "22 years inside Microsoft, across the arc of enterprise tech — from on-prem to cloud, from product launches to executive advisory. The operating reps that make the last 18 months legible.",
    bullets: [
      "Senior Technology Strategist | Enterprise Cloud & SaaS Transformation (2013–2020). Virtual CIO and Solution Architect for Microsoft's most complex, regulated, high-value accounts. Cloud transformation across finance, healthcare, manufacturing. Forged high-trust relationships with CEOs, CTOs, CDOs, CIOs. Quota overperformance + revenue expansion across core accounts.",
      "Enterprise Enablement & Competitive Strategy Lead (2010–2013). Designed Microsoft's national \"Compete Clinic\" program three consecutive years. 35% win-rate improvement on competitive escalations. 100% CSAT on executive briefings. Launched a field intelligence network that cut time-to-insight by 50%.",
      "Enterprise Cloud Transformation Lead | Early SaaS Strategy (2006–2010). Led the launch of one of Microsoft's first commercial cloud customers — pioneering the path to Office 365. Recognized as one of the Top 3 Area Technology Specialists in the U.S.; awarded Central Region Technology Specialist of the Year.",
      "Senior Technical Product Manager | Windows Server Launch & Enablement (2002–2004). Created the official Windows Server launch demo presented by Microsoft's CFO to thousands of investors. Reduced support escalations 60% through positioning alignment with real-world value.",
      "Pre-Sales Solution Strategist | Collaboration & Mobility GTM (1999–2002). Led Microsoft's largest U.S. product launches for Office and Windows — 10,000+ attendees per event, 93% lead conversion. 240% YoY revenue growth. Quota over-attainment of 115% and 177%.",
      "Enterprise Customer Success Manager | Premier Support (1998–1999). Frontline customer advocate. Transformed four key accounts from \"somewhat satisfied\" to \"very satisfied\" within 90 days. 300% revenue YoY on dedicated support agreements.",
      "Honors: Technology Specialist of the Year, Top Contributor (East and Central Regions), Peer Leadership Award, Goldstar Award.",
    ],
  },
];
