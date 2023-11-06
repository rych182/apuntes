const funcionExpresada = function() {
    console.log("Hola mundo");
}

/*


 console.log(sum(2, 3)); // Output: 5
 function sum(a, b) {
     return a + b;
 }

FUNCIONES EXPRESADAS(se acostumbra usar "¡¡¡const!!!!")
EJEMPLO
console.log(sum(2, 3)); // Output: Uncaught ReferenceError: sum is not defined
var sum = function(a, b) {
  return a + b;
};
 

OTRO EJEMPLO
const funcionExpresada = function(){
    console.log("Hola mundo");
}


La DIFERENCIA PRINCIPAL entre las "funciones declaradas"
y las "funciones expresadas" es que las expresiones de función NO
 SON "elevadas" y DEBEN DECLARARSE ANTES DE SER UTILIZADAS en el código.

Las expresiones de función se utilizan en JavaScript por varias razones:
-Closures: Las expresiones de función permiten crear closures, 
que son funciones que tienen acceso al ámbito (scope)
de su entorno externo. 
Esto significa que pueden acceder y
manipular variables definidas en el ámbito superior
incluso después de que la función haya sido ejecutada.

Los closures son útiles en situaciones donde se requiere preservar el 
estado de las variables a lo largo del tiempo,
como en callbacks o en la implementación de módulos.

-Asignación dinámica: Las expresiones de función se pueden asignar
dinámicamente a variables y pasar como argumentos a otras funciones.

Esto permite una mayor flexibilidad en la manipulación de funciones,
ya que se pueden crear funciones bajo ciertas condiciones 
y asignarlas a diferentes variables o utilizarlas como argumentos en
diferentes contextos.

-IIFE (Immediately Invoked Function Expression): Una expresión de función
puede envolverse entre paréntesis y luego ser invocada inmediatamente
agregando otro par de paréntesis al final (function() { // código  })();.

    Esto es útil para crear un ámbito local para evitar la contaminación del
ámbito global y para ejecutar un bloque de código sin necesidad de llamar
a la función en otro lugar.

-Flexibilidad sintáctica: Las expresiones de función permiten utilizar
diferentes estilos de programación, como programación funcional, donde se
pueden pasar funciones como argumentos o devolver funciones como
resultado de otra función. También se pueden utilizar para crear funciones
anónimas que se utilizan en situaciones donde no se necesita un nombre de
función específico.

Aunque las declaraciones de función son más comunes y más fáciles de entender
debido a su HOISTING(elevación), las expresiones de función ofrecen
características adicionales que las hacen más adecuadas en ciertos casos
de uso específicos, como closures, asignación dinámica y flexibilidad sintáctica.
La elección entre declaraciones de función y expresiones de función depende 
de los requisitos y del estilo de programación utilizado en un proyecto en
particular.


 EJEMPLO: Esta función ni recibe parametros ni devuelve valores
 function estoEsUnaFuncion() {
     console.log("Uno");
     console.log("Dos");
     console.log("Tres");
 }

 EJEMPLO: Esta función regresa un valor
 function unaFuncionQueDevuelveValor() {
     console.log("Uno");
     return 'devolviendo un valor';
 }
 unaFuncionQueDevuelveValor();
 let valorDeLaFunción = unaFuncionQueDevuelveValor(); //aquí estas guardando la "ejecución" de una función
 console.log(valorDeLaFunción); //imprime el valor que devuelve

 NOTA SOBRE RETURN:
 Todo lo que este debajo de un return es ignorado
 EJEMPLO:
 function unaFuncionQueDevuelveValor() {
     console.log("Uno");
     return 2;
     return 'devolviendo un valor';
     return "hola mundo";
 }
 let valorDeLaFunción = unaFuncionQueDevuelveValor();
 console.log(valorDeLaFunción); //imprime el valor que devuelve

Hoisting: javascript eleva primero las vaeriables y luego las funciones


EJEMPLO: Pasando valores y agregando "valores por defecto"
function saludar(nombre, edad = 0) {
    console.log(nombre + edad);
}
saludar("jimena ");

 */