import {
  SiGit,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava, FaRegLightbulb, FaUsers, FaRegClock, FaComments } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "./ui/AnimateIn";

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
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          kicker="Capabilities"
          title="Skills & Expertise"
          subtitle="Technical foundations and professional strengths I bring to collaborative software projects."
        />

        <div className="skills-layout">
          <div className="technical-skills-section">
            <h3 className="skills-subheading">Technical Skills</h3>
            <StaggerContainer className="skills-grid">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <StaggerItem key={skill.title}>
                    <article className="skill-card glass-card">
                      <div className="skill-card-header">
                        <span className="skill-icon" aria-hidden="true">
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
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div className="soft-skills-section">
            <h3 className="skills-subheading">Soft Skills</h3>
            <StaggerContainer className="soft-skills-container" stagger={0.06}>
              {softSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <StaggerItem key={skill.name}>
                    <div className="soft-skill-badge glass-card">
                      <Icon className="soft-skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
