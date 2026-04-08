function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-grid">
          
          {/* LEFT */}
          <div>
            <p className="hero-tag">Software Engineering Undergraduate</p>

            <h1>
              Hi, I’m <span>Kamshiga Ganesan</span>
            </h1>

            <h2>MERN Stack Developer</h2>

            <p className="hero-description">
              I build modern, scalable web applications using React, Node.js,
              Express, and MongoDB. Passionate about solving real-world problems
              through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View Projects</a>
              <a href="/cv.pdf" className="btn secondary-btn" download>
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-image">
            <img src="/profile.jpeg" alt="profile" />
          </div>

        </div>

      </div>
    </section>
  )
}