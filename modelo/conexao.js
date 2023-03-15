const banco = require("mongoose");


banco.connect("mongodb://localhost:27017", {
  option: {
    useNewUrlParser: true,
    useUnifieldTopology: true,
  }
  
})
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

  banco.Promise = global.Promise;

  module.exports = banco;




/*banco.on('error', (error) => console.log(error));
banco.once('open', () => console.log('📦 Connected to the database!'))*/
