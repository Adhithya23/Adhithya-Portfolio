import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground">Education</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Bachelor of Engineering (Computer Science Engineering)</CardTitle>
                <p className="text-muted-foreground">KSR Institute for Enginering and Technology</p>
              </div>
              <Badge variant="secondary">2021 - 2025</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>CGPA:</strong> 7.4 
              </p>
 
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">HSC</CardTitle>
                <p className="text-muted-foreground">Sri Vijay Vidyalaya Matric Higher Secoondary School</p>
              </div>
              <Badge variant="secondary">2020 - 2021</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Percentage : </strong> 85%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">SSLC</CardTitle>
                <p className="text-muted-foreground">Sri Vijay Vidyalaya Matric Higher Secoondary School</p>
              </div>
              <Badge variant="secondary">2018 - 2019</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Percentage : </strong> 87.9%
              </p>
            </div>
          </CardContent>
        </Card>

       
      </div>
    </section>
  )
}
