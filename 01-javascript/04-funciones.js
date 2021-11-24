//04-funciones.js

function soloNumeros(a, b, c){
    return a - b + c //valor a devolver
}
//JS permite el uso de funciones sin validaciones
/*soloNumeros('v', true, [1, 2, 3]);
soloNumeros((a)=>a, true, [1, 2, 3]);*/

function soloLetras(a, b, c){
    return a - b + c //valor a devolver
}
//Funciones nombradas
function funcionNombrada(){

}
//funciones anonimas
const funcionSinNombre = function(){};
var funcionSinNombre1 = function(){};
let funcionSinNombre2 = function(){};
[].forEach(function (){})
funcionSinNombre()
funcionSinNombre1()
funcionSinNombre2()
//Funciones anonimas - Fat Arrow Function
const funcionFatArrow = () => {};
var funcionFatArrow1 = () => {};
let funcionFatArrow2 = () => {};
[].forEach(() => {})
funcionFatArrow()
funcionFatArrow1()
funcionFatArrow2()

const funcionFatArrow3 = () => {};
const funcionFatArrow4 = (x) => {
    return x + 1;
};
const funcionFatArrow5 = (x) => x + 1; //fatarrow4y5 son lo mismo

const funcionFatArrow = x => x + 1; //si solo tenemos 1 parametro podemos omitir los parentesis
//funcion para recibir parametros infinitos ...
//solo se puede tener una de estas por funcion
function sumarNum(...otrosNumeros){
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) =>{
            total = total + valorActual;
        }
    );
    return total;
}
sumarNum(1,2,3,4,5,6,7,8,9,10,11,12,13)