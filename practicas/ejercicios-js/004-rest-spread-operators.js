const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);
/*
JON MIRCHA: LISTO

const person = { name: 'John', age: 30 };
const clone = {...person };
console.log(clone); // Output: { name: 'John', age: 30 }


CHATGPT
Rest y Spread son dos características de JavaScript que se introdujeron en la versión ES6 (también conocida como ES2015) y que permiten trabajar con arrays y objetos de una manera más fácil y elegante.

Rest:
Permite "empaquetar" múltiples elementos en un array. 
En una función, el Rest permite aceptar cualquier número de argumentos y empaquetarlos en un array.
Se utiliza el operador de tres puntos (...) para indicar que queremos empaquetar los elementos restantes en un array.
La capacidad de tener parametros infinitos

Spread:
Permite "desempaquetar" elementos de un array o un objeto.
Se utiliza el operador de tres puntos (...) para indicar que queremos desempaquetar los elementos. 

Parametros REST:
-Es una sintaxis, cuando lo ingresas como argumento dentro de una función y quiere decir
 "Une todos los argumentos en una sola variable y transformalo como un arreglo"
-no pueden llevar nada después de ellos y sirven para poder mostrar varios datos como un array

Parametros Spread:
-Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza,
"separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos
y hacer igualaciones que apunten a diferentes espacios en memoria
-Sirve para separar los datos, Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR)




Ejemplos:

Ejercicio 1: Si pones "numbers", te imprime un "array" con 5 datos, pero si pones los 3 puntos
imprimira los datos
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // Output: 1 2 3 4 5
-----------------------------------------------------------------------
Ejercicio2: 
const person = { name: 'John', age: 30 };
const clone = { ...person };
console.log(clone); // Output: { name: 'John', age: 30 }
------------------------------------------------------------------------

Ejercicio 3:
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
-------------------------------------------------------------------------------

Ejercicio 4 : SPREAD, copiar un array y ponerlo dentro de otro
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);
--------------------------------------------------------------------------------

EJERCICIO 5: Escribe 2 arreglos y Unelos usando SPREAD
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(typeof(arr3));


Ejercicio 6 
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


EJERCICIO 7
Quien sabe que hacia esto aquí
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
//parametro spread: Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza, "separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos y hacer igualaciones que apunten a diferentes espacios en memoria
//parametro rest: Es una sintaxis, cuando lo pongo como argumento dentro de una función, ES UN PARAMETRO REST, y quiere decir "Une todos los argumentos en una sola variable y transformalo como un areglo"


-------------------------------------------------------------------------------------
*/