import React from "react";
import logo from "../assets/logo.jpeg";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar id="navbar" className="navbar fixed-top navbar-light ">
        <img src={logo} id="logo" className="d-inline-block align-top" alt="" />
        <Navbar.Brand href="#about-me">Uri Rubin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about-me">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

