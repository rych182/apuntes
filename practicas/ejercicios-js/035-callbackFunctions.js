

/*
                AddEventListener
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
-------------------------------------------------------------------------------
                            forEach
Ejercicio 12
const names = ["Pedro","Paco","LOla","gerardo"];
names.forEach((name)=>{
    console.log(name)
})
-------------------------------------------------------------
                            .map()
Ejercicio 13: Utilizando la función .map
Este método crea un nuevo array con los resultados de aplicar dicha función de callback a cada elemento del array original.

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(function(elemento) {
  return elemento * 2;
});

console.log(dobles); // [2, 4, 6, 8, 10]
-------------------------------------------------------
Ejercicio 14: el ejemplo de arriba pero usando los otros parámetros que la función de callback

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.map(function(elemento, indice, array) {
  console.log('Elemento:', elemento); // Imprime el elemento actual
  console.log('Índice:', indice);     // Imprime el índice del elemento actual
  console.log('Array:', array);       // Imprime el array original
  return elemento * 2;
});

console.log(resultado); // [2, 4, 6, 8, 10]
-----------------------------------------------------------------------

Ejercicio 15: Podemos usar thisArg para cambiar el contexto de this dentro de la función callback:
const multiplicador = {
  factor: 3
};

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.map(function(elemento) {
  return elemento * this.multiplicador;
}, multiplicador);

console.log(resultado); // [3, 6, 9, 12, 15]


Resumen

    La función callback de .map() se aplica a cada elemento del array.
    Devuelve un nuevo array con los resultados de la función callback aplicada a cada elemento.
    callback recibe hasta tres argumentos: elemento, índice, y arrayOriginal.
    thisArg puede ser usado para establecer el valor de this en la función callback.

.map() es útil cuando necesitas transformar cada elemento de un array de manera consistente.
*/