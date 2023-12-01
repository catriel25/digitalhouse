const peliculas = require("./peliculas");

for (let i = 0; i < peliculas.length; i++){
    console.log(peliculas[i].id);
    console.log(peliculas[i].rating);
    console.log(peliculas[i].awards);
}