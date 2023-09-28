/*

------------------------------METODOS MÁS USADOS PARA ARRAYS----------------------------------------------------

Los métodos de objeto más comunes para matrices (arrays) en JavaScript son los siguientes:

push(): Agrega uno o más elementos al final de la matriz y devuelve la nueva longitud de la matriz.
pop(): Elimina el último elemento de la matriz y lo devuelve.
shift(): Elimina el primer elemento de la matriz y lo devuelve, desplazando los elementos restantes hacia abajo para llenar su lugar.
unshift(): Agrega uno o más elementos al inicio de la matriz y devuelve la nueva longitud de la matriz.
splice(): Cambia el contenido de una matriz eliminando elementos existentes y/o agregando nuevos elementos.
slice(): Devuelve una copia de una sección de la matriz, especificada por un índice inicial y un índice final (o la longitud de la matriz).
concat(): Combina dos o más matrices y devuelve una nueva matriz que contiene todos los elementos de las matrices originales.
indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
lastIndexOf(): Devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
forEach(): Ejecuta una función proporcionada una vez por cada elemento de la matriz.
map(): Crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz.
filter(): Crea una nueva matriz con todos los elementos que pasan la prueba implementada por una función proporcionada.
reduce(): Aplica una función contra un acumulador y cada elemento de la matriz (de izquierda a derecha) para reducirlo a un único valor.
find(): Devuelve el primer elemento de la matriz que cumple con la condición especificada en una función de prueba.
findIndex(): Devuelve el índice del primer elemento de la matriz que cumple con la condición especificada en una función de prueba.
every(): Comprueba si todos los elementos de la matriz pasan la prueba implementada por una función proporcionada.
some(): Comprueba si al menos un elemento de la matriz pasa la prueba implementada por una función proporcionada.
Los métodos de función más comunes para matrices son los siguientes:

Array.from(): Crea una nueva matriz a partir de un objeto similar a una matriz o iterable.
Array.isArray(): Devuelve true si el argumento es una matriz, y false en caso contrario.
Array.of(): Crea una nueva matriz con un número variable de argumentos.
Array.prototype.sort(): Ordena los elementos de la matriz (modificando la matriz original) y devuelve la matriz ordenada.
Array.prototype.reverse(): Invierte el orden de los elementos de la matriz (modificando la matriz original) y devuelve la matriz invertida.



----------------------------ARRAYS con funciones predefinidas--------------------------------------------------

Ejercicio 1: Usa el metodo "length" que te dice cuantos cupos hay en el array
let mascotas = ["perro", "gato", "perico"];
console.log(mascotas.length);


Ejercicio 2: Array creado de una forma nueva
let cadena = Array.of("hola", 2, true, [1, 2, "mundo"]);
console.log(cadena);

Ejercicio 3: Una forma de llenar un array de datos
**Explicación antes del ejercicio
En el caso de Array(10).fill(false),
Array() es un constructor que se utiliza para crear un nuevo objeto de tipo Array con una longitud específica
y se inicializa con un valor determinado usando el método fill().
un constructor es una función que se utiliza para crear y inicializar objetos a partir de una clase o tipo de datos
existen varios constructores integrados para tipos de datos básicos como
-Array(), 
-Object()
-String() 
-Number() 
-Boolean()
-Date()
Existen dos tipos: constructores nativos (o integrados) y constructores personalizados. 
Los constructores nativos son aquellos que se proporcionan por defecto en JavaScript,
mientras que los constructores personalizados se crean por el usuario utilizando la sintaxis de clases o
funciones constructoras.

let cadena = Array(10).fill(false);
console.log(cadena);


Ejercicio 4: Otra forma de crear un arreglo.
const e = new Array();
console.log(e);
Una posible razón para crear un array vacío usando new Array() sería si
se desea inicializar un array de cierta longitud con elementos vacíos y llenarlos más tarde con valores.
En este caso, se puede usar new Array(n) para crear un array con n elementos vacíos,
y luego asignar valores a cada elemento utilizando la sintaxis de corchetes o algún método de array.


Ejercicio 5: Imprimir un arreglo usando el metodo .forEach();
let colores = ["Azul", "Rojo", "Verde"];
colores.forEach(function(element, index) {
    console.log(`<li id='${index}'>${element}</li>`);
});

Ejercicio 6
Usa el metodo "length" que te dice cuantos cupos hay en el array
let mascotas = ["perro", "gato", "perico"];
console.log(mascotas.length);

Ejercicio 7
Usa el metodo .push() que te agrega un nuevo dato a tu array al final(agrega un objeto de preferencia)
let mascotas = ["perro", "gato", "perico"];
mascotas.push("Pez");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 8
Usa el metodo unshift(); que te agrega un nuevo dato a tu array pero al inicio
let mascotas = ["perro", "gato", "perico"];
mascotas.unshift("Caracol");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 9
Borrar el último dato de tu array y muestra lo que hayas borrado
let mascotas = ["perro", "gato", "perico"];
let borrado = mascotas.pop();
console.log(mascotas.length);
console.log(mascotas);
console.log("La mascota que se borro fue: " + borrado);

Ejercicios 10
Elimina el rango de elementos que tu le digas, dentro de un array
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let elementosBorrados = mascotas.splice(1, 4);
console.log(mascotas.length);
console.log(mascotas);
console.log(elementosBorrados);

Ejercicio 11
Te dice el lugar en donde se encuentra el dato que buscas, OJO: debes ponerlo exacto, mayúsculas y minúsculas
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let indice = mascotas.indexOf("pez");
console.log(indice);

*/