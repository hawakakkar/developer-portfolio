function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Bibi Hawa Abdul Shukoor</p>

      <p>Frontend Web Developer</p>

      <div className="socials">
        <a href="https://github.com/hawakakkar">GitHub</a>

        <a href="https://www.linkedin.com/in/bibi-hawa-abdul-shukoor-902a2a370">
          LinkedIn
        </a>

        <a href="https://wa.me/93792126795">WhatsApp</a>
      </div>
    </footer>
  );
}

export default Footer;
