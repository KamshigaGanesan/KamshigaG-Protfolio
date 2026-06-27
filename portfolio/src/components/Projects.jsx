import { FaGithub } from "react-icons/fa6";
import projects from "../data/projects";
import SectionHeading from "./ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "./ui/AnimateIn";

function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          kicker="Selected Work"
          title="Featured Projects"
          subtitle="Full-stack applications and academic builds that demonstrate my approach to clean interfaces, API integration, and reliable delivery."
        />

        <StaggerContainer className="projects-grid" stagger={0.1}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="project-card featured-project-card glass-card">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="400"
                  />
                </div>

                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{project.role}</span>
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul className="project-highlights" aria-label={`${project.title} highlights`}>
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

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
                      className="btn btn-primary"
                      aria-label={`Open ${project.title} GitHub repository`}
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default Projects;
