import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import Typed from "typed.js";
import reactLogo from "../assets/react.png";
import Rimjhim from "../assets/Rimjhim.jpg"; // Profile image import

function Hero() {
  const typeRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });

    const typed = new Typed(typeRef.current, {
      strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="container-fluid d-flex align-items-center justify-content-start"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        padding: "4rem 2rem",
        overflow: "hidden",
      }}
    >
      {/* React Logo as spinning background */}
      <img
        src={reactLogo}
        alt="React Logo"
        style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "400px",
          height: "400px",
          opacity: 0.05,
          zIndex: 0,
          animation: "spin 30s linear infinite",
          filter: "blur(1px)",
        }}
      />

      {/* Spin animation keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: translateY(-50%) rotate(0deg); }
            100% { transform: translateY(-50%) rotate(360deg); }
          }
        `}
      </style>

      {/* Left Side Content (with spinning logo behind it) */}
      <div
        className="col-12 col-md-6"
        style={{ zIndex: 1 }}
        data-aos="fade-right"
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#58a6ff",
            marginLeft: "2rem",
          }}
        >
          Hi, I'm Rimjhim 
        </h1>

        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginTop: "1.5rem",
            marginLeft: "2rem",
            color: "#f0f6fc",
            minHeight: "70px",
          }}
        >
          <span ref={typeRef}></span>
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
            color: "#c9d1d9",
            opacity: 0.8,
            fontStyle: "italic",
            marginLeft: "2rem",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let's turn ideas into reality ✨
        </p>

        <a
          href="/Rimjhim.pdf"
          download
          className="btn btn-outline-info align-items-center gap-1 fw-semibold"
          style={{
            fontSize: "1.5rem",
            marginLeft: "2rem",
            padding: "6px 10px",
            borderRadius: "8px",
            transition: "transform 0.5s ease",
          }}
        >
          <FaDownload size={20} /> Resume
        </a>
      </div>

      {/* Right Side Profile Image */}
      <div
        className="col-12 col-md-6 d-flex justify-content-center align-items-center"
        style={{ position: "relative", zIndex: 1 }}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={Rimjhim}
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
