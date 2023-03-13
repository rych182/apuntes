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

Ejercicio 7: Usa el metodo "length" que te dice cuantos cupos hay en el array
let mascotas = ["perro", "gato", "perico"];
console.log(mascotas.length);

Ejercicio 8 Usa el metodo .push() que te agrega un nuevo dato a tu array al final(agrega un objeto de preferencia)
let mascotas = ["perro", "gato", "perico"];
mascotas.push("Pez");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 9 Usa el metodo unshift(); que te agrega un nuevo dato a tu array pero al inicio
let mascotas = ["perro", "gato", "perico"];
mascotas.unshift("Caracol");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 10 Borrar el último dato de tu array y muestra lo que hayas borrado
let mascotas = ["perro", "gato", "perico"];
let borrado = mascotas.pop();
console.log(mascotas.length);
console.log(mascotas);
console.log("La mascota que se borro fue: " + borrado);

Ejercicios 11 Elimina el rango de elementos que tu le digas, dentro de un array
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let elementosBorrados = mascotas.splice(1, 4);
console.log(mascotas.length);
console.log(mascotas);
console.log(elementosBorrados);

Ejercicio 12 Te dice el lugar en donde se encuentra el dato que buscas, OJO: debes ponerlo exacto, mayúsculas y minúsculas
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let indice = mascotas.indexOf("pez");
console.log(indice);
 */