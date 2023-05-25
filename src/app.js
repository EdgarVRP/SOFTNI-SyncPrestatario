const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//Se importa cors
const cors = require("cors");
//inicializaciones
const app = express();
const port = process.env.PORT || 3001;
//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//middlewar cors
app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
require("./db/URI.js"); //conexion Mongo
//requerimos las rutas
app.use("/", require("./routes/Routes")); //Routes
app.use((req, res, next) => {
  res.status(404).send("Error: 404 Pagina SOFOM NO ENCONTRADA");
});
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});