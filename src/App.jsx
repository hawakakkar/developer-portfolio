import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";

import Navbar from "./components/Navbar";

import Header from "./components/Header";

import Profile from "./components/Profile";

import Projects from "./components/Projects";

import ProjectDetails from "./pages/ProjectDetails";

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

      <Profile />

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
  // ✅ FIXED DARK MODE (NO REFRESH ISSUE)

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme ? savedTheme === "dark" : false;
  });

  // ✅ SAVE THEME ON CHANGE

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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

          <Route path="/projects/:id" element={<ProjectDetails />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
