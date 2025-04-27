import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaLaptopCode, FaTools, FaEnvelope, FaUser } from "react-icons/fa";


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "#0d1117",
        padding: "1rem 2rem",
        zIndex: 1000,
        borderBottom: "1px solid #1f2937",
      }}
    >
      <a className="navbar-brand text-info fw-bold fs-4" href="#">
        {/* 🔥 You can pick one of these titles */}
        {/* <Coder /> by Rimjhim */}
        Ri.dev
      </a>

      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-4 text-center">
          <li className="nav-item">
            <a
              className="nav-link text-light d-flex flex-column align-items-center"
              href="#home"
            >
              <FaHome size={20} />
              <span style={{ fontSize: "0.75rem" }}>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light d-flex flex-column align-items-center"
              href="#about"
            >
              <FaUser size={20} />
              <span style={{ fontSize: "0.75rem" }}>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light d-flex flex-column align-items-center"
              href="#projects"
            >
              <FaLaptopCode size={20} />
              <span style={{ fontSize: "0.75rem" }}>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light d-flex flex-column align-items-center"
              href="#skills"
            >
              <FaTools size={20} />
              <span style={{ fontSize: "0.75rem" }}>Tech Stack</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light d-flex flex-column align-items-center"
              href="#contact"
            >
              <FaEnvelope size={20} />
              <span style={{ fontSize: "0.75rem" }}>Contact</span>
            </a>
          </li>
        </ul>
      </div>

       {/* Custom style for mobile view */}
       <style>
        {`
          @media (max-width: 991px) {
            #navbarNav {
              background-color: #0d1117;
              border-radius: 12px;
              padding: 1rem;
              margin-top: 1rem;
              box-shadow: 0 0 10px rgba(88, 166, 255, 0.4);
            }
            .navbar-nav {
              flex-direction: column !important;
              align-items: center;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
