import "./experience.css";
function Experience() {
  return (
    <div className="experience">
      <div>&nbsp;</div>
      <p>Explore My</p>
      <h1>Experience</h1>

      <div className="intern">
        <div className="web-intern box">
          <h3>Frontend Developer</h3>
          <h4>&nbsp;Yhills Edutech</h4>
          <div>
            <ul>
              <li>
                Developed a responsive e-commerce website using React.js, HTML,
                CSS, and JavaScript, leading to a 40% increase in user
                engagement and a 25% improvement in overall user experience.
              </li>
              <li>
                Enhanced user interaction by implementing intuitive UI designs
                and interactive features, contributing to higher conversion
                rates.
              </li>
              {/* <li>
                  Architected and coded the website’s layout with HTML and CSS,
                  ensuring cross-platform compatibility and reducing bounce
                  rates by 15%.
                </li> */}
              <li>
                Collaborated with the backend team to integrate APIs, resulting
                in seamless data flow and improved site functionality.
              </li>
            </ul>
          </div>
        </div>
        <div className="devops-intern box">
          <h3>Devops Engineer</h3>
          <h4>&nbsp;PearlThoughts</h4>
          <ul>
            {" "}
            <li>
              Configured and optimized CI/CD pipelines for AI-driven chatbots,
              reducing deployment errors by 30%.
            </li>{" "}
            <li>
              Automated key processes within the pipeline, resulting in a 20%
              decrease in deployment time and increased system reliability.
            </li>{" "}
            <li>
              Led code integration tasks, ensuring consistent and timely
              releases, which improved the overall deployment success rate by
              25%.
            </li>{" "}
            <li>
              Monitored and maintained cloud infrastructure, improving system
              uptime by 15%.
            </li>{" "}
          </ul>
        </div>
      </div>

      <div>&nbsp;&nbsp;</div>
    </div>
  );
}
export default Experience;
