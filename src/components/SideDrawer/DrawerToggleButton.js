import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = props => {
  let buttonActive = "toggle-button";
  if (props.show) {
    buttonActive = "toggle-button open";
  }
  return (
    <div className={buttonActive} onClick={props.click}>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </div>
  );
};

export default drawerToggleButton;
