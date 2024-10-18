const pokemonModel = require('../model/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if(pokemon){
        res.render('pokemon', {pokemon});
    } else{
        res.status(404).send('Pokemon não encontrado');
    }
};    
module.exports = {getAllPokemons, getPokemons};