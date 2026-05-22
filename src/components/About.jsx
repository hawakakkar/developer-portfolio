import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        I create modern and responsive websites that combine clean design with
        smooth user experiences. My focus is building websites that are visually
        appealing, easy to use, and optimized for all devices.
      </p>

      <p>
        As a frontend developer, I enjoy turning ideas into interactive and
        functional web experiences using modern technologies and clean,
        maintainable code.
      </p>

      {showMore && (
        <>
          <p>
            I’m passionate about continuous learning and improving my skills in
            web development. I pay attention to design, responsiveness,
            performance, and user experience to create websites that feel
            professional and engaging.
          </p>

          <ul>
            <li>Responsive Website Development</li>

            <li>Modern User Interface Design</li>

            <li>React Frontend Development</li>

            <li>HTML, CSS, and JavaScript</li>

            <li>Landing Pages & Business Websites</li>

            <li>Website Redesign & Optimization</li>

            <li>Mobile-Friendly Web Experiences</li>
          </ul>
        </>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default About;
