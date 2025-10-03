import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}
