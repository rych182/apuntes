/*
Funciones(definicion): bloque de código autocontenido, independiente al scope o ambito global(tiene su propio scope),
 se definen 1 sola vez, que se puede ejecutar en cualquier momento y reutilizarla,
 puede o no recibir parametros(datos).
 En Javscript las funciones también se consideran un objeto
 
 Las funciones tu las puedes asignar como un valor, en vez de retornar solo texto, puedes retornar la ejecución de una función 
 -Se pueden pasar como argumentos
 -Se pueden retornar como valores


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

------------------------------------------------------------------------------------------------------------------

EJEMPLO EN FUNCIONES ANÓNIMAS
Son funciones sin nombre. Se utilizan para ejecutar código que no se necesita en ningún otro lugar del programa.

const saludar = function(nombre) {
  console.log(`Hola, ${nombre}`);
};
saludar("Juan");

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


Ejercicio 1
Imprimir mi nombre con una función flecha
let nombre = () => {
    console.log("Ricardo");
}
nombre();

Ejercicio 2: imprimir tu nombre con una función autoejecutable
(() => {
    console.log("rIC");
})()

EJERCICIO 3: Crear una funcion anónima autoinvocada que reciba parametros
(function(w, d, c) {
    console.log("Soy una función autoinvocada");
    console.log(w);
    console.log(d);
    console.log(c);
    c.log("Estoy usando console.log recibiendo el console como un parametro");
})(window, document, console)


EJERCICIO 4: Imprimir un valor predefinido
function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar();


Ejercicio 5: Ejemplos de corto circuito OR
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

Ejercicio 6
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha
let operacion = (num1, num2) => {
    console.log(num1 + num2);
}


Ejercicio 7
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO usando return
let operacion = (num1, num2) => {
    return num1 + num2;
}
console.log(operacion(2, 3));


Ejercicio 8 (Otra manera de ejecutar una función guardandola en una variable)
Toda función devuelve "UNDIFINED", porque todas las funciones tienen un "return aunque no este escrito"
cuando se tiene una función y no tiene un return "específico", devolverá "undifined"
Demuestra esto
let nombre = (nombre) => {
    console.log(nombre);
    return 1000;
}
const almacen = nombre("Ricardo");
console.log(almacen);


Ejercicio 9
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
Ejercicio 10 PROTIP
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
Ejercicio 11
Crea una función con una variable por default si alguna vez alguien no rellena el dato
let saludar = (nombre = "visitante") => {
    return `Hola ${nombre}`;
}
console.log(saludar("Sutano"));
-------------------------------------------------------------------------------------------
EJERCICIO 12: Crear las 4 funciones anónimas autoinvocadas

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