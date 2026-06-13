function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#home" className="logo">
          <span className="logo-mark">KG</span>
          <span className="logo-text">Kamshiga Ganesan</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#development">Professional Development</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a href="#contact" className="navbar-cta">
          Open for Internships
        </a>
      </div>
    </header>
  )
}

export default Navbar