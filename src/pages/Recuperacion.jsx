import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recuperacion.css";

const Recuperacion = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email para recuperación:", email);
  };

  return (
    <div className="container">
      <div className="recover-box">
        <h2>Recuperar Contraseña</h2>
        <p>Introduce tu email para recuperar tu contraseña</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ingresa tu email"
            />
          </div>
          <button type="submit" className="recover-btn">Recuperar</button>
        </form>
        <p className="back-to-login">
          <Link to="/login">Volver a Iniciar Sesión</Link>
        </p>
      </div>

      <div className="image-box">
        <img src="/user.jpg" alt="user" />
      </div>
    </div>
  );
};

export default Recuperacion;
