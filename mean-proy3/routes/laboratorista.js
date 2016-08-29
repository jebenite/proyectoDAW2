var express = require('express');
var router = express.Router();
var MuestraController = require('../controllers/MuestraController.js');

var MuestraModel = require('../models/MuestraModel.js');

/*
 * GET
 */
router.get('/', function (req, res) {
    MuestraModel.find(function(err, Muestras) {
        if (err) {
            res.render('error', {
                title: 'Muestra no disponible',
                message: 'Error when getting Muestra.',
                estado: {status: 500, stack: err},
                // layout: false
            });
        }
        res.render('laboratorista/lista-muestras', {
            title: 'Lista de Muestras'
        });
    });
});
/*
 * GET
 */
router.get('/muestras/:id', function (req, res) {
    var id = req.params.id;
    MuestraModel.findOne({ _id: id }, function(err, Muestra) {
        if (err) {
            res.render('error', {
                title: 'Error db',
                message: 'Error when getting Muestra.',
                error: {status: 500},
                layout: false
            });
        }
        if (!Muestra) {
            res.render('error', {
                title: 'Muestra no disponible',
                message: 'Error when getting Muestra.',
                error: {status: 404},
                layout: false
            });
        }
        res.render('laboratorista/muestra', {
            title: 'Detalle de examenes',
            muestra_id: id
        });
    });
});

module.exports = router;
