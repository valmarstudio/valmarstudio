import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>ValMar Studio</h3>

        <p>
          Marketing · Branding · Social Media · Desarrollo Web
        </p>

        <div className="footer-links">

          <Link to="/">Home</Link>

          <Link to="/services">
            Servicios
          </Link>

          <Link to="/branding">
            Branding
          </Link>

          <Link to="/marketing">
            Marketing
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>

        </div>

        <p className="footer-copy">
          © 2026 ValMar Studio
        </p>

      </div>

    </footer>
  );
}

export default Footer;