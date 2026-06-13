import {
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: SiReact,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    title: "Backend",
    icon: SiNodedotjs,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: SiMongodb,
    items: ["MongoDB", "Mongoose", "MySQL", "Data Modeling"],
  },
  {
    title: "Tools",
    icon: SiGit,
    items: ["Git", "GitHub", "Postman", "Linux", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section light-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article className="skill-card" key={skill.title} data-aos="zoom-in" data-aos-delay={index * 80}>
                <div className="skill-card-header">
                  <span className="skill-icon">
                    <Icon />
                  </span>
                  <h3>{skill.title}</h3>
                </div>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills