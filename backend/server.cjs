const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Configurar middleware
app.use(cors()); // Habilita CORS para permitir peticiones desde el frontend
app.use(express.json()); // Permite recibir JSON en el body de las solicitudes

// Ruta básica para probar conexión con el frontend
app.get("/", (req, res) => {
  res.send("¡Servidor backend funcionando!");
});

// Base de datos temporal (para pruebas)
const publicaciones = [];

// Ruta para crear una publicación
app.post("/publicaciones", (req, res) => {
  const { contenido } = req.body;
  if (!contenido) {
    return res.status(400).json({ error: "El contenido no puede estar vacío" });
  }
  const nuevaPublicacion = { id: publicaciones.length + 1, contenido };
  publicaciones.push(nuevaPublicacion);
  res.status(201).json(nuevaPublicacion);
});

// Ruta para obtener todas las publicaciones
app.get("/publicaciones", (req, res) => {
  res.json(publicaciones);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${5000}`);
});
