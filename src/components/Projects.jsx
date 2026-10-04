function Projects() {
  const projects = [
    {
      number: "01",
      title: "Airbnb Clone",
      description:
        "A responsive accommodation platform inspired by Airbnb with modern UI and full-stack functionality.",
      tech: "MERN Stack",
      github: "https://github.com/abdul8810/wonderlust",
      live: "https://wonderlust-h4xz.onrender.com/"
    },
    {
      number: "02",
      title: "Ai-chatbot",
      description:
        "Developed an AI-powered chatbot using React.js, Node.js, Express.js, and AI APIs to provide real-time responses to user queries.",
      tech: "React • Node • Express • MongoDB",
      github: "https://github.com/abdul8810/AI-Chatbot",
      live: "https://majestic-sunshine-8bf13b.netlify.app/"
    },
    {
      number: "03",
      title: "construction Dashboard",
      description:
        "Developed a construction equipment rental platform using React.js, Node.js, Express.js, and MongoDB, enabling users to browse equipment and manage rental requests through a responsive interface.",
      tech: "React • Node.js • MongoDB • Chart.js",
      github: "https://github.com/abdul8810/construction",
      live: "https://shimmering-lily-459c99.netlify.app/"
    }
  ];

  return (
    <section className="section projects" id="projects">

      <div className="section-container">

        <div className="section-heading">
          <p>SELECTED WORK</p>
          <h2>Projects I've <span>built.</span></h2>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <span className="project-tech">
                  {project.tech}
                </span>

                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.live}>Live Demo ↗</a>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;