const main = document.querySelector('main.container');

const subtitle = document.querySelector('h2.subtitulo')
const linkMovies = document.getElementById('link-movies');
//const linkMovies = document.querySelector('#link-movies');
// capturar todos los parrafos que estan dentro de la seccion informacion 
const p = document.querySelectorAll('section.informacion > p');

const userName = prompt('Ingresa tu nombre')


//let userText = userName ? userName : 'Invitado';   otra opcion


let userText = 'Invitado';
if (userName) {
    userText = userName;
}
subtitle.textContent +=  ' ' + userText;

subtitle.style.textTransform = 'uppercase';