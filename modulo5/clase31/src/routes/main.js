const express = require ('express');
const router = express.Router();
const userAdmin = require('../middlewares/userAdmin');

router.get('/', (req, res) =>{
    res.render('index.ejs')
})

router.get('/admin', userAdmin, (req, res) =>{
    res.render('index.ejs')
})

module.exports = router;