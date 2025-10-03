import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description:
        "An automated attendance system that uses a webcam to recognize faces and log entries into an Excel file",
      technologies: ["Python", "OpenCV", "face_recognition","pandas", "openpyxl"],
      github: "https://github.com/Adhithya23/Face-Recognition-Attendance-System",
      live: "https://github.com/Adhithya23/Face-Recognition-Attendance-System/blob/main/README.md",
      highlights: [
        "Automated Attendance: Captures and marks attendance based on facial recognition.",
        "Real-time Recognition: Uses a live webcam feed to identify individuals.",
        "Scalable: Can easily add new people by placing their image in the know_faces directory.",
        "Automated Logging: Automatically records attendance data (name, date, and time) into an Excel spreadsheet.",
      ],
    },
    {
      title: "Digital Storefront",
      description:
        "A simple and elegant digital storefront for maternity products with a dynamic user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Adhithya23/Digital-Storefront",
      live: "https://adhithya23.github.io/Digital-Storefront/",
      highlights: [
        "A single-page application that dynamically displays different sections (Home, About Us, Contact, and Shop) without reloading the page.",
        "A shop section that allows users to select multiple products via checkboxes.",
        "Calculates the total price of selected items and displays them in a confirmation message upon purchase.",
        "A Shop Again button to clear the cart and reset the view.",
      ],
    },
    {
      title: "Weather Forecast & Analysis",
      description:
        "A Python-based application that fetches weather data, analyzes it for farming suitability based on temperature and rainfall, and exports the daily forecast to an Excel file.",
      technologies: ["Python", "Requests", "Pandas", "OpenWeatherMap API"],
      github: "https://github.com/Adhithya23/Weather-Forecast-Analysis",
      live: "https://github.com/Adhithya23/Weather-Forecast-Analysis/blob/main/README.md",
      highlights: [
        "Weather API Integration: Fetches real-time weather forecast data from the OpenWeatherMap API.",
        "Farming Suitability Analysis: Analyzes weather conditions to provide daily advice on whether the climate is suitable for farming.",
        "Data Export to Excel: Automatically saves the 7-day weather forecast, including the farming advice, into a structured Excel spreadsheet",
        "User-Input for Location: Allows the user to specify a city or village name to get a customized forecast.",
      ],
    },
  ]

  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Projects</h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div>
                  <p className="font-medium text-foreground mb-2">Key Features:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
