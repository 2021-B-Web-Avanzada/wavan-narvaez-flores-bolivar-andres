//06-callbacks.js
const fs = require('fs'); //file system
console.log('PRIMERO');
/*
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);
console.log('TERCERO')*/

fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        if(error){
            console.error({mensaje:'Error de contenido', error:error});
        }else {
            console.log(contenido);
        }
    }
);
console.log('TERCERO')