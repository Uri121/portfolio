import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-scroll";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton
          click={props.drawerClickHandler}
          show={props.show}
        />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
              id="link"
              activeClass="active"
              to="landing-page"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              id="link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={700}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              id="link"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-60}
              duration={700}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              id="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={700}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
