import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const {isDark, changeTheme} = useContext(StyleContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <button
          className={`menu-icon${menuOpen ? " menu-icon--open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="navicon"></span>
        </button>
        <ul className={`menu${menuOpen ? " menu--open" : ""}`}>
          <li>
            <a href="#skills" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
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
