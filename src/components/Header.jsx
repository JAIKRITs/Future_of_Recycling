import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <div className="logo-badge">{isHome ? "FR" : "AR"}</div>
            <div>
              <div style={{ fontSize: "0.92rem" }}>Future of Recycling</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                {isHome ? "E-waste • Urban Mining • AR" : "Exhibit"}
              </div>
            </div>
          </div>

          {isHome ? (
            <>
              <div className={`nav-links ${open ? "show" : ""}`} id="nav-links">
                <a href="#top" onClick={handleNavClick}>
                  Home
                </a>
                <a href="#india" onClick={handleNavClick}>
                  India’s E-Waste
                </a>
                <a href="#ar-exhibit" onClick={handleNavClick}>
                  AR Table Exhibit
                </a>
                <a href="#urban-mining" onClick={handleNavClick}>
                  Urban Mining Game
                </a>
                <a href="#dashboard" onClick={handleNavClick}>
                  Impact Dashboard
                </a>
                <button
                  className="nav-cta"
                  onClick={() => {
                    document
                      .getElementById("ar-exhibit")
                      ?.scrollIntoView({ behavior: "smooth" });
                    handleNavClick();
                  }}
                >
                  Try the Prototype
                </button>
              </div>
              <button
                className="nav-toggle"
                id="nav-toggle"
                aria-label="Toggle navigation"
                onClick={() => setOpen((v) => !v)}
              >
                <span></span>
              </button>
            </>
          ) : (
            <div className="nav-links">
              <Link className="nav-back" to="/">
                ← Back to main prototype
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


