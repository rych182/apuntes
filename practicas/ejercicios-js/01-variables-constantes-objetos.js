let nombre = "ric";
let edad = 34;
const lastName = 'Garrido';
let mascotas = ['Perro', 'Gato', 'Pez', true];
mascotas.push('Perico');
let persona = {
    nacionalidad: 'Mexicana',
    edad: 35,
    sexo: 'Masculíno',
    mascotas: ['Gallina', 'Conejo']
}
persona.correo = "correo@correo.com";
mascotas.push('Tortuga', 'Iguana');
console.log(`MY name is ${nombre} ${lastName}, my age is ${persona.edad}. I have a ${mascotas[3]}, my email is ${persona.correo} and I want to buy a ${persona.mascotas[0]} and ${persona.mascotas[1]}`);
let resultado = nombre + edad;
console.log(typeof(resultado));



/**
Ejercicio 1: Imprimir con template strings
let name = "Ricardo";
let age = 33;
let country = "Mexico";
console.log(`My name is ${name} I am ${age} and I am from ${country}`);

Ejercicio 1.01:  Explicar orden de ejecucion de JS

EJERCICIO 2: Declarar constantes e imprimirlas
const caja = 21;
console.log(caja);


EJERCICIO 3: declara un array e imprimelo
let cadena = ["Mexico", "USA", "Canada"];
console.log(cadena);



*/