var miCadena = "Hola, mundo!";
var miCadenaObjeto = new String("Hola, mundo!");
console.log(typeof miCadenaObjeto)

/*

Jon Mircha: CAPITULO TERMINADO

Funciones(definicion): bloque de código autocontenido, independiente al scope o ambito global(tiene su propio scope),
se definen 1 sola vez, que se puede ejecutar en cualquier momento y reutilizarla,
puede o no recibir parametros(datos).
En Javscript las funciones también se consideran un objeto
 
Las funciones tu las puedes asignar como un valor, en vez de retornar solo texto, puedes retornar la ejecución de una función 
-Se pueden pasar como argumentos
-Se pueden retornar como valores

Opcionalmente una función puede recibir parametros y devolver valores.
Para devolver un valor, nosotros utilizamos una palabra llamada "return"

Hay 2 maneras de crear funciones, las declaradas y las expresadas(dentro de una variable)


Ejercicio 1: Explicar la función declarada
Funciones Declaradas:
// Declaración de función
function funcionDeclarada() {
  console.log("Hola desde función declarada");
}
// Llamada a la función
funcionDeclarada(); // Puedes llamar a la función antes de su declaración

----------------------------------------------------------------------------------------
Ejercicio 2: Explicar la función Expresada
Funciones Expresadas:
// Expresión de función
const funcionExpresada = function() {
  console.log("Hola desde función expresada");
};

// Llamada a la función
funcionExpresada(); // Debes llamar a la función después de su definición


Funciones Declaradas:
En una función declarada, defines una función utilizando la palabra clave function seguida del nombre de la función.
Esta definición se "eleva" al inicio del ámbito en el que se encuentra, 
lo que significa que puedes llamar a la función incluso antes de haberla definido en tu código.

 La ventaja de las declaraciones de función es que se pueden llamar antes
 de la declaración en el código, ya que JavaScript primero "eleva" las
 declaraciones de función durante la fase de compilación. 
 Esto significa que puedes llamar a la función antes de que aparezca en el código.


Funciones Expresadas:
En una función expresada, defines una función como una expresión en una variable, 
por lo que la función solo está disponible para ser llamada después de haber sido definida.
Las funciones expresadas son útiles en "callbacks, funciones anónimas, Clausuras (closures) y Asignación dinámica"
------------------------------------------------------------------------------------------
Ejercicio 3: Mostrar en consola un return
//En este caso el return se puede ver siempre y cuando se ejecute en la consola del navegador
//un comportamiento específico del entorno de ejecución
//algunas extensiones pueden tener configuraciones predeterminadas que pueden afectar la forma en que se maneja la salida


function unaFuncion{
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
unaFuncion();

------------------------------------------------------------------------------------------------------------
Ejercicio 4: Mostrando como que se puede ejecutar una función, si la mandas ejecutarse y la guardas en una variable

//La razón por la que ves la salida en la consola cuando asignas el resultado a una variable es que estás forzando
// la ejecución de la función al realizar la llamada 
function unaFuncion(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion();
-------------------------------------------------------------------------------------------------------------------
Ejercicio 5: MOstrando el tipo de dato como string
//Esto se debe a que como ejecuto la función dentro de la variable y lo que me arroja es un texto en el return, entonces
//por eso dice que es string, si le pusiera un número, saldría number

function unaFuncion(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion();
console.log(typeof caja);
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 6: si quisiera que mostrara que realmente es un tipo de dato función, no debo de ejecutarlo.
function unaFuncion(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion;
console.log(typeof caja);
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 7: Si imprimo la variable función SIN ejecutar dentro la función, me va a mostrar la función
function unaFuncion(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion;
console.log(caja);
------------------------------------------------------------------------------------------------------------------
Ejercicio 8: Y si imprimo la variable caja con un "console.log()" me imprimira el "return en la consola del navegador"
por que le estás pidiendo con el último console.log que te muestre TODO lo que contiene en consola.
function unaFuncion(){
  console.log("Uno")
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion();
console.log(caja);
----------------------------------------------------------------------------------------------------------------------
Ejercicio 9: Ver como se detiene todo cuando se ejecuta un return, ya que ignora las demás lineas de codigo,
incluso el mismo VSC lo marca

function unaFuncion(){
  console.log("Uno")
  return 4;
  console.log("Dos")
  console.log("Tres")
  return "Esto es el return"
}
let caja = unaFuncion();
console.log(caja);
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 10: Una función retornando una función anonima autoejecutable
function unaFuncion(){
  console.log("Uno")
  return (function(){
    console.log("hola mundo")
    return "afuerza una función tiene un return implicito"
  })()
}
let caja = unaFuncion();
console.log(caja);
-------------------------------------------------------------------------------------------------------------------------
Ejercicio 11: Una función retornando una función autoejecutable y esta NO ES ANONIMA
function unaFuncion(){
  console.log("Uno")
  return (function imprimir(){
    console.log("hola mundo")
  })()
}
let caja = unaFuncion();
console.log(caja);
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 12: Una función retornando una función autoejecutable y mostrando como todas las funciones tienen un return
"Implicito"
function unaFuncion(){
  console.log("Uno")
  return (function(){
    console.log("hola mundo")
    return "afuerza una función tiene un return implicito"
  })()
}
let caja = unaFuncion();
console.log(caja);
-------------------------------------------------------------------------------------------------------------------------
Ejercicio 13: si "ejecutas" una función desde la consola del navegador, te imprimira un return con un "undefined", aunque
escribas la función en el navegador.
//"Ejecuta" esta función desde el navegador. 
function unaFuncion(){
  console.log("Uno")
}

-------------------------------------------------------------------------------------------------------------------------
Ejercicio: 14
EJEMPLO EN FUNCIONES ANÓNIMAS
Son funciones sin nombre. Se utilizan para ejecutar código que no se necesita en ningún otro lugar del programa.

const saludar = function(nombre) {
  console.log(`Hola, ${nombre}`);
};
saludar("Juan");
------------------------------------------------------------------------------------------------------------------------
Ejercicio 15:
EJEMPLO CON CLAUSURAS(CLOUSURES):
Son funciones que "capturan" variables en su entorno circundante.
Esto puede ser útil para crear funciones que mantienen un estado interno.


function contador() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
-----------------------------------------------------------------------------------------------------------------------
Ejercicio 16
EJEMPLO CON ASIGNACIÓN DINÁMICA
Puedes asignar funciones expresadas a variables en tiempo de ejecución,
lo que te permite cambiar qué función se ejecutará en función de las condiciones del programa.

let operacion;
if (condicion) {
  operacion = function(a, b) {
    return a + b;
  };
} else {
  operacion = function(a, b) {
    return a * b;
  };
}
console.log(operacion(2, 3)); // Suma o multiplicación según la condición

------------------------------------------------------------------------------------------------------------------
 Tipos de datos primitivos:
 -string
 -number
 -boolean
 -null
 -undefined
 -NaN

 Tipos de datos compuestos:
 -Objeto{}
 -Array[]
 -funciones{}  <---
 -Class
 -etc(Nuevos tipos de datos como: )


 ---------------------------------------------------------------------------------------------------------------


Ejercicio 17
Imprimir mi nombre con una función flecha
let nombre = () => {
    console.log("Ricardo");
}
nombre();

Ejercicio 18: imprimir tu nombre con una función autoejecutable
(() => {
    console.log("rIC");
})()

EJERCICIO 19: Crear una funcion anónima autoinvocada que reciba parametros
(function(w, d, c) {
    console.log("Soy una función autoinvocada");
    console.log(w);
    console.log(d);
    console.log(c);
    c.log("Estoy usando console.log recibiendo el console como un parametro");
})(window, document, console)


EJERCICIO 20: Imprimir un valor predefinido
function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar();


Ejercicio 21: Ejemplos de corto circuito OR
Este es un ejercicio que sirven para aprender que imprimira el navegador

function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar(19 || "valor de la derecha");
saludar(true || "valor de la derecha");
saludar({} || "valor de la derecha");
saludar([] || "valor de la derecha");
saludar(false || "valor de la derecha");
saludar(null || "valor de la derecha");
saludar(undefined || "valor de la derecha");
saludar("" || "valor de la derecha");
saludar(-2 || "valor de la derecha");
saludar(0 || "valor de la derecha");
---------------------------------------------------------------------------

Ejercicio 22
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha
let operacion = (num1, num2) => {
    console.log(num1 + num2);
}
---------------------------------------------------------------------------------------

Ejercicio 23
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO usando return

let operacion = (num1, num2) => {
    return num1 + num2;
}
console.log(operacion(2, 3));
--------------------------------------------------------------------------------------------------------

Ejercicio 24 (Otra manera de ejecutar una función guardandola en una variable)
Toda función devuelve "UNDIFINED", porque todas las funciones tienen un "return aunque no este escrito"
cuando se tiene una función y no tiene un return "específico", devolverá "undifined"
Demuestra esto
let nombre = (nombre) => {
    console.log(nombre);
    return 1000;
}
const almacen = nombre("Ricardo");
console.log(almacen);
------------------------------------------------------------------------------------------------------------

Ejercicio 25
Regresar 2 valores en un return, primero la manera mala y luego la buena

MALA(solo imprimira el número 2)
let nombre = (nombre) => {
    console.log(nombre);
    return 1, 2;
}
const almacen = nombre("Ricardo");
console.log(almacen);

BUENA(volverlo un array)
let nombre = (nombre) => {
    console.log(nombre);
    return [1, 2];
}
const almacen = nombre("Ricardo");
console.log(almacen[0], almacen[1]);

------------------------------------------------------------------------------------------------
Ejercicio 26 PROTIP
Crear una funcion flecha con "return" que "retorne un objeto" y luego resume ese objeto
const persona = (nombre, apellido) => {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const caja = persona('Ricardo', 'Garrido');
console.log(caja);

RESUMIDA
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const caja = persona('Ricardo', 'Garrido');
console.log(caja);
----------------------------------------------------------------------------------------------
Ejercicio 27
Crea una función con una variable por default si alguna vez alguien no rellena el dato
let saludar = (nombre = "visitante") => {
    return `Hola ${nombre}`;
}
console.log(saludar("Sutano"));
-------------------------------------------------------------------------------------------
EJERCICIO 28: Crear las 4 funciones anónimas autoinvocadas

//clasica
(function() {
    console.log("Soy una función anónima autoejecutable CLASICA");
})();

//Crockford
((function() {
    console.log("Soy una función anónima autoejecutable CROCKFORD");
})());

//UNARIA
+

function() {
    console.log("Soy una función anónima autoejecutable UNARIA");
}();

//FACEBOOk
! function() {
    console.log("Soy una función anónima autoejecutable ESTILO FACEBOOK");
}


*/