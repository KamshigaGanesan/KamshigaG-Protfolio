import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">

        <div className="hero-copy" data-aos="fade-right">
          <p className="eyebrow">Software Engineering Undergraduate</p>

          <h1>Kamshiga Ganesan</h1>

          <h2>Aspiring Full-Stack Developer building practical web applications and scalable backend systems.
          </h2>

          <p className="hero-description">
            I build clean, scalable web applications with React, Node.js,
            Express, and MongoDB. My focus is on practical systems that are easy
            to use, easy to maintain, and ready for real users.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">BSc (Hons) IT Undergraduate</span>
            <span className="hero-badge">MERN Stack Developer</span>
            <span className="hero-badge">Open to Internships</span>
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
            <a href="https://github.com/KamshigaGanesan" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/KamshigaGanesan" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-left">
          <div className="hero-image-card">
            <img src="/profile.jpeg" alt="Kamshiga Ganesan profile" />
            <span className="hero-image-badge">Open to Internship Opportunities</span>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Projects Completed</span>
            </div>
            <div>
              <strong>Full-stack</strong>
              <span>Primary Focus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
