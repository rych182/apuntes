//En Javascript, todos los objetos son pasados por referencia
//Todos los primitivos son pasados por valor y todos los objetos por referencia
//let juan = { nombre: 'Juan' };
//let ana = {...juan };
//ana.nombre = 'ana';
//console.log(juan, ana);

//EJEMPLO pasando datos por VALOR (Todos los primitivos se pasan por valor)
//Cuando trabajamos con primitivos, cualquier tipo de asignación como esta ó lo mandamos a una función como argumento
//lo estamos mandando por valor.Es decir, no importa si transformamos la variable ó le asignamos otra cosa, 
//no estamos afectando el mismo valor de memoria, estamos pasando unicamente el valor
let a = 20;
let b = 10;
a = 30;

/*Ejemplo 1 
PARTE 1:Esto sobre escribe el valor en ambos objetos, esto es un problema, se solucionara en la parte 2
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';
console.log(juan, ana);

 Parte 2 
let juan = { nombre: 'Juan' };
let ana = {...juan };
ana.nombre = 'Ana';
console.log(juan, ana);
*/

const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

/* Ejemplo 2
Parte1
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log(peter, tony);

Parte2
const cambiarNombre = ({...persona }) => {
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log(peter, tony);
*/

//parametro spread: Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza, "separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos y hacer igualaciones que apunten a diferentes espacios en memoria
//parametro rest: Es una sintaxis, cuando lo pongo como argumento dentro de una función, ES UN PARAMETRO REST, y quiere decir "Une todos los argumentos en una sola variable y transformalo como un areglo"
/**
Explicación del ejercicio:
let juan = { nombre: 'Juan' };
let ana = juan;
Apunta al mismo espacio de memoria, por eso se sobreescriben, necesitamos que dejen de apuntar al mismo espacio, entonces utilizamos SPREAD
SPREAD lo que hace es "apuntar a distintos espacios en memoria" y así no se sobreescribe.

 */


//EJEMPLO: pasando datos por REFERENCIA (Todos los objetos se pasan por referencia)
//En Javascript todos los objetos son pasados por referencia
//En javascript todo es un objeto excepto los primitivos

/*
Ejercicio 1
Checa el scope de las variables let, son locales, no globales, por eso en esta función no lo muestra
let edad = 18;
if (edad => 18) {
    let eresAdulto = true;
}
console.log(eresAdulto);
*/