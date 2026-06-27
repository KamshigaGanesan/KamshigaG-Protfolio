import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <div className="hero-copy" data-aos="fade-right">
          <div className="hero-kicker-row">
            <span className="hero-availability-pill">Portfolio</span>
            <p className="eyebrow">Software Engineering Undergraduate</p>
          </div>

          <h1>
            Kamshiga Ganesan
          </h1>

          <h2>
            Building clean, scalable full-stack experiences.
          </h2>

          <p className="hero-description">
            MERN Stack Developer focused on practical web applications, thoughtful interfaces, and steady improvement through real project delivery.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">BSc (Hons) IT Undergraduate</span>
            <span className="hero-badge">MERN Stack Developer</span>
            <span className="hero-badge">UI-minded Builder</span>
            <span className="hero-badge">Open to Internships</span>
          </div>

          <div className="hero-focus-card">
            <span>Current focus</span>
            <strong>Modern interfaces, API integration, and shipping polished portfolio projects.</strong>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>

            <a href="/KamshigaGanesan_CV.pdf" className="btn btn-secondary" download>
              Download CV <FaDownload />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/KamshigaGanesan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kamshiga-ganesan-2697bb374"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-left">
          <div className="hero-image-card">
            <div className="hero-image-glow" aria-hidden="true" />

            <img src="/profile.jpeg" alt="Kamshiga Ganesan profile" />

            <span className="hero-image-badge">Open to internship opportunities</span>
            <span className="hero-image-floating hero-image-floating-top">MERN Stack</span>
            <span className="hero-image-floating hero-image-floating-bottom">Portfolio</span>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Projects Completed</span>
            </div>

            <div>
              <strong>Full Stack</strong>
              <span>Primary Focus</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
