var express = require('express');
var router = express.Router();

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
        title: 'Express'
    });
});

router.get('/sucursales.ejs', function(req, res, next) {
    res.render('sucursales', {
        title: 'Express', layout: false
    });
});
router.get('/misdatos', function(req, res, next) {
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


//laborator
router.get('/lista-muestras', function(req, res, next) { /*bk*/
    res.render('lista-muestras', {
        title: 'Express'
    });
});

router.get('/listaDeResultados.ejs', function(req, res, next) {
    res.render('listaDeResultados', {
        title: 'Express'
    });
});

router.get('/ingresomuestra.ejs', function(req, res, next) { /*supuesto ingreso*/
    res.render('ingresomuestra', {
        title: 'Express'
    });
});


module.exports = router;
