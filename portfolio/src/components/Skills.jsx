import {
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { FaJava, FaRegLightbulb, FaUsers, FaRegClock, FaComments } from "react-icons/fa";

const technicalSkills = [
  {
    title: "Programming Languages",
    icon: FaJava,
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: SiNodedotjs,
    items: ["React (Vite)", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: SiMongodb,
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: SiGit,
    items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Ubuntu/Linux (Basic)"],
  },
];

const softSkills = [
  { name: "Clear Communication", icon: FaComments },
  { name: "Team Collaboration", icon: FaUsers },
  { name: "Analytical Problem Solving", icon: FaRegLightbulb },
  { name: "Time Management", icon: FaRegClock },
];

function Skills() {
  return (
    <section id="skills" className="section light-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-layout">
          <div className="technical-skills-section">
            <h3 className="skills-subheading">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => {
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

          <div className="soft-skills-section" data-aos="fade-up" data-aos-delay="300">
            <h3 className="skills-subheading">Soft Skills</h3>
            <div className="soft-skills-container">
              {softSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="soft-skill-badge">
                    <Icon className="soft-skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
