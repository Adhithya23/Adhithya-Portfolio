import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:adhithyavenkatesh28@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  adhithyavenkatesh28@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 8668198699
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Krishnagiri, Tamil nadu, India</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/adhithya-venkatesh/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Adhithya23" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/ADHITHYA_V_SWE.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
