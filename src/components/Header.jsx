import bgImage from "../assets/Profile.jpeg";

function Header({ message }) {
  return (
    <header
      className="header"
      id="home"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${bgImage})`,
      }}
    >
      <div>
        <h1 className="headiing">Hi, I'm Bibi Hawa Abdul Shukoor</h1>

        <p>{message}</p>
      </div>
    </header>
  );
}

export default Header;
