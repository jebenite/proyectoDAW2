var express = require('express');
var router = express.Router();
var muestraSeeder = require('../controllers/MuestraSeeder.js');
var laboratorista = require('./laboratorista.js');

/* GET llena de datos la collecion Muestras. */
router.get('/seed', function(req, res, next) {
    muestraSeeder.seed(req, res);
});
/* GET limpia la tabla muestras. */
router.get('/dbreset', function(req, res, next) {
    muestraSeeder.dbreset(req, res);
});


/* GET home page. */
router.get('/index.ejs', function(req, res, next) {
    res.render('index', {
        title: 'Express', layout: false
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express', layout: false
    });
});

//paciente
router.get('/sucursal.ejs', function(req, res, next) {
    res.render('sucursal', {
        title: 'Express', layout: false
    });
});

router.get('/sucursales.ejs', function(req, res, next) {
    res.render('sucursales', {
        title: 'Express', layout: false
    });
});
router.get('/misdatos.ejs', function(req, res, next) {
    res.render('misdatos', {
        title: 'Express', layout: false
    });
});
router.get('/misexamenes.ejs', function(req, res, next) {
    res.render('misexamenes', {
        title: 'Express', layout: false
    });
});


//operario
router.get('/pacientes.ejs', function(req, res, next) {
    res.render('pacientes', {
        title: 'Pacientes', layout: false
    });
});
router.get('/paciente-crear.ejs', function(req, res, next) {
    res.render('paciente-crear', {
        title: 'Crear Paciente', layout: false
    });
});
router.get('/muestras-index.ejs', function(req, res, next) {
    res.render('muestras-index', {
        title: 'Muestras', layout: false
    });
});
router.get('/muestra-crear.ejs', function(req, res, next) {
    res.render('muestra-crear', {
        title: 'Crear Muestra', layout: false
    });
});

router.get('/estadisticas.ejs', function(req, res, next) {
    res.render('estadisticas', {
        title: 'Estadisticas', layout: false
    });
});


//laboratorista
router.use('/laboratorista', require('./laboratorista.js'))

module.exports = router;
