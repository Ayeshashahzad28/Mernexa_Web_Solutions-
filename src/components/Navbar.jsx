import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Mernexa.png";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Mernexa Logo" className="navbar-logo-img" />

          <span className="logo-text">Mernexa_Web_Solutions</span>
        </Link>

        {/* Navigation */}
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Mobile Menu */}
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <Link to="/contact" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
