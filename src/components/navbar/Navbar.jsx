import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Logo - LEFT */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Collers" />
        </a>

        {/* RIGHT SIDE: Nav Links + Auth together */}
        <div className={`navbar__right ${menuOpen ? "navbar__right--open" : ""}`}>

          {/* Nav Links */}
          <ul className="navbar__links">
            <li><a href="#products" onClick={closeMenu}>Products</a></li>
            <li><a href="#solutions" onClick={closeMenu}>Solutions</a></li>
            <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#resources" onClick={closeMenu}>Resources</a></li>
          </ul>

          {/* Auth */}
          <div className="navbar__auth">
            <a href="#login" className="navbar__login" onClick={closeMenu}>Log In</a>
            <a href="#signup" className="navbar__signup" onClick={closeMenu}>Sign up now</a>
          </div>

        </div>

        {/* Hamburger (mobile) - Exact Figma style custom SVG */}
<button
  className="navbar__hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
  aria-expanded={menuOpen}
>
  {menuOpen ? (
    /* Close Icon */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    /* EXACT FIGMA MATCH: Top Short -> Middle Medium -> Bottom Long (Right Aligned) */
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="6" x2="21" y2="6" />
      <line x1="7" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )}
</button>

      </div>
    </nav>
  );
};

export default Navbar;