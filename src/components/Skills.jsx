import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  const skills = [
    "html-logo.png",
    "css-logo.png",
    "js-logo.png",
    "react-logo.png",
    "tailwind-logo.png",
    "git-logo.png",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="container-fluid py-5 text-center"
      style={{
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        width: "1280px",
      }}
    >
      <h2
        className="mb-5 fw-bold text-info"
        data-aos="fade-up"
      >
        My Skills
      </h2>
      <div className="row justify-content-center g-4">
        {skills.map((src, idx) => (
          <div
            className="col-4 col-md-2 d-flex justify-content-center"
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#161b22",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={src}
                alt={src}
                className="img-fluid"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 5px rgba(88,166,255,0.3))",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
