// Press strip — "Featured in".
//
// Renders nothing if no press hits exist (avoids the awkward
// "as seen in: nobody yet"). Once the first feature lands, the section appears.

import { press } from "@/lib/content/press";

export function Press() {
  if (press.length === 0) return null;

  return (
    <section className="mx-auto max-w-[var(--container-grid)] px-6 py-12 border-t border-[var(--color-border)]">
      <div className="section-label mb-6">Featured in</div>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {press.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            {p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.logo} alt={p.outlet} className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
            ) : (
              <span className="text-sm font-medium uppercase tracking-wider">{p.outlet}</span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
