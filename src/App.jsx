import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";

import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar";
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About.jsx'
// import Cursor from './components/Cursor';

function App() {
  return (
    <>
    {/* <Cursor /> */}
      <div >
     
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
