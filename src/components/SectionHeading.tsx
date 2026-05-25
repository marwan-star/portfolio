type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-orange-200/75">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.05em] text-stone-50 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>
    </div>
  )
}
