


/*

--------------------------------
const tareaSimple = (tarea) => console.log(tarea);

const tareaPesada = (tarea) =>{
  console.log(`Empezando tarea ${tarea}...`)
  //el for solo es para que calcule y se tarde mucho
  for (let i = 0; i < 100000000; i++) {
    Math.random() - Math.random() * Math.random();
  }
  console.log(`Tarea ${tarea} terminada`);
}

const tareaFulanito = (tarea,callback,tiempo) =>{
  console.log(tarea);
  setTimeout(callback, tiempo);
}

const laboresYoutuber = [
  () => tareaSimple("escribir un guión"),
  () => tareaFulanito("hacer una imagen miniatura para el video",()=>tareaSimple("revisar miniatura"),3000),
  () => tareaPesada("grabar el vídeo"),
  () => tareaFulanito("Editar el vídeo",()=>tareaSimple("revisar el vídeo"),5000)
];

for (const labor of laboresYoutuber) {
  labor()
}
*/
/*
CALLBACK
Una función que recibe otra función como parametro y luego la ejecuta
FALCONMASTERS
Los callback son funciones que podemos pasar como parametro a otra función
esto es con el fin de que una función pueda llamar a otra función y ejecutarla.

Un Callback puede usarse tanto para un codigo sincromo como asincrono

La mayoría del tiempo, tu no vas a hacer esto, lo van a hacer los paquetes/librerías

CASI TODO EN JAVASCRIPT RECIBE UN CALLBACK
Los Callback se usan mucho en NodeJS(backend)

¿Porque necesitamos los callbacks?
Porque cuando interactuamos con otros dispositivos(computadoras), no siempre tendremos de inmediato la 
respuesta, si no que la vamos a tener después de X cantidad de tiempo

const obtenerPostsDeUsuario = (usuario,callback)=>{
  console.log(`Obteniendo los post de ${usuario}`);

  setTimeout(()=>{
    let posts = ['post1','post2','post3'];
    callback(posts[1]);
  },2000)
}

obtenerPostsDeUsuario('fulanito',(posts)=>{
  console.log(posts);
});
---------------------------------------------------
ARGENTINO
Una función callback es una función que se pasa como argumento a otra función
que luego se invoca dentro de la función externa para completar algun tipo de rutina
Javascript es un lenguaje interpretado y en los lenguajes interpretados se
el código se ejecuta de arriba a abajo y el resultado se devuelve inmediatamente

---------------------------------------------------------------
Ejercicio 0: Hacer un callback sencillo que imprima texto
function texto(params) {
  console.log("soy un callback")
}

function otraFuncion(callback) {
  callback()
}

otraFuncion(texto)
-----------------------------------------------------------------
Ejercicio 1: un callback sencillo

const fun1 = (callback) =>{
  console.log("Inicio");
  callback();
  console.log("Fin")
}

const fun2 = () =>{
  console.log("proceso intermedio")
}

fun1(fun2);
------------------------------------------------------------------
Ejercicio 2: otro callback sencillo 

function comprar(articulo1,articulo2,funcion) {
  let gastado = articulo1 + articulo2;
  funcion(gastado)
}

function imprimir(mensaje) {//es como si aca dijera 7
  console.log(`el monto gastado es de ${mensaje}`)
}

comprar(2,5,imprimir)

-----------------------------------------------------------------------
Exercise 3: repair the code, I need that first wait 5 seconds and later wait 3 seconds

function firstAction() {
  console.log("I'm the first action")
  setTimeout(callback,5000)
}

function secondAction() {
  console.log("I'm the second action")
}

setTimeout(,3000);

=======CORRECT ANSWER===========

function firstAction(callback) {
  console.log("I'm the first action")
  setTimeout(callback,4000)
}

function secondAction() {
  console.log("I'm the second action")
}

setTimeout(()=>firstAction(secondAction),3000);

--------------------------------------------------------------------

Ejercicio 3: Explicación del porque es importante un CallBack
function primero() {
    console.log("PRIMERO");
}
function segundo() {
    console.log("SEGUNDO")
}
primero();
segundo();

¿Que pasaría si hacemos esto?

function primero() {
  setTimeout(function(){
    console.log("PRIMERO")
  },3000)
}
function segundo() {
    console.log("SEGUNDO")
}
primero();
segundo();

Para arreglarlo lo hacemos con esot
function primero(segundo) {
  setTimeout(function(){
    console.log("PRIMERO")
    segundo();
  },3000)
}
function segundo() {
    console.log("SEGUNDO")
}
primero(segundo);

Y aunque tenga una demora de 3 segundos, se va a ejecutar en el orden correcto 
......................................................................
Ejercicio 4:crea 2 funciones, una que sume y otra que reste, 

function suma(a,resta) {
  console.log(a + resta());
}
function resta() {
  return 2-3;
}
suma(4,resta)

También se puede ejecutar desde la llamada de la función

function suma(a,resta) {
  console.log(a + resta);
}
function resta() {
  return 2-3;
}
suma(4,resta())
----------------------------------------------------------------------------------
Ejercicio 5: Otra manera de pasar por parametro una función

let inicio = function (valor,callback) {
  //la función anónima aquí se le llama "parametro callback" y recibe el valor del parametro valor en la linea 123,
  //y la linea 123, lo recibe de la linea 128, donde escribes el nombre
  callback(valor);
}
inicio("fulanito",function(valor){
  console.log(`Bienvenido ${valor}`)
})

-------------------------------------------------------------------------------
Ejercicio 6 de un callback recibiendo parametros, mientras se ejecuta dentro de la función
La mayoría del tiempo, tu no vas a hacer esto, lo van a hacer los paquetes/librerías

const obtenerPostsDeUsuario = (usuario,callback)=>{
  console.log(`Obteniendo los post de ${usuario}`);

  setTimeout(()=>{
    let posts = ['post1','post2','post3'];
    callback(posts[1]);
  },2000)
}

obtenerPostsDeUsuario('fulanito',(posts)=>{
  console.log(posts);
});
----------------------------------------------------------------------------
Ejercicio 8: callback por evento, ejemplo 2
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
--------------------------------------------------------------------------------------
https://www.w3schools.com/js/js_htmldom_eventlistener.asp

----------------------------------------------------------------------------------------
Ejercicio 9: probando como no siempre las funciones callback tardan lo mismo

console.time("prueba");
setTimeout(()=> console.timeEnd("prueba"),3000)

---------------------------------------------------------------------------------------
Ejercicio 10: creando un callback utilizando funciones predefinidas del lenguaje
y quiero que me lo explique el alumno linea por linea
const animales =['perro','gato',"caballo"];
function modificar(array,callback) {
  animales.push("iguana")
  callback(array)
}

console.log(animales)
modificar(animales,function(array){
  console.log(`He modificado el array y ahora es de ${array.length} elementos`,animales)
})

Esto puede ser asincrono de esta manera

const animales =['perro','gato',"caballo"];
function modificar(array,callback) {
  animales.push("iguana")
  setTimeout(() => {
    callback(array)
  }, 3000);
  
}

console.log(animales)
modificar(animales,function(array){
  console.log(`He modificado el array y ahora es de ${array.length} elementos`,animales)
})
--------------------------------------------------------------------------------------------
Ejercicio 11: creando nuestro propio forEach
const nombres = ["pedro","pablo","susana","perla"];
const miPropioForEach = (array,callback) =>{
  for (let i= 0; i < array.length; i++) {
    const element = array[i];
    callback(element);
  }
}

miPropioForEach(nombres,(nombre)=>{
  console.log(nombre)
})
-----------------------------------------------------------
Ejercicio 12: creo una función callback que reciba 2 dígitos y los sume

const sum = (a,b,callback) => {
  callback(a + b);
};

sum(1,2,(result)=>{
  console.log("result: ",result)
})
------------------------------------------------------------------
Ejercicio 13: Haz que el alumno encuentre el error para que imprima los datos(obvio se necesita un callback)
const getUsers = ()=>{
  setTimeout(() => {
    const users = [
      {id:1, name: 'pepe'},
      {id:2, name: 'pedro'}
    ];
    return users;
  }, 500);
}
//hacemos uso de la función
const users = getUsers();
//Esto sacará un undifined porque va 500mili seg atrasado
console.log("Users:", users);

//Para obtener los resultados tenemos que hacer lo siguiente:

const getUsers = (callback)=>{
  setTimeout(() => {
    const users = [
      {id:1, name: 'pepe'},
      {id:2, name: 'pedro'}
    ];
    callback(users);
  }, 500);
}

getUsers((users)=>{
  console.log("Users:", users);
});

//Por esto fue que se introdujeron los callbacks
-----------------------------------------------------------------------------------------------------------
Ejercicio 14: hacer un callback que muestre el dato en el dom

function suma(callback,x,y) {
  let operacion = x + y;
  callback(operacion);
}

function mostrarEnConsola(param){
  console.log(param)
}

function mostrarEnPagina(param){
  document.getElementById('myh1').textContent = param; 
}

suma(mostrarEnPagina,2,4)
----------------------------------------------------------------------
Ejercicio 15: Crea una función callback que reciba objetos y los recorra,
pero debes asegurarte que los datos que reciban sean objetos y funciones, de lo 
contrario, que te muestren un error

explicame que hace este código

let usuarios = [];

//funcion de logeo generico
function logeo(data) {
  if ('strings' == typeof data) return console.log(data)
  if ('object' == typeof data) {
    for (let key in data){
      console.log(key + ': ' + data[key])
    }
  }
}

function ingresar(input,callback) {
  usuarios.push(input)
  if ('function' == typeof callback) {
    callback(input)
  }else{
    console.log("El dato que ingresaste NO es una función")
  }    
}

ingresar({users:'fulanito',speciality:'javaScript'},"hola")

-----------------------------------------------------------------------
Ejercicio 16: ejemplo de callback hell
// Simulación de una serie de operaciones asíncronas usando setTimeout

function firstOperation(callback) {
  setTimeout(() => {
    console.log("Primera operación completada");
    callback();
  }, 1000);
}

function secondOperation(callback) {
  setTimeout(() => {
    console.log("Segunda operación completada");
    callback();
  }, 1000);
}

function thirdOperation(callback) {
  setTimeout(() => {
    console.log("Tercera operación completada");
    callback();
  }, 1000);
}

// Uso de callbacks anidados (callback hell)
firstOperation(() => {
  secondOperation(() => {
    thirdOperation(() => {
      console.log("Todas las operaciones completadas");
    });
  });
});
-----------------------------------------------------------------------------
Ejercicio 17: crea una función callback que multiplique 2 valores y use una función flecha resumida

let operacion = (num1,num2,callback) => {
  return callback(num1,num2)
}
console.log(operacion(2,4,(a,b)=> a*b))
---------------------------------------------------------------------------
Ejercicio 18: sumar dos números que han sido selecionados por un input


-Las funciones son ciudadanos de primera clase
-que es una high order function

------------------------------------------------------------------------------------------
Ejercicio 19: Imprimir el resultado de los números seleccionados en los inputs

const sumar = (num1, num2, callback) => {
  return callback(num1 + num2);
}
document.getElementById('btn1').addEventListener('click', () => {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

//.value: Obtiene el valor actual del elemento seleccionado. 
//Este valor es típicamente el texto dentro de un campo de entrada (<input>), 
//un área de texto (<textarea>), o una opción seleccionada en un elemento select (<select>).

  sumar(num1, num2, (resultado) => {
    console.log('El resultado es: ' + resultado);
  });
});

------------------------------------------------------------------------------------------------
Ejercicio 20: Hazme una función callback que al iniciarze tarde 5seg en ejecutarsee imprima texto
 y en el segundo lapso vuelva a imprimir texto

function firstAction(callback) {
  console.log("soy la primer accion")
  callback("soy la segunda acción")
}

function secondAction(data) {
  setTimeout(()=>{
    console.log(data)
  },2000)
}

setTimeout(()=> firstAction(secondAction),5000)
----------------------------------------------------------------

Ejercicio 21: Hacer el ejercicio anterior pero la función callback debde de
recibir 2 parametros, la función y texto. También para ejecutar la función
callback, debes utilizar un setTimeout


function firstAction(callback,message) {
  console.log(message)
  callback()
}

function secondAction(message) {
  console.log(message)
}

setTimeout(()=> firstAction(() => secondAction("i'm the secondAction"),"i'm the firstAction"),5000)


//FORMA1 DE EJECUTARSE
//setTimeout( () => firstAction( ()=> secondAction("soy el segundo dato") ,"soy el primer dato") ,3000 ) 

FORMA2 DE EJECUTARSE
setTimeout(() => {
  firstAction( () =>{
    secondAction("soy el segundo dato")
  }  , "Soy el primer dato" )
}, 3000);

FORMA 3 RESUMIDA, PARA EJECUTARSE

setTimeout(() => {
  //esto es una función anonima que por dentro tiene la función secondAction "ejecutandose de inmediato"
  firstAction( ()=> secondAction("soy el segundo dato"),"soy el primer texto")
}, 3000);

FORMA 4 RESUMIDA EN 1 SOLA LINEA PARA EJECUTARSE
setTimeout(firstAction( ()=> secondAction("texto 2"),"texto 1" ), 4000);
Al usar una función anónima, controlas exactamente cuándo se ejecuta secondAction,
asegurando que se ejecute después de imprimir "soy el primer texto".

EL ERROR EXPLICADO
Al hacer esto:
setTimeout(firstAction(secondAction("texto 2"),"texto1") ,4000)

Estas ejecutando inmediatamente "soy el segundo dato" en la consola. 
incluso se imprime sin la necesidad de que dentro de la función firstAction se escriba el callback
Aquí el ejemplo:

function firstAction(callback,data) {
  console.log(data)
  //callback
}
*/


