/**
 
Temas:
-Tipos de datos(Variables,constantes)
-Template stings
-Valores primitivos
Los 8 tipos de datos en JavaScript
Undefined.
Boolean.
Number.
String.
BigInt.
Symbol.
Null.
---------
Object: NO ES un tipo de dato no primitivo,  son una colección de propiedades
---------
"use strict"
Es una opción disponible en JavaScript que restringe ciertas acciones,
hace que el código sea más seguro y ayuda a evitar errores comunes. Para activar el modo estricto,
simplemente agregue el siguiente código al principio de su archivo JavaScript o de una función específica:
'use strict';

Restricciones que se aplican en el modo estricto:
-La creación de variables sin declarar con "var", "let" o "const" arrojará un error.
-La asignación a propiedades de solo lectura arrojará un error.
-El uso de palabras clave reservadas como "eval" y "arguments" como nombres de variables arrojará un error.
-Las funciones no pueden tener parámetros o nombres de parámetros duplicados.
-No se puede eliminar una variable, función o argumento de función.

El modo estricto es una buena práctica recomendada para escribir un código más seguro y
prevenir errores comunes.

                        TIPOS DE DATOS
El valor null en JavaScript se utiliza para representar la ausencia intencional de cualquier objeto o valor. 
Es decir, se usa para indicar que una variable o propiedad no tiene un valor o referencia a un objeto.

Algunos casos comunes en los que se utiliza el valor null incluyen:
-Cuando se inicializa una variable y aún no se le ha asignado ningún valor.
-Cuando se quiere indicar que una propiedad de un objeto no tiene un valor asignado.
-Como un valor de retorno para indicar que una función no ha encontrado un resultado válido.
Es importante tener en cuenta que null es un valor asignable, 
lo que significa que una variable puede ser explícitamente establecida en null.
Sin embargo, también es importante tener en cuenta que null se evalúa como "falso en contextos booleanos",
lo que significa que una expresión que contiene null se considera falsa en una evaluación booleana.

Por ejemplo:
La expresión if (null) se evalúa como falsa,
lo que significa que el bloque de código dentro del if no se ejecutará.


EJEMPLO DEL TIPO DE DATO NULL
Un ejemplo práctico en el que se podría utilizar el valor null en JavaScript es en la creación de un objeto person con propiedades opcionales, como middleName.
Supongamos que queremos crear un objeto que represente a una persona con un nombre, un apellido y un posible segundo nombre. Si no se proporciona un segundo nombre, podemos establecer la propiedad middleName en null para indicar que no se ha proporcionado un valor.

let person = {
  firstName: 'Juan',
  lastName: 'Pérez',
  middleName: null
};

console.log(person.middleName); // null


Ejercicio 1: Imprimir con template strings(las comillas se llaman tildes invertidas)
let name = "Ricardo";
let age = 33;
let country = "Mexico";
console.log(`My name is ${name} I am ${age} and I am from ${country}`);

Ejercicio 2:  Explicar orden de ejecucion de los archivos  JS

EJERCICIO 3: Declarar constantes e imprimirlas
const caja = 21;
console.log(caja);
 
EJERCICIO 4: declara un array e imprimelo
let cadena = ["Mexico", "USA", "Canada"];
console.log(cadena);



*/