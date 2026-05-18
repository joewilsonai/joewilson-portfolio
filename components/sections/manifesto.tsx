import { identity } from "@/lib/content/identity";

export function Manifesto() {
  return (
    <section className="mx-auto max-w-[var(--container-prose)] px-6 py-24 sm:py-32">
      <div className="space-y-7">
        {identity.manifesto.map((line, i) => (
          <p
            key={i}
            className="display text-2xl sm:text-3xl text-[var(--color-text)] leading-snug"
            style={{
              opacity: i === identity.manifesto.length - 1 ? 1 : 0.85 + (i * 0.04),
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
