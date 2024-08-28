import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import "./navmedia.css";
function Nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="resume" className="resume" smooth={true} duration={500}>
          Resume
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
