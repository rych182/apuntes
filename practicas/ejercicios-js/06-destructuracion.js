//console.log(profesion, edad, estadoCivil);




/*
Ejercicio 1, explica la deestructuración
const numeros = [1, 2, 3];
//Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

//Con destructuración
const [one, two, three] = numeros;
console.log(three);



Ejercicio 2
Deestructura un arreglo
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais] = persona;
console.log(nombre);

Ejercicio 3
Destructurar un arreglo y ponerle un valor por defecto
const persona = ['Ricard', 33, 'Mexico'];
const [nombre, edad, pais, profesion = "Programador"] = persona;
console.log(profesion);

Ejercicio 4

Deestructurar un arreglo, luego mostrarlo cuando le hace falta un valor al array
const persona = ['Ricard', , 33, 'Mexico']; //dejo un espacio vacio entre el nombre y la edad 
const [nombre, estadoCivil, edad, pais, profesion = "Programador"] = persona;
console.log(nombre, estadoCivil, edad);

Ejercicio 5

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


EJERCICIO 6:  Deestructurar un objeto. Fijarme que el orden de la destructuración no afecta.
let persona = {
    nombre: "Ric",
    apellido: "Garrido",
    edad: 33
}
let { apellido, edad, nombre } = persona;
console.log(nombre, apellido, edad);


Ejercicio 7
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