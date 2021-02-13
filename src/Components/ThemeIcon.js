import React from "react";
import sunImage from "../image/sun.svg";
import moonImage from "../image/moon.svg";

function ThemeIcon({ darkMode }) {
  return (
    <img
      alt="theme-toggle-icon"
      className="theme-icon"
      src={darkMode ? sunImage : moonImage}
    />
  );
}

export default ThemeIcon;
