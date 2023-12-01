let electrodomesticos = ["Heladera", "Lavarropas", "Televisor", "Caloventor", "Microondas", "Aspiradora"];

console.log(electrodomesticos[2]);

let backup = electrodomesticos.pop();

electrodomesticos.unshift(backup);

console.log(electrodomesticos);

electrodomesticos.push("Licuadora", "Notebook");

console.log(electrodomesticos.length);

function buscarElectrodomestico (electrodomestico){
    if (electrodomesticos.indexOf(electrodomestico) != -1){
        console.log("Producto encontrado");
    }
    else{
        console.log("El producto buscado no existe");
    }
}

buscarElectrodomestico("Heladera");

electrodomesticos = electrodomesticos.join(" ");

console.log(electrodomesticos);

electrodomesticos = electrodomesticos.replace("Microondas", "Xbox");

console.log(electrodomesticos);

electrodomesticos = electrodomesticos.split(" ");
console.log(electrodomesticos);

