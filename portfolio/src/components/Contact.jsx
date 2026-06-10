function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <h2 className="section-title">Contact</h2>

        <p className="section-text">
          I am open to internship opportunities, collaborations,
          and software engineering projects.
        </p>

        <div className="contact-card">

          <a
            href="mailto:youremail@example.com"
            className="contact-item"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            💻 GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact