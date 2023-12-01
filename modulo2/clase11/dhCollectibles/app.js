const importar = require("./collectibles.js");

let hotToys = importar("Hot Toys");

let bandai = importar("Bandai");

let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


let collectibles = {
    figuras: unifiedCollectibles,
    listFigures : function(){
        this.figuras.forEach(function(elemento){
            console.log(elemento);
            
        });
    },
    figuresByBrand : function(marca){
        return this.figuras.filter(function(figura){
        return figura.marca == marca
        
        })
        
    }
}

collectibles.listFigures();
let asd = collectibles.figuresByBrand("Star Wars");

console.log(asd);
