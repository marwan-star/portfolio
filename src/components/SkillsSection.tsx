import { skillGroups, toolTags } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="skills">
      <div className="border-t border-white/10 pt-14">
        <SectionHeading
          eyebrow="Skills / Tools"
          title="A toolkit shaped by delivery, maintainability, and product clarity."
          description="The strongest work usually comes from combining technical range with discipline. These are the areas I lean on most when building and improving software."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.9fr)]">
          <div className="space-y-6 animate-[fade-up_.8s_ease_both]">
            {skillGroups.map((skill) => (
              <div key={skill.name}>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-stone-100">{skill.name}</span>
                  <span className="text-slate-500">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/6">
                  <div
                    className="h-2 rounded-full bg-[linear-gradient(90deg,#ffb26b_0%,#8bc7ff_100%)] shadow-[0_0_18px_rgba(255,178,107,0.22)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="animate-[fade-up_1s_ease_.15s_both]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                toolset.map()
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {toolTags.map((tool) => (
                  <span
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-orange-200/30 hover:text-stone-100"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
