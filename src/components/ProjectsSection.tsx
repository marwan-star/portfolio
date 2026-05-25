import { projectItems } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="projects">
      <div className="border-t border-white/10 pt-14">
        <SectionHeading
          eyebrow="Projects / Work"
          title="Selected builds that reflect how I think about products and code."
          description="Each project below represents a different layer of my work, from production Flutter delivery to full-stack structure and frontend commerce experiences."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project) => (
            <article
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              key={project.title}
            >
              <div className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,178,107,0.18),transparent_35%)] opacity-60 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-orange-200/75">
                    {project.label}
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-[#090c12] p-4 font-mono text-sm text-slate-400">
                    {project.snippet.map((line, index) => (
                      <p key={line}>
                        <span className="mr-3 text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl tracking-[-0.04em] text-stone-50">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-200 transition hover:text-orange-100"
                  href={project.href}
                >
                  {project.linkLabel}
                  <span aria-hidden="true">{'->'}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
