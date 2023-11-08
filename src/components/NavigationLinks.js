import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";

export default function NavigationLinks() {
  const userRole = localStorage.getItem("userRole");
  const userEmail = localStorage.getItem("userEmail");
  const isLoggedIn = userEmail !== null && userEmail !== "null";

  const navigate = useNavigate();

  const checkRoutePermission = () => {
    const currentPath = window.location.hash.substring(1);

    if (currentPath.includes("/student") && userRole !== "Student") {
      logout();
    }
    if (currentPath.includes("/instructor") && userRole !== "Instructor") {
      logout();
    }
    if (currentPath.includes("/administrator") && userRole !== "Admin") {
      logout();
    }
    if (
      currentPath.includes("/coordinator") &&
      userRole !== "ProgramCoordinator"
    ) {
      logout();
    }
    if (
      currentPath.includes("/qa-officer") &&
      userRole !== "QualityAssurance"
    ) {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  useEffect(() => {
    checkRoutePermission();
    window.addEventListener("popstate", checkRoutePermission); // listening for route changes

    return () => {
      window.removeEventListener("popstate", checkRoutePermission);
    };
  }, [userRole]);

  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="nav_active-link"
            className="nav_nav-link"
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && userRole === "Student" && (
          <li>
            <NavLink
              to="/student"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              Student
            </NavLink>
          </li>
        )}

        {isLoggedIn && userRole === "Instructor" && (
          <li>
            <NavLink
              to="/instructor"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              Instructor
            </NavLink>
          </li>
        )}

        {isLoggedIn && userRole === "Admin" && (
          <li>
            <NavLink
              to="/administrator"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              Administrator
            </NavLink>
          </li>
        )}

        {isLoggedIn && userRole === "ProgramCoordinator" && (
          <li>
            <NavLink
              to="/coordinator"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              Coordinator
            </NavLink>
          </li>
        )}

        {isLoggedIn && userRole === "QualityAssurance" && (
          <li>
            <NavLink
              to="/qa-officer"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              QA Officer
            </NavLink>
          </li>
        )}
        
        <li>
          <NavLink
            to="/message"
            activeClassName="nav_active-link"
            className="nav_nav-link"
          >
            Message
          </NavLink>
        </li>
       

        <li>
          <a
            className="nav_nav-link"
            href="http://yxp4351.uta.cloud/category/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="nav_active-link"
            className="nav_nav-link"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="nav_active-link"
            className="nav_nav-link"
          >
            Contact Us
          </NavLink>
        </li>

        {isLoggedIn ? (
          <li>
            <button
              activeClassName="nav_active-link"
              className="nav_nav-link"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink
              to="/login"
              activeClassName="nav_active-link"
              className="nav_nav-link"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
