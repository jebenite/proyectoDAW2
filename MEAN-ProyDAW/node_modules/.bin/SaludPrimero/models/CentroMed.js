var mongoose=require('mongoose');
var CentroMedSchema=new mongoose.Schema({
  nombre: String,
    direccion: String,
    descipcion: Array, //examenes q se pueden realizar
    horario: Array,
    galeria : Array,
    mapa: Array
}, { versionKey: false, collection: 'sucursal'});

module.exports = mongoose.model("centroMed",CentroMedSchema);
