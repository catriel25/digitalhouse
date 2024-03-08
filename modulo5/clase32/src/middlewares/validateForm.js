const {check, validationResult, body} = require('express-validator');

const validateForm = [
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('email', 'El email es requerido').notEmpty(),
    check('edad', 'La edad debe ser un número').isNumeric(),
];

module.exports =validateForm;

