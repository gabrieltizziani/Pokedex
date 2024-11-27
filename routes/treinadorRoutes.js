const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController'); // Verifique se o caminho está correto

// Rota para obter todos os treinadores
router.get('/', treinadorController.getAllTreinadores);

// Rota para criar um novo treinador
router.post('/', treinadorController.createTreinador);

// Rota para obter um treinador por ID
router.get('/:id', treinadorController.getTreinadorById);

// Rota para deletar um treinador
router.delete('/:id', treinadorController.deleteTreinador);

module.exports = router;
