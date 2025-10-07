export function About() {
  return (
    <section id="about" className="space-y-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Adhithya V</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Aspiring Data Analyst & Software Engineer</h2>
          
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">About Me</h3>
          <p className="text-muted-foreground leading-relaxed">
            I’m an aspiring Software Engineer & Data Analyst with a strong foundation in computer science and hands-on experience in front-end development, data analytics, and visualization
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently seeking opportunities to contribute to innovative projects while continuing to grow my skills in
            modern web technologies, designing insightful dashboards and software architecture.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Career Goals</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Contribute to impactful software projects at a forward-thinking company</li>
            <li>• Exploring data analytics and visualization to deliver actionable insights.</li>
            <li>• Contribute to open-source communities to share knowledge and learn from peers.</li>
            <li>• Build products that solve real-world problems at scale</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
