const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Renderizar a página de cadastro de Pokémon
router.get('/novo', (req, res) => {
    res.render('createPokemon.ejs'); // Certifique-se de que o arquivo novoPokemon.ejs está em views
  });

router.get('/', pokemonController.getAllPokemons);
router.post('/', pokemonController.createPokemon);
router.get('/:id', pokemonController.getPokemonById);
router.delete('/:id', pokemonController.deletePokemon);

module.exports = router;