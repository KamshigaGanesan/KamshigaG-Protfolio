import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id} data-aos="fade-up">
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              </div>

              <div className="project-card-body">
                <p className="project-kicker">Project Screenshot</p>
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

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-secondary"
                    >
                      <FaArrowUpRightFromSquare /> Live Demo
                    </a>
                  )}
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