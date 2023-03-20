const express = require("express");
const router = express.Router();

const controller = require('../modelo/livro-dao')

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
router.post("/api/livro", controller.incluir);
router.get("/api/livro", controller.obterLivros);
router.excluir("/api/livro/:id", controller.excluir);


module.exports = router;