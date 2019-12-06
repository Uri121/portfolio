import React, { Component } from "react";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/navbar/Toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import Project from './components/Project';
import Contact from './components/Contact';
import  ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  state = {
    siderDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          show={this.state.sideDrawerOpen}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <div className="container">
          <div className="landing-page">
            <h1> Uri Rubin </h1>
            <h6>Software Developer</h6>
          </div>
          <AboutMe />
          <Project/>
          <Contact/>
          <ScrollUpButton  style={{borderRadius:'30%'}} AnimationDuration={2000}/>
      </div>
      </div>
    );
  }
}

export default App;


