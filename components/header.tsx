import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Adhithya V</h1>
            
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#education" className="text-foreground hover:text-accent transition-colors">
              Education
            </a>
            <a href="#experience" className="text-foreground hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-foreground hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-foreground hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Adhithya23" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/adhithya-venkatesh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:adhithyavenkatesh28@gmail.com.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
