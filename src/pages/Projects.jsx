function Projects() {
  const projects = [
    {
      title: "Digitization Guide",
      description: "A web project showcasing digitization concepts, built with HTML and CSS. This project demonstrates modern web design principles and is hosted on GitHub Pages.",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/jvs7215/digitization",
      liveUrl: "https://jvs7215.github.io/digitization/index"
    },
    {
      title: "Adventure Game - Unreal Engine",
      description: "An action-adventure game inspired by Uncharted, developed as a final project for GAME 250 at Penn State Behrend. Features dynamic combat, intuitive climbing mechanics, and stealth gameplay. Built with Unreal Engine 5 using Blueprint Visual Scripting.",
      technologies: ["Unreal Engine 5", "Blueprint Visual Scripting"],
      githubUrl: "https://github.com/jvs7215/game250Final"
    },
    {
      title: "BloodReign - Godot",
      description: "Bloodreign is a 2D top-down roguelike survival game centered on fast-paced combat and resource management through a single unifying mechanic, the blood meter. Players take on the role of the last surviving vampire, managing dwindling life-essence in a hostile, human-dominated world. The blood meter functions simultaneously as health and stamina. Players must continually drain enemies of blood to survive while spending blood to power abilities, creating a high-risk, high-reward gameplay loop. The game is designed for players who enjoy strategic combat, roguelike progression, and dark gothic themes. It has a short, 20-minute length to emphasize replayability through multiple playstyles. Bloodreign is designed this way to allow players to reexperience the game in unique ways without spending too much time on a single playthrough.",
      technologies: ["Godot Engine", "GDScript"],
      githubUrl: "https://github.com/minakaragoz/Blood_Reign"
    }
  ]

  return (
    <div className="container">
      <h1 className="title">My Projects</h1>

      <div className="content">
        <p className="paragraph">
          Here are some projects I've worked on:
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </div>
            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

