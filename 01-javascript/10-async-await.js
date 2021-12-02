//10-async-await.js

const promesaLeerArchivo = () => {
    return new Promise(
        (resolve, reject) => {
            resolve('CONTENIDO LEER ARCHIVO');
            //rej('error');
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (resolve, reject) => {
            resolve('CONTENIDO ESCRIBIR ARCHIVO');
            //rej('error');
        }
    );
}

//SYNC AWAIT
//1) Metodos de clases
//2) Función
//No es posible porque no está dentro de una funcion
//const respuesta = await promesa;

const ejemplo1 = async function (){}
const ejemplo2 = async () => {}
async function ejercicio(){
    console.log('1');
    let nuevoContenido = '';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch (error){
        console.error(error);
        //throw new Error();
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}


ejercicio()
    .then(
        (data)=>{
            console.log('esta es la respuesta de async', data);
        }
    )
    .catch()
    .finally();