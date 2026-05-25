import meImage from '../assets/me.jpg'
import { heroStats } from '../data/portfolio'

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-12 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,.95fr)] lg:py-20">
      <div className="order-2 animate-[fade-up_.8s_ease_both] lg:order-1">
        <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-orange-200/75">
          Software Developer
        </p>
        <h1 className="max-w-[11ch] font-display text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-6xl lg:text-8xl">
          Marwan star portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Flutter-focused developer crafting scalable mobile and web products with clean
          architecture, sharp interfaces, and code that stays maintainable.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-stone-100 px-7 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-200"
            href="#projects"
          >
            Explore Projects
          </a>
          <a
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-7 text-sm font-medium text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            href="#contact"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl text-stone-50">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 animate-[fade-up_1s_ease_.15s_both] lg:order-2">
        <div className="relative mx-auto max-w-[520px]">
          <div className="absolute -inset-6 rounded-[2rem] border border-white/8 bg-white/[0.02] blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1016] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="grid lg:grid-cols-[minmax(0,.95fr)_minmax(220px,.75fr)]">
              <div className="relative min-h-[420px] border-b border-white/10 lg:border-b-0 lg:border-r">
                <img
                  alt="Portrait of Marwan Star"
                  className="h-full w-full object-cover object-top"
                  src={meImage}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(4,5,7,0.92))] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-orange-200/80">
                    Shipping mindset
                  </p>
                  <p className="mt-2 max-w-[26ch] text-sm leading-6 text-slate-300">
                    Clean architecture, fast iteration, and product decisions grounded in real use.
                  </p>
                </div>
              </div>

              <div className="relative p-6">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>

                <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                  active-stack.ts
                </p>

                <div className="space-y-3 font-mono text-sm text-slate-300">
                  <p>
                    <span className="text-cyan-300">const</span>{' '}
                    <span className="text-stone-100">developer</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    focus: <span className="text-orange-200">'Flutter'</span>,
                  </p>
                  <p className="pl-4">
                    ui: <span className="text-orange-200">'React + Tailwind'</span>,
                  </p>
                  <p className="pl-4">
                    mindset: <span className="text-orange-200">'Clean Architecture'</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-emerald-300">'available'</span>
                  </p>
                  <p>{'}'}</p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {['Flutter / Dart', 'React / TypeScript', 'Laravel / APIs'].map((item) => (
                    <div className="flex items-center justify-between text-sm" key={item}>
                      <span className="text-slate-400">{item}</span>
                      <span className="text-stone-100">{'>>'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
