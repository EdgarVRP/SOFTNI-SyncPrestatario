const express = require('express');
const router = express.Router();
const passport = require('passport');
//Mostrar todos los prestatarios (GET)
router.get('/adminPrestatario/', prestatarioController.mostrar)
//Crear usuarios (POST)
router.post('/adminPrestatario/crear', prestatarioController.crear)
//Editar usuarios (POST)
router.post('/adminPrestatario/editar', prestatarioController.editar)
//Borrar usuarios (GET)
router.get('/adminPrestatario/borrar/:id', prestatarioController.borrar)

module.exports = router;