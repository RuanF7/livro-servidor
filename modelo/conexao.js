const { default: mongoose } = require("livraria");


const BancoSchema = new mongoose.Schema({

  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true
  
  }
})


const Banco = mongoose.model("Banco", BancoSchema);

module.exports = Banco;
