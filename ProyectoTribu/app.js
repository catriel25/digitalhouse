const express = require("express");
const app = express();
const path = require("path");


app.listen(3030, () => console.log(`Server up: http://localhost:3030`));

app.use(express.static('public'));


let asd = function(ruta, archivo){
    app.get(ruta, function(req, res){
        htmlPath = path.join(__dirname, "/views", archivo);
        res.sendFile(htmlPath);
    })
}
asd('/', 'index.html');

asd('/egresos', 'egresos.html');