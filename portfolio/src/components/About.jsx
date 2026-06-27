import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn, { StaggerContainer, StaggerItem } from "./ui/AnimateIn";

const highlights = [
  {
    icon: FaGraduationCap,
    title: "Education",
    detail: "BSc (Hons) IT — Software Engineering, Year 2",
  },
  {
    icon: FaLaptopCode,
    title: "Specialization",
    detail: "Full-stack development, backend APIs, and product-minded software",
  },
  {
    icon: FaRocket,
    title: "Career Goal",
    detail: "Preparing for internship opportunities in software development",
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
              I am a second-year BSc (Hons) Information Technology undergraduate specializing in Software Engineering, with a strong
              interest in full-stack development, backend APIs, and product-minded software.
            </p>
          </AnimateIn>

          <AnimateIn className="about-card glass-card" variant="fadeUp" delay={0.1}>
            <p className="about-label">Goal</p>
            <p className="section-text">
              I am actively developing full-stack web applications and strengthening my software engineering skills to prepare for internship opportunities and a professional career in software development.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default About;
