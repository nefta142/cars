import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div id="main-footer">

        <div className="footer-content">

          <div className="main-footer-form">
            <p>En este pequeño formulario puedes <br/> dejarnos algunas sugerencias sobre la web</p>

            <form className="footer-form">
              <input
                type="text"
                placeholder="Escribe tu sugerencia"
              />
              <button>Enviar</button>
            </form>
          </div>

          <div className="main-footer-index">
            <a href="#">Home</a>
            <a href="#">Cars</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
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

        <h3 className="main-footer-text">
          &copy; 2026 Neftali
        </h3>

      </div>
    </footer>
  );
}

export default Footer;
