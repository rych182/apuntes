/*
el dom representa la ventana del navegador
el document es la representacion del documento html atravees del javascript y así es como atraves
de los nodos y elementos, podemos acceder mediante javascript a las etiquetas HTML
El DOM es una API de Javascript del navegador, es lo que nos permite Manejar HTML con Javascript atraves de los navegadores
Todo lo que imprimes es un elemento del DOM
El objeto GLOBAL de los navegadores es WINDOW
El objeto window en JavaScript es un objeto global que representa la ventana del navegador.
y proporciona acceso a muchas características y propiedades importantes del entorno del navegador.
Todas las variables y funciones declaradas en el nivel superior de tu código,
se agregan automáticamente al objeto window. 
Esto significa que puedes acceder a esas variables y funciones en cualquier lugar del código
El objeto window proporciona acceso a muchas propiedades y 
métodos útiles para interactuar con la ventana del navegador y su contenido. 

Gestión de ventanas y marcos: 
El objeto window también se utiliza para controlar y gestionar ventanas y marcos en un entorno de navegador.
Puedes abrir nuevas ventanas o marcos, cerrar ventanas, y comunicarte entre ventanas abiertas.

Manejo de temporizadores: 
Puedes usar el objeto window para crear temporizadores con las funciones setTimeout() y setInterval(),
que te permiten ejecutar código después de un cierto período de tiempo o a intervalos regulares.

*/







/*
Ejercicio 1:
Mostrar el objeto window
console.log(window);
---------------------------------
Ejercicio 2
Seleccionar el documento del navegador
console.log(window.document);
-----------------------------------------
Ejercicio 3
Mostrar que las funciones que creas se quedan almacenadas en el objeto Window
function saludar() {
    console.log("esto debe aparecer en la lista de funciones del objeto global window!");
}
Esta función buscala en la consola del navegador, escribiendo la palabra window
------------------------------------------------------------------------------------------
Ejercicio 4
Imprimir con console.log la función creada pero utilizando el objeto window
function saludar() {
    console.log("esto debe aparecer en la lista de funciones del objeto global window!")
}
console.log(window.saludar);
--------------------------------------------------------------------------------------------
Ejercicio 5
Ejecutar la función saludar con el window
function saludar() {
    console.log("esto debe aparecer en la lista de funciones del objeto global window!")
}
console.log(window.saludar());
---------------------------------------------------------------------------------------------
Ejercicio 6
Explicarle porque en la consola sale un "undefined", porque viene implicito un return las funciones
function saludar() {
    console.log("esto debe aparecer en la lista de funciones del objeto global window!")
    return 5;
}
console.log(window.saludar());
------------------------------------------------------------------------------------------------
Ejercicio 7
Mostrarle otras funciones que tiene el objeto WINDOW como "location"
console.log(window.location);
------------------------------------------------------------------------
Ejercicio 8
Mostrarle como podemos acceder a datos dentro del objeto location
console.log(window.location.href);
--------------------------------------------------------------------
Ejercicio 9
Mostrarle que no es obligatorio usar "window" para acceder a los metodos pero que se acostumbra por buena practica
console.log(location.href);
-----------------------------------------------------------------------------------------------------------------
Ejercicio 10
Mostrarle otras cosas que se pueden hacer como abrir ventanas 
var nuevaVentana = window.open("https://www.google.com", "NuevaVentana", "width=400,height=300");
nuevaVentana.open();
nuevaVentana.close(); // Cierra la nueva ventana.
-----------------------------------------------------------------------------------------------------------------
Ejercicio 11
Mostrarle que tambien se pueden usar intervalos de tiempo 

window.setTimeout(function() {
    console.log("Este mensaje se mostrará después de 2 segundos.");
}, 2000);
-----------------------------------------------------------------------------
Ejercicio 12
Mostrarle que no es necesatio usar window

setTimeout(function() {
    console.log("Este mensaje se mostrará después de 2 segundos.");
}, 2000);
-----------------------------------------------------------------------
Ejercicio 13

console.log(document.html)
console.log(document.head)
console.log(document.body)


// Imprimir el documento HTML en la consola
// Seleccionar el documento HTML
let doc = document.documentElement;
// Imprimir el documento HTML en la consola
console.log(doc);

*/
console.log(document.styleSheets)


