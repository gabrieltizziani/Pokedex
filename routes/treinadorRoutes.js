const express = require('express');
const router = express.Router();
const { Treinador } = require('../models');  // Adicione a importação do modelo Treinador
const treinadorController = require('../controllers/treinadorController'); 

// Página para cadastrar treinador
router.get("/novoTreinador", async (req, res) => {
  try {
    const treinadores = await Treinador.findAll(); // Buscar todos os treinadores
    res.render("createTreinador.ejs", { treinadores });
  } catch (error) {
    console.error("Erro ao carregar a página de cadastro:", error.message);
    res.status(500).send("Erro ao carregar a página de cadastro de Treinadores.");
  }
});

// Rota para listar treinadores
router.get("/", treinadorController.getAllTreinadores);

// Rota para criar treinador
router.post("/", treinadorController.createTreinador);

// Rota para buscar treinador por ID
router.get("/:id", treinadorController.getTreinadorById);

// Rota para deletar treinador
router.delete("/:id", treinadorController.deleteTreinador);

module.exports = router;
