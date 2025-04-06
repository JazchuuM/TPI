import React from "react";
import "./Principal.css";

const Principal = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Mi Tienda</h1>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <section className="slider">
          <h2>Bienvenidos a la tienda</h2>
          <p>Descubrí los mejores productos</p>
        </section>

        <section className="productos">
          <h2>Productos destacados</h2>
          <div className="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>$1000</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>$1200</p>
          </div>
        </section>

        <footer>
          <p>© 2025 Velvet Cosmetics. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default Principal;
