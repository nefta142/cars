import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCarsMenuOpen, setIsCarsMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function toggleCarsMenu() {
    setIsCarsMenuOpen(!isCarsMenuOpen);
  }

  function closeAllMenus() {
    setIsMobileMenuOpen(false);
    setIsCarsMenuOpen(false);
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/home" className="header-logo" onClick={closeAllMenus}>
          <img src={logo} alt="Car Showcase logo" />
        </Link>

        <button
          type="button"
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <ul className={`header-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li className="menu-item has-submenu">
            <button className="menu-btn" type="button" onClick={toggleCarsMenu}>
              Cars <span className="menu-dropdown">&#9660;</span>
            </button>

            <div className={`menu-header ${isCarsMenuOpen ? "open" : ""}`}>
              <p className="menu-title">Cars Guide</p>
              <Link to="/ford" onClick={closeAllMenus}>Ford</Link>
              <Link to="/toyota" onClick={closeAllMenus}>Toyota</Link>
              <Link to="/subaru" onClick={closeAllMenus}>Subaru</Link>
              <Link to="/porsche" onClick={closeAllMenus}>Porsche</Link>
              <Link to="/mitsubishi" onClick={closeAllMenus}>Mitsubishi</Link>
              <Link to="/ferrari" onClick={closeAllMenus}>Ferrari</Link>
            </div>
          </li>

          <li className="menu-item">
            <Link to="/about" onClick={closeAllMenus} className="menu-link">
              About
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/chat" onClick={closeAllMenus} className="menu-link">
              Chat
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/auth" onClick={closeAllMenus} className="menu-link">
              Authentication
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;