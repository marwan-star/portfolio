import { navigation } from '../data/portfolio'

type HeaderProps = {
  isProjectView?: boolean
}

export function Header({ isProjectView = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040507]/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a className="flex items-center gap-3" href={isProjectView ? '/' : '#top'}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 font-display text-sm font-semibold tracking-[0.2em] text-stone-100">
            MS
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-orange-200/75">
              Marwan star portfolio
            </p>
            <p className="text-sm text-slate-300">Developer portfolio</p>
          </div>
        </a>

        {isProjectView ? (
          <a
            className="shrink-0 whitespace-nowrap text-sm text-slate-300 transition hover:text-stone-100"
            href="/#projects"
          >
            Back to Projects
          </a>
        ) : (
          <nav
            aria-label="Primary navigation"
            className="flex max-w-[58vw] gap-4 overflow-x-auto text-sm text-slate-400 [scrollbar-width:none] md:max-w-none md:gap-6"
          >
            {navigation.map((item) => (
              <a
                className="shrink-0 whitespace-nowrap transition hover:text-stone-100"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
