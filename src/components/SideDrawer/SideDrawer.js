import React from "react";
import "./SideDrawer.css";
import { Link  } from "react-scroll";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show){
    drawerClasses = 'side-drawer open'
  }
  return(
  <nav className={drawerClasses}>
  <ul>
          <li>
            <Link id="link" activeClass="fire" to="landing-page" onClick={props.click} spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
          </li>
          <li>
          <Link id="link" activeClass="fire" to="about-me" onClick={props.click} spy={true} smooth={true} offset={0} duration={1000}>About</Link>
          </li>
          <li>
          <Link id="link" activeClass="fire" to="projects" onClick={props.click} spy={true} smooth={true} offset={0} duration={1000}>Projects</Link>
          </li>
          <li>
          <Link id="link" activeClass="fire" to="my-form-container" onClick={props.click} spy={true} smooth={true} offset={0} duration={1000}>Contact</Link>
          </li>
        </ul>
  </nav>
  );
};


export default sideDrawer;
