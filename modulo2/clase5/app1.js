function alquilerVehiculo(tipoVehiculo, diasAlquiler, sillaBebe){
    let precio = 0;
    if (tipoVehiculo == "Compacto"){
        precio = 14000;
    }
    else if(tipoVehiculo == "Mediano"){
        precio = 17000;

    }
    else if(tipoVehiculo == "Camioneta"){
        precio = 28000;
    }
    if (sillaBebe == true){
        precio += 1200
    }
    return "Estimado cliente: en base al tipo de vehículo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " días utilizados, el monto total a pagar es de $" + (precio*diasAlquiler);
    
}

console.log(alquilerVehiculo("Camioneta", 2, false));