let numero1 = 8;
let numero2 = 4;
let operacion = "/";

switch (operacion){
    //suma
    case "+":
        console.log(`El resultado de ${numero1} ${operacion} ${numero2} es = ${numero1 + numero2}`);
        break

    //resta
    case "-":
        console.log(`El resultado de ${numero1} ${operacion} ${numero2} es = ${numero1 - numero2}`);
        break

    //multiplicacion
    case "*":
        console.log(`El resultado de ${numero1} ${operacion} ${numero2} es = ${numero1 * numero2}`);
        break

    //division
    case "/":
        console.log(`El resultado de ${numero1} ${operacion} ${numero2} es = ${numero1 / numero2}`);
        break

    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")
}