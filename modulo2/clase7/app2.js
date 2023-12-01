

function multiplicar(){
    console.log("Tabla de multiplicar\n--------------------");
    for (let i = 1; i < 11; i++){
        console.log("--------------")
        console.log(`Tabla del ${i}`);
        console.log("--------------")
        for(let j = 1; j < 11; j++){
            console.log(i +" * "+ j + " = " + j*i);
        }



    }
    console.log("--------------------");
}

multiplicar();