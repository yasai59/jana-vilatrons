import "./footer.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <aside>
        <img width="380vmin" className="fill-current" src={logo}></img>
        <p>
          Jana Vilatrons S.L.
          <br />
          El instituto de tus sueños
        </p>
      </aside>
      <nav>
        <header className="footer-title">Cursos</header>
        <Link className="link link-hover" to="/DAM">
          DAM
        </Link>
        <Link className="link link-hover" to="/DAW">
          DAW
        </Link>
        <Link className="link link-hover" to="/ASIR">
          ASIR
        </Link>
        <a className="link link-hover">Eventos</a>
      </nav>
      <nav>
        <header className="footer-title">Empresa</header>
        <a className="link link-hover">Sobre nosotros</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Trabajo</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Términos de uso</a>
        <a className="link link-hover">Política de privacidad</a>
        <a className="link link-hover">Política de cookies</a>
      </nav>
    </footer>
  );
};
