import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: "4rem 1rem",
        background: "#0d1117",
        color: "#f0f6fc",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          data-aos="fade-down"
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#60a5fa",
          }}
        >
          About Me
        </h2>

        <p
          data-aos="fade-up"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#cbd5e1",
            textAlign: "justify",
          }}
        >
          I'm <strong style={{ color: "#38bdf8" }}>Rimjhim Jha</strong>, a passionate frontend developer and proud member of our college’s coding club.
          I study at <strong style={{ color: "#f472b6" }}>Dr. APJ Abdul Kalam Women's Institute of Technology</strong>, currently in my <strong style={{ color: "#c084fc" }}>2nd year</strong> of B.Tech.
          <br /><br />
          I love crafting clean, elegant, and responsive UIs using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>. My focus is on making web experiences beautiful, smooth, and user-friendly.
          On the backend side, I work with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> to build dynamic and scalable web applications.

          <br /><br />
          <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>🛠 Tools & Tech I Use: </span>
          Git & GitHub, REST APIs, VS Code, Netlify, Vercel

          <br /><br />
          <span style={{ color: "#a5b4fc", fontWeight: "bold" }}>📚 Currently Learning: </span>
           Java, Redux Toolkit, and DSA with focus on problem-solving

          <br /><br />
          <span style={{ color: "#f9a8d4", fontWeight: "bold" }}>🎯 Interests: </span>
          Full-stack projects, creative UI designs, hackathons, and coding events

          <br /><br />
          My journey from “Hello World” to building real-world apps has been driven by creativity, curiosity, and lots of ☕. I’m always excited to collaborate and learn something new every day.

          <br /><br />
          <em style={{ color: "#facc15" }}>Fun Fact:</em> I might seem quiet… until someone mentions <strong>momos</strong>, <strong>frontend bugs</strong>, or <strong>Taylor Swift lyrics</strong> 😄🎵
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
