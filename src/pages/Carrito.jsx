import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Carrito() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const savedCart =
      JSON.parse(
        localStorage.getItem("valmar_cart")
      ) || [];

    setCart(savedCart);

  }, []);

  const removeItem = (index) => {

    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este pedido?"
    );

    if (!confirmDelete) return;

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "valmar_cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const sendWhatsApp = () => {

    if (cart.length === 0) return;

    const message = cart
      .map(
        (item) =>
          `• ${item.name} - $${item.price}`
      )
      .join("%0A");

    const finalMessage =
      `Hola ValMar Studio!%0A%0A` +
      `Quiero consultar por:%0A%0A` +
      `${message}%0A%0A` +
      `TOTAL: $${total}`;

    window.open(
      `https://wa.me/5492612051343?text=${finalMessage}`,
      "_blank"
    );
  };

  return (
    <section className="page">

      <div className="page-logo-container">

        <img
          src={logo}
          alt="ValMar Studio"
          className="page-logo"
        />

      </div>

      <h1>
        🛒 Mi Carrito
      </h1>

      <div className="cart-container">

        {
          cart.length === 0 ? (

            <div className="cart-item">

              <h2>
                Aún no hay servicios agregados.
              </h2>

              <p>
                Selecciona un pack desde servicios.
              </p>

            </div>

          ) : (

            <>
              {
                cart.map((item, index) => (

                  <div
                    className="cart-item"
                    key={index}
                  >

                    <div>

                      <h2>
                        {item.name}
                      </h2>

                      <p>
                        ${item.price}
                      </p>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(index)
                      }
                    >
                      Eliminar
                    </button>

                  </div>

                ))
              }

              <div className="cart-total">

                <h2>
                  Total: ${total}
                </h2>

                <button
                  className="whatsapp-btn"
                  onClick={sendWhatsApp}
                >
                  📲 Enviar por WhatsApp
                </button>

              </div>

            </>

          )
        }

      </div>

    </section>
  );
}

export default Carrito;