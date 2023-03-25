const person = { name: 'John', age: 30 };
const clone = {...person };
console.log(clone); // Output: { name: 'John', age: 30 }
/*
CHATGPT
Rest y Spread son dos características de JavaScript que se introdujeron en la versión ES6 (también conocida como ES2015) y que permiten trabajar con arrays y objetos de una manera más fácil y elegante.

Rest:
Permite empaquetar múltiples elementos en un array. 
En una función, el Rest permite aceptar cualquier número de argumentos y empaquetarlos en un array.
Se utiliza el operador de tres puntos (...) para indicar que queremos empaquetar los elementos restantes en un array.

Spread:
Permite desempaquetar elementos de un array o un objeto.
Se utiliza el operador de tres puntos (...) para indicar que queremos desempaquetar los elementos. 
Ejemplos:

const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // Output: 1 2 3 4 5

const person = { name: 'John', age: 30 };
const clone = { ...person };
console.log(clone); // Output: { name: 'John', age: 30 }


Parametros REST:
-Es una sintaxis, cuando lo pongo como argumento dentro de una función y quiere decir
 "Une todos los argumentos en una sola variable y transformalo como un areglo"
-no pueden llevar nada después de ellos y sirven para poder mostrar varios datos como un array




Parametros Spread:
-Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza,
"separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos
y hacer igualaciones que apunten a diferentes espacios en memoria
-Sirve para separar los datos, Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR)


const persona = {
    nombre: "rick",
    apellido: "Garrido",
    edad: 45,
    direccion: {
        ciudad: "Cuernavaca",
        cp: 62550,
    }
};
const persona2 = {...persona };

console.log(persona2);
*/


const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);



/*
Ejercicio 0 : SPREAD, copiar un array y ponerlo dentro de otro

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);

Ejercicio 1: Imprime una función utilizando parametro REST
const mostrarDatos = (...datos) => {
    console.log(...datos);
}
mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');

Ejercicio 2: Imprime datos de la función utilizando parametro spreade
const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);

EJERCICIO 3: Crea una función que sume digitos usando el parametro REST
function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(suma(1, 2, 3, 4));

EJERCICIO 4: Unir 2 arreglos usando SPREAD

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(typeof(arr3));


Ejemplo 1 
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


Quien sabe que hacia esto aquí
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });


Ejemplo 2
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


//parametro spread: Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza, "separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos y hacer igualaciones que apunten a diferentes espacios en memoria
//parametro rest: Es una sintaxis, cuando lo pongo como argumento dentro de una función, ES UN PARAMETRO REST, y quiere decir "Une todos los argumentos en una sola variable y transformalo como un areglo"

Explicación del ejercicio:
let juan = { nombre: 'Juan' };
let ana = juan;
Apunta al mismo espacio de memoria, por eso se sobreescriben, necesitamos que dejen de apuntar al mismo espacio, entonces utilizamos SPREAD
SPREAD lo que hace es "apuntar a distintos espacios en memoria" y así no se sobreescribe.



//EJEMPLO: pasando datos por REFERENCIA (Todos los objetos se pasan por referencia)
//En Javascript todos los objetos son pasados por referencia
//En javascript todo es un objeto excepto los primitivos


Ejercicio 1
Checa el scope de las variables let, son locales, no globales, por eso en esta función no lo muestra
let edad = 18;
if (edad => 18) {
    let eresAdulto = true;
}
console.log(eresAdulto);

EJERCICIO 10: imprime los datos del array c

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);


*/