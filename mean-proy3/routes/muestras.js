var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Muestra = require('../models/Muestra.js');
//var Examen=expire('../models/Examen.js');

router.get('/', function(req, res) {
    console.log('I received a get request');
    Muestra.find({}, function(err, docs) {

        res.json(docs);
    });
});

router.get('/cedula', function(req, res) {
    console.log('I received a get request');
    Muestra.find({ cedula: req.session["cedula"] }, function(err, docs) {
        req.session.idMuestra = docs._id;
        res.json(docs);
    });
});

router.get('/todos', function(req, res) {
    console.log('I received a get request');
    Muestra.find({}, function(err, docs) {
        // req.session.idMuestra=docs._id;
        res.json(docs);
    });
});
router.get('/:id', function(req, res) {
    var id = req.params["id"];
    console.log('I received a get request');
    Muestra.findById(id, function(err, docs) {
        // req.session.idMuestra=docs._id;
        res.json(docs);
    });
});
// function ArrayExams(req){
//   var arreglo=[];
//   var i =0;
//   if(req.body.numExams==1){
//     arreglo.push({nombre:req.body.examenesrealizar});
//   }
//   else{
//
//     for(i = 0;i<req.body.numExams;i++){
//
//       arreglo.push({nombre:req.body.examenesrealizar[i]});
//     }
//   }
//   examenesrealizar.forEach(examen){
//
//   }
//
//   return arreglo;
// }
router.post('/', function(req, res) {
    // var examenes =
    console.log('I received a post request');
    Muestra.create({


        examenes: examenesrealizar,

        tipo: req.body.muestra,
        lab_asignado: req.body.laboratorio,
        cod_barras: req.body.codigobarras,
        cedula: req.body.cedula,
        centro_medico: req.body.centromedico
    }, function(err, docs) {
      if(err){
        console.log(err);
      }
        console.log(docs);
        res.json(docs);

    });
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("query get de muestra con exito");
});

module.exports = router;
