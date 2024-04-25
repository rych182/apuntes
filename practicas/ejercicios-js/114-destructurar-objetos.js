/*
//el destructuring ademas de extraer el valor, crea la variable
//JON MIRCHA: LISTO

Ejemplo 1: Destructuración de objetos
const obj = { a: 3, b: 4 };
const { a, b } = obj;
console.log(a); // output: 1
console.log(b); // output: 2

Ejemplo 2: establecer un valor predeterminado de 0 (si "a" no tuviera un valor)
const obj = { a: 1 };
const { a = 0 } = obj;
console.log(a); // output: 1

Ejemplo 3: estableciendo "varios" valores "predeterminados"
const obj = { a: 1, b: 2 };
const { a = 0, b = 0, c = 0, d = 0 } = obj;
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 0
console.log(d); // output: 0

Ejercicio 1: Deestructurar objeto e imprimiendo con una función
let usuario = {
    nombre: 'Ric',
    apellido: 'gARRido',
    edad: 33,
    pais: 'mexaland',
    profesion: 'developer'
}
let { nombre, apellido, profesion } = usuario;

let imprimir = ({ nombre, profesion }) => {
    console.log(`Mi nombres es ${nombre} y soy ${profesion}`);
}
imprimir(usuario);


EJERCICIO 33
Modifica objeto dentro de un array const desde afuera(es la unica manera en la que se puede).
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos[1].modelo = "Mercedez Benz";
console.log(autos[1].modelo);


Deestructurar objeto e imprimiendo con una función
let usuario = {
    nombre: 'Ric',
    apellido: 'gARRido',
    edad: 33,
    pais: 'mexaland',
    profesion: 'developer'
}
let { nombre, apellido, profesion } = usuario;

let imprimir = ({ nombre, profesion }) => {
    console.log(`Mi nombres es ${nombre} y soy ${profesion}`);
}
imprimir(usuario);


EJERCICIO 11:  Deestructurar un objeto. Fijarme que el orden de la destructuración no afecta.
let persona = {
    nombre: "Ric",
    apellido: "Garrido",
    edad: 33
}
let { apellido, edad, nombre } = persona;
console.log(nombre, apellido, edad);

Ejercicio 12: explicación rápida del destructuring

//el destructuring ademas de extraer el valor, crea la variable

const producto = {
    nombre: "nomintor",
    precio: 300,
    disponible:true
}
//destructuring
const {nombre, precio,disponible,noExiste}= producto;
console.log(noExiste);

 */