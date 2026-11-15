import "./Contact.css";

/* ---- EDIT YOUR DETAILS HERE ----
   Replace the placeholder email, phone and profile links with your own.
   Delete any card you don't want to show. */
const CONTACTS = [
  {
    icon: "mail",
    tone: "var(--accent)",
    label: "Email",
    value: "snehajain23122002@gmail.com",
    note: "Best way to reach me",
    href: "mailto:snehajain23122002@gmail.com",
  },
  {
    icon: "phone",
    tone: "var(--accent-2)",
    label: "Phone",
    value: "+91 6261415784",
    note: "Available on call and WhatsApp",
    href: "tel:+916261415784",
  },
  {
    icon: "linkedin",
    tone: "var(--accent)",
    label: "LinkedIn",
    value: "linkedin.com/in/sneha-jain-b48208238/",
    note: "Let's connect professionally",
    href: "https://www.linkedin.com/in/sneha-jain-b48208238/",
  },
  {
    icon: "github",
    tone: "var(--accent-2)",
    label: "GitHub",
    value: "github.com/snehajain2312",
    note: "See my code and projects",
    href: "https://github.com/snehajain2312",
  },
];
/* -------------------------------- */

const ICONS = {
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 7v.2L12 13l7.5-5.8V7L12 12.2Z",
  phone:
    "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.1V21h-4v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z",
  github:
    "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
};

function Contact() {
  const primary = CONTACTS.find((c) => c.icon === "mail");

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-eyebrow">Get in touch</p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p className="contact-subtitle">
            Have a question, an opportunity or a project idea? Reach out
            through any of the options below. I'd love to hear from you.
          </p>

          <div className="contact-status">
            <span className="status-dot"></span>
            Open to exciting opportunities
          </div>
        </div>

        <ul className="contact-grid">
          {CONTACTS.map((item) => {
            const external = item.href?.startsWith("http");
            const Tag = item.href ? "a" : "div";

            return (
              <li key={item.label}>
                <Tag
                  className="contact-card"
                  {...(item.href && {
                    href: item.href,
                    ...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }),
                  })}
                >
                  <span
                    className="contact-icon"
                    style={{ "--tone": item.tone }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d={ICONS[item.icon]} />
                    </svg>
                  </span>

                  <span className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                    <span className="contact-note">{item.note}</span>
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>

        {primary && (
          <div className="contact-cta">
            <a href={primary.href} className="contact-btn">
              Send me an email
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;