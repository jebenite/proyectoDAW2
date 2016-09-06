var express = require('express');
var router = express.Router();

//operario
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
router.get('/muestras-index', function(req, res, next) {
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
