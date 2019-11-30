import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        to="landing-page"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="aboutMe-container"
        spy={true}
        smooth={true}
        offset={-100}
        duration={700}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="projects-container"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="contact-container"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
        Contact
      </Link>    
    </div>
  );
}

export default Header;
