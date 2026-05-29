function Contacto() {
  return (
    <section className="page">

      <h1>📩 Contacto</h1>

      <div className="contact-card">

        <h2>🌐 Nuestras redes</h2>

        <p>
          Seguinos en Instagram:
        </p>

        <a
          href="https://instagram.com/valmarstudio_"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          @valmarstudio_
        </a>

        <div className="contact-divider"></div>

        <p>
          📲 Número de WhatsApp por asesoramiento:
        </p>

        <a
          href="https://wa.me/542612051343"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp-contact"
        >
          2612051343
        </a>

      </div>

    </section>
  );
}

export default Contacto;