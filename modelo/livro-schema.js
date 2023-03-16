const banco = require("../modelo/conexao");

const LivroSchema = new banco.Schema({
  _id: {
    type: banco.Schema.Types.ObjectId 
  },

  titulo: {
    type: String
  },

  codEditora: {
    typr: Number
  },

  resumo: {
   type: String
  },

  autores: {
   type: [String]
  }
});

const Livro = banco.model("Livro", LivroSchema);

module.exports = Livro;

