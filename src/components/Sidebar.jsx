import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>

      <button className="burger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`sidebar ${open ? "open" : "closed"}`}>

        <div className="sidebar-top">
          <img src={logo} className="sidebar-logo" />
          <h2 className="sidebar-brand">Bienvenid@!</h2>
        </div>

        <div className="sidebar-center">

          <Link className="nav-item" to="/">
            🏠 Home
          </Link>

          <Link className="nav-item" to="/services">
            💼 Servicios
          </Link>

          

          <Link className="nav-item" to="/contacto">
            📩 Contacto
          </Link>
            <Link to="/carrito" className="nav-item">
            🛒 Mi Carrito
            </Link>
          <a
            className="nav-item-cta"
            href="https://viking-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 ¿Quieres una página WEB?
          </a>

        </div>

      </nav>

    </>
  );
}

export default Sidebar;