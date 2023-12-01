let fs = require("fs");
let rutaArchivo = "./bicicletas.json";
let personasJSON = fs.readFileSync(rutaArchivo, "utf-8");

let bicicletasArray = JSON.parse(personasJSON);


module.exports = bicicletasArray;