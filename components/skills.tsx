import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "MySQL", "Python(Pandas, Numpy)", ],
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3",  "JavaScript",],
    },
    
    {
      title: "Databases",
      skills: ["MySQL"],
    },
    {
      title: "Data Analytics",
      skills: ["Power Bi", "Tableau", "MS Excel", ],
    },
    {
      title: "Tools & Others",
      skills: ["VS Code", "Git", "GitHub "],
    },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Leadership",
  ]

  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Skills</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
