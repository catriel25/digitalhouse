let fs = require("fs");

function importar(marca){
    switch(marca){
        case "Hot Toys":
            marca = "figuras1";
            break
        
        case "Bandai":
            marca = "figuras2";
            break
        
        case "Star Wars":
            marca = "figuras3";
            break
        default:
            return console.log("Marca no encontrada!");
            
    }
    let rutaArchivo = "./datos/" + marca + ".json";
    let collectiblesJSON = fs.readFileSync(rutaArchivo, "utf-8");
    let collectiblesArray = JSON.parse(collectiblesJSON);
    return collectiblesArray;
}


module.exports = importar;

