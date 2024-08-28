import React from "react";
import "./index.css";
import Home from "./home/Home";
import About from "./about/About";
import Experience from "./experience/Experience";
import Project from "./projects/Project";
import Contact from "./contact/Contact";
import Nav from "./home/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-area">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
