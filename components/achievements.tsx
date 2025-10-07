import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users } from "lucide-react"
import { title } from "process"

export function Achievements() {

  const certifications = [
    {
      title: " Career Essentials in Data Analysis",
      issuer: "Linkedin and Microsoft",
      date: "2025",
      
    },
    {
      title: " Core Java Programming",
      issuer: "Udemy",
      date: "2024",
      
    },
    {
      title: " Power BI Mastery",
      issuer: "Office master",
      date: "2025",
      
    },

    {
      title: "Front-end Web development Basics",
      issuer: "simplilearn",
      date: "2025",
    },
  ]

  return (
    <section id="achievements" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Certifications</h2>

      <div className="space-y-8">

        <div>
          {/* <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3> */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>

                    </div>
                    <Badge variant="secondary">{cert.date}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
