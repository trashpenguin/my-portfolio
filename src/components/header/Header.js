import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">About</a>
          </li>
          <li>
            <a href="#experience">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={changeTheme}
              aria-label="Toggle theme"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
