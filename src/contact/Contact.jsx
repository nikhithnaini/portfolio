import React from "react";
import "./contact.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>If you're interested in hiring me, feel free to reach out!</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/nikhith-naini-9912801b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/D0CKER_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/nikhithnaini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/naini_nikhith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Contact;
