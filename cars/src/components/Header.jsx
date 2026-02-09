import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <header className="header">
      <nav className="header-nav">

        <a className="header-logo" href="#">
          <img src={logo} />
        </a>

        <ul className="header-menu">
          <li className="menu-item has-submenu">
            <button className="menu-btn" type="button" onClick={toggleMenu}>
              Cars <span className="menu-dropdown">&#9660;</span>
            </button>

            <div className={`menu-header ${open ? "open" : ""}`}>
              <p className="menu-title">Cars Guide</p>
              <Link to="/ford" onClick={()=> setOpen(false)}>Ford</Link>
              <Link to="/toyota" onClick={()=> setOpen(false)}>Toyota</Link>
              <Link to="/subaru" onClick={()=> setOpen(false)}>Subaru</Link>
              <Link to="/porsche" onClick={()=> setOpen(false)}>Porsche</Link>
              <Link to="/mitsubishi" onClick={()=> setOpen(false)}>Mitsubishi</Link>
              <Link to="/ferrari" onClick={()=> setOpen(false)}>Ferrari</Link>
            </div>
          </li>

          <li className="menu-item">
            <a className="menu-link" href="#">About</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">Blog</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">FAQs</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#">#Trending</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
