import React from "react";
import Personal from "./personal/Personal";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import passPhoto from "./images/file1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./about.css";
import "./mediaqueries.css";
function About() {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <Personal />;
      case "qualifications":
        return <Education />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <div className="about-sec">
      <div>&nbsp;</div>
      <h1>About Me</h1>
      <div className="about-section">
        <div className="pass-photo">
          <img src={passPhoto} alt="Photo !" />
        </div>
        <div className="about-matter">
          <div className="about-links">
            <button onClick={() => setActiveTab("personal")}>Personal</button>
            <button onClick={() => setActiveTab("qualifications")}>
              Education
            </button>
            <button onClick={() => setActiveTab("skills")}>Skills</button>
          </div>
          <div className="link-data">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
export default About;
