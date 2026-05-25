import type { FormEvent } from 'react'
import { socialLinks } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SocialIconLink } from './SocialIconLink'

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'Website visitor'}`)
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message].join('\n'),
    )

    window.location.href = `mailto:marwan.00181941@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="contact">
      <div className="border-t border-white/10 pt-14">
        <SectionHeading
          eyebrow="Contact"
          title="If the work feels aligned, I'd be glad to talk."
          description="I'm open to software roles, product-minded teams, and collaborations where thoughtful engineering is part of the culture."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(320px,1.05fr)]">
          <div>
            <a
              className="inline-flex items-center rounded-full bg-stone-100 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-200"
              href="mailto:marwan.00181941@gmail.com"
            >
              marwan.00181941@gmail.com
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <SocialIconLink href={item.href} key={item.label} label={item.label}>
                  {item.icon}
                </SocialIconLink>
              ))}
            </div>
            <div className="mt-8 space-y-3 text-sm leading-7 text-slate-400">
              <p>Phone: 0751 845 6346</p>
              <p>Location: Kurdistan, Iraq</p>
              <p>Status: Open to full-time opportunities and product-focused freelance work.</p>
            </div>
          </div>

          <form className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6" onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Name</span>
                <input
                  className="min-h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-stone-100 outline-none transition focus:border-orange-200/50"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  className="min-h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-stone-100 outline-none transition focus:border-orange-200/50"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Message</span>
                <textarea
                  className="min-h-36 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-stone-100 outline-none transition focus:border-orange-200/50"
                  name="message"
                  placeholder="Tell me a little about the role, team, or project."
                />
              </label>
              <button
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 text-sm font-semibold text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
