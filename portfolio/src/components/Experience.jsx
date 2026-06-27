import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Development Intern",
      company: "Decode Labs",
      duration: "June 2026 - July 2026",
      mode: "Remote / Virtual",
      description:
        "Incoming Full Stack Development Intern working on assigned projects, completing milestones, and participating in mentor-led sessions to gain hands-on industry experience.",
      technologies: ["React", "Node.js", "Full Stack"],
    },
  ];

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading
          kicker="Professional Journey"
          title="Experience"
          subtitle="Hands-on industry exposure and structured learning through internship opportunities."
        />

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <AnimateIn key={exp.id} delay={index * 0.08}>
              <article className="experience-card glass-card">
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="mode">{exp.mode}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
