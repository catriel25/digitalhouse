let gradHtml5 = "30 45 25 34 18 23 16 50 72 70";
let gradCss3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let gradJavascript = "70 65 58 45 23 57 34 17 72";
let gradNodejs = "45 56 73 34 65 72 70 32";

gradHtml5 = gradHtml5.split(" ");
gradCss3 = gradCss3.split(" ");
gradJavascript = gradJavascript.split(" ");
gradNodejs = gradNodejs.split(" ");


function promedio(array1, array2, array3, array4, numero){
    let cursoElegido;
    switch(numero){
        case 1:
            cursoElegido = array1;
            break
        case 2:
            cursoElegido = array2;
            break
        case 3:
            cursoElegido = array3;
            break
        case 4:
            cursoElegido = array4;
            break
        default:
            return "Debes elegir un numero del 1 al 4"
        
    
    }
    let total = 0;
    for (let i = 0; i < cursoElegido.length; i++){
        total += parseInt(cursoElegido[i]);
    }

    total = (total/cursoElegido.length);
    return total;
    
}

resultado = promedio(gradHtml5, gradCss3, gradJavascript, gradNodejs, 3);

console.log(resultado)