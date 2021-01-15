const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const notasController = require('../controllers/notasController');

router.get('/', indexController.index)
router.post('/', notasController.create)

module.exports = router;