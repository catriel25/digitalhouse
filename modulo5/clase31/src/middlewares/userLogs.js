const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, '../logs', 'userLogs.txt');

function logsMiddleware (req, res , next){
    fs.appendFileSync(pathFile, `El usuario ingresó a la ruta: ${ req.url }
    `);

    next();

}

module.exports = logsMiddleware;