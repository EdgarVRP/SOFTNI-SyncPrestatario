const express=require('express');
const path=require('path');
//inicializaciones
const app=express();
const port = process.env.PORT || 3000;
//Se invoca conexion a la base de datos
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((express.static(__dirname + '/public')));

require('./db/URI.js');//conexion CRUD USUARIOS
//setting up the server
//Configurando sesion
//requerimos las rutas
app.use('/',require('./routes/Routes')); //Routes
/*
const usuarios=require('./routes/1-userRoutes'); //Ruta usuarios
app.use(usuarios);
*/

app.use((req, res, next) => {
    res.status(404).send('Error: 404 Pagina SOFOM NO ENCONTRADA');
});
//starting the server
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
}
);
