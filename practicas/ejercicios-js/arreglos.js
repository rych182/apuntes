/*-Hacer varios ejercicios de arrgelos
-Deben de contener: strings, numbers, booleans, arrays y funciones
-Después vemos como las muestras o ejecutas pero ve haciendolas
-Ten un archivo de practica donde las puedas ver todas y ten un archivo donde solo codies como con los ejercicios de php

La deestruccturacion de objetos y arreglos se usan mucho en frameworks y librerias

Nota: Es muy raro tener 3 niveles de arrays
*/

/*













Ejercicio 25
Hacer una función que cree un objeto
let crearObjeto = (nombre, edad) => {
    return {
        name: nombre,
        age: edad
    };
}
console.log(crearObjeto("Ric", 33));

Ejercicio 26
Resumir el codigo del ejercicio 26
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad
    };
}
console.log(crearObjeto("Ric", 33));

EJERCICIO 27
Agregar una funcion dentro del objeto del ejercicio 26 y ejecutarla
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        imprimir: () => {
            return `My name is ${nombre} y tengo ${edad}`;
        }
    };
}
console.log(crearObjeto("Ric", 33).imprimir());

Ejercicio 28
Resumir la función dentro del objeto del ejercicio 27
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        imprimir() {
            return `My name is ${nombre} y tengo ${edad}`;
        }
    };
}
console.log(crearObjeto("Ric", 33).imprimir());

Ejercicio 29
Imprimir los objetos dentro de un array usando For
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

EJERCICIO 30
Imprimir los objetos dentro del array con for pero imprimiendo nombre y modelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + ' del año ' + autos[i].anio);
}

EJERCICIO 31
Hacer el ejercicio 30 pero imprimiendo con interpolacion
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} del año ${autos[i].anio}`);
}

Ejercicio 32
Agregaga un objeto a un array const e imprimelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos.push({ modelo: "Mercedez Benz", anio: 2016 });
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + 'del año' + autos[i].anio);
}

EJERCICIO 33
Modifica objeto dentro de un array const desde afuera(es la unica manera en la que se puede).
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos[1].modelo = "Mercedez Benz";
console.log(autos[1].modelo);

*/