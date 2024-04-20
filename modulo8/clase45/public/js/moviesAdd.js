window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let boton = document.querySelector('.botonAgregar');
    let title =document.querySelector('#titulo');

    title.addEventListener('keypress', (event) =>{
        let estadoSecreto = 0;
        
        if (event.key == 's'){
            estadoSecreto =1;
            
        }
        if (event.key == 'e' && estadoSecreto == 1){
            estadoSecreto =2;
            
        }

        if (event.key == 'c' && estadoSecreto == 2){
            estadoSecreto =3;
            
        }
        if (event.key == 'r' && estadoSecreto == 3){
            estadoSecreto = 4;
            
        }
        if (event.key == 'e' && estadoSecreto == 4){
            estadoSecreto = 5;
            
        }
        if (event.key == 't' && estadoSecreto == 5){
            estadoSecreto  = 6;
            
        }
        if (event.key == 'o' && estadoSecreto == 6){
            alert('SECRETO MAGICO');
            
        }
        else{
            estadoSecreto = 0;
        }
    })


    boton.addEventListener('mouseover', () =>{
        boton.style.backgroundColor = 'red'
    })
    boton.addEventListener('mouseout', () =>{
        boton.style.backgroundColor = 'green'
    })
    


    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    



}