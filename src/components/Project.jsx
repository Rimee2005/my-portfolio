import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Project 1",
      description: "React, Node.js, MongoDB",
      link: "https://github.com/Rimee2005/Project1",
      image: "https://via.placeholder.com/300x200.png?text=Project+1",
    },
    {
      title: "Project 2",
      description: "HTML, CSS, JS",
      link: "https://github.com/Rimee2005/Project2",
      image: "https://via.placeholder.com/300x200.png?text=Project+2",
    },
    {
      title: "Project 3",
      description: "React + Tailwind",
      link: "https://github.com/Rimee2005/Project3",
      image: "https://via.placeholder.com/300x200.png?text=Project+3",
    },
  ];

  return (
    <section
      id="projects"
      className="container-fluid py-5"
      style={{ backgroundColor: "#0d1117", color: "#e6edf3" }}
    >
      <div className="text-center mb-5">
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          🚀 My Projects
        </h2>
        <p style={{ color: "#a1a1aa" }}>
          Here are a few cool things I've built recently.
        </p>
      </div>

      <div className="row justify-content-center px-3">
        {projects.map((proj, index) => (
          <div
            className="col-md-4 mb-4"
            key={index}
            data-aos="fade-up"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="card"
              style={{
                width: "100%",
                maxWidth: "350px",
                backgroundColor: "#161b22",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={proj.image}
                className="card-img-top"
                alt={proj.title}
                style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#38bdf8" }}>
                  {proj.title}
                </h5>
                <p className="card-text" style={{ color: "#cbd5e1" }}>
                  {proj.description}
                </p>
                <a
                  href={proj.link}
                  className="btn btn-outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
