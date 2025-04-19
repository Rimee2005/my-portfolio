import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section
        id="about"
        className="py-5"
        style={{ backgroundColor:  "#0d1117", color: "#f0f6fc" , 
          zIndex: 1,
          overflow: "vissible",
         }}
      >
        <div className="container text-center">
          <h2 className="text-info fw-bold mb-4" data-aos="fade-up">
            About Me
          </h2>

          <div className="mx-auto" style={{ maxWidth: "700px" }} data-aos="fade-up">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              I'm <span className="text-warning fw-semibold">Rimjhim Jha</span>, a passionate
              frontend developer and the proud President of our college’s coding club.
              I study at <span className="fw-medium">XYZ Engineering College</span>, where I
              constantly dive into code, creativity, and community building.
            </p>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              I love building beautiful and responsive user interfaces using{" "}
              <span className="text-info">React, Tailwind, Bootstrap</span>, and exploring
              full-stack technologies. My goal is to turn ideas into intuitive digital
              experiences that feel effortless to use.
            </p>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              From my first “Hello World” to organizing full-blown dev events, the journey
              has been wild, inspiring, and full of curiosity. I'm always hungry to learn
              and excited to collaborate on impactful projects.
            </p>

            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: "1.7" }}>
              Fun Fact: I might look quiet… until you mention{" "}
              <span className="text-warning">momos, frontend bugs, or Taylor Swift lyrics!</span> 😄
            </p>
          </div>
        </div>
      </section>

      <div className="custom-wave"></div>
    </>
  );
}

export default AboutMe;
