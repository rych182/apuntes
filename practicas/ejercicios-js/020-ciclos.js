/*

Aprender condiciones y bucles antes que funciones en JavaScript puede ser beneficioso para evitar confusiones porque
son conceptos más simples y fundamentales en la programación en general.

Las condiciones y bucles se utilizan ampliamente en la programación, independientemente del lenguaje,
por lo que es importante comprenderlos bien. Por ejemplo, el uso del condicional "if" y del bucle "for" es común 
en muchos programas y proyectos.

Por otro lado, aunque las funciones son una parte fundamental de la programación,
a veces pueden ser más abstractas y complicadas de entender para alguien que recién está empezando. 
Las funciones pueden involucrar conceptos como ámbito de variables, retorno de valores y parámetros, 
que pueden ser difíciles de comprender sin una base sólida en los conceptos más básicos como las condiciones y bucles.

Ejercicio 1
Imprimir los objetos dentro de un array usando For
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

EJERCICIO 2
Imprimir los objetos dentro del array con for pero imprimiendo nombre y modelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + ' del año ' + autos[i].anio);
}


EJERCICIO 3
Hacer el ejercicio 30 pero imprimiendo con interpolacion
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} del año ${autos[i].anio}`);
}


Ejercicio 4
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


*/