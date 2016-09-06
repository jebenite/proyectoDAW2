var express = require('express');
var router = express.Router();

var CentroMed = require('../../models/CentroMed.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    console.log('I received a get request');
    CentroMed.find({}, function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

module.exports = router;
