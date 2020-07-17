import React, { Component } from "react";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/navbar/Toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollUpButton from "react-scroll-up-button";
import ReactGa from "react-ga";

class App extends Component {
  state = {
    siderDrawerOpen: false,
  };

  componentDidMount() {
    ReactGa.initialize("UA-172941522-1");
    ReactGa.pageview("/");
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  drawerLinkClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          show={this.state.sideDrawerOpen}
        />
        <SideDrawer
          click={this.drawerLinkClickHandler}
          show={this.state.sideDrawerOpen}
        />

        <section className="landing-page">
          <div className="background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="title">
              <svg
                id="svg-name"
                width="533"
                height="121"
                viewBox="0 0 533 121"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.1953 2.16406V78.2422C70.1953 86.8672 69.9141 92.9375 69.3516 96.4531C68.7891 99.9219 67.125 103.508 64.3594 107.211C61.5938 110.867 57.9375 113.656 53.3906 115.578C48.8906 117.453 43.5703 118.391 37.4297 118.391C30.6328 118.391 24.6328 117.266 19.4297 115.016C14.2266 112.766 10.3359 109.836 7.75781 106.227C5.17969 102.617 3.65625 98.8203 3.1875 94.8359C2.71875 90.8047 2.48438 82.3672 2.48438 69.5234V2.16406H32.0859V87.5234C32.0859 92.4922 32.3438 95.6797 32.8594 97.0859C33.4219 98.4453 34.5234 99.125 36.1641 99.125C38.0391 99.125 39.2344 98.375 39.75 96.875C40.3125 95.3281 40.5938 91.7188 40.5938 86.0469V2.16406H70.1953Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M109.219 22.6953L108.094 34.9297C112.219 26.1641 118.195 21.5234 126.023 21.0078V53.8438C120.82 53.8438 117 54.5469 114.562 55.9531C112.125 57.3594 110.625 59.3281 110.062 61.8594C109.5 64.3438 109.219 70.1094 109.219 79.1562V116H80.8125V22.6953H109.219Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M161.672 2.16406V17H132.422V2.16406H161.672ZM161.672 22.6953V116H132.422V22.6953H161.672Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M198.234 2.16406H219.188C233.156 2.16406 242.602 2.70312 247.523 3.78125C252.492 4.85938 256.523 7.625 259.617 12.0781C262.758 16.4844 264.328 23.5391 264.328 33.2422C264.328 42.1016 263.227 48.0547 261.023 51.1016C258.82 54.1484 254.484 55.9766 248.016 56.5859C253.875 58.0391 257.812 59.9844 259.828 62.4219C261.844 64.8594 263.086 67.1094 263.555 69.1719C264.07 71.1875 264.328 76.7891 264.328 85.9766V116H236.836V78.1719C236.836 72.0781 236.344 68.3047 235.359 66.8516C234.422 65.3984 231.914 64.6719 227.836 64.6719V116H198.234V2.16406ZM227.836 21.6406V46.9531C231.164 46.9531 233.484 46.5078 234.797 45.6172C236.156 44.6797 236.836 41.7031 236.836 36.6875V30.4297C236.836 26.8203 236.18 24.4531 234.867 23.3281C233.602 22.2031 231.258 21.6406 227.836 21.6406Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M340.055 22.6953V116H311.156L311.648 108.266C309.68 111.406 307.242 113.773 304.336 115.367C301.477 116.914 298.172 117.688 294.422 117.688C290.156 117.688 286.617 116.938 283.805 115.438C280.992 113.938 278.906 111.945 277.547 109.461C276.234 106.977 275.414 104.398 275.086 101.727C274.758 99.0078 274.594 93.6406 274.594 85.625V22.6953H303V86.1875C303 93.4531 303.211 97.7656 303.633 99.125C304.102 100.484 305.32 101.164 307.289 101.164C309.398 101.164 310.641 100.461 311.016 99.0547C311.438 97.6484 311.648 93.125 311.648 85.4844V22.6953H340.055Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M378.656 2.16406V29.0938C381 26.375 383.602 24.3594 386.461 23.0469C389.367 21.6875 392.508 21.0078 395.883 21.0078C399.773 21.0078 403.148 21.6172 406.008 22.8359C408.867 24.0547 411.047 25.7656 412.547 27.9688C414.047 30.1719 414.938 32.3281 415.219 34.4375C415.547 36.5469 415.711 41.0469 415.711 47.9375V89.9844C415.711 96.8281 415.242 101.938 414.305 105.312C413.414 108.641 411.281 111.547 407.906 114.031C404.531 116.469 400.523 117.688 395.883 117.688C392.555 117.688 389.438 116.961 386.531 115.508C383.672 114.055 381.047 111.875 378.656 108.969L376.828 116H350.25V2.16406H378.656ZM387.305 49.2031C387.305 44.375 387 41.2344 386.391 39.7812C385.781 38.2812 384.586 37.5312 382.805 37.5312C381.07 37.5312 379.945 38.1875 379.43 39.5C378.914 40.7656 378.656 44 378.656 49.2031V89.4219C378.656 94.4375 378.938 97.6484 379.5 99.0547C380.109 100.461 381.281 101.164 383.016 101.164C384.797 101.164 385.945 100.438 386.461 98.9844C387.023 97.5312 387.305 94.0391 387.305 88.5078V49.2031Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M454.312 2.16406V17H425.062V2.16406H454.312ZM454.312 22.6953V116H425.062V22.6953H454.312Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  d="M493.477 22.6953L492.984 31.2734C495.047 27.8516 497.555 25.2969 500.508 23.6094C503.508 21.875 506.953 21.0078 510.844 21.0078C515.719 21.0078 519.703 22.1562 522.797 24.4531C525.891 26.75 527.883 29.6562 528.773 33.1719C529.664 36.6406 530.109 42.4531 530.109 50.6094V116H501.703V51.3828C501.703 44.9609 501.492 41.0469 501.07 39.6406C500.648 38.2344 499.477 37.5312 497.555 37.5312C495.539 37.5312 494.273 38.3516 493.758 39.9922C493.242 41.5859 492.984 45.8984 492.984 52.9297V116H464.578V22.6953H493.477Z"
                  stroke="white"
                  strokeWidth="4"
                  mask="url(#path-1-outside-1)"
                />
              </svg>
              <h6>Software Developer</h6>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h2>About</h2>
            <AboutMe />
          </div>
        </section>
        <section className="project">
          <div className="container">
            <h2>Projects</h2>
            <Project />
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h2>Contact</h2>
            <Contact />
          </div>
        </section>

        <ScrollUpButton
          style={{ borderRadius: "30%" }}
          AnimationDuration={2000}
        />
      </div>
    );
  }
}

export default App;
