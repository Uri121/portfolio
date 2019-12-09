import React from "react";
import github from "../assets/github.png";

const Thumbnail = ({ reading }) => {
  return (
      <div className="card m-3">
        <div className="img-hover-zoom">
          <img src={reading.image} style={{ width: "100%" }} alt="" />
        </div>
        <div className="card-body">
          <h5
            className="card-header"
            style={{ background: "wheat", borderRadius: "5px" }}
          >
            {reading.title}
          </h5>
          <p className="text-muted pb-2 pt-2">{reading.category}</p>
          <p className="card-text">{reading.discription}</p>

          <a
            href={reading.homePage}
            className="btn btn-primary mr-5"
            id="button"
          >
            Check me out
          </a>
          <a href={reading.link}>
            <img src={github} alt="git logo" id="git-logo"></img>
          </a>
        </div>
      </div>
  );
};

export default Thumbnail;
