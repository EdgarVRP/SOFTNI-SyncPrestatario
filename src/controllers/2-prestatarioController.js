const Prestatario= require('../models/2-prestatarioModel');
//Mostrar
module.exports.mostrar = (req, res)=>{
    Prestatario.find({}, (error, prestatarios)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los prestatarios'+error
            })
        }
        if(!prestatarios) {
            return res.status(404).json({
                message: 'No hay prestatarios'
            })
        }
        res.status(200).json({
            prestatarios
        })
    })
}
//Mostrar por ID
module.exports.mostrarPorId = (req, res)=>{
    let id = req.params.id;
    Prestatario.findById(id, (error, prestatario)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando el prestatario'+error
            })
        }
        if(!prestatario) {
            return res.status(404).json({
                message: 'No hay prestatario'
            })
        }
        res.status(200).json({
            prestatario
        })
    })
}
//Mostrar por idPrestatario
module.exports.mostrarPorIdPrestatario = (req, res)=>{
    let idPrestatario = req.params.idPrestatario;
    Prestatario.find({idPrestatario}, (error, prestatario)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando el prestatario'+error
            })
        }
        if(!prestatario) {
            return res.status(404).json({
                message: 'No hay prestatario'
            })
        }
        res.status(200).json({
            prestatario
        })
    })
}
