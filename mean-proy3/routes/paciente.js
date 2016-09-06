var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('pacientes/sucursales', {
        title: 'Sucursales',
        angular: ''
    });
});
router.get('/misdatos.ejs', function(req, res, next) {
    res.render('pacientes/misdatos', {
        title: 'Express', layout: false
    });
});
router.get('/misexamenes.ejs', function(req, res, next) {
    res.render('pacientes/misexamenes', {
        title: 'Express', layout: false
    });
});

module.exports = router;
