import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <h2 className="section-title">Contact</h2>

        <p className="section-text">
          I am open to internship opportunities, collaborations,
          and software engineering projects.
        </p>

        <div className="contact-grid">

          <a
            href="mailto:ganesankamshiga@gmail.com"
            className="contact-item"
          >
            <span className="contact-icon"><FaEnvelope /></span>
            <span>
              <strong>Email</strong>
              <small>ganesankamshiga@gmail.com</small>
            </span>
          </a>

          <a
            href="https://github.com/KamshigaGanesan"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon"><FaGithub /></span>
            <span>
              <strong>GitHub</strong>
              <small>github.com/KamshigaGanesan</small>
            </span>
          </a>

          <a
            href="https://linkedin.com/in/KamshigaGanesan"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon"><FaLinkedinIn /></span>
            <span>
              <strong>LinkedIn</strong>
              <small>linkedin.com/in/KamshigaGanesan</small>
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact