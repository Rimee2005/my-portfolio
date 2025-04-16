import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="hero"
      className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        padding: "4rem 2rem",
        overflow: "hidden",
      }}
    >
      <div
        className="col-12 col-md-6 mb-4 mb-md-0"
        data-aos="fade-right"
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#58a6ff",
            marginLeft:"2rem",
          }}
        >
          Hi, I'm Rimjhim 👩‍💻
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "#8b949e",
            marginTop: "1rem",
            lineHeight: "1.6",
            marginLeft:"2rem",
          }}
        >
          I build beautiful and functional <strong>web applications</strong> with clean UI and smooth user experience.
        </p>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
            color: "#c9d1d9",
            opacity: 0.8,
            fontStyle: "italic",
            marginLeft:"2rem",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let's turn ideas into reality ✨
        </p>
      </div>

      <div
        className="col-12 col-md-6 d-flex justify-content-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="./src/assets/Rimjhim.jpg"
          alt="Rimjhim"
          className="img-fluid"
          style={{
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            objectFit: "cover",
            boxShadow: "0 0 25px rgba(88, 166, 255, 0.6)",
            transition: "transform 0.5s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </section>
  );
}

export default Hero;
