import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn, { StaggerContainer, StaggerItem } from "./ui/AnimateIn";

const highlights = [
  {
    icon: FaGraduationCap,
    title: "Education",
    detail: "BSc (Hons) in Information Technology\nSpecialization in Software Engineering\nSLIIT | 2024 – Present",
  },
  {
    icon: FaLaptopCode,
    title: "Specialization",
    detail: "Full-stack development, backend Systems, and product-minded software",
  },
  {
    icon: FaRocket,
    title: "Career Goal",
    detail: "Seeking a Software Engineering Internship to contribute to real-world software development projects.",
  },
];

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container about-layout">
        <SectionHeading
          kicker="Introduction"
          title="About Me"
          subtitle="Software engineering undergraduate focused on building practical full-stack applications and growing through real project delivery."
        />

        <StaggerContainer className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article className="about-highlight glass-card">
                  <span className="about-highlight-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="about-grid">
          <AnimateIn className="about-card glass-card" variant="fadeUp" delay={0.05}>
            <p className="about-label">Focus</p>
            <p className="section-text">
              I enjoy building full-stack web and mobile applications with a strong focus on backend development, RESTful APIs, database design, and scalable software solutions. Through academic, personal, and client projects, I have developed practical experience in designing, implementing, and testing modern software applications.
            </p>
          </AnimateIn>

          <AnimateIn className="about-card glass-card" variant="fadeUp" delay={0.1}>
            <p className="about-label">Goal</p>
            <p className="section-text">
              My goal is to begin my career as a Software Engineering Intern, where I can apply my technical knowledge, collaborate with experienced developers, and contribute to building reliable, user-focused software solutions while continuously expanding my software engineering expertise.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default About;
