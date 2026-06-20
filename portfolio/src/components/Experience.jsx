import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Development Intern',
      company: 'Decode Labs',
      duration: 'June 2026 - July 2026',
      mode: 'Remote / Virtual',
      description: 'Incoming Full Stack Development Intern working on assigned projects, completing milestones, and participating in mentor-led sessions to gain hands-on industry experience.',
      technologies: ['React', 'Node.js', 'Full Stack']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="project-kicker">Professional Journey</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id} data-aos="fade-up">
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
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
