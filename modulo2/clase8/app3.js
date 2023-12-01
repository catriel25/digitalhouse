function encontrarNumero(array, numero){
    for (let i = 0; i < array.length; i++){
        if(array[i] == numero){
            return "El número " + numero + " si existe en el array";
        }
    return "El valor solicitado no existe";
    }
}

let array1 = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

function trompito(array, vueltas){
    if ( vueltas < 2){
        return "Numero de vueltas invalido";
    }

    let randomNumber = Math.floor(Math.random() * vueltas)
    return array[randomNumber];

}

console.log(trompito(array1, 6));

