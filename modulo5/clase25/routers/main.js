const express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.home);

module.exports = router;