let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"];
console.log(peliculas);

function masVendida(listaPeliculas, pelicula){
    let backup = peliculas.pop(pelicula);
    backup = backup.toUpperCase();
    listaPeliculas.unshift(backup);
    return listaPeliculas;
}

peliculas = masVendida(peliculas, "Thor: amor y trueno");

console.log(peliculas);

let estrenos = "Counter-Strike, NOP, Vértigo, Nick, Avatar"

estrenos = estrenos.split(", ");

estrenos.shift()

function juntar (lista1, lista2){
    return lista1.concat(lista2);
}

peliculas = juntar (peliculas, estrenos);

console.log(peliculas);