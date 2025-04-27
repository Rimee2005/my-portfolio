import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      title: "📈 Zerodha Clone",
      description: "A stock trading platform clone with basic UI and routing.",
      techStack: "React.js, Bootstrap, Node.js, MongoDB , JWT Auth",
      link: "https://github.com/Rimee2005/ZerodhaClone",
      image: Project2,
    },
    {
      title: "🏡 Airbnb Clone",
      description: "A travel website with listings, booking system and property management.",
      techStack: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
      link: "https://github.com/Rimee2005/Wanderlust",
      image: Project1,
    },
    {
      title: "🎓 College Website",
      description: "College website showcasing departments, events, and contact forms.",
      techStack: "React.js, Bootstrap",
      link: "https://github.com/witcodeclub/College-Website",
      image: Project3,
    },
    {
      title: "📣 Complaint-Hub (WIP)",
      description: "A platform for students to register and track complaints digitally. AI integration planned.",
      techStack: "React.js, Bootstrap, Node.js, MongoDB, REST APIs, AI",
      link: "https://github.com/Rimee2005/Project4",
      image: Project4,
    },
    {
      title: "🌦️ Weather App ",
      description: "A sleek weather app to check real-time weather info of any city using OpenWeather API.",
      techStack: "React, Material-UI, CSS, OpenWeather API, Vite",
      link: "https://github.com/Rimee2005/Weather-App",
      image: Project5,
    },
    {
      title: "🎮 Simon Says Game",
      description: "A nostalgic remake of the classic Simon Says game using HTML, CSS, and JavaScript.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://github.com/Rimee2005/Simon-Says-Game",
      image: Project6,
    },
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setDirection(newPage > page ? 1 : -1);
      setPage(newPage);
    }
  };

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
        <p style={{ color: "#a1a1aa" }}>Things I've built so far!</p>
      </div>

      <div className="row justify-content-center px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 * direction }}
            transition={{ duration: 0.5 }}
            className="d-flex flex-wrap justify-content-center"
          >
            {currentProjects.map((proj, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    backgroundColor: "#161b22",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "340px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {proj.image && (
                    <img
                      src={proj.image}
                      className="card-img-top"
                      alt={proj.title}
                      style={{
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        height: "190px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div
                    className="card-body text-center p-2"
                    style={{ flexGrow: 1 }}
                  >
                    <h5
                      className="card-title"
                      style={{
                        color: "#38bdf8",
                        fontSize: "1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {proj.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {proj.description}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.75rem",
                        fontStyle: "italic",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <strong>Technologies:</strong> {proj.techStack}
                    </p>
                    <a
                      href={proj.link}
                      className="btn btn-sm btn-outline-info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub 🔗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-light mx-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <button
          className="btn btn-outline-light mx-2"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </section>
  );
}

export default Projects;
