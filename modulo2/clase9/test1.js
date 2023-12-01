const { isUtf8 } = require('node:buffer');
const user = require('./test.js');
const fs = require('node:fs');


let exist = fs.existsSync('./prueba.txt');

let msg = "Hola mundo desde msg";

fs.writeFileSync('prueba.txt', msg);

let read = fs.readFileSync('./prueba.txt', 'utf-8');

console.log(read);
