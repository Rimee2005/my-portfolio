import React, { useEffect, useState } from "react";
import App from "../App";

const Fade = () => {
  const [currentText, setCurrentText] = useState("first"); // 'first' | 'second' | 'app'

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentText("second"), 3000); // slower transition
    const timer2 = setTimeout(() => setCurrentText("app"), 6000); // slower app load

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const fadeKeyframes = `
      @keyframes fade {
        0% { opacity: 0; transform: scale(0.9); }
        30% { opacity: 1; transform: scale(1); }
        70% { opacity: 1; transform: scale(1.02); }
        100% { opacity: 0; transform: scale(1.05); }
      }
    `;
    styleSheet.insertRule(fadeKeyframes, styleSheet.cssRules.length);
  }, []);

  const fadeStyle = {
    animation: "fade 3s ease-in-out",
    opacity: 1,
    transform: "scale(1)",
  };

  return (
    <>
      {currentText !== "app" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            flexDirection: "column",
          }}
        >
          {currentText === "first" && (
            <div style={fadeStyle}>
              Hi, I'm{" "}
              <span
                style={{
                  color: "#38bdf8",
                  fontWeight: "bold",
                }}
              >
                Rimjhim!
              </span>
            </div>
          )}
          {currentText === "second" && (
            <div style={fadeStyle}>
              Welcome <span style={{ marginLeft: "8px" }}>✨</span>
            </div>
          )}
        </div>
      ) : (
        <App />
      )}
    </>
  );
};

export default Fade;
