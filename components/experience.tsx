import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Experience</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Data Analyst Intern</CardTitle>
                <p className="text-muted-foreground"> Edunet Foundation</p>
              </div>
              <Badge variant="secondary">Dec 2024 - Jan 2025</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Contributed to data analysis and visualization projects by cleaning datasets, building dashboards, and delivering insights to support decision-making.
              </p>
              <div>
                <p className="font-medium text-foreground mb-2">Key Responsibilities:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Cleaned, transformed, and validated datasets using Python (Pandas) and SQL, ensuring accuracy and usability.</li>
                  <li>Designed interactive dashboards in Power BI to visualize KPIs and business insights.</li>
                  <li>Conducted exploratory data analysis (EDA) to identify trends and anomalies in datasets.</li>
                  <li>Automated repetitive data processing tasks, reducing manual effort and improving efficiency.</li>
                  <li>Collaborated with mentors and cross-functional teams to present insights for data-driven decision making.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python (Pandas, NumPy)", "SQL", "Power BI", "Excel", "Git"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Frontend Developer Intern</CardTitle>
                <p className="text-muted-foreground">Techvolt Software Pvt Ltd</p>
              </div>
              <Badge variant="secondary">Aug 2023 - Sep 2023</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Created dynamic web pages and optimized UI components for enhanced usability and performance
              </p>
              <div>
                <p className="font-medium text-foreground mb-2">Key Responsibilities:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Built responsive UI components using HTML, CSS, and JavaScript.</li>
                  <li>Collaborated with senior developers to debug and optimize front-end components.</li>
                  <li>Enhanced cross-browser compatibility and improved site performance.</li>
                  <li>Implemented interactive features to boost usability and accessibility.</li>
                  <li>Participated in team discussions, code reviews, and client presentations.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["HTML", "CSS", "JavaScript", "Git", "VS Code"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
