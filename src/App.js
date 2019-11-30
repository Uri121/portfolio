import React from "react";

import Header from "./components/Header.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";
import AboutMe from "./components/AboutMe.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="landing-page">
        <h1> Uri Rubin </h1>
        <h6>Software Developer</h6>
      </div>
      <div className="container">
        <div className="aboutMe-container">
          <AboutMe />
        </div>
        <div className="projects-container">
          <Project />
        </div>
          <div className="contact-container">
            <Contact />
          </div>
      </div>
    </div>
  );
}

export default App;
