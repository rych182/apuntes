let nombre = "ric";
let edad = 33;

const persona = {
    nombre,
    edad,
    frase() {
        console.log("Eres un crack!");
    }
}

console.log(persona.edad);

/**
Ejercicio 1: Imprimir con template strings
let name = "Ricardo";
let age = 33;
let country = "Mexico";
console.log(`My name is ${name} I am ${age} and I am from ${country}`);


EJERCICIO 2: Declarar constantes e imprimirlas
const caja = 21;
console.log(caja);


EJERCICIO 3: declara un array e imprimelo
let cadena = ["Mexico", "USA", "Canada"];
console.log(cadena);

***EJERCICIO 4: declara un objeto e imprimelo
let unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
console.log(unPinshiObjeto);

EJERCICIO 5: agrega datos a un array usando la funcion PUSH
let cadena = ["Mexico", "USA", "Canada"];
cadena.push("Greenland");
console.log(cadena);

EJERCICIO 6: Agrega datos a un array constante
const cadena = ["Mexico", "USA", "Canada"];
cadena.push("Greenland");
console.log(cadena);

***EJERCICIO 7: Agrega datos a una constante objeto
const unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
unPinshiObjeto.correo = "correo@correo.com";
console.log(unPinshiObjeto);

***Ejercicio 8: Agregar datos a un objeto desde una variable
let nombre = "ric";
let edad = 33;

const persona = {
    nombre: nombre,
    edad: edad,
    frase: function() {
        console.log("Eres un crack!");
    }
}
console.log(persona.edad);


***Ejercicio 9: Resumir la escritura del ejercicio anterior

let nombre = "ric";
let edad = 33;

const persona = {
    nombre,
    edad,
    frase() {
        console.log("Eres un crack!");
    }
}

console.log(persona.nombre);
persona.frase();

*/