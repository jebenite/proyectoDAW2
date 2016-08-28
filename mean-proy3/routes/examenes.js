var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Examen=require('../models/Examen.js');

//esto la uso para los pdfs
router.get('/:id', function (req, res) {
  var id = req.params.id;
  console.log('I received a get request');
    Examen.find({id_muestra:id}, function (err, docs) {
    	console.log(docs);
        res.json(docs);
    });
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("query get de examen con exito");});
module.exports = router;
