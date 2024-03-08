const express = require('express');
const app = express();
const {check, validationResult, body} = require('express-validator');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');


app.listen(3000, () => console.log('server running'));

app.use(express.static('../public'));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.post('/', [
    check('nombre').notEmpty().withMessage('el nombre es requerido'),
    check('colores', 'el nombre es requerido').notEmpty(),
    check('email', 'el nombre es requerido').notEmpty(),
    check('edad', 'el nombre es requerido').isNumeric()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, email, edad, color } = req.body;

    res.json({
        nombreUsuario: nombre,
        colorSelecionado: color,
        emailUsuario: email,
        edadUsuario: edad,
   });
});

app.use('/', mainRoutes);