import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo/logo.avif'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="custom-navbar bg-light">
        <div className=" d-flex padding justify-content-between align-items-center h-100 px-5">
          {/* Logo */}
          <div className="fs-3 fw-bold text-uppercase" aria-label="Logo">
            <img src={logo} alt="" />
          </div>

          {/* Navigation Menu */}
          <div
            className={`nav-links d-flex align-items-center gap-4 ${menuOpen ? "open" : ""}`}
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="list-unstyled  d-flex flex-md-row flex-column align-items-md-center gap-5 m-0 p-0">
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">Home</a></li>
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">About</a></li>
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">Services</a></li>
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">Pages</a></li>
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">News</a></li>
              <li><a href="#" className=" fw-bold text-dark text-uppercase text-decoration-none">Contact</a></li>
            </ul>

            <a
              href="#"
              className="btn text-uppercase fw-bold ms-3 text-white rounded-pill" id="myBtn" style={{padding: '12px 24px', backgroundColor: '#77ba00'}}
              role="button"
            >
              Appointment
            </a>
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
