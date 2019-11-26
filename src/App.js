import React from "react";

import Header from "./components/Header.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";
import AboutMe from "./components/AboutMe.js";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="box-1" id="about-me">
          <AboutMe />
        </div>
        <div className="box-2" id="projects">
        <h2 className="display-4 text-center" style={{color:'cadetblue'}}>Check out some of my work</h2>
          <Project />
        </div>
        <div className="box-3" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
