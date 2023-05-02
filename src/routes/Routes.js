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
//post
router.post('/adminPrestatario/crear', prestatarioController.crear)
//put
router.put('/adminPrestatario/:idPrestatario', prestatarioController.editar)
//delete
router.delete('/adminPrestatario/:idPrestatario', prestatarioController.borrar)
//home
router.get('/', (req, res) => {
    res.render('index');
});
module.exports = router;