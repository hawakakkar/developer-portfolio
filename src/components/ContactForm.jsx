import { useEffect, useState } from "react";

function ContactForm() {
  const saved = JSON.parse(localStorage.getItem("contactForm")) || {};

  const [name, setName] = useState(saved.name || "");
  const [email, setEmail] = useState(saved.email || "");
  const [message, setMessage] = useState(saved.message || "");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  // NEW STATE FOR UNSENT MESSAGE HINT
  const [hasSavedData, setHasSavedData] = useState(
    saved.name || saved.email || saved.message,
  );

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "contactForm",
      JSON.stringify({ name, email, message }),
    );

    if (name || email || message) {
      setHasSavedData(true);
    }
  }, [name, email, message]);

  // Debounced Email Validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");

      localStorage.removeItem("contactForm");
      setHasSavedData(false);

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errors.email}</p>
        <p className="error">{emailError}</p>

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p className="error">{errors.message}</p>

        <button type="submit">Send Message</button>
      </form>

      {success && <div className="success">Message sent successfully!</div>}

      <div className="preview">
        <h3>Live Preview</h3>
        <p>
          <b>Name:</b> {name}
        </p>

        <p>
          <b>Email:</b> {email}
        </p>

        <p>
          <b>Message:</b> {message}
        </p>
      </div>

      {/* UNSENT MESSAGE HINT */}
      {hasSavedData && !success && (
        <p className="saved-hint">You have unsent message data saved!</p>
      )}
    </section>
  );
}

export default ContactForm;
