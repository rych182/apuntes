/*
For of Explicación

-Se utiliza para iterar sobre elementos iterables, como arrays, strings, mapas, conjuntos, etc.
-Proporciona una forma más sencilla y legible de recorrer los elementos de una estructura iterable.
-No proporciona acceso directo a los "índices", sino a los valores de los elementos.


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
Pero se acostumbra poner en singular del nombre del array
for (let country of countries) {
    console.log(country);
}

*/