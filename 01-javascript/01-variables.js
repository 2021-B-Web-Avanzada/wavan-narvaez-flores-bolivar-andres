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
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: '40',
    },
    mascotas: ['Kira', 'Coby', 'Matt'],
};
//Acceder a alas propiedades del objetos
andrex.nombre;
andrex.false;
andrex["nombre"];
console.log(andrex)
andrex.nombre = "Bolivar";
console.log(andrex);
andrex["nombre"] = "Andrex";
andrex.sueldo = 1.2;
console.log(andrex.sueldo);
andrex["gastos"] = 0.8;
console.log(andrex.gastos);
andrex.nombre = undefined;
console.log(andrex);
console.log(Object.keys(andrex));
console.log(Object.values(andrex));
delete andrex.nombre; //eliminar la llave nombre
console.log(andrex);

//Variables por valor o referencia?
//Variables por valor en JS son las primitivas: number, string, boolean
let edadAndrex = 24;
let edadBolo = edadAndrex; // Guardamos una primitiva en otra variable
                            //Variables por valor
console.log(edadAndrex);
console.log(edadBolo);
edadAndrex = edadAndrex + 1;
console.log(edadAndrex);
console.log(edadBolo);

//Variables por referencia: object ({},[])
/*let bolivar = {
    nombre: "Bolivar"
};
let alejo = bolivar;
console.log(bolivar);
console.log(alejo);
alejo.nombre = "Alejo";
console.log(bolivar);
console.log(alejo);

delete bolivar.nombre;
console.log(bolivar);
console.log(alejo);*/
let bolivar = {
    nombre: "Bolivar"
};
let alejo = Object.assign({}, bolivar);
console.log(bolivar);
console.log(alejo);
alejo.nombre = "Alejo";
delete bolivar.nombre;
console.log(bolivar);
console.log(alejo);

let arregloNum = [1, 2, 3, 4, 5];
let arregloClonado = Object.assign([], arregloNum);
console.log(arregloNum);
console.log(arregloClonado);
arregloNum[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNum);
console.log(arregloClonado);