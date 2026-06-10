function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-text" data-aos="fade-right">
          <p className="subtitle">Software Engineering Undergraduate</p>

          <h1>Hi, I’m <span>Kamshiga Ganesan</span></h1>

          <h2>MERN Stack Developer</h2>

          <p className="description">
            I build modern, scalable web applications using React, Node.js,
            Express, and MongoDB. Passionate about solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/cv.pdf" className="btn secondary" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.jpeg" alt="profile" />
        </div>

      </div>
    </section>
  )
}

export default Hero