import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#040507_0%,#090b10_45%,#030406_100%)] text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,130,60,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(82,150,255,0.12),transparent_26%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(180deg,black,transparent_75%)]" />

      <Header />

      <main className="relative z-10" id="top">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
