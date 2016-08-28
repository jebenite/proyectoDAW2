var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var laboratorio=require('../models/laboratorio.js');
router.get('/', function (req, res) {
  console.log('I received a get request');
    laboratorio.find({}, function (err, docs) {
    	
        res.json(docs);
    });
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("query get laboratorios con exito");});
module.exports = router;