import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16" id="about">
      <div className="border-t border-white/10 pt-12">
        <div className="mb-10 animate-[fade-up_.8s_ease_both]">
          <SectionHeading
            eyebrow="About Me"
            title="Building products with practical structure and clean decisions."
            description="I'm a developer who enjoys turning practical product needs into maintainable systems. Most of my work lives in Flutter, but I'm also comfortable shaping frontend experiences in React and supporting full-stack delivery when a project needs breadth."
          />
        </div>

        <div className="animate-[fade-up_.9s_ease_.05s_both] space-y-5">
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            I care about architecture because it protects momentum. The goal is not just to ship
            features, but to keep shipping without the codebase becoming heavy, fragile, or hard to
            reason about.
          </p>
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            I like working on products where code quality, interface clarity, and steady delivery
            all matter at the same time.
          </p>
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            Based in Kurdistan, Iraq, I am especially interested in mobile-first product teams
            that value thoughtful engineering habits and long-term maintainability.
          </p>
        </div>
      </div>
    </section>
  )
}
