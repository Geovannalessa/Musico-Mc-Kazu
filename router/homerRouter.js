const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

router.get('/', homeController.mostraHome);

module.exports = router;