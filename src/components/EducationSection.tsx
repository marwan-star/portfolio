import { educationItems } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="education">
      <div className="border-t border-white/10 pt-14">
        <SectionHeading
          eyebrow="Education"
          title="Formal study backed by continuous practical learning."
          description="I value academic grounding, but most of my growth comes from applying ideas in product work and evolving them under real constraints."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {educationItems.map((item) => (
            <article
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
              key={item.title}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-orange-200/75">
                {item.year}
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.04em] text-stone-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.place}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
