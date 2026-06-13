import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2026 Kamshiga Ganesan. All rights reserved.</p>

        <div className="footer-links">
          <a href="https://github.com/KamshigaGanesan" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer