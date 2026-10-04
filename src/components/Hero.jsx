function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Abdul Rahman
          </h1>

          <h2>
            Full Stack Developer <span></span>
          </h2>

          <p className="hero-description">
            I build modern web applications and transform data into
            meaningful insights using clean, efficient and scalable
            solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/abdul8810"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>/</span>

            <a
              href="https://www.linkedin.com/in/abdul-rahman-b136a8253/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="hero-visual">

          <div className="profile-card">
            <div className="profile-image">
              <img
                src="/profile.png"
                alt="Abdul"
              />
            </div>

            <div className="profile-info">
              <p>Based in India</p>
              <span>Available for opportunities</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;