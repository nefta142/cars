import { useState } from "react";
import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [openFooter, setOpenFooter] = useState(false);

  function toggleFooterMenu() {
    setOpenFooter((prev) => !prev);
  }

  return (
    <footer className="footer">
      <div id="main-footer">
        <div className="footer-content">
          <div className="main-footer-form">
            <p>
              En este pequeño formulario puedes <br /> dejarnos algunas sugerencias sobre la web
            </p>

            <form className="footer-form">
              <input type="text" placeholder="Escribe tu sugerencia" />
              <button type="button">Enviar</button>
            </form>
          </div>

          <div className="main-footer-index">
            <Link to="/" onClick={() => setOpenFooter(false)}>Home</Link>

            <div className="footer-menu-item">
              <button className="footer-menu-btn" type="button" onClick={toggleFooterMenu}>
                Cars <span className="menu-dropdown">&#9650;</span>
              </button>

              <div className={`footer-menu ${openFooter ? "open" : ""}`}>
                <p className="menu-title">Cars Guide</p>

                <Link to="/ford" onClick={() => setOpenFooter(false)}>Ford</Link>
                <Link to="/toyota" onClick={() => setOpenFooter(false)}>Toyota</Link>
                <Link to="/subaru" onClick={() => setOpenFooter(false)}>Subaru</Link>
                <Link to="/porsche" onClick={() => setOpenFooter(false)}>Porsche</Link>
                <Link to="/mitsubishi" onClick={() => setOpenFooter(false)}>Mitsubishi</Link>
                <Link to="/ferrari" onClick={() => setOpenFooter(false)}>Ferrari</Link>
              </div>
            </div>

            <Link to="/about" onClick={() => setOpenFooter(false)}>About</Link>
            <Link to="/blog" onClick={() => setOpenFooter(false)}>Blog</Link>
            <Link to="/faqs" onClick={() => setOpenFooter(false)}>FAQs</Link>
          </div>

          <div className="main-footer-apps">
            <a href="https://github.com/nefta142" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <h3 className="main-footer-text">&copy; 2026 Neftali Política de Privacidad y Cookies | Condiciones de Venta</h3>
      </div>
    </footer>
  );
}

export default Footer;
