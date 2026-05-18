// Speaking & Teaching — slot. Hides when empty.

import { speaking } from "@/lib/content/speaking";

export function Speaking() {
  if (speaking.length === 0) return null;

  return (
    <section className="mx-auto max-w-[var(--container-grid)] px-6 py-20 border-t border-[var(--color-border)]">
      <div className="mb-8">
        <div className="section-label mb-3">Speaking &amp; teaching</div>
        <p className="display text-3xl">Sharing the work.</p>
      </div>
      <div className="space-y-4">
        {speaking.map((s, i) => (
          <article key={i} className="card p-6 flex flex-wrap justify-between gap-3 items-baseline">
            <div>
              <div className="mono text-xs text-[var(--color-dim)] mb-1">
                {s.year} · {s.venue}
              </div>
              <h4 className="display text-xl">{s.title}</h4>
              {s.description && (
                <p className="text-[var(--color-muted)] text-sm mt-2 max-w-[60ch]">
                  {s.description}
                </p>
              )}
            </div>
            {s.url && (
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="link mono text-sm"
              >
                View →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
