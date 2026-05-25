import type { PropsWithChildren } from 'react'

type SocialIconLinkProps = PropsWithChildren<{
  href: string
  label: string
}>

export function SocialIconLink({ children, href, label }: SocialIconLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('/resume')

  return (
    <a
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-orange-200/40 hover:text-stone-100"
      href={href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  )
}
