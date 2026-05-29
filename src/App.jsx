import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Campana from "./pages/Campana";

function App() {

  return (
    <div className="app">

      {/* VIDEO BACKGROUND */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO */}
      <div className="overlay"></div>

      {/* SIDEBAR */}
      <Sidebar />

      {/* ROUTES */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/campana"
          element={<Campana />}
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;