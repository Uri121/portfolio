import React from "react";
import image from "../assets/logo.jpeg";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";
import "../styles/AboutMe.css";

function AboutMe(props) {
  return (
    <div className="about-me">
      <div className="about-me-imgs">
        <img src={image} alt="" />

        <p className="about-p">
          Hi, I'm Uri, Software Developer who loves to transform ideas into
          reality using code.<br></br> I recently completed a bachelor's degree
          in Computer Science, I enjoy being challenged and engaging with
          projects that require me to work outside my comfort and knowledge set.
          <br></br> I’m a team player, self-learner, out of the box thinker,
          Initiator and creative.
        </p>
      </div>
    

      <div className="skils-container">
        <div className="my-skils-card">
          <div className="card-title">Skils</div>
          <div className="card-body">
            <div className="my-progress">
              <p>HTML5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "80%" }}
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>CSS3</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "75%" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>JAVASCRIPT</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>REACT</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "70%" }}
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>C#</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "90%" }}
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>JAVA</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;


        /* <div className="logos-container">
        <a
          id="logo-link"
          className="ml-2"
          href="https://www.linkedin.com/in/uri-rubin-53a144144/"
        >
          <img src={linkedin} style={{ width: "35px" }} alt="" />
        </a>
        <a id="logo-link" href="https://github.com/Uri121?tab=repositories">
          <img src={git} style={{ width: "35px" }} alt="" />
        </a>
      </div> */