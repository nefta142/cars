import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div id="main-footer">
        <div className="main-footer-form">
          <p>
            En este pequeño formulario puedes dejarnos <br />
            algunas sugerencias sobre la web
          </p>
          <form id="main-footer-form">
            <input type="text" name="user-name" placeholder="Escribe tu sugerencia" />
            <button>Enviar</button>
          </form>
        </div>
        <div className="main-footer-apps">
          <a href="https://github.com/nefta142">
            <FaGithub />
          </a>

          <a href="">
            <FaInstagram />
          </a>
        </div>
        <div class="main-footer-index">

        </div>
        <h3 className="main-footer-text">&copy; 2026 Neftali</h3>
      </div>
    </footer>
  );
}

export default Footer;
