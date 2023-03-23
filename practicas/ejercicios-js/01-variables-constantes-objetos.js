let nombre = "ric";
let edad = 34;
const lastName = 'Garrido';
let mascotas = ['Perro', 'Gato', 'Pez', true];
mascotas.push('Perico');
let persona = {
    nacionalidad: 'Mexicana',
    edad: 35,
    sexo: 'Masculíno',
    mascotas: ['Gallina', 'Conejo']
}
persona.correo = "correo@correo.com";
mascotas.push('Tortuga', 'Iguana');
console.log(`MY name is ${nombre} ${lastName}, my age is ${persona.edad}. I have a ${mascotas[3]}, my email is ${persona.correo} and I want to buy a ${persona.mascotas[0]} and ${persona.mascotas[1]}`);
let resultado = nombre + edad;
console.log(typeof(resultado));



/**
                        TIPOS DE DATOS
El valor null en JavaScript se utiliza para representar la ausencia intencional de cualquier objeto o valor. Es decir, se usa para indicar que una variable o propiedad no tiene un valor o referencia a un objeto.

Algunos casos comunes en los que se utiliza el valor null incluyen:
Cuando se inicializa una variable y aún no se le ha asignado ningún valor.
Cuando se quiere indicar que una propiedad de un objeto no tiene un valor asignado.
Como un valor de retorno para indicar que una función no ha encontrado un resultado válido.
Es importante tener en cuenta que null es un valor asignable, lo que significa que una variable puede ser explícitamente establecida en null. Sin embargo, también es importante tener en cuenta que null se evalúa como falso en contextos booleanos, lo que significa que una expresión que contiene null se considera falsa en una evaluación booleana.
Por ejemplo, la expresión if (null) se evalúa como falsa, lo que significa que el bloque de código dentro del if no se ejecutará.


EJEMPLO DEL TIPO DE DATO NULL
Un ejemplo práctico en el que se podría utilizar el valor null en JavaScript es en la creación de un objeto person con propiedades opcionales, como middleName.
Supongamos que queremos crear un objeto que represente a una persona con un nombre, un apellido y un posible segundo nombre. Si no se proporciona un segundo nombre, podemos establecer la propiedad middleName en null para indicar que no se ha proporcionado un valor.

let person = {
  firstName: 'Juan',
  lastName: 'Pérez',
  middleName: null
};

console.log(person.middleName); // null



Ejercicio 1: Imprimir con template strings
let name = "Ricardo";
let age = 33;
let country = "Mexico";
console.log(`My name is ${name} I am ${age} and I am from ${country}`);

Ejercicio 1.01:  Explicar orden de ejecucion de JS

EJERCICIO 2: Declarar constantes e imprimirlas
const caja = 21;
console.log(caja);


EJERCICIO 3: declara un array e imprimelo
let cadena = ["Mexico", "USA", "Canada"];
console.log(cadena);



*/