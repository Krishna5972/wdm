import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import "./navbar.css";
import NavigationLinks from "./NavigationLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandleResize);

    // Set initial state based on window size
    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav_navbar_header-container">
      <NavLink to="/" className="nav_navbar_logo-link">
        <img src={logo} alt="Logo" className="nav_navbar_logo" />
      </NavLink>
      <button
        className={`nav_navbar_hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <span className="nav_navbar_hamburger-bar"></span>
        <span className="nav_navbar_hamburger-bar"></span>
        <span className="nav_navbar_hamburger-bar"></span>
      </button>
      <div className={`nav_navbar_menu ${menuOpen ? "open" : "closed"}`}>
        <NavigationLinks isMobile={isMobile} setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
}
