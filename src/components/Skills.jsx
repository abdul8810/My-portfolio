function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Excel",
    "Git",
    "GitHub",
    "REST APIs"
  ];

  return (
    <section className="section skills" id="skills">

      <div className="section-container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I <span>work with.</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Skills;