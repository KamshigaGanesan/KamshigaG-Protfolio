import { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#development", label: "Activities", id: "development" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function Navbar() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#home" className="logo" onClick={handleNavClick}>
          <img src="/favicon.svg" alt="KG Logo" className="logo-img" />
          <span className="logo-text">Kamshiga Ganesan</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          id="primary-navigation"
          className={`navbar-nav${menuOpen ? " is-open" : ""}`}
        >
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={activeSection === link.id ? "is-active" : ""}
                    aria-current={activeSection === link.id ? "page" : undefined}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="navbar-cta" onClick={handleNavClick}>
            Open for Internships
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
