import { identity } from "@/lib/content/identity";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[var(--container-grid)] px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Greeting */}
      <div className="flex items-center gap-3 mb-10 text-[var(--color-muted)]">
        <span
          aria-hidden
          className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{
            background: "linear-gradient(135deg, #e07a2f, #b8631f)",
            color: "#0a0a0a",
          }}
        >
          JW
        </span>
        <span className="text-base">
          Hi, I&rsquo;m <span className="text-[var(--color-text)] mono">@{identity.handle}</span>,
        </span>
      </div>

      {/* Display headline */}
      <h1 className="display text-[clamp(2.4rem,6vw,4.6rem)] max-w-[20ch] mb-10">
        {identity.headline.pre}{" "}
        <em>{identity.headline.accent}</em>{" "}
        {identity.headline.post}
      </h1>

      {/* Badges */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {identity.badges.map((b) => (
          <span key={b} className="pill">{b}</span>
        ))}
      </div>

      {/* CTAs — anchor jumps to the three load-bearing sections */}
      <div className="flex flex-wrap gap-3">
        <a
          href="#work"
          className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
        >
          My path →
        </a>
        <a
          href="#builds"
          className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-border-hot)] transition-colors"
        >
          What I build →
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-border-hot)] transition-colors"
        >
          Let&rsquo;s talk →
        </a>
      </div>
    </section>
  );
}
