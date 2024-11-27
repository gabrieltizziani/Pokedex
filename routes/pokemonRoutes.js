const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const { Pokemon } = require('../models'); // Certifique-se de importar o modelo correto

// Renderizar a página de cadastro de Pokémon
router.get('/novoPokemon', async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll(); // Buscar todos os Pokémons no banco
        res.render('createPokemon.ejs', { pokemons }); // Enviar lista de Pokémons para o template
    } catch (error) {
        console.error('Erro ao carregar a página de cadastro de Pokémon:', error.message);
        res.status(500).send('Erro interno ao carregar a página.');
    }
});

// Rotas padrão para manipular Pokémons
router.get('/', pokemonController.getAllPokemons); // Listar todos os Pokémons
router.post('/', pokemonController.createPokemon); // Criar um novo Pokémon
router.get('/:id', pokemonController.getPokemonById); // Buscar um Pokémon por ID
router.delete('/:id', pokemonController.deletePokemon); // Deletar um Pokémon por ID

module.exports = router;
