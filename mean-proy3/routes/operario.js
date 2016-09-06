var express = require('express');
var router = express.Router();

//operario
router.get('/pacientes.ejs', function(req, res, next) {
    res.render('operarios/pacientes', {
        title: 'Pacientes', layout: false
    });
});
router.get('/paciente-crear.ejs', function(req, res, next) {
    res.render('operarios/paciente-crear', {
        title: 'Crear Paciente', layout: false
    });
});
router.get('/muestras-index.ejs', function(req, res, next) {
    res.render('operarios/muestras-index', {
        title: 'Muestras', layout: false
    });
});
router.get('/muestra-crear.ejs', function(req, res, next) {
    res.render('operarios/muestra-crear', {
        title: 'Crear Muestra', layout: false
    });
});

router.get('/estadisticas', function(req, res, next) {
    res.render('operarios/estadisticas', {
        title: 'Estadisticas', layout: false
    });
});


module.exports = router;
