
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (email.trim() === "" || message.trim() === "") {
      setError("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Submitted successfully!");
    setEmail("");
    setMessage("");
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
    setSuccess("");
  };

  return (
    <section id="contact" className="contact">
      <p className="contact-eyebrow">GET IN TOUCH</p>

      <h2>
        Contact <span>Me</span>
      </h2>

      <p className="contact-subtitle">
        Feel free to reach out! I'd love to hear from you.
        <br />
        Have a question or a project idea? Let's connect.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="contact-email">
            Email Address <span>*</span>
          </label>

          <input
            id="contact-email"
            type="email"
            value={email}
            placeholder="Enter your email address"
            onChange={handleChange(setEmail)}
            autoComplete="email"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "contact-error" : undefined}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">
            Message <span>*</span>
          </label>

          <textarea
            id="contact-message"
            value={message}
            placeholder="Tell me about your idea..."
            onChange={handleChange(setMessage)}
            rows={5}
          />
        </div>

        <button type="submit">
          <span>➤</span> Send Message
        </button>

        {error && (
          <p
            id="contact-error"
            className="error"
            role="alert"
          >
            {error}
          </p>
        )}

        {success && (
          <p className="success" role="status">
            ✓ {success}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
