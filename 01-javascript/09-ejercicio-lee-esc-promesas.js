const fs = require('fs');
//09-ejercicio-lee-esc-promesas.js
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La función debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODO esto debe ser realizado con promesas
- Promesa de lectura
- Promesa de escritura
 */

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const promesaEscribir = new Promise(
        (resolve, reject) => {
            nuevoContenido = contenidoActual + "\n" + nuevoContenido;
            fs.writeFile(
                path,
                nuevoContenido,
                "utf-8",
                () => {
                    console.log({nuevoContenido});
                    resolve(nuevoContenido);    //return numero
                }
            );
        }
    )
    return promesaEscribir
}

function promesaLeerArchivo(path){
    const promesaLeer = new Promise(
        (resolve, reject) => {
            fs.readFile(path,
                'utf-8',
                (error, contenido) => {
                    console.log(contenido);
                    resolve(contenido);
                })
        }
    )
    return promesaLeer
}
function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then(
            (datosLeidos) =>{
                return promesaEscribirArchivo(path, datosLeidos, nuevoContenido);
            }
        )
}
ejercicio('./06-ejemplo.txt', 'Buenas mañanas xddddd')