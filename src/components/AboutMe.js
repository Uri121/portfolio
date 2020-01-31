import React from "react";
import image from "../assets/logo.jpeg";

import "../styles/AboutMe.css";

const AboutMe = props => {
  return (
    <div className="about-me">
      <div className="description">
        <img src={image} alt="" />
        <p>
          Hi, I'm Uri, Software Developer who loves to transform ideas into
          reality using code. I recently completed a bachelor's degree in
          Computer Science, I enjoy being challenged and engaging with projects
          that require me to work outside my comfort and knowledge set. I’m a
          team player, self-learner, out of the box thinker, Initiator and
          creative.
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
                  80%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>EXPRESS</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "90%" }}
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
            </div>
            <div className="my-progress">
              <p>REDUX</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
