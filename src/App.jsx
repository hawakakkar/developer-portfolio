import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />

      <div className="theme-btn-container">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <Header message="Frontend Web Developer focused on modern design, performance, and user experience." />

      <Profile
        name="Bibi Hawa Abdul Shukoor"
        title="Frontend Web Developer"
        bio="I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
      />

      <About />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
