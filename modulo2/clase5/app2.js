function pedido(tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precio = 0;
    switch(tipoDeHamburguesa){
        case "Carne a la parrilla":
            precio += 1800;
            break;
        case "Pollo":
            precio += 1500;
            break;
        case "Vegetariana":
            precio += 1200;
            break            
    }
    if(jamon == true){
        precio += 30;
    }
    if(queso == true){
        precio += 25;
    }
    if(salsaTomate== true){
        precio += 5;
    }
    if(mayonesa== true){
        precio += 5;
    }
    if(mostaza== true){
        precio += 5;
    }
    if(tomate== true){
        precio += 15;
    }
    if(lechuga== true){
        precio += 10;
    }
    if(cebolla== true){
        precio += 10;
    }
    return precio;
}
total = pedido
function mensaje(nombre, apellido, miPedido, tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    
    miPedido = pedido(tipoDeHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

    return "Estimado " + nombre + " " + apellido + ", el monto total a pagar es de : $" + miPedido;
}

console.log(mensaje("Catriel", "Conde", pedido, "Carne a la parrilla", true));