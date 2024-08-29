import React from "react";
import Nav from "./Nav";
import profile from "./images/file1.png";
import topRight from "./icons/up-right.svg";
import openQuote from "./images/open.png";
import download from "./icons/downloads.png";
import "./home.css";
import "./mediahome.css";
import resume from "./Nikhith_Naini_web.pdf";
function Home() {
  return (
    <div id="home" className="home">
      <div>&nbsp; </div>
      <Nav className="home-nav" />
      <div className="main">
        <div className="hello">Hello!</div>
        <div className="summary1">
          <img src={openQuote} alt="quote!" />
          B.Tech graduate from IIT BHU with expertise in DevOps, AWS, and web
          development, seeking to drive innovation and efficiency in tech roles.
        </div>
        <div className="details">
          <div className="name">
            I'm <span>Nikhith</span>,
          </div>
          <div className="role"> &nbsp;&nbsp;&nbsp;Software Developer</div>
        </div>
        {/* <div className="summary"></div> */}
        {/* <img src={profile} alt="error" /> */}

        <div className="profile-pic">
          <img src={profile} alt="error" />
          <div className="hireme">
            {/* <p style={{ display: "inline-block" }}>Hire me</p> */}
            <a href={resume} download>
              Download CV
              <img className="icons" src={download} alt="Up-right Icon" />
            </a>
            <a href="https://www.linkedin.com/in/nikhith-naini-9912801b7/">
              Contact me
              <img className="icons" src={topRight} alt="Up-right Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="summary">
        <img src={openQuote} alt="quote!" />
        B.Tech graduate from IIT BHU with expertise in DevOps, AWS, and web
        development, seeking to drive innovation and efficiency in tech roles.
      </div>
    </div>
  );
}
export default Home;
