import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry from your website");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name || "Anonymous"}`,
        `Email: ${formData.email || "Not provided"}`,
        "",
        formData.message || "",
      ].join("\n")
    );

    window.location.href = `mailto:ganesankamshiga@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-heading contact-heading">
          <span className="eyebrow">Let’s connect</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Send a quick brief, internship invite, or collaboration idea. The form will open your email app with everything prefilled.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-copy" data-aos="fade-right">
            <div className="contact-banner">
              <span className="contact-banner-tag">Direct contact</span>
              <h3>Fast reply, clean handoff</h3>
              <p>
                Use the form or jump straight to email. The layout is designed for quick recruiter scanning and a clear next step.
              </p>
            </div>

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
                href="https://www.linkedin.com/in/kamshiga-ganesan-2697bb374"
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

            <div className="contact-note">
              <strong>Availability</strong>
              <p>Open to internships, freelance builds, and collaboration opportunities.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="contact-form-header">
              <span className="contact-form-kicker">Email form</span>
              <h3>Send a concise brief</h3>
              <p>
                Fill this out and your email app will open with the subject and message ready to send.
              </p>
            </div>

            <div className="contact-form-grid">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>

              <label className="contact-form-full">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity, project idea, or collaboration"
                />
              </label>

              <label className="contact-form-full">
                <span>Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Share the role, timeline, stack, or next step you have in mind."
                />
              </label>
            </div>

            <div className="contact-form-footer">
              <p>Best for internships, freelance builds, and collaboration ideas.</p>
              <button type="submit" className="btn btn-primary contact-submit">
                Open Email <FaArrowRight />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact