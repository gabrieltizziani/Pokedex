const treinadorModel = require('../model/treinadorModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { treinadores });
};    

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

const getCreateTreinadorForm = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('createTreinador', { treinadores });
};


const createTreinador = (req, res) => {
    const { nome, nivel } = req.body;
    treinadorModel.createTreinador(nome, nivel);
    res.redirect('/novoTreinador');
};

module.exports = { getAllTreinadores, getTreinador, getCreateTreinadorForm, createTreinador };
