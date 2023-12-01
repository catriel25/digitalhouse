let operacionesBancarias =[100, -200, 500, -100, 150, 600, 70];

function callback(operaciones){
    let saldoDepositos = 0;
    let saldosRetiros = 0;
    let saldoActual = 0;
    for(let i = 0; i < operaciones.length; i++){
        saldoActual += operaciones[i];
        if (operaciones[i] > 0){
            saldoDepositos += operaciones[i];
        }
        else{
            saldosRetiros -= operaciones[i];
        }
    }
    return [saldoDepositos, saldosRetiros, saldoActual];
    
}


function saldos(nombre, apellido, operaciones, callback){
    let saldo = callback(operaciones);
    return "Hola " + nombre + " " + apellido + " el total de tus depositos es de $" + saldo[0] + ", el total de tus retiros $" + saldo[1] + " y el saldo actual de tu cuenta $" + saldo[2]
}

resultado = saldos("Catriel", "Conde", operacionesBancarias, callback);

console.log(resultado);