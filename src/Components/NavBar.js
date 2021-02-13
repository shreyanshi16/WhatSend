import React from "react";
import Logo from "./Logo";
import WAlogo from "../image/WAlogo.png";
import DarkModeToggle from "./DarkModeToggle";
import { appName } from "../constants";

function NavBar() {
  return (
    <div className="Nav-bar">
      <Logo img={WAlogo} title={appName} alt={appName} />
      <div className="nav-links">
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default NavBar;
