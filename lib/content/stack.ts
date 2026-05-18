// Tech stack — grouped, scannable.
// Pulled from Section 8 of the handoff doc. Claude / Claude Code highlighted as primary.

export type StackGroup = {
  heading: string;
  items: { name: string; emphasized?: boolean }[];
};

export const stack: StackGroup[] = [
  {
    heading: "AI / LLM (primary)",
    items: [
      { name: "Claude", emphasized: true },
      { name: "Claude Code", emphasized: true },
      { name: "Anthropic API" },
      { name: "MCP" },
      { name: "Cursor" },
      { name: "ElevenLabs" },
      { name: "fal.ai" },
      { name: "OpenAI API" },
    ],
  },
  {
    heading: "Customer Success & Lifecycle",
    items: [
      { name: "Mixpanel" },
      { name: "Iterable" },
      { name: "Salesforce" },
      { name: "Zendesk" },
      { name: "Jira" },
      { name: "Intercom" },
    ],
  },
  {
    heading: "Data & Infrastructure",
    items: [
      { name: "Google Cloud Run" },
      { name: "BigQuery" },
      { name: "Supabase" },
      { name: "Vercel" },
      { name: "Elasticsearch" },
      { name: "MongoDB" },
      { name: "SQLite" },
    ],
  },
  {
    heading: "Dev",
    items: [
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "Next.js" },
      { name: "SQL" },
      { name: "Git" },
    ],
  },
  {
    heading: "Operating style",
    items: [
      { name: "Systems thinking" },
      { name: "End-to-end ownership" },
      { name: "Executive communication" },
      { name: "Cross-functional leadership" },
      { name: "Bias for shipping" },
    ],
  },
];
