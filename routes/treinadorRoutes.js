const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/treinador', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);z

module.exports = router;