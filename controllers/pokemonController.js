const pokemonModel = require('../model/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokemon não encontrado');
    }
};

const getCreatePokemonForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('createPokemon', { pokemons });
};

const createPokemon = (req, res) => {
    const { nome, tipo } = req.body;
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/novoPokemon');
};

module.exports = { getAllPokemons, getPokemon, getCreatePokemonForm, createPokemon };
