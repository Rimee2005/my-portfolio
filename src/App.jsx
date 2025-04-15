import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar";
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
      <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
