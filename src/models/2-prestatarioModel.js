const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const prestatarioSchema = new Schema(
  {
    idPrestatario: {type: Number, default: 1},
    prestatarioName : {type: String, required: true},
    rfc : {type: String, required: true},
    codigoPostal : {type: Number, required: true},
    ciudad : {type: String, required: true},
    direccion : {type: String, required: true},
    cruzamientos : {type: String, required: true},
    telefono : {type: Number, required: true},
    email : {type: String, required: true},
    numContrato: {type: Number},
    fechaContratoPrestatario: {type: String},
    rutaContratoPrestatario: {type: String},
    rutaIdentificacion: {type: String},
    rutaComprobanteDomicilio: {type: String},
    lineaCredito: {type: Number},
    calificacionCredito: {type: String},
    procesoAnalisis: {type: Boolean, default: false},
    procesoAlta: {type: Boolean, default: false},    
    creditoAceptado: {type: Boolean, default: false},
    score : {type: Number, default: 0},
    ingresoMensual : {type: Number, default: 0}
  },
  { versionKey: false }
);

module.exports = mongoose.model("prestatarios", prestatarioSchema);