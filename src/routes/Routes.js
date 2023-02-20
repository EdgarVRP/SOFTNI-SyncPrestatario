const { response } = require('express');
const express = require('express');
const router = express.Router();
//Importar controladores
const prestatarioController = require('../controllers/2-prestatarioController');
//Mostrar todos los prestatarios (GET)
router.get('/adminPrestatario/', prestatarioController.mostrar)
//Mostrar un prestatario por ID (GET)
router.get('/adminPrestatario/:id', prestatarioController.mostrarPorId)
//Mostrar un prestatario por idPrestatario (GET)
router.get('/adminPrestatario/idPrestatario/:idPrestatario', prestatarioController.mostrarPorIdPrestatario)
//home
router.get('/', (req, res) => {
    res.render('index');
});
module.exports = router;