import "./personal.css";
import calendar from "./icons/calendar.png";
import email from "./icons/email.png";
import home from "./icons/home.png";
import profile from "./icons/profile.png";
import phone from "./icons/phone.png";
function Personal() {
  return (
    // <div className="personal">
    //   <div className="me">
    //     <h1>About me</h1>
    //   </div>
    //   <div className="details">
    //     I am Nikhith Naini, a B.Tech graduate in Mining from IIT BHU with a
    //     strong focus on DevOps, cloud computing, and web development. My
    //     technical expertise spans programming languages such as Python,
    //     JavaScript, and SQL, along with hands-on experience in AWS services,
    //     CI/CD pipelines, and modern web technologies. During my internships, I
    //     have successfully optimized CI/CD pipelines, enhanced system
    //     reliability, and developed responsive web applications that
    //     significantly improved user engagement. My project experience includes
    //     deploying secure AWS architectures and managing containerized
    //     applications with Docker and Kubernetes. I am driven by a passion for
    //     technology and innovation, and I am eager to contribute my skills and
    //     knowledge to impactful projects in a dynamic team environment.
    //   </div>
    // </div>
    <div>
      <h3>Hi i'm Nikhith Naini</h3>
      <p>
        I excel in creating dynamic web applications and optimizing DevOps
        processes to drive efficient, scalable solutions.
      </p>
      <div className="about-info">
        <div className="flex-details box">
          <img src={profile} alt="" />
          <p>&nbsp;&nbsp;Nikhith Naini</p>
        </div>
        <div className="flex-details box">
          <img src={email} alt="" />
          <p> &nbsp;&nbsp;nikhithnaini@gmail.com</p>
        </div>
        <div className="flex-details box">
          <img src={calendar} alt="" />
          <p>&nbsp;&nbsp;Born on 4 Feb, 2001</p>
        </div>
        <div className="flex-details box">
          <img src={phone} alt="" />
          <p>&nbsp;&nbsp;+917702689564</p>
        </div>
        <div className="flex-details box">
          <img src={home} alt="" />
          <p>&nbsp;&nbsp;Hyderabad, Telangana, India</p>
        </div>
      </div>
      <div className="lang">
        <h3>Languages Known :</h3> <p>English, Hindi, Telugu</p>
      </div>
    </div>
  );
}
export default Personal;
