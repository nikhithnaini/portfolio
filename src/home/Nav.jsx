import React from "react";
import { Link } from "react-scroll";
import home from "./icons/home.png";
import user from "./icons/user.png";
import exp from "./icons/quality.png";
import pro from "./icons/briefing.png";
import chat from "./icons/chat.png";

import "./Nav.css";
import "./navmedia.css";
import "./script";
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
      <div className="insta-nav">
        <Link to="home" smooth={true} duration={500}>
          <img src={home} alt="Home" />
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <img src={user} alt="About" />
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <img src={exp} alt="Quality" />
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <img src={pro} alt="Briefing" />
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <img src={chat} alt="Chat" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
