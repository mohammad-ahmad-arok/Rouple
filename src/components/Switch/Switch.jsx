import { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
  const themeToggle = (e) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="container">
      <label
        htmlFor="themeToggle"
        className="themeToggle st-sunMoonThemeToggleBtn"
        type="checkbox"
      >
        <input
          type="checkbox"
          onChange={themeToggle}
          defaultChecked={selectedTheme === "dark"}
          id="themeToggle"
          className="themeToggleInput"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="30" height="30" fill="white" />
            <circle cx="11" cy="3" r="8" fill="black" />
          </mask>
          <circle
            className="sunMoon"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          />
          <g>
            <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5" />
            <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5" />
            <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Switch;
