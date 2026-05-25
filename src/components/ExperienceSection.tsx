import { experienceItems } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="experience">
      <div className="border-t border-white/10 pt-14">
        <SectionHeading
          eyebrow="Experience"
          title="Work shaped by product ownership, collaboration, and practical engineering."
          description="I've been most effective in environments where code quality and feature delivery both matter. That balance is where I do my best work."
        />

        <div className="mt-12 space-y-8">
          {experienceItems.map((item) => (
            <article
              className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[180px_minmax(0,1fr)]"
              key={`${item.company}-${item.role}`}
            >
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-orange-200/75">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-[-0.04em] text-stone-50">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((point) => (
                    <li
                      className="relative pl-5 text-sm leading-7 text-slate-400 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-orange-200 before:content-['']"
                      key={point}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
