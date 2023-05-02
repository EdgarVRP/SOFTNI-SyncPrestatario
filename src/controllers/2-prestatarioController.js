const Prestatario = require("../models/2-prestatarioModel");

//Mostrar
module.exports.mostrar = (req, res) => {
  Prestatario.find({}, (error, prestatarios) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando los prestatarios" + error,
      });
    }
    if (!prestatarios) {
      return res.status(404).json({
        message: "No hay prestatarios",
      });
    }
    res.status(200).json({
      prestatarios,
    });
  });
};

//Mostrar por ID
module.exports.mostrarPorId = (req, res) => {
  let id = req.params.id;
  Prestatario.findById(id, (error, prestatario) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando el prestatario" + error,
      });
    }
    if (!prestatario) {
      return res.status(404).json({
        message: "No hay prestatario",
      });
    }
    res.status(200).json({
      prestatario,
    });
  });
};
//Mostrar por idPrestatario
module.exports.mostrarPorIdPrestatario = (req, res) => {
  let idPrestatario = req.params.idPrestatario;
  Prestatario.find({ idPrestatario }, (error, prestatario) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando el prestatario" + error,
      });
    }
    if (!prestatario) {
      return res.status(404).json({
        message: "No hay prestatario",
      });
    }
    res.status(200).json({
      prestatario,
    });
  });
};
//Crear prestatario
module.exports.crear = (req, res) => {
  //evitando que se cree con un email ya existente
  Prestatario.findOne({ email: req.body.email }, (error, prestatario) => {
    if (error) {
      return res.status(500).json({
        message: "Error al crear el prestatario" + error,
      });
    }
    if (prestatario) {
      return res.status(400).json({
        message: "Correo Electronico ya existente",
      });
    } else {
      Prestatario.findOne(
        {},
        {},
        { sort: { idPrestatario: -1 } },
        function (err, ultimoPrestatario) {
          if (err) throw err;
          const prestatario = new Prestatario({
            idPrestatario: ultimoPrestatario
              ? ultimoPrestatario.idPrestatario + 1
              : 1,
            prestatarioName: req.body.prestatarioName,
            rfc: req.body.rfc,
            codigoPostal: req.body.codigoPostal,
            ciudad: req.body.ciudad,
            direccion: req.body.direccion,
            cruzamientos: req.body.cruzamientos,
            telefono: req.body.telefono,
            email: req.body.email,
            numContrato: req.body.numContrato,
            fechaContratoPrestatario: req.body.fechaContratoPrestatario,
            rutaContratoPrestatario: req.body.rutaContratoPrestatario,
            rutaIdentificacion: req.body.rutaIdentificacion,
            rutaComprobanteDomicilio: req.body.rutaComprobanteDomicilio,
            lineaCredito: req.body.lineaCredito,
            calificacionCredito: req.body.calificacionCredito,
            procesoAnalisis: req.body.procesoAnalisis,
            procesoAlta: req.body.procesoAlta,
            creditoAceptado: req.body.creditoAceptado,
            score: req.body.score,
            ingresoMensual: req.body.ingresoMensual
          });
          prestatario.save(function (error, prestatario) {
            if (error) {
              return res.status(500).json({
                message: "Error al crear el Prestatario: " + error,
              });
            }
            res.status(201).json({
              message:
                "Solicitud guardada con el numero: " +
                prestatario.idPrestatario,
            });
          });
        }
      );
    }
  });
};

//Editar
module.exports.editar = (req, res) => {
  const idPrestatario = req.params.idPrestatario;
  const body = req.body;
  const prestatario = {
    idPrestatario: body.idPrestatario,
    numSolicitud: body.numSolicitud,
    prestatarioName: body.prestatarioName,
    rfc: body.rfc,
    codigoPostal: body.codigoPostal,
    ciudad: body.ciudad,
    direccion: body.direccion,
    cruzamientos: body.cruzamientos,
    telefono: body.telefono,
    email: body.email,
    numContrato: body.numContrato,
    fechaContratoPrestatario: body.fechaContratoPrestatario,
    rutaContratoPrestatario: body.rutaContratoPrestatario,
    rutaIdentificacion: body.rutaIdentificacion,
    rutaComprobanteDomicilio: body.rutaComprobanteDomicilio,
    lineaCredito: body.lineaCredito,
    calificacionCredito: body.calificacionCredito,
    procesoAnalisis: req.body.procesoAnalisis,
    procesoAlta: req.body.procesoAlta,
    creditoAceptado: req.body.creditoAceptado,
    score: req.body.score,
    ingresoMensual: req.body.ingresoMensual
  };
  Prestatario.find({ idPrestatario }, (error, prestatario) => {
    if (error) {
      return res.status(500).json({
        message: "Error mostrando el prestatario" + error,
      });
    }
    if (!prestatario) {
      return res.status(404).json({
        message: "No hay prestatario",
      });
    }
    prestatario = prestatario[0];
    prestatario.set(body);
    prestatario.save((error, prestatario) => {
      if (error) {
        return res.status(500).json({
          message: "Error editando el Prestatario: " + error,
        });
      } else {
        res.status(200).json({
          message: "Prestatario editado correctamente",
        });
      }
      //res.redirect('/adminPrestatario')
    });
  });
};

//Borrar
module.exports.borrar = (req, res) => {
  const idPrestatario = req.params.idPrestatario;
  Prestatario.findOneAndRemove({ idPrestatario }, (error, prestatario) => {
    if (error) {
      return res.status(500).json({
        message: "Error eliminando el Prestatario: " + error,
      });
    } else {
      res.status(200).json({
        message: "Prestatario editado correctamente",
      });
    }
  });
};
