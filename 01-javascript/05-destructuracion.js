//05-destructuracion,js
const andrex = {
    nombre: "Andrex"
};
const carolina = {
    nombre: "Carolina",
    apellido: "Narvaez"
};
const carolinaAndrex = {
    ...carolina,    //el orden el importante para propiedades que se repiten
    ...andrex       //el ultimo reemplaza a los demas
};
console.log('carolinaAndrex', carolinaAndrex);

//Destructuracion de arreglos
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arreglo1, //el orden importa
    ...arreglo2
];
console.log('superArreglo', superArreglo)
console.log(...superArreglo)//se puede usar en funciones
