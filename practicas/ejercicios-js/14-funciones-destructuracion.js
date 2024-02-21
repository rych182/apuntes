/*
Ejemplo 1: crea una fnción que recibe un objeto y establece valores predeterminados en caso de que no tenga valores
function miFuncion(objeto) {
    const { a = 1, b = 2, c = 3, d = 4 } = objeto;
    console.log(a, b, c, d);
}

// Probamos la función con un objeto que tiene ambas propiedades
miFuncion({ a: 10, b: 20 }); // output: 10 20

// Probamos la función con un objeto que no tiene la propiedad 'a'
miFuncion({ b: 30 }); // output: 1 30

// Probamos la función con un objeto que no tiene ninguna de las propiedades 'a' ni 'b'
miFuncion({}); // output: 1 2

Ejercicio 2
usando una función,Deestructurar un arreglo, pasando el valor por parametro e imprimir algún dato
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
let imprimir = ([nombre, estadoCivil, edad, pais]) => {
    console.log(edad);
}
imprimir(persona);

TAMBIÉN SE PUEDE HACER ASÍ
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;

let imprimir = (persona) => {
    console.log(profesion);
}
imprimir(persona);

RESUMIENDO
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
let imprimir = (persona) => console.log(profesion);
imprimir(persona);


Ejercicio 3
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


Ejercicio 4
Deestructurar un arreglo y usando solo el dato que quieres usar, usando una función
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;

let imprimir = ([nombre, estadoCivil, edad, pais]) => {
    console.log(edad);
}
imprimir(persona);

TAMBIÉN SE PUEDE HACER ASÍ
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;

let imprimir = (persona) => {
    console.log(profesion);
}
imprimir(persona);

RESUMIENDO
const persona = ['Ricard', , 33, 'Mexico'];
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
let imprimir = (persona) => console.log(profesion);
imprimir(persona);

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

Ejercicio 12
DESCUBRIMIENTO://Fijate en el error, use edad de Ricardo en esta deestructuracion y me puso 33 a pesar de que nunca declare la constante "persona"

const persona = ['Ricard', 33, , 'Mexalandia', "Bar Tender"];
const persona2 = ['Sinue', 30, 'Soltero con PlantaHijos', 'GringoMexicano', 'Profe-conta-trader-economista'];
const persona3 = {
    nombre1: 'Irma',
    edad1: '28',
    apellido: 'Garrido'
}
const [nombre, edad, estadoCivil, pais, profesion = 'dev'] = persona;
const [name, age, civilState, country, job = 'economista'] = persona2;
const { nombre1, apellido, edad1 } = persona3;

//Fijate en el error, use edad de Ricardo en esta deestructuracion y me puso 33 a pesar de que nunca declare la constante "persona"
let imprimir = ({ nombre1, apellido, edad1 }) => console.log(nombre1, apellido, edad);

imprimir(persona3);
*/