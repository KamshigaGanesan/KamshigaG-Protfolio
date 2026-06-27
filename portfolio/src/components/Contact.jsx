import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";
import AnimateIn from "./ui/AnimateIn";

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
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          kicker="Let's connect"
          title="Contact"
          subtitle="Send a quick brief, internship invite, or collaboration idea. The form will open your email app with everything prefilled."
        />

        <div className="contact-layout">
          <AnimateIn className="contact-copy glass-card" variant="fadeRight">
            <div className="contact-banner">
              <span className="contact-banner-tag">Direct contact</span>
              <h3>Fast reply, clean handoff</h3>
              <p>
                Use the form or jump straight to email. The layout is designed for quick recruiter scanning and a clear next step.
              </p>
            </div>

            <div className="contact-grid">
              <a href="mailto:ganesankamshiga@gmail.com" className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
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
                <span className="contact-icon" aria-hidden="true">
                  <FaGithub />
                </span>
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
                <span className="contact-icon" aria-hidden="true">
                  <FaLinkedinIn />
                </span>
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
          </AnimateIn>

          <AnimateIn variant="fadeLeft" delay={0.08}>
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-header">
                <span className="contact-form-kicker">Email form</span>
                <h3>Send a concise brief</h3>
                <p>
                  Fill this out and your email app will open with the subject and message ready to send.
                </p>
              </div>

              <div className="contact-form-grid">
                <label htmlFor="contact-name">
                  <span>Name</span>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label htmlFor="contact-email">
                  <span>Email</span>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label className="contact-form-full" htmlFor="contact-subject">
                  <span>Subject</span>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity, project idea, or collaboration"
                  />
                </label>

                <label className="contact-form-full" htmlFor="contact-message">
                  <span>Message</span>
                  <textarea
                    id="contact-message"
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
                  Open Email <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
