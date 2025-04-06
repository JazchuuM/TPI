import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Principal.css";

const Principal = () => {
  const [contenido, setContenido] = useState(""); // Para manejar el contenido de la publicación
  const [publicaciones, setPublicaciones] = useState([]); // Para guardar las publicaciones

  // Función para obtener las publicaciones del backend
  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch("http://localhost:5000/publicaciones");
        const data = await response.json();
        setPublicaciones(data);
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      }
    };

    fetchPublicaciones();
  }, []);

  // Función para crear una publicación
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/publicaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contenido }),
      });

      const data = await response.json();
      if (response.ok) {
        setContenido(""); // Limpiar el contenido del formulario
        setPublicaciones((prevPublicaciones) => [...prevPublicaciones, data]); // Agregar nueva publicación
        alert("Publicación creada!");
      } else {
        alert("Error al crear la publicación");
      }
    } catch (error) {
      console.error("Error al crear publicación:", error);
    }
  };

  return (
    <div className="principal-container">
      <div className="menu">
        <h2>Inicio</h2>
        <ul>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/configuraciones">Configuraciones</Link></li>
        </ul>
      </div>

      <div className="content">
      
        
        {/* Formulario para crear publicación */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            placeholder="Escribe tu publicación"
            rows="5"
            cols="50"
          ></textarea>
          <br />
          <button type="submit">Crear Publicación</button>
        </form>

        {/* Mostrar las publicaciones */}
        <div className="publicaciones-lista">
          {publicaciones.length > 0 ? (
            <ul>
              {publicaciones.map((publicacion, index) => (
                <li key={index}>{publicacion.contenido}</li>
              ))}
            </ul>
          ) : (
            <p>No hay publicaciones</p>
          )}
        </div>
      </div>

      <div className="right-panel">
        <input
          type="text"
          className="search-box"
          placeholder="Buscar..."
        />
        <div className="extra-functions">
          <h3>Otras Funciones</h3>
          <ul>
            <li><Link to="/notificaciones">Notificaciones</Link></li>
            <li><Link to="/mensajes">Mensajes</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Principal;
