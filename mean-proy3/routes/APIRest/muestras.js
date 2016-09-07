var express = require('express');
var router = express.Router();
var Muestra = require('../../models/Muestra.js');

router.get('/', function(req, res) {
    console.log('I received a get request');
    Muestra.find({}, function(err, docs) {

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

router.delete('/:id', function(req, res) {
    console.log('I received a delete request');
    Muestra.findOneAndRemove({ _id: req.param("id") }, function(err) {
        if (err) throw err;
        // we have deleted the user
        console.log('Muestra borrada!');
    });
});

function ArrayExams(req) {
    var arreglo = [];
    var i = 0;
    if (req.body.numExams == 1) {
        arreglo.push({
            nombre: req.body.examenesrealizar
        });
    } else {
        for (i = 0; i < req.body.numExams; i++) {
            arreglo.push({
                nombre: req.body.examenesrealizar[i]
            });
        }
    }
    return arreglo;
}
router.post('/', function(req, res) {

    console.log('I received a post request');
    Muestra.create({
        examenes: ArrayExams(req),
        tipo: req.body.muestra,
        lab_asignado: req.body.laboratorio,
        cod_barras: req.body.codigobarras,
        cedula: req.body.cedula,
        centro_medico: req.body.centromedico
    }, function(err, docs) {
        if (err) {
            console.log(err);
        }
        console.log(docs);
        res.json(docs);

    });
});

module.exports = router;
