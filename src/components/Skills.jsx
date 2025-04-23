import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mongo from "../assets/mongo.png";
import js from "../assets/js.png";
import node from "../assets/node.png"
import express from "../assets/express.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import react from "../assets/react.png"

function Skills() {
  const skills = [html, css, js, react,  node , express, mongo , git , github];

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
      <h2 className="mb-5 fw-bold text-info" data-aos="fade-up">
        Teck Stack
      </h2>

      <div className="row justify-content-center g-4">
        {skills.map((src, idx) => (
          <div
            className="col-4 col-md-2 d-flex justify-content-center"
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <img
              src={src}
              alt={`skill-${idx}`}
              className="img-fluid"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                transition: "transform 0.3s ease, filter 0.3s ease",
                filter: "drop-shadow(0 0 8px rgba(88,166,255,0.2))",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 15px rgba(56, 189, 248, 0.7))";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 8px rgba(88,166,255,0.2))";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
