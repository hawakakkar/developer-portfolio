function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Bibi Hawa Abdul Shukoor</p>

      <p>Frontend Web Developer</p>

      <div className="socials">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
