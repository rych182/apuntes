
/*
Ejercicio 1-4 
creando datos instanciando:
let num1 = new String("hola");
let num2 = new Boolean(true);
let num3 = new Array("perro", "gato");
let num4 = new Number(2)
console.log(num4)

si quieres que devuelva el valor primitivo, puedes hacer esto:

console.log(num4.valueOf()); // Imprimirá 2
console.log(num4.valueOf() === 2); // Imprimirá true

Ejercicio 5:
Otra forma de convertir el objeto Number de vuelta al tipo primitivo number es mediante coerción.
Ejemplo:

let num4 = new Number(2);
let num4Primitive = +num4; // Coerción implícita
console.log(typeof num4Primitive); // Imprimirá "number"

La coerción implícita en JavaScript es el proceso mediante el cual el motor de JavaScript convierte
automáticamente un valor de un tipo de datos a otro en ciertas operaciones.
Esto ocurre cuando se intenta realizar una operación entre valores de tipos diferentes.
JavaScript intenta hacer que los tipos de datos sean compatibles para realizar la operación.

Por ejemplo, en una operación aritmética como la suma (+), si uno de los operandos es un string y el otro
es un número, JavaScript realizará una coerción implícita convirtiendo el string en un número
antes de realizar la suma:

let numero = 10;
let texto = "20";
let resultado = numero + texto; // JavaScript convierte texto en un número antes de la suma
console.log(resultado); // Imprimirá 30, ya que "20" se convierte a 20 y luego se suma a 10
*/