const { validationResult } = require("express-validator");

let controller = {

    index: function(req, res){
        
        res.render('index',{errors : null});
    },
    mensaje: function(req, res){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('index', { errors: errors.array() });
        }
        const usuario = req.body;

        res.render('index', {
            usuario: usuario
        });

    
}
}

module.exports = controller;