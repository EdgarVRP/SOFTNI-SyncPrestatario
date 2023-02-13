const Prestatario= require('../models/2-prestatarioModel');
//Mostrar
module.exports.mostrar = (req, res)=>{
    Prestatario.find({}, (error, prestatarios)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los prestatarios'+error
            })
        }
        //console.log(usuarios.length)
        return res.render('0-2-AdminPrestatario', 
        
        {total: prestatarios.length+1,
             prestatarios: prestatarios,
              lastid: 1+prestatarios[prestatarios.length-1].idPrestatario})
    })
}
//Mostrar por ID
module.exports.mostrarId = (req, res)=>{
    Prestatario.find({idPrestatario: req.params.id}, (error, prestatarios)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los prestatarios'+error
            })
        }
        //console.log(usuarios.length)
        return res.render('0-2-AdminPrestatario', 
        
        {total: prestatarios.length+1,
             prestatarios: prestatarios,
              lastid: 1+prestatarios[prestatarios.length-1].idPrestatario})
    })
}