var express = require('express');
var router = express.Router();
var muestraSeeder = require('../controllers/MuestraSeeder.js');
var laboratorista = require('./laboratorista.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Salud Primero'
    });
});

/*
 * View Routes
 */
router.use('/login', require('./usuarios.js'));
router.use('/laboratorista', require('./laboratorista.js'))
router.use('/operario', require('./operario.js'))
router.use('/paciente', require('./paciente.js'))

/*
 * APIRest Routes
 */
router.use('/centrosMed', require('./APIRest/centrosMed.js'));
router.use('/laboratorios', require('./APIRest/laboratorios.js'));
router.use('/pacientes', require('./APIRest/pacientes.js'));
router.use('/muestras', require('./APIRest/muestras.js'));


// llena de datos la collecion Muestras.
router.get('/seed', function(req, res, next) {
    muestraSeeder.seed(req, res);
});
// limpia la tabla muestras.
router.get('/dbreset', function(req, res, next) {
    muestraSeeder.dbreset(req, res);
});

module.exports = router;
