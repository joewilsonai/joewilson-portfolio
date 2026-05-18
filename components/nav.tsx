// Sticky top nav. Minimal. Brand mark + anchor links.

import { identity } from "@/lib/content/identity";

const links = [
  { href: "#work", label: "Work" },
  { href: "#builds", label: "Builds" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(10,10,10,0.7)] border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-[var(--container-grid)] px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="h-7 w-7 rounded-full flex items-center justify-center text-[0.7rem] font-semibold"
            style={{
              background: "linear-gradient(135deg, #e07a2f, #b8631f)",
              color: "#0a0a0a",
            }}
          >
            JW
          </span>
          <span className="mono text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
            {identity.handle}
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
