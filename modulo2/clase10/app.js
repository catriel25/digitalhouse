let bicicletasArray = require("./datosBici.js");



let dhBici = {

    bicicletas : bicicletasArray,

    buscarBici: function (id) {
        let bicicletasEncontradas = this.bicicletas.filter(function(bici) {
            return bici.id === id
            })
    }
}

console.log(dhBici.buscarBici(3));