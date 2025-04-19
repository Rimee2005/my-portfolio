import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-100 py-5 text-center"
      style={{
        backgroundColor: "#0d1117",
        color: "#e6edf3",
      }}
    >
      <h2 className="mb-3 fw-bold text-info" data-aos="fade-up">
        Contact Me
      </h2>

      <p
        className="mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ color: "white" }}
      >
        Feel free to reach out!
      </p>

      {/* Contact Links */}
      <div
        className="d-flex justify-content-center gap-4 flex-wrap mb-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a className="contact-link" href="mailto:rimjhimjha961@gmail.com">
          Email
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/rimjhim-jha-b1b86b301/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="contact-link"
          href="https://github.com/Rimee2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {/* Contact Form */}
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{
            maxWidth: "600px",
            background: "#161b22",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 0 15px rgba(56, 189, 248, 0.1)",
          }}
        >
          <div className="mb-3 text-start" data-aos="fade-up" data-aos-delay="100">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-dark text-white border-info"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start" data-aos="fade-up" data-aos-delay="150">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white border-info"
              value={formData.email}
              onChange={handleChange}
              required
              title="Please enter a valid email"
            />
          </div>

          <div className="mb-3 text-start" data-aos="fade-up" data-aos-delay="200">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control bg-dark text-white border-info"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-info text-black fw-bold px-4"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <style>{`
        .contact-link {
          font-size: 1.1rem;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
        }

        .contact-link:hover {
          background: rgba(56, 189, 248, 0.3);
          transform: translateY(-3px) scale(1.05);
          color: #fff;
        }
      `}</style>
    </section>
  );
}

export default Contact;
