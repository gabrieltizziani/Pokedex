/*const treinadores = [
    {id: 1, nome: 'Gabriel', nivel: 'Novato'},
    {id: 2, nome: 'Renan', nivel: 'Perdido'},
    {id: 3, nome: 'Gustavo', nivel: 'Muito perdido'},
];

const getTreinadores = () => treinadores;
const getTreinadorById= (id) => treinadores.find(t => t.id == parseInt(id));
const createTreinador = (nome, nivel) => {
    const lastId = treinadores.length > 0 ? treinadores[treinadores.length - 1].id : 0;
    const newTreinador = { id: lastId + 1, nome, nivel };
    treinadores.push(newTreinador);
    return newTreinador;
};

module.exports = {getTreinadores, getTreinadorById, createTreinador}*/

const {Sequelize, DataTypes, INTEGER} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const Treinador = sequelize.define(
    'Treinador',
    {
        idTreinador: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nomeTreinador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nivelTreinador: {
            type: DataTypes.STRING,
            allowNul: true
        },
    },
    {
        sequelize, 
        modelName: "Treinador",
        tableName: "Treinador",
        timestamps: false
    },
);
