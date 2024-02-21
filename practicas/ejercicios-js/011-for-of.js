/*
For of Explicación

-Se utiliza para iterar sobre elementos iterables, como arrays, strings, mapas, conjuntos, etc.
-Proporciona una forma más sencilla y legible de recorrer los elementos de una estructura iterable.
-No proporciona acceso directo a los índices o claves, sino a los valores de los elementos.


===========================================================================================
                                EJERCICIOS CON FOR OF

Ejercicio 0: explicación del porque FOR OF no proporciona el indice.
let array = ['a', 'b', 'c'];

for (let value of array) {
  console.log("Valor:", value);
  // ¿Cómo obtener el índice correspondiente aquí?
}

for (let index in array) {
    console.log("Índice:", index, "Valor:", array[index]);
  }

EJERCICIO 1:Haz un ciclo con for of para recorrer un array o cadena de texto

let texto = "ric";
let cadena = [1, 2, 3, 4, 5];
for (const iterator of cadena) {
    console.log(iterator);
}

Ejercicio 2, hacer el ejercicio 1 con FOR OF
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i of countries) {
    console.log(i);
}
Pero se acostumbra poner el sengular del nombre del array
for (let country of countries) {
    console.log(country);
}
---------------------------------------------------------------------
            FOR OF con funciones predefinidas

const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.values()) {
    console.log(entrada);
}

Ejercicio 5, imprime los valores de un array usando FOR OF y la función .values()
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.values()) {
    console.log(entrada);
}

EJERCICIO 6, nos regresa solo los valores del Map, pero no los indices(llaves fue lo que dijo el profe)
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.values()) {
    console.log(entrada);
}

Ejercicio 7, usamos la función .keys() con FOR OF para conseguir el indice(o key dijo el profe)
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

Ejercicio 8, nos va a regresar nuestro indice pero en este caso el índice es nombre y profesión PORQUE ES UN OBJETO
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.keys()) {
    console.log(entrada);
}

EJERCICIO 9, imprime con un for, arrays creados con la función .entries(), usando los espacios de memoria y datos de 1 solo array
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}
*/