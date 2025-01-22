require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const Port = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a la Api de Pokemón");
});

//Iniciamos el servidor
app.listen(Port, () => {
  console.log(`Servidor corriendo en el puerto ${Port}`);
});