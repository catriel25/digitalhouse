const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const validateForm = require('../middlewares/validateForm');

router.get('/', mainController.index)
router.post('/', validateForm, mainController.mensaje)



module.exports = router;