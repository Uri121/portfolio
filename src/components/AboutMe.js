import React from "react";

function AboutMe(props) {
  return (
    <div className="container">
      <div className="my-card-about-me">
        <h4 className="card-title mt-2">About me: </h4>
        <div className="card-body">
          <p>
            Hi, I'm Uri, software developer who loves to transform ideas into
            reality using code.<br></br> I recently completed a bachelor's
            degree in Computer Science, I enjoy being challenged and engaging
            with projects that require me to work outside my comfort and
            knowledge set.<br></br> I’m a team player, self-learner, out of the
            box thinker, Initiator and creative.
          </p>
        </div>
      </div>
      <div className="my-card-skils mt-4">
        <h4 className="card-title mt-2">Skills</h4>
        <div className="card-body">
          <div className="my-progress">
          <p>HTML5</p>
          <div className="progress" style={{ height: "20px" }}>
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
          <div className="progress" style={{ height: "20px" }}>
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
          <div className="progress" style={{ height: "20px" }}>
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
          <div className="progress" style={{ height: "20px" }}>
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
          <div className="progress" style={{ height: "20px" }}>
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
          <div className="progress" style={{ height: "20px" }}>
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
          <p>ANDROID STUDIO</p>
          <div className="progress" style={{ height: "20px" }}>
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
          <p>DESIGN PATTRENS</p>
          <div className="progress" style={{ height: "20px" }}>
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
