const { Treinador, Pokemon, sequelize } = require('../models');

// Função para obter todos os treinadores
const getAllTreinadores = async (req, res) => {
    try {
        const treinadores = await Treinador.findAll(); 
        res.render('treinadores', { treinadores });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar treinadores' });
    }
};

// Função para criar um novo treinador
const createTreinador = async (req, res) => {
    const { nome, nivel } = req.body;
    try {
        await Treinador.create({ nome, nivel }); 
        res.redirect('/treinadores');
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao criar treinador' });
    }
};

// Função para deletar um treinador
const deleteTreinador = async (req, res) => {
    try {
        const treinadorId = req.params.id;
        const treinador = await Treinador.findByPk(treinadorId);
        if (!treinador) {
            return res.status(404).send('Treinador não encontrado');
        }
        await treinador.destroy();
        res.redirect('/treinadores'); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao deletar treinador' });
    }
};

// Função para obter um treinador por ID
const getTreinadorById = async (req, res) => {
    try {
        const treinadorId = req.params.id;
        const treinador = await Treinador.findByPk(treinadorId, {
            include: [
                {
                    model: Pokemon,
                    as: 'pokemons'  // Verifique se o alias está correto
                }
            ]
        });
        
        if (!treinador) {
            return res.status(404).send('Treinador não encontrado');
        }

        const pokemons = await Pokemon.findAll();

        res.render('treinador', { treinador, pokemons });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar treinador');
    }
};

// Exportando as funções corretamente
module.exports = {
    getAllTreinadores,
    createTreinador,
    deleteTreinador,
    getTreinadorById
};
