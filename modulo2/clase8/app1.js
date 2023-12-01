let cursoPrecios = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

let cursos = ["HTML5", "JAVASCRIPT", "REACT"];

function callback(multidimensional, unidimensional){
    let total = 0;
    for (let i = 0; i < unidimensional.length; i++){
        for(let j =0; j < multidimensional.length; j++){
            if (unidimensional[i].toLowerCase() == multidimensional[j][0]){
                total += multidimensional[j][1];
            }
        }
    }
    return total;
}


function mensaje(nombre, apellido, multidimensional, unidimensional, callback){
    let total = callback(multidimensional, unidimensional);
    return "El total a pagar por " + nombre + " " + apellido + " es de: $" + total;
}

console.log(mensaje("Catriel", "Conde", cursoPrecios, cursos, callback));