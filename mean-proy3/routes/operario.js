var express = require('express');
var router = express.Router();
var MuestraController = require('../controllers/MuestraController.js');


var MuestraModel = require('../models/Muestra.js');
//operario
router.get('/', function(req, res, next) {
    res.render('operarios/pacientes', {
        title: 'Pacientes'
    });
});
router.get('/pacientes', function(req, res, next) {
    res.render('operarios/pacientes', {
        title: 'Pacientes'
    });
});
router.get('/paciente-crear', function(req, res, next) {
    res.render('operarios/paciente-crear', {
        title: 'Crear Paciente'
    });
});
router.get('/muestras', function(req, res, next) {
    res.render('operarios/muestras-index', {
        title: 'Muestras'
    });
});
router.get('/muestra-crear', function(req, res, next) {
    res.render('operarios/muestra-crear', {
        title: 'Crear Muestra'
    });
});

router.get('/estadisticas', function(req, res, next) {
    res.render('operarios/estadisticas', {
        title: 'Estadisticas'
    });
});


module.exports = router;
