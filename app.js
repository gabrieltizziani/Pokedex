const express = require("express");
const bodyParser = require("body-parser");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./view");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
