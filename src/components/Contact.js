import React from "react";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";
function Contact(props) {
  return (
    <div className="my-card-about-me">
      <h4 className="card-title">Get in touch </h4>
      <div className="card-body">
        <p> uri.rubin121@gmail.com</p>
        <p> 052-5057937</p>
        <p> Holon</p>
        <div className="d-flex flex-row justify-content-around">
        <a className="ml-2" href="https://www.linkedin.com/in/uri-rubin-53a144144/">
          <img src={linkedin} style={{ width: "38px" }} alt="" />
        </a>
        <a href="https://github.com/Uri121?tab=repositories">
          <img src={git} style={{ width: "38px" }} alt="" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
