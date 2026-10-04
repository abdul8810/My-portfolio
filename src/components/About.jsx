function About() {
  return (
    <section className="section about" id="about">

      <div className="section-container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning ideas into <span>digital solutions.</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I am a BTech graduate with a strong interest in software
              development, web technologies and data analytics.
            </p>

            <p>
              I have worked with the MERN stack to build full-stack
              applications and I am currently strengthening my skills
              in SQL, Excel and data analysis.
            </p>

            <p>
              I enjoy solving problems, learning new technologies and
              building projects that solve practical problems.
            </p>
          </div>

          <div className="about-details">

            <div className="detail">
              <span>Education</span>
              <strong>BTech</strong>
            </div>

            <div className="detail">
              <span>Focus</span>
              <strong>Mern full Stack Development</strong>
            </div>

            <div className="detail">
              <span>Location</span>
              <strong>India</strong>
            </div>

            <div className="detail">
              <span>Status</span>
              <strong>Open to opportunities</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;