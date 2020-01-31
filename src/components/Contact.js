import React from "react";
import "../styles/Contact.css";
import cv from "../assets/cv.pdf";
import resume from "../assets/file-pdf-regular.svg";
import linkedin from "../assets/linkedin-brands.svg";
import git from "../assets/github-square-brands.svg";
const Contact = props => {
  return (
    <div className="my-form-container">
      <form
        className="my-form"
        action="https://formspree.io/uri.rubin121@gmail.com"
        method="POST"
      >
        <input type="text" name="field1" placeholder="Your Name" required />
        <input
          type="email"
          name="field2"
          placeholder="Email Address"
          required
        />
        <textarea
          name="field3"
          placeholder="Type your Message"
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
      <div id="footer" className="page-footer">
        <div className="container-fluid">
          <div className="logos">
            <a
              id="logo-link"
              href="https://www.linkedin.com/in/uri-rubin-53a144144/"
            >
              <img src={linkedin} alt="" />
            </a>
            <a id="logo-link" href="https://github.com/Uri121?tab=repositories">
              <img src={git} alt="" />
            </a>
            <a
              id="logo-link"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resume} alt="" />
            </a>
          </div>
        </div>
        <div className="container-fluid text-center">
          <h5 style={{ color: "#F7F7F7" }}>
            2019 &copy; Copyright <strong>Uri Rubin</strong>. All Rights
            Reserved
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
