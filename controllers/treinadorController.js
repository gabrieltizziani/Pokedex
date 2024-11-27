const { Treinador } = require("../models"); // Importa o modelo Treinador apenas uma vez

// Definindo as funções do controlador

const getAllTreinadores = async (req, res) => {
  try {
    const treinadores = await Treinador.findAll();
    res.render("createTreinador.ejs", { treinadores }); // Passar treinadores para o EJS
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar treinadores." });
  }
};

const createTreinador = async (req, res) => {
  const { nome, nivel } = req.body;
  try {
    await Treinador.create({ nome, nivel });
    res.redirect("/treinadores");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar treinador." });
  }
};

const deleteTreinador = async (req, res) => {
  const { id } = req.params;
  try {
    const treinador = await Treinador.findByPk(id);
    if (!treinador) {
      return res.status(404).json({ error: "Treinador não encontrado." });
    }
    await treinador.destroy();
    res.redirect("/treinadores");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar treinador." });
  }
};

const getTreinadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const treinador = await Treinador.findByPk(id);
    if (!treinador) {
      return res.status(404).json({ error: "Treinador não encontrado." });
    }
    res.render("treinador.ejs", { treinador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar treinador." });
  }
};

// Exportando as funções corretamente
module.exports = {
    getAllTreinadores,
    createTreinador,
    deleteTreinador,
    getTreinadorById
};
