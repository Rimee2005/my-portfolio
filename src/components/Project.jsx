import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 👉 added
import Project1 from "../assets/Project1.png";
import { image } from "framer-motion/client";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1); // 👉 to animate slide direction

  const projects = [
    {
      title: "Project 1",
      description: "React, Node.js, MongoDB",
      link: "https://github.com/Rimee2005/Project1",
      image: Project1,
    },
    {
      title: "Project 2",
      description: "HTML, CSS, JS",
      link: "https://github.com/Rimee2005/Project2",
      // image: "https://via.placeholder.com/300x200.png?text=Project+2",
    },
    {
      title: "Project 3",
      description: "React + Tailwind",
      link: "https://github.com/Rimee2005/Project3",
      // image: "https://via.placeholder.com/300x200.png?text=Project+3",
    },
    {
      title: "Project 4",
      description: "Node.js + Express",
      link: "https://github.com/Rimee2005/Project4",
      // image: "https://via.placeholder.com/300x200.png?text=Project+4",
    },
    {
      title: "Project 5",
      description: "Java + SpringBoot",
      link: "https://github.com/Rimee2005/Project5",
      // image: "https://via.placeholder.com/300x200.png?text=Project+5",
    },
    {
      title: "Project 6",
      description: "MERN + JWT Auth",
      link: "https://github.com/Rimee2005/Project6",
      // image: "https://via.placeholder.com/300x200.png?text=Project+6",
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
      setDirection(newPage > page ? 1 : -1); // set slide direction
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
        <p style={{ color: "#a1a1aa" }}>
          Here are a few cool things I've built recently.
        </p>
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
                    maxWidth: "250px",
                    backgroundColor: "#161b22",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease",
                    // overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "220px",
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
                    style={{
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      height: "170px", // more space for image
                      objectFit: "cover",
                    }}
                  />
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
                        marginBottom: "0.5rem",
                      }}
                    >
                      {proj.description}
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

      {/* Pagination Buttons */}
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
