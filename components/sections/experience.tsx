import { experience } from "@/lib/content/experience";

export function Experience() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[var(--container-grid)] px-6 py-24 sm:py-28"
    >
      <div className="mb-10">
        <div className="section-label mb-3">Work experience</div>
        <p className="display text-3xl sm:text-4xl max-w-[28ch]">
          End-to-end ownership across <em>discovery, build, ship, adopt.</em>
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((e) => (
          <article key={e.company} className="card p-7 sm:p-10">
            <header className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="display text-2xl sm:text-3xl">{e.company}</h3>
                <div className="text-[var(--color-muted)] text-sm mt-1">
                  {e.role}
                </div>
              </div>
              <div className="mono text-[var(--color-dim)] text-sm">
                {e.period} · {e.location}
              </div>
            </header>

            {e.productLines && (
              <div className="mb-4 text-sm text-[var(--color-muted)]">
                {e.productLines}
              </div>
            )}

            <p className="text-[var(--color-text)] leading-relaxed mb-6 max-w-[70ch]">
              {e.lede}
            </p>

            <ul className="space-y-3">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-muted)] leading-relaxed">
                  <span className="text-[var(--color-accent)] mt-2 leading-none">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {e.caseStudyHref && (
              <a
                href={e.caseStudyHref}
                className="link mono inline-block mt-6 text-sm"
              >
                {e.caseStudyLabel ?? "Read the case study"} →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
