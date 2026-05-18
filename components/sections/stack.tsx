import { stack } from "@/lib/content/stack";

export function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-[var(--container-grid)] px-6 py-24 sm:py-28 border-t border-[var(--color-border)]"
    >
      <div className="mb-10">
        <div className="section-label mb-3">Tech stack</div>
        <p className="display text-3xl sm:text-4xl max-w-[28ch]">
          The tools I reach for. <em>Claude Code is the engineering team.</em>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stack.map((group) => (
          <div key={group.heading} className="card p-6">
            <div className="section-label mb-4">{group.heading}</div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((it) => (
                <span
                  key={it.name}
                  className="mono text-xs px-2.5 py-1 rounded-md"
                  style={
                    it.emphasized
                      ? {
                          background: "rgba(224, 122, 47, 0.12)",
                          color: "var(--color-accent)",
                          border: "1px solid var(--color-accent-soft)",
                        }
                      : {
                          background: "var(--color-surface-2)",
                          color: "var(--color-muted)",
                        }
                  }
                >
                  {it.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
