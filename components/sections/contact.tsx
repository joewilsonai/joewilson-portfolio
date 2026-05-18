import { identity } from "@/lib/content/identity";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[var(--container-grid)] px-6 py-28 border-t border-[var(--color-border)]"
    >
      <p className="display text-[clamp(2.4rem,6vw,4.4rem)] mb-10 max-w-[20ch]">
        Let&rsquo;s <em>talk.</em>
      </p>
      <p className="text-[var(--color-muted)] text-lg max-w-[55ch] mb-10">
        Looking for senior IC or leadership roles where AI-native operating is the job — Applied AI / AI Ops / Forward Deployed Engineer / Technical CS at the frontier. Bigger teams. Harder problems.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${identity.email}`}
          className="px-5 py-3 rounded-full text-sm font-medium border border-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
        >
          {identity.email}
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-full text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-hot)] transition-colors"
        >
          LinkedIn →
        </a>
      </div>

      <div className="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-wrap justify-between gap-3 text-xs text-[var(--color-dim)]">
        <div>© {new Date().getFullYear()} {identity.name}</div>
        <div className="mono">{identity.location}</div>
      </div>
    </section>
  );
}
