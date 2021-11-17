//TIPOS DE VARIABLES
//Mutables e Inmutables
//Mutables --> Pueden ser reasignadas
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

//Inmutables --> No pueden ser reasignadas
const configuracionArchivos = "PDF";
    //configuracionArchivos = "XML"
    //Vamos a preferir CONST > LET> NUNCA VAR!

//Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Andrex"; //string
const apellido = "Narvaez"; //string
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //underfined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); //number
console.log(Number("asd")); //NaN

//Trust y False
if(""){
    console.log("String vacio es verdadero");
}else {
    console.log("String vacio es Falsy");
}

if("Adrian"){
    console.log("Negativo es Trusty");
}else {
    console.log("Negativo es falso");
}

if(-1){
    console.log("Positivo es Trusty");
}else {
    console.log("Negativo es falso")//;
}

if(0){
    console.log("Negativo es Trust")//;
}else {
    console.log("Positivo es Falsy");
}

if(null){
    console.log("Null es Trusty");
}else {
    console.log("Null es Falso")//;
}

if(undefined){
    console.log("Underfined es Trusty");
}else {
    console.log("Underfined es Falso")//;
}
//Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

const andrex = {
    nombre: "Andres", // llave: valor,
    false: 'Narvaez',
    edad: 24,
    hijos: null,
    zapatos: underfined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: '40',
    },
    mascotas: ['Kira', 'Coby', 'Matt'],
};