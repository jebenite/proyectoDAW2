var express = require('express');
var router = express.Router();
var MuestraController = require('../controllers/MuestraController.js');

/*
 * GET
 */
router.get('/', function (req, res) {
    MuestraController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function (req, res) {
    MuestraController.show(req, res);
});

/*
 * POST
 */
router.post('/', function (req, res) {
    MuestraController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function (req, res) {
    MuestraController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function (req, res) {
    MuestraController.remove(req, res);
});

module.exports = router;
