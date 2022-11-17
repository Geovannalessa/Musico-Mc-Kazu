const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

router.get('/', homeController.mostraHome);
router.get('/login', homeController.mostraApelido);
router.get('/cadastro', homeController.mostraCadastro);
router.get('/entrar', homeController.mostraEntrar);

module.exports = router;