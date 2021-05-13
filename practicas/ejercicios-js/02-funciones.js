//try catch cuando no quieres que se detenga la ejecución de tu programa
//Usalo cuando las funciones no sabes si vayan a tener datos, si llegan vacias, no llenes tu codigo de try catch





/*

Ejercicio 1
Imprimir mi nombre con una función flecha
let nombre = () => {
    console.log("Ricardo");
}
nombre();

EJERCICIO 1.01: Imprimir un valor predefinido
function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar();

EJERCICIO 1.02: Ejemplos de corto circuito OR
function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar(19 || "valor de la derecha");
saludar(true || "valor de la derecha");
saludar({} || "valor de la derecha");
saludar([] || "valor de la derecha");
saludar(false || "valor de la derecha");
saludar(null || "valor de la derecha");
saludar(undefined || "valor de la derecha");
saludar("" || "valor de la derecha");
saludar(-2 || "valor de la derecha");
saludar(0 || "valor de la derecha");

EJERCICIO 1.03: Ejemplos de corto circuito con AND

Ejercicio2
Imprimir mi nombre en una función flecha, asignandole el nombre en los parentesis
let nombre = (nombre1) => {
    console.log(nombre1);
}
nombre("Ricardo");

Ejercicio3
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha
let operacion = (num1, num2) => {
    console.log(num1 + num2);
}

Ejercicio4
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO usando return
let operacion = (num1, num2) => {
    return num1 + num2;
}
console.log(operacion(2, 3));

Ejercicio 5
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO resumiendo la sintaxis
let operacion = (num1, num2) => num1 + num2;
console.log(operacion(2, 3));

Ejercicio 6
Toda función devuelve "UNDIFINED", porque todas las funciones tienen un "return aunque no este escrito"
cuando se tiene una función y no tiene un return "específico", devolverá "undifined"
Demuestra esto
let nombre = (nombre) => {
    console.log(nombre);
    return 1000;
}
const almacen = nombre("Ricardo");
console.log(almacen);

Ejercicio 7
Regresar 2 valores en un return, primero la manera mala y luego la buena
MALA
let nombre = (nombre) => {
    console.log(nombre);
    return 1, 2;
}
const almacen = nombre("Ricardo");
console.log(almacen);

BUENA(volverlo un array)
let nombre = (nombre) => {
    console.log(nombre);
    return [1, 2];
}
const almacen = nombre("Ricardo");
console.log(almacen[0], almacen[1]);

Ejercicio 8
Crea una función con un número aleatorio del 0 al 1, con funciones flechas y resumidas
let numero = () => Math.random();
console.log(numero());

Ejercicio 9 PROTIP
Crear una funcion flecha con "return" que retorne un objeto y luego resume ese objeto
const persona = (nombre, apellido) => {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const caja = persona('Ricardo', 'Garrido');
console.log(caja);

RESUMIDA
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const caja = persona('Ricardo', 'Garrido');
console.log(caja);

Ejercicio 9.1: resumir una función, sin parenteses(solo se puede cuando es una cosa, no 2 como en el ejercicio anterior)
const saludo = texto => {
    console.log(texto);
}
saludo("Hola mundo");

Ejercicio 9.2: resumir una función sin usar "return"
const suma = (a, b) => a + b;
console.log(suma(9, 9));

Ejercicio 9.3: Recorrer array con un .forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((elemento, index) => {
    console.log(`El elemento ${elemento} esta en la posicion ${index}`);
});

Ejercicio 9.4: Resume el codigo de arriba quitandole las llaves
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((elemento, index) => console.log(`El elemento ${elemento} esta en la posicion ${index}`));


Ejercicio 10 PROTIP
Crear una función con parametros REST, el argumento rest no puede llevar nada despues de el, solo antes

let persona = (nombre, ...args) => {
    return [nombre, args];
}
console.log(persona("Ricardo", true, 32, ["Perro", "Canada"]));

Ejercicio 11 PROTIP
Deestructuración: sirve para darle nombres a los valores que tiene un arreglo, en vez de crear una variable por cada posicion del arreglo. Ejemplo
let persona = (...args) => {
    return args;
}

const [nombre, soltero, edad, aficiones] = persona("Ricardo", true, 32, ["Perro", "Canada"]);
console.log(aficiones);

Ejercicio 12 PROTIP
Deestructuración con un objeto RESUMIDO
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre } = persona('Ricardo', 'Garrido');
console.log({ nombre });

Ejercicio 13 PROTIP
Destructuración con un objeto resumido, cambiandole el nombre a la propiedad del objeto
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre: nombreNuevo } = persona('Ricardo', 'Garrido');
console.log({ nombreNuevo });

Ejercicio 14 PROTIP: Reestructuracion de argumentos en un objeto cuando hace falta un valor .
MANERA 1
const persona = {
    nombre: 'Ricardo',
    apellido: 'Garrido',
    //edad: 32,
    hobbies: ['ver series', 'no hace nada']
}

const imprimirPropiedades = ({ nombre, apellido, edad, hobbies }) => {
    edad = edad || 0;
    console.log({ nombre });
    console.log({ apellido });
    console.log({ edad });
    console.log({ hobbies });
}

imprimirPropiedades(persona);

MANERA 2 (esto se le llama "asignarle un valor por defecto", es la más viable)
const persona = {
    nombre: 'Ricardo',
    apellido: 'Garrido',
    //edad: 32,
    hobbies: ['ver series', 'no hace nada']
}

const imprimirPropiedades = ({ nombre, apellido, edad = 32, hobbies }) => {
    console.log({ nombre });
    console.log({ apellido });
    console.log({ edad });
    console.log({ hobbies });
}

imprimirPropiedades(persona);

Ejercicio 15: Cuantos caracteres tiene un array
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras`);
})

Ejercicio 16: resumir el ejercicio 15
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`)



EJERCICIO 29: Escribirle un metodo prototipado a la función heredada del javascript viejito

function animal(nombre, genero) {
    Propiedades
    this.nombre = nombre;
    this.genero = genero;
}

Metodos agregados desde afuera, esto evita la duplicidad de metodos en la función constructora
animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}

function perro(nombre, genero, tamanio) {
    //super sirve para invocar al constructor padre
    this.super = animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}
perro.prototype = new animal();
perro.prototype.constructor = perro;
al igualarlo al mismo constructor, obtendra todo lo que hay en la funcion perro
incluso los prototipos, como el .sonar que tiene

perro.prototype.ladrar = function() {
    console.log("Wof!! wof!!");
}

perro.prototype.ladrar();


EJERCICIO 30: Crear una funcion anónima autoinvocada
(function() {
    console.log("Soy una función autoinvocada");
})()

EJERCICIO 31: Crear una funcion anónima autoinvocada que reciba parametros
(function(w, d, c) {
    console.log("Soy una función autoinvocada");
    console.log(w);
    console.log(d);
    console.log(c);
    c.log("Estoy usando console.log recibiendo el console como un parametro");
})(window, document, console)

EJERCICIO 31: Crear las 4 funciones anónimas autoinvocadas

//clasica
(function() {
    console.log("Soy una función anónima autoejecutable CLASICA");
})();

//Crockford
((function() {
    console.log("Soy una función anónima autoejecutable CROCKFORD");
})());

//UNARIA
+

function() {
    console.log("Soy una función anónima autoejecutable UNARIA");
}();

//FACEBOOk
! function() {
    console.log("Soy una función anónima autoejecutable ESTILO FACEBOOK");
}


*/