const express = require("express");
const router = express.Router();

const obterLivros = require('../modelo/livro-dao')

const services = require("../service/render");

/**
 *  @description Root Route
 *  @method GET /
 */
/*router.get("/", services.homeRoutes);
router.get("/novo_livro", services.novo_livro);
router.get("/atualizar_livro", services.atualizar_livro);
*/
/**
 *  @description API Route
 */
router.post("/api/livro", obterLivros.cadastrar);
router.get("/api/livro", obterLivros.lista);
router.put("/api/livro/:id", obterLivros.update);
router.delete("/api/livro/:id", obterLivros.delete);

module.exports = router;