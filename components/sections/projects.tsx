import { projects, type Project } from "@/lib/content/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && p.status !== "private");

  return (
    <section
      id="builds"
      className="mx-auto max-w-[var(--container-grid)] px-6 py-24 sm:py-28 border-t border-[var(--color-border)]"
    >
      <div className="mb-10">
        <div className="section-label mb-3">What I build</div>
        <p className="display text-3xl sm:text-4xl max-w-[30ch]">
          Receipts. <em>Public ones, where I can — private ones, where I have to.</em>
        </p>
      </div>

      {/* Featured anchor (Rapsodo case study) */}
      {featured.map((p) => (
        <FeaturedCard key={p.slug} project={p} />
      ))}

      {/* Grid of personal builds */}
      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="card p-7 sm:p-10">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="section-label mb-2">Featured case study</div>
          <h3 className="display text-2xl sm:text-3xl">{project.title}</h3>
          <p className="text-[var(--color-muted)] mt-2">{project.tagline}</p>
        </div>
        <StatusPill status={project.status} />
      </div>

      <p className="text-[var(--color-text)] leading-relaxed max-w-[70ch] mb-6">
        {project.description}
      </p>

      {project.metrics && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-[var(--color-border)] p-4">
              <div className="display text-2xl text-[var(--color-accent)]">{m.value}</div>
              <div className="text-xs text-[var(--color-dim)] mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <StackRow items={project.stack} />

      {(project.caseStudyHref || project.repoUrl || project.liveUrl) && (
        <div className="flex flex-wrap gap-3 mt-6">
          {project.caseStudyHref && (
            <a href={project.caseStudyHref} className="link mono text-sm">
              Read the case study →
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="link mono text-sm">
              View code →
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link mono text-sm">
              Visit live →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="display text-xl">{project.title}</h4>
        <StatusPill status={project.status} />
      </div>
      <p className="text-[var(--color-muted)] text-sm mb-3">{project.tagline}</p>
      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <StackRow items={project.stack} />
      {(project.repoUrl || project.liveUrl) && (
        <div className="flex gap-4 mt-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="link mono text-xs">
              code →
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link mono text-xs">
              live →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function StackRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span
          key={s}
          className="mono text-xs px-2 py-1 rounded-md bg-[var(--color-surface-2)] text-[var(--color-muted)]"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  if (status === "public") {
    return (
      <span className="pill" style={{ borderColor: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
        ● Public
      </span>
    );
  }
  if (status === "shipping") {
    return <span className="pill">Shipping soon</span>;
  }
  return null;
}
