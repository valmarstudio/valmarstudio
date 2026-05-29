import { useState } from "react";

function Services() {

  const [openPack, setOpenPack] = useState(null);

  const togglePack = (pack) => {

    setOpenPack(
      openPack === pack
        ? null
        : pack
    );
  };

  const addToCart = (service) => {

    const currentCart =
      JSON.parse(
        localStorage.getItem("valmar_cart")
      ) || [];

    currentCart.push(service);

    localStorage.setItem(
      "valmar_cart",
      JSON.stringify(currentCart)
    );

    alert("Servicio agregado al carrito 🛒");
  };

  return (

    <section className="page">
     
      <h1>
        Servicios
      </h1>

      <p className="services-intro">
        Branding, social media y marketing digital
        para marcas que buscan crecer profesionalmente.
      </p>

      <div className="services-layout">

        {/* =========================
            PACK EMPRENDEDOR
        ========================= */}

        <div
          className={`service-pack ${
            openPack === "emprendedor"
              ? "expanded"
              : ""
          }`}
        >

          <div
            className="pack-header"
            onClick={() =>
              togglePack("emprendedor")
            }
          >

            <div className="pack-title-row">

              <h2>
                🚀 PACK EMPRENDEDOR
              </h2>

              <span className="pack-price-inline">
                $50.000
              </span>

            </div>

            <span className="pack-arrow">

              {
                openPack === "emprendedor"
                  ? "⬆"
                  : "⬇"
              }

            </span>

          </div>

          {
            openPack === "emprendedor" && (

              <div className="pack-content">

                <p className="pack-description">
                  Ideal para marcas pequeñas
                  que recién arrancan o necesitan
                  presencia digital básica.
                </p>

                <h3>
                  Incluye
                </h3>

                <ul className="pack-list">

                  <li>
                    ✔ Diseño de identidad visual básica
                  </li>

                  <li>
                    ✔ 8 posteos mensuales
                  </li>

                  <li>
                    ✔ 4 historias semanales
                  </li>

                  <li>
                    ✔ Calendario de contenido
                  </li>

                  <li>
                    ✔ Copywriting básico
                  </li>

                  <li>
                    ✔ Optimización de bio y perfil
                  </li>

                  <li>
                    ✔ Asesoría inicial de comunicación
                  </li>

                </ul>

                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart({
                      name: "PACK EMPRENDEDOR",
                      price: 50000
                    })
                  }
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            )
          }

        </div>

        {/* =========================
            PACK INTERMEDIO
        ========================= */}

        <div
          className={`service-pack ${
            openPack === "intermedio"
              ? "expanded"
              : ""
          }`}
        >

          <div
            className="pack-header"
            onClick={() =>
              togglePack("intermedio")
            }
          >

            <div className="pack-title-row">

              <h2>
                📈 PACK INTERMEDIO
              </h2>

              <span className="pack-price-inline">
                $100.000
              </span>

            </div>

            <span className="pack-arrow">

              {
                openPack === "intermedio"
                  ? "⬆"
                  : "⬇"
              }

            </span>

          </div>

          {
            openPack === "intermedio" && (

              <div className="pack-content">

                <p className="pack-description">
                  Pensado para marcas que ya venden
                  pero necesitan crecer y verse
                  más sólidas.
                </p>

                <h3>
                  Incluye
                </h3>

                <ul className="pack-list">

                  <li>
                    ✔ Branding intermedio
                  </li>

                  <li>
                    ✔ 12 a 16 posteos mensuales
                  </li>

                  <li>
                    ✔ Reels editados
                  </li>

                  <li>
                    ✔ Historias estratégicas
                  </li>

                  <li>
                    ✔ Diseño personalizado
                  </li>

                  <li>
                    ✔ Estrategia de contenido
                  </li>

                  <li>
                    ✔ Gestión de comunidad básica
                  </li>

                  <li>
                    ✔ Reporte mensual
                  </li>

                  <li>
                    ✔ SEO para Instagram y captions
                  </li>

                </ul>

                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart({
                      name: "PACK INTERMEDIO",
                      price: 100000
                    })
                  }
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            )
          }

        </div>

        {/* =========================
            PACK PREMIUM
        ========================= */}

        <div
          className={`service-pack ${
            openPack === "premium"
              ? "expanded"
              : ""
          }`}
        >

          <div
            className="pack-header"
            onClick={() =>
              togglePack("premium")
            }
          >

            <div className="pack-title-row">

              <h2>
                👑 PACK PREMIUM
              </h2>

              <span className="pack-price-inline premium-price">
                $200.000
              </span>

            </div>

            <span className="pack-arrow">

              {
                openPack === "premium"
                  ? "⬆"
                  : "⬇"
              }

            </span>

          </div>

          {
            openPack === "premium" && (

              <div className="pack-content">

                <p className="pack-description">
                  Para marcas que quieren posicionarse
                  fuerte y delegar comunicación integral.
                </p>

                <h3>
                  Incluye
                </h3>

                <ul className="pack-list">

                  <li>
                    ✔ Branding completo
                  </li>

                  <li>
                    ✔ Estrategia de marca
                  </li>

                  <li>
                    ✔ Gestión total de redes
                  </li>

                  <li>
                    ✔ Reels avanzados
                  </li>

                  <li>
                    ✔ Diseño UX/UI básico
                  </li>

                  <li>
                    ✔ Campañas publicitarias
                  </li>

                  <li>
                    ✔ Automatización básica
                  </li>

                  <li>
                    ✔ Cobertura de eventos
                  </li>

                  <li>
                    ✔ Consultoría mensual
                  </li>

                  <li>
                    ✔ Reportes y métricas
                  </li>

                </ul>

                <button
                  className="cart-btn premium-btn"
                  onClick={() =>
                    addToCart({
                      name: "PACK PREMIUM",
                      price: 200000
                    })
                  }
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            )
          }

        </div>

      </div>

    </section>
  );
}

export default Services;