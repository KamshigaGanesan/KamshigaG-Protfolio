import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id} data-aos="fade-up">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, index) => (
                  <span key={index} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects