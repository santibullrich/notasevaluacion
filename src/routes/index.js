const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const notasController = require('../controllers/notasController');

// ir a la home
router.get('/', indexController.index)

// crear nota
router.post('/', notasController.create)

//borrar nota
router.delete('/', notasController.destroy);

module.exports = router;