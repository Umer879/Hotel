import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.avif";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="custom-navbar bg-light">
        <div className="d-flex padding justify-content-between align-items-center h-100 px-5">
          {/* Logo */}
          <div className="fs-3 fw-bold text-uppercase" aria-label="Logo">
            <img src={logo} alt="Hotel Logo" />
          </div>

          {/* Navigation Menu */}
          <div
            className={`nav-links d-flex align-items-center gap-4 ${menuOpen ? "open" : ""}`}
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="list-unstyled d-flex flex-md-row flex-column align-items-md-center gap-5 m-0 p-0">
              <li>
                <Link
                  to="/"
                  className="fw-bold text-dark text-uppercase text-decoration-none"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="fw-bold text-dark text-uppercase text-decoration-none"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="fw-bold text-dark text-uppercase text-decoration-none"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="fw-bold text-dark text-uppercase text-decoration-none"
                  onClick={() => setMenuOpen(false)}
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="fw-bold text-dark text-uppercase text-decoration-none"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <Link
              to="/appointment"
              className="btn globalBtn text-uppercase fw-bold ms-3 text-white rounded-pill"
              onClick={() => setMenuOpen(false)}
              role="button"
            >
              Appointment
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            className="toggle-btn d-lg-none fs-1 bg-transparent border-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}
