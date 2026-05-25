import type { ProjectItem } from '../data/portfolio'

type ProjectDetailPageProps = {
  project: ProjectItem
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const heroShot = project.screenshots?.[0]

  return (
    <main className="relative z-10" id="top">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:py-20">
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-stone-100"
          href="/"
        >
          <span aria-hidden="true">{'<-'}</span>
          Back to portfolio
        </a>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,.9fr)] lg:items-start">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-orange-200/75">
              {project.label}
            </p>
            <h1 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.92] tracking-[-0.06em] text-stone-50 sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {project.overview ?? project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-stone-100 px-7 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-200"
                href="#project-features"
              >
                Explore Features
              </a>
              <a
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-7 text-sm font-medium text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                href="/#contact"
              >
                Ask About The Build
              </a>
            </div>
          </div>

          {heroShot ? (
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1016] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                alt={heroShot.alt}
                className="h-full w-full object-cover object-top"
                src={heroShot.src}
              />
            </div>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,.9fr)]">
          <section
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            id="project-features"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-orange-200/75">
              Feature Overview
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-stone-50">
              What users can do inside the app
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.featureList?.map((feature) => (
                <article
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-slate-300"
                  key={feature}
                >
                  {feature}
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-orange-200/75">
              Build Focus
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#090c12] p-4 font-mono text-sm text-slate-400">
              {project.snippet.map((line, index) => (
                <p key={line}>
                  <span className="mr-3 text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">{project.description}</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
