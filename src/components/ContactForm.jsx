import { useEffect, useState } from "react";

function ContactForm() {
  // ✅ Load saved data BEFORE state initialization (FIX)
  const saved = JSON.parse(localStorage.getItem("contactForm")) || {};

  const [name, setName] = useState(saved.name || "");
  const [email, setEmail] = useState(saved.email || "");
  const [message, setMessage] = useState(saved.message || "");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  // ✅ Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "contactForm",
      JSON.stringify({ name, email, message }),
    );
  }, [name, email, message]);

  // ✅ Debounced email validation (400ms)
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

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      // clear form
      setName("");
      setEmail("");
      setMessage("");

      localStorage.removeItem("contactForm");

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

      {/* ✅ Success message */}
      {success && <div className="success">Message sent successfully!</div>}

      {/* ✅ Live preview */}
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
    </section>
  );
}

export default ContactForm;
