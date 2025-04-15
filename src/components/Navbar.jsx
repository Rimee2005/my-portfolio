import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaLaptopCode, FaTools, FaEnvelope } from "react-icons/fa";

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
        Portfolio • Rimjhim
      </a>

      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <a className="nav-link text-light d-flex align-items-center gap-2" href="#home">
              <FaHome /> <span className="d-none d-md-inline">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light d-flex align-items-center gap-2" href="#projects">
              <FaLaptopCode /> <span className="d-none d-md-inline">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light d-flex align-items-center gap-2" href="#skills">
              <FaTools /> <span className="d-none d-md-inline">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light d-flex align-items-center gap-2" href="#contact">
              <FaEnvelope /> <span className="d-none d-md-inline">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
