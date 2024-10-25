const treinadores = [
    {id: 1, nome: 'Gabriel', nivel: 'Novato'},
    {id: 2, nome: 'Renan', nivel: 'Perdido'},
    {id: 3, nome: 'Gustavo', nivel: 'Muito perdido'},
];

const getTreinadores = () => treinadores;
const getTreinadorById= (id) => treinadores.find(t => t.id == parseInt(id));
const createTreinador = (nome, nivel) => treinadores.push(treinadores.length+1, nome, nivel)

module.exports = {getTreinadores, getTreinadorById, createTreinador}