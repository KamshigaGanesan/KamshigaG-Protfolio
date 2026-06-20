import { FaGithub } from "react-icons/fa6";
import projects from '../data/projects'

function Projects() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="project-kicker">Selected Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article
              className="project-card featured-project-card"
              key={project.id}
              data-aos="fade-up"
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
