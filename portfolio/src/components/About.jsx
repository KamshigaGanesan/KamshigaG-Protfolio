function About() {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card">
            <p className="about-label">Focus</p>
            <p className="section-text">
              I am a second-year Software Engineering undergraduate with a strong
              interest in full-stack web development and product-minded software.
            </p>
          </div>

          <div className="about-card">
            <p className="about-label">Goal</p>
            <p className="section-text">
              I am currently sharpening my MERN stack, backend, and deployment skills
              to prepare for internships and junior software engineering roles.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About