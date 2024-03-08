const path = require('path');

let controller = {
    home : function(req, res){
        res.sendFile(path.join(__dirname, '../views/home.html'));
    }
}


module.exports = controller;