import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import "./navbar.css";
import NavigationLinks from "./NavigationLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 900);
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const menuClass = isMobile
    ? menuOpen
      ? "nav_navbar_mobile-menu open"
      : "nav_navbar_mobile-menu"
    : "nav_navbar_desktop-menu";

  return (
    <header className="nav_navbar_header-container">
      <img src={logo} alt="Logo" width="100px" />
      {isMobile && (
        <button
          className="nav_navbar_hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className="nav_navbar_hamburger-bar"></div>
          <div className="nav_navbar_hamburger-bar"></div>
          <div className="nav_navbar_hamburger-bar"></div>
        </button>
      )}

      <nav>
        {/* Use the same container class for both mobile and desktop */}
        <div className={menuClass}>
          <NavigationLinks />
        </div>
      </nav>
    </header>
  );
}

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
