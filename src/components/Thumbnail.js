import React from "react";

const Thumbnail = ({ reading }) => {
  return (
    <div className="col-lg-6">
      <div className="project-item">
        <span className="caption">
          <span className="caption-content">
            <h2>{reading.title}</h2>
            <p className="mb-0">{reading.discription}</p>
            <div className="project-footer">
              <a
                href={reading.homePage}
                className="btn btn-primary"
                id="button"
              >
                Check me out
              </a>
              <a href={reading.link}>
                <button id="git-logo"></button>
              </a>
            </div>
          </span>
        </span>
        <img className="img-fluid" src={reading.image} alt="" />
      </div>
    </div>
  );
};

export default Thumbnail;
