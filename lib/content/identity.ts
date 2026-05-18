// Identity — the single source of truth for who Joe is.
// Update this file once; every section reads from it.

export const identity = {
  name: "Joe Wilson",
  handle: "joewilson",
  location: "St. Charles, MO · Remote",
  email: "joe.wilson@live.com",

  // PLACEHOLDER — swap with real LinkedIn slug before ship.
  linkedin: "https://linkedin.com/in/joewilson",

  // PLACEHOLDER — domain will be confirmed at deploy time.
  domain: "joewilson.ai",

  // Hero positioning. Option C from the handoff — punchiest variant.
  // For resume header use option A; cover letters use option B.
  headline: {
    pre: "AI-native customer experience",
    accent: "operator",
    post: "shipping at team scale, solo — with Claude Code as the engineering partner.",
  },

  // Badges under the hero. Keep to 2–3, mutually reinforcing.
  badges: [
    "25 years enterprise tech",
    "Microsoft → Rapsodo",
    "Available · open to senior IC + leadership",
  ],

  // The manifesto block. Five short rhythmic lines.
  manifesto: [
    "For 25 years I've been the operator who turns ambiguous customer problems into systems that ship.",
    "At Rapsodo I ran customer success as a one-person function — CS, ops, data engineering, support — by pairing enterprise judgment with Claude Code as the engineering partner.",
    "What used to require five people, I now do alone.",
    "Now I'm looking for the next room with bigger teams, harder problems, and the same operating bias: end-to-end ownership, no excuses, ship.",
    "Ready for what's next.",
  ],
} as const;
