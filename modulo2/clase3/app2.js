let nombre = "Catriel";

let apellido = "Conde";

let sueldoActual = 70000000;

let porcentajeAumento = 0.25;

let calculoAumento = (sueldoActual * porcentajeAumento);

let nuevoSueldo = (sueldoActual * (1 + porcentajeAumento));

console.log("Hola estimad@ " + nombre + " " + apellido + "\n" +
"En base a su sueldo actual:\n" +
"$" + sueldoActual +"\n" +
"Ha recibido un aumento del 25%:\n" + 
"$" + calculoAumento + "\n" +
"y su nuevo sueldo es de: $" + nuevoSueldo);
