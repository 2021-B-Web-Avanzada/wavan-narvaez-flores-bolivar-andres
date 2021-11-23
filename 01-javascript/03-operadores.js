//03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COM PARAMETROS
//FIND
//devolver una expresion -> Trusty Falsy
//devuelve el primero que cumple esa condición
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian"; //EXPRESION
        }
    );
console.log('respuestaFind', respuestaFind);
//FINDINDEX
//enviamos una expresion -> Trusty Falsy
//devuelve el primero que cumpla esa condición
const respuestaIndex = arreglo
    .findIndex(
        function(valorActual, indiceActual, arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); //indice -> 6 // No encuentra -> -1

//foreach
//itera el arreglo
const  respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach);

//MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);
//FILTER(filtrar el arreglo)
//enviamos EXPRESION TRUSTY FALSY
//devuelve los elementos que cumplen esa condición
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo',arreglo);

//SOME -> expresion
//DEVUELVE BOOLEANO
//Hay alguna nota menor a nueve? SI NO
//OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//EVERY -> expresion
//DEVUELVE BOOLEANO
//Todas las notas son menores a 14? SI NO
//AND
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);