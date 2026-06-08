import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import FeedbackWall from "../components/FeedbackWall";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Header message="Frontend Web Developer focused on modern design, performance, and user experience." />

      <Profile
        name="Bibi Hawa Abdul Shukoor"
        title="Frontend Web Developer"
        bio="I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience."
      />

      <About />
      <Skills />
      <FeedbackWall />
      <Projects />
    </>
  );
}

export default Home;
