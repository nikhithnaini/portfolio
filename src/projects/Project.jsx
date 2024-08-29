import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import project1 from "./assets/project-2.png";
import project2 from "./assets/3-tier.jpg";
import project3 from "./assets/ci-cd.png";

function Project() {
  // Slider settings for react-slick with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // URLs for Github and Details
  const projectUrls = [
    {
      github: "https://github.com/nikhithnaini/notes-app",
      details: "https://github.com/nikhithnaini/notes-app",
    },
    {
      github:
        "https://github.com/nikhithnaini/terraform-three-tier-architecture",
      details:
        "https://github.com/nikhithnaini/terraform-three-tier-architecture",
    },
    {
      github: "https://github.com/nikhithnaini/django-notes-app",
      details: "https://github.com/nikhithnaini/django-notes-app",
    },
  ];

  return (
    <div className="project-sec">
      <div>&nbsp;&nbsp;</div>
      <h1 className="title">Projects</h1>
      <Slider {...settings} className="project-container">
        <div className="project1">
          <div className="project-img">
            <img src={project1} alt="Project One" />
          </div>
          <h2>Notes-app</h2>
          <div className="btn">
            <button onClick={() => window.open(projectUrls[0].github)}>
              Github
            </button>
            <button onClick={() => window.open(projectUrls[0].details)}>
              Details
            </button>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <img src={project2} alt="Project Two" />
          </div>
          <h2>3-Tier Architecture</h2>
          <div className="btn">
            <button onClick={() => window.open(projectUrls[1].github)}>
              Github
            </button>
            <button onClick={() => window.open(projectUrls[1].details)}>
              Details
            </button>
          </div>
        </div>
        <div className="project1">
          <div className="project-img">
            <img src={project3} alt="Project Three" />
          </div>
          <h2>CI/CD pipeline</h2>
          <div className="btn">
            <button onClick={() => window.open(projectUrls[2].github)}>
              Github
            </button>
            <button onClick={() => window.open(projectUrls[2].details)}>
              Details
            </button>
          </div>
        </div>
      </Slider>
      <div>&nbsp;</div>
    </div>
  );
}

export default Project;
