/*
-Hacer varios ejercicios de arrgelos
-Deben de contener: strings, numbers, booleans, arrays y funciones
-Después vemos como las muestras o ejecutas pero ve haciendolas
-Ten un archivo de practica donde las puedas ver todas y ten un archivo donde solo codies como con los ejercicios de php

La deestruccturacion de objetos y arreglos se usan mucho en frameworks y librerias

Nota: Es muy raro tener 3 niveles de arrays

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

-------------------------METODOS PARA ARRAYS------------------------------------------------------- 
Los métodos que se escriben con un punto antes del nombre del método se llaman métodos de objeto.
Estos métodos son aquellos que están asociados con un objeto en particular y actúan sobre ese objeto.
Por ejemplo, el método .length se utiliza para encontrar la longitud de una cadena o matriz y
solo se puede usar en objetos de tipo cadena o matriz.

Por otro lado, los métodos que se escriben con paréntesis después del nombre del método
son métodos que pueden ser utilizados por cualquier objeto de ese tipo de datos. Por ejemplo,
el método .toUpperCase() se puede usar en cualquier objeto de tipo cadena para convertirlo en mayúsculas.

En resumen, el punto se usa para acceder a los métodos de un objeto específico,
mientras que los paréntesis indican
que se está invocando un método que puede ser utilizado por cualquier objeto de ese tipo de datos.


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


------------------------------METODOS MÁS USADOS----------------------------------------------------

Los métodos de objeto más usados en JavaScript pueden variar según el caso de uso y el tipo de objeto, pero aquí hay algunos ejemplos comunes:

Object.keys(obj): devuelve un array de las propiedades de un objeto obj.
Object.values(obj): devuelve un array de los valores de las propiedades de un objeto obj.
Object.entries(obj): devuelve un array de arrays, donde cada subarray contiene una clave y su valor correspondiente para cada propiedad del objeto obj.
obj.hasOwnProperty(prop): devuelve un booleano que indica si un objeto obj tiene una propiedad propia llamada prop.
JSON.stringify(obj): convierte un objeto obj en una cadena JSON.
JSON.parse(str): convierte una cadena JSON str en un objeto JavaScript.

Los métodos de JavaScript que "utilizan paréntesis" se conocen como METODOS DE FUNCIÓN y se aplican a los valores que son del tipo de datos función. Algunos ejemplos comunes de métodos de función en JavaScript son:

Array.prototype.forEach(callback): llama a una función callback una vez por cada elemento en un array.
Array.prototype.map(callback): crea un nuevo array con los resultados de llamar a una función callback en cada elemento en un array.
Array.prototype.filter(callback): crea un nuevo array con todos los elementos de un array que pasan una prueba implementada por la función callback.
Array.prototype.reduce(callback): aplica una función callback acumulativamente a los elementos de un array para reducirlo a un solo valor.
String.prototype.split(separator): divide una cadena en un array de subcadenas en cada ocurrencia del separador especificado.
Math.random(): devuelve un número aleatorio entre 0 y 1.

-----------------------------------------METODOS M





----------------------------ARRAYS--------------------------------------------------

Ejercicio 1 : Array que tenga strings
let animales = ['Perro', 'Gato', 'Pez'];
console.log(animales[2]);

Ejercicio 2
Array que tenga strings y números
let datos = [19, 'Gato', 22];
console.log(datos[0]);

Ejercicio 3: Array que tenga strings, números y boleanos
let datos = [19, 'Gato', true];
console.log(datos[2]);

Ejercicio 4: Array que tenga strings, números, boleanos y nulos
let datos = [19, 'Gato', true, null];
console.log(datos[3]);


----------------------------FUNCIONES ARRAYS--------------------------------------------------

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