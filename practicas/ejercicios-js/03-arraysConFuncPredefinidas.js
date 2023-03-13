/**
EJERCICIO 5: agrega datos a un array usando la funcion PUSH
let cadena = ["Mexico", "USA", "Canada"];
cadena.push("Greenland");
console.log(cadena);

EJERCICIO 6: Agrega datos a un array constante
const cadena = ["Mexico", "USA", "Canada"];
cadena.push("Greenland");
console.log(cadena);

Ejercicio 1.01: Array creado de una forma nueva
let cadena = Array.of("hola", 2, true, [1, 2, "mundo"]);
console.log(cadena);

Ejercicio 1.02: Una forma de llenar un array de datos
let cadena = Array(10).fill(false);
console.log(cadena);

Ejercicio 1.03: Otra forma de crear un arreglo.
const e = new Array();
console.log(e);

Ejercicio 1.04: Imprimir un arreglo usando el metodo .forEach();
let colores = ["Azul", "Rojo", "Verde"];
colores.forEach(function(element, index) {
    console.log(`<li id='${index}'>${element}</li>`);
});


 */