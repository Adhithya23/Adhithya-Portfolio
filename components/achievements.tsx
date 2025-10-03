import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users } from "lucide-react"
import { title } from "process"

export function Achievements() {
  // const achievements = [
  //   {
  //     icon: Trophy,
  //     title: "Dean's List",
  //     description: "Achieved Dean's List recognition for 6 consecutive semesters",
  //     date: "2020-2024",
  //     category: "Academic",
  //   },
  //   {
  //     icon: Award,
  //     title: "Hackathon Winner",
  //     description: "First place in University Tech Hackathon for developing an AI-powered study assistant",
  //     date: "2023",
  //     category: "Competition",
  //   },
  //   {
  //     icon: Star,
  //     title: "Outstanding Intern Award",
  //     description: "Recognized for exceptional performance and contribution during summer internship",
  //     date: "2023",
  //     category: "Professional",
  //   },
  //   {
  //     icon: Users,
  //     title: "Open Source Contributor",
  //     description: "Active contributor to popular open-source projects with 50+ merged pull requests",
  //     date: "2022-Present",
  //     category: "Community",
  //   },
  // ]

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
        {/* <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <Badge variant="outline">{achievement.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground font-medium">{achievement.date}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div> */}

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
                      {/* <p className="text-sm text-muted-foreground">Credential ID: {cert.credentialId}</p> */}
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
