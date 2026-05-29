import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Home() {

  const textos = [
    "Bienvenid@",
    "a",
    "ValMar Studio",
    "Branding",
    "Marketing Digital",
    "Social Media",
  ];

  const [textoActual, setTextoActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoActual((prev) => (prev + 1) % textos.length);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          ValMar Studio | Marketing Digital y Desarrollo Web
        </title>

        <meta
          name="description"
          content="Creamos páginas web modernas, branding y estrategias de marketing digital para negocios y emprendedores."
        />

        <meta
          name="keywords"
          content="marketing digital, desarrollo web, branding, diseño web, social media, páginas web"
        />

        <meta name="author" content="ValMar Studio" />
      </Helmet>

      <section className="page">

        <div className="hero">

          <img src={logo} className="hero-logo" />

          <h1 className="hero-title">
            {textos[textoActual]}
          </h1>

         <title>
  ValMar Studio | Marketing Digital 
</title>

<meta
  name="description"
  content="Agencia digital especializada en branding, marketing digital y desarrollo web moderno."
/>

        </div>

        <p className="intro-text">
          Transformamos ideas en marcas digitales modernas.
        </p>

        <div className="info-block">

          <h2>¿Qué hacemos?</h2>

          <p>
            Creamos identidades visuales, estrategias digitales y
            páginas web modernas para negocios, marcas y emprendimientos.
          </p>

        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Branding</h3>

            <p>
              Construimos marcas sólidas, modernas y memorables.
            </p>
          </div>

          <div className="service-card">
            <h3>Marketing Digital</h3>

            <p>
              Estrategias para crecer en redes y captar clientes.
            </p>
          </div>

          <div className="service-card">
            <h3>Social Media</h3>

            <p>
              Gestion de redes sociales.
            </p>
          </div>
          <div className="service-card">
            <h3>Community Manager</h3>

            <p>
              Manejo de comunidad digital.
            </p>
          </div>

        </div>

        <div className="cta-box">

          <h2>
            ¿Listo para impulsar tu marca?
          </h2>

          <Link to="/services">
            <button>
              Ver Servicios
            </button>
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;