
/*
const person = { name: 'John', age: 30 };
const clone = {...person };
console.log(clone); // Output: { name: 'John', age: 30 }


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

Otro ejercicio
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);


Ejercicio 0 : SPREAD, copiar un array y ponerlo dentro de otro

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);

Ejercicio 1: Imprime una función utilizando parametro REST
const mostrarDatos = (...datos) => {
    console.log(...datos);
}
mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');

Ejercicio 2: Imprime datos de la función utilizando parametro spread
const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);

EJERCICIO 3: Escribe 2 arreglos y Unelos usando SPREAD

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(typeof(arr3));

Ejemrcicio 4 
PARTE 1:Esto sobre escribe el valor en ambos objetos, esto es un problema, se solucionara en la parte 2
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';
console.log(juan, ana);

Parte 2 
let juan = { nombre: 'Juan' };
let ana = {...juan };//Esta línea crea un nuevo objeto , utilizando la sintaxis de propagación (spread syntax)
//Lo que hace es copiar todas las propiedades del objeto juan en el nuevo objeto ana.
//ana es un objeto distinto de juan, pero inicialmente con las mismas propiedades y valores.
Apunta al mismo espacio de memoria, por eso se sobreescriben, necesitamos que dejen de apuntar al mismo espacio, entonces utilizamos SPREAD
SPREAD lo que hace es "apuntar a distintos espacios en memoria" y así no se sobreescribe.
ana.nombre = 'Ana';
Aquí se modifica la propiedad nombre del objeto ana a 'Ana'.
Esto solo cambia el objeto ana y no afecta al objeto juan, ya que ana y juan son objetos diferentes en la memoria.
console.log( juan);

EJERCICIO 5
Quien sabe que hacia esto aquí
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });


//parametro spread: Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza, "separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos y hacer igualaciones que apunten a diferentes espacios en memoria
//parametro rest: Es una sintaxis, cuando lo pongo como argumento dentro de una función, ES UN PARAMETRO REST, y quiere decir "Une todos los argumentos en una sola variable y transformalo como un areglo"



Ejercicio 21: Escribe una función que use el parámetro rest para tomar un número indefinido de
argumentos (todos números) y devuelva la suma de todos estos números.
function suma(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

// Prueba la función
console.log(suma(1, 2, 3)); // Debería imprimir 6
console.log(suma(10, 20, 30, 40)); // Debería imprimir 100

Ejercicio 22: Concatenación de Cadenas
Crea una función que use el parámetro rest para aceptar un número indefinido de cadenas de texto y
las concatene en una sola cadena, separando cada una por un espacio.
function concatenaCadenas(...cadenas) {
  let resultado = '';
  for (let cadena of cadenas) {
    if (resultado) {
      resultado += ' ';
    }
    resultado += cadena;
  }
  return resultado;
}

// Prueba la función
console.log(concatenaCadenas("Hola", "mundo")); // Debería imprimir "Hola mundo"
console.log(concatenaCadenas("Este", "es", "un", "ejemplo")); // Debería imprimir "Este es un ejemplo"

---------------------------------------------------------------------
Ejercicio 10 PROTIP
Crear una función con parametros REST,
pasa 4 argumentos en la función, la función debe "retornar" solo 2 valores, pero en esos 2 valores deben venir los 4

let persona = (nombre, ...args) => {
    return [nombre, args];
}
console.log(persona("Ricardo", true, 32, ["Perro", "Canada"]));
----------------------------------------------------------------------------
Ejercicio 11 PROTIP
Deestructuración: sirve para darle nombres a los valores que tiene un arreglo, en vez de crear una variable por cada posicion del arreglo. Ejemplo
let persona = (...args) => {
    return args;
}

const [nombre, soltero, edad, aficiones] = persona("Ricardo", true, 32, ["Perro", "Canada"]);
console.log(aficiones);
-------------------------------------------------------------------------------------
Ejercicio 12 PROTIP
Deestructuración con un objeto RESUMIDO
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre } = persona('Ricardo', 'Garrido');
console.log({ nombre });


Ejercicio 6
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

EJERCICIO 3: Crea una función que sume digitos usando el parametro REST
function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}
console.log(suma(1, 2, 3, 4));


*/