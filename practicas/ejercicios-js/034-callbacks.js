/*
informatica dp
https://www.youtube.com/watch?v=zQVnDW8SaA0

CALLBACK

FALCONMASTERS
Los callback son funciones que podemos pasar como parametro a otra función
esto es con el fin de que una función pueda llamar a otra función y ejecutarla.

Imaginate que usas una librería que se conecta a una base de datos que te pasa
los post de un usuario, esta librería te va a dar una función que se llama
"obtenerPostsDeUsuario"

ESPAÑOL (Adrian Gallardo)
EL codigo de JS se ejecuta secuencialmente, el callback es una función que se
va ejecutar cuando haya pasado determinado tiempo ó evento

ARGENTINO
La función puede tener una demora, como cuando consultamos una API y que
nos devuelva algún valor, el internet o el servidor está lento, para 
simular la demora utilizaré el setTimeout.

setTImeout recibe 2 valores el primero es una función y el segundo es un valor,
en el primer valor recibe lo que ejecutaremos y el segundo el tiempo

Ejercicio 1: Explicación del porque es importante un CallBack
function primero() {
    console.log("PRIMERO");
}
function segundo() {
    console.log("SEGUNDO")
}
primero();
segundo();
......................................................................
Ejercicio 2:

------------------------------------------------------------------------
Ejercicio 3: callback por evento
Para esto creamos un boton en html que tenga un id

//función que sirve para que puedas seleccionar un id, clase o etiqueta html
document.querySelector('#btn').addEventListener('click',()=>{
	console.log("Has dado click y se ha activado ka función callback que dispara este console.log")
})

----------------------------------------------------------------------------
Ejercicio 4: callback por evento, ejemplo 2
Para esto creamos un boton en html que tenga un id

function fecha() {
  document.getElementById("fecha").innerHTML = Date();
}

Date es una función constructora que se utiliza para crear objetos de tipo fecha.
Por lo tanto, cuando llamas a Date(), dependiendo de cómo lo uses, puede actuar de dos maneras diferentes:

1-Si llamas a Date() sin el operador new, devuelve una cadena de texto que representa la fecha y hora actual.

let fecha = Date();
console.log(fecha);  // Ejemplo de salida: "Fri May 17 2024 12:34:56 GMT+0000 (Coordinated Universal Time)"

2-Si usas new Date(), crea un nuevo objeto de tipo Date que representa la fecha y hora actuales,
 o una fecha específica si proporcionas argumentos.

let fecha = new Date();
console.log(fecha);  // Ejemplo de salida: Fri May 17 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

let fechaEspecifica = new Date(2024, 4, 17);  // Mes es 0-indexado, por lo que 4 representa mayo.
console.log(fechaEspecifica);  // Ejemplo de salida: Fri May 17 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 5: ejecuta una función anonima que contiene una funcion predefinida del lenguaje
Para esto creamos un boton en html que tenga un id

document.getElementById("alerta").addEventListener("click", function() {
    alert("Hello World!");
  });
--------------------------------------------------------------------------------------------------
EJercicio 6: Ejecutando 2 funciones con addEventListener y guardando la selección en una variable
Para esto creamos un boton en html que tenga un id

let x = document.getElementById("dosFunciones");
x.addEventListener("click", funcionUno);
x.addEventListener("click", funcionDos);

function funcionUno() {
  alert ("SOy la primer función!");
}

function funcionDos() {
  alert ("Me ejecuto despues de la función uno, SOY LA FUNCION 2");
}
----------------------------------------------------------------------------------------------------------
EJercicio 7: te imprime texto cuando estas sobre el boton, quitas el mouse encima del boton y cuando das click.

let x = document.getElementById("variasFunciones");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("imprimir").innerHTML += "El raton está sobre mi!<br>";
}

function mySecondFunction() {
  document.getElementById("imprimir").innerHTML += "Me diste click!<br>";
}

function myThirdFunction() {
  document.getElementById("imprimir").innerHTML += "QUitaste el mouse de encima de mi!<br>";
}
-----------------------------------------------------------------------------------------------------
Ejercicio 8 y 9 : te imprime el tamaño de la ventana del navegador

En esta se ejecuta "cuando se redimensiona", osea que tienes que hacer chico el navegador para que imprima
window.addEventListener("resize", function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + width + "px, Height: " + height + "px";
  });


EN este te imprime de inmediato el tamaño que tenga
  (function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + width + "px, Height: " + height + "px";
  })();

--------------------------------------------------------------------------------------------------------
Ejercicio 10: Este ejemplo demuestra cómo pasar valores de parámetros cuando se utiliza el método addEventListener()
y esta siendo llamada por una función anónima.

let p1 = 5;
let p2 = 7;
document.getElementById("suma").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo1").innerHTML = a * b;
}
----------------------------------------------------------------------------------
Ejercicio 11: El ejercicio de arriba con menos código

document.getElementById("suma").addEventListener("click", function() {
    let p1 = 5;
    let p2 = 7;
    document.getElementById("demo1").innerHTML = p1 * p2;
});

--------------------------------------------------------------------------------------
https://www.w3schools.com/js/js_htmldom_eventlistener.asp

CALLBACKS

4min Adrian Gallardo
5min INFORMATICA DP
6min James Q Quick Callback
7min MIdudev
7min Albert Hernandez
7min CodigoMentor
9min FALCON MASTERS
9min JOrge Garnica Blanco
10min Midudev callbacks vs promises
10min aprogramar callbacks
11min uskokrum callbacks
14min code with Ania callback in javascript
14min fazt callbacks,promesas, async/await
15min BlueWeeb(conceptos avanzados)
17min Jon Mircha
40min Blueweeb callback, promises, async/await

https://www.youtube.com/results?search_query=callbacks+javascript

https://www.youtube.com/watch?v=zQVnDW8SaA0
https://www.youtube.com/watch?v=Eh-s-n_6zNQ&t=921s
https://www.youtube.com/watch?v=jTSwOhECHtE
*/




