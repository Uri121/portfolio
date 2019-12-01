import React from "react";
import { Link  } from "react-scroll";
import  ScrollUpButton from "react-scroll-up-button";

function Header() {
  return (
    <div className="navbar">
      <Link className="my-nav-item"
        activeClass="active"
        to="landing-page"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        Home
      </Link>
      <Link className="my-nav-item"
        activeClass="active"
        to="aboutMe-container"
        spy={true}
        smooth={true}
        offset={-100}
        duration={700}
      >
        About
      </Link>
      <Link className="my-nav-item"
        activeClass="active"
        to="projects-container"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
        Projects
      </Link>
      <Link className="my-nav-item"
        activeClass="active"
        to="contact-container"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
        Contact
      </Link>   
      <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={2000}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{}}
      ToggledStyle={{}}
    />
    </div>
  );
}

export default Header;
