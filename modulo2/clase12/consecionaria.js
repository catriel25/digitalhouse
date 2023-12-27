let autosImportados = require("./autos.js");

const concesionaria = {
   
   autos: autosImportados,
   buscarAuto: function(patente){
    let autoEncontrado = this.autos.find(function(auto){
        return auto.patente === patente;
    })
    if (autoEncontrado === undefined){
        return null;
    }
    return autoEncontrado;
   },
   venderAuto : function(patente){
    let autoParaLaVenta = this.buscarAuto(patente)
    if (autoParaLaVenta !== null){
        autoParaLaVenta.vendido = true;
        return autoParaLaVenta;

    }
    
   },
   autosParaLaVenta : function(){
    let autosParaVender = this.autos.filter(function(auto){
        return auto.vendido == false;
    })
    return autosParaVender;
   },
   autosNuevos : function(){
    let autosEncontrados = this.autosParaLaVenta().filter(function(auto){
        return auto.km < 100;

    })
    return autosEncontrados;
   },
   listaDeVentas : function(){
    let listaPrecios = [];
    for (let i = 0; i < this.autos.length; i++){
        if (this.autos[i].vendido == true){
            listaPrecios.push(this.autos[i].precio);
        }

    }
    return listaPrecios;
   },
   totalDeVentas : function(){
    let total = this.listaDeVentas();
    total = total.reduce(function(acumulador, precio){
        return acumulador + precio;

    })
    return total;
   },

   puedeComprar: function(auto, persona){
    let costoTotal = auto.precio;
    let costoCuotas = auto.precio/auto.cuotas;
    if (costoTotal <= persona.capacidadDePagoTotal && costoCuotas <= persona.capacidadDePagoEnCuotas){
        return true;
    }
    else{
        return false;
    }
   },
   autosQuePuedeComprar: function (persona) {
    let autosDisponibles = this.autosParaLaVenta();
    return autosDisponibles.filter((auto) => this.puedeComprar(auto, persona))
   }
}


let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 1000000
};

console.log(concesionaria.autosQuePuedeComprar(persona));
