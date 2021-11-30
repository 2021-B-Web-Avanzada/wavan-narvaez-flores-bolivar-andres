//08-promesas.js

const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (
            resolve, // return
            reject   //throw
        ) => {
            if(numero % 2 == 0){
                resolve(numero); //return numero -> resolve() : return undefined
            }else {
                reject('No es par xd'); //Throw 'No es par xd'
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevaralCuadrado(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}

promesaEsPar(5)
    .then(
        (datosPromesa) =>{
            console.log(datosPromesa);
            return promesaElevaralCuadrado(datosPromesa);
        }
    )    //try
    .then(
        (datosElevarAlCuadrado)=>{
            console.log(datosElevarAlCuadrado);
        }
    )
    .catch(
        (error) => {
            console.log(error)
        }
    )   //catch
    .finally() //finally