function Skills() {
  return (
    <section id="skills" className="section light-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div className="skill-card" data-aos="zoom-in">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Vite</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB, Mongoose, MySQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Postman, VS Code, IntelliJ, Ubuntu/Linux</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills