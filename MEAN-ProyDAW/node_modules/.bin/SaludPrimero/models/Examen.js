

var mongoose=require('mongoose');
var ExamenSchema=new mongoose.Schema({
  fechaIngreso :{type:Date,default:Date.now},
  id_muestra:String,
  cedula: String,
  parametros:Array,
  unidades:Array,
  resultados:Array,
  valorReferencias:Array

}, { versionKey: false, collection: 'examen'});

module.exports = mongoose.model("Examen",ExamenSchema);
