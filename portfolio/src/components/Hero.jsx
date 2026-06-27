import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import AnimateIn from "./ui/AnimateIn";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <AnimateIn className="hero-copy" variant="fadeRight">
          <h1>Kamshiga Ganesan</h1>

          <p className="hero-role">
            Software Engineering Undergraduate | Full Stack Developer
          </p>

          <p className="hero-description">
            I build practical full-stack web applications with clean interfaces
            and steady improvement through real project delivery.
          </p>

          <div className="hero-actions">
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects <FaArrowRight aria-hidden="true" />
              </a>

              <a href="/KamshigaGanesan_CV.pdf" className="btn btn-secondary" download>
                Download CV <FaDownload aria-hidden="true" />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/KamshigaGanesan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/kamshiga-ganesan-2697bb374"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn className="hero-visual" variant="fadeLeft" delay={0.08}>
          <div className="hero-image-card">
            <img
              src="/profile.jpeg"
              alt="Kamshiga Ganesan profile"
              width="380"
              height="475"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default Hero;
