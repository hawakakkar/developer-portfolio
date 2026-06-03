function Skills() {
  const skills = [
    { name: "React", level: 50 },
    { name: "JavaScript", level: 85 },
    { name: "CSS", level: 95 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      {skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <div className="skill-info">
            <h3>{skill.name}</h3>
            <span>{skill.level}%</span>
          </div>

          <div className="bar">
            <div className="fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
