import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import FeedbackWall from "./components/FeedbackWall";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

import "./styles/App.css";

function Home() {
  return (
    <>
      <Header message="Frontend Web Developer focused on modern design, performance, and user experience." />

      <Profile
        name="Bibi Hawa Abdul Shukoor"
        title="Frontend Web Developer"
        bio="I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
      />

      <Skills />
      <FeedbackWall />
    </>
  );
}

function AboutPage() {
  return <About />;
}

function ProjectsPage() {
  return <Projects />;
}

function ContactPage() {
  return <ContactForm />;
}

function NotFound() {
  return (
    <div style={{ padding: "120px 20px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : "light"}>
        <Navbar />

        <div className="theme-btn-container">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
