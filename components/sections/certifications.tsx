// Certifications — Anthropic stack as it's earned.
//
// Hides itself when the list is empty so the site doesn't ship with
// an awkward "Certifications: (none yet)". Once the first cert is in,
// the whole section materializes.

import { certifications } from "@/lib/content/certifications";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section className="mx-auto max-w-[var(--container-grid)] px-6 py-20 border-t border-[var(--color-border)]">
      <div className="mb-8">
        <div className="section-label mb-3">Certifications</div>
        <p className="display text-3xl max-w-[30ch]">
          The <em>AI fluency stack.</em>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((c) => (
          <a
            key={c.verifyUrl}
            href={c.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="card p-5 hover:bg-[var(--color-surface-2)] transition-colors"
          >
            <div className="mono text-xs text-[var(--color-dim)] mb-1">{c.year}</div>
            <div className="text-sm font-medium">{c.title}</div>
            <div className="mono text-xs text-[var(--color-muted)] mt-2">{c.issuer}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
