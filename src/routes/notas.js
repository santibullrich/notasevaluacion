const express = require('express');
const router = express.Router();

const notasController = require('../controllers/notasController');

// renderizar vista
router.get('/edit/:id', notasController.edit)

// editar nota
router.post('/edit/:id', notasController.update)

// borrar nota
router.delete('/edit/:id', notasController.delete)

module.exports = router;