import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link  } from "react-scroll";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} show={props.show} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link id="link" activeClass="active" to="landing-page" spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
          </li>
          <li>
          <Link id="link" activeClass="active" to="about-me" spy={true} smooth={true} offset={0} duration={700}>About</Link>
          </li>
          <li>
          <Link id="link" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={700}>Projects</Link>
          </li>
          <li>
          <Link id="link" activeClass="active" to="my-form-container" spy={true} smooth={true} offset={0} duration={700}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
