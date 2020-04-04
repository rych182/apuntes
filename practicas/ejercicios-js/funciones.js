//DEESTRUCTURACIÓN DE ARGUMENTOS



/*



Ejercicio 1
Imprimir mi nombre con una función flecha
let nombre = () => {
    console.log("Ricardo");
}
nombre();

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

Ejercicio 14 PROTIP
Reestructuracion de argumentos en un objeto cuando hace falta un valor .
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

Ejercicio 15
Cuantos caracteres tiene un array
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras`);
})

Ejercicio 16
resumir el ejercicio 15
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`)

*/