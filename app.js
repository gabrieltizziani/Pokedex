const express = require("express");
const { sequelize } = require("./models");
const treinadorRoutes = require("./routes/treinadorRoutes");
const path = require("path");
const methodOverride = require("method-override");
const pokemonRoutes = require("./routes/pokemonRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(methodOverride("_method")); // Middleware para usar PUT/DELETE no formulário

// Middleware para dados JSON e formulário
app.use(express.json()); // Para JSON
app.use(express.urlencoded({ extended: true })); // Para dados de formulário

// Configuração do EJS e views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.use("/treinadores", treinadorRoutes);
app.use("/pokemons", pokemonRoutes);

// Rota inicial
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Sincronização com o banco e inicialização do servidor
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Erro ao sincronizar com o banco de dados:", error);
  });
