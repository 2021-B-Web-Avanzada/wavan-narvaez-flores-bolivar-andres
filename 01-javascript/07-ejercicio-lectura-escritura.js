const fs = require('fs');

/* Hacer una funcion que acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido del
archivo, la funcion debe tener estos dos parametros y leer el
archivo y añadir el texto al final del archivo
 */

function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path, "utf-8",
        (errorLectura, contenido) => {
            if(errorLectura)
                console.error({mensjae: 'error de lectura', error: errorLectura});
            else {
                fs.writeFile(
                    path,
                    contenido + "\n" + contenidoNuevo,
                    "utf-8",
                    (errorEscritura) => {
                        if(errorEscritura)
                            console.error({mensjae: 'error de lectura', error: errorEscritura});
                    }
                );
            }
        }
    );
}

escribirArchivo(
    './06-ejemplo.txt',
    'Buenas Tardes'

);