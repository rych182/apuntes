// Crear una nueva promesa con nombres personalizados para los parámetros
let myPromise = new Promise((cumplir, rechazar) => {
  let condition = true; // Puedes cambiar esta condición para ver diferentes resultados

  if (condition) {
    cumplir("La promesa se cumplió con éxito!");
  } else {
    rechazar("Hubo un error al cumplir la promesa.");
  }
});

// Usar la promesa
myPromise
  .then((successMessage) => {
    console.log(successMessage); // Esto se ejecutará si la promesa se cumple
  })
  .catch((errorMessage) => {
    console.error(errorMessage); // Esto se ejecutará si la promesa se rechaza
  });


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
--------------------------------------------------------------------

Ejercicio 1: Explicación del porque es importante un CallBack
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
Ejercicio 2:crea 2 funciones, una que sume y otra que reste, 

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
Ejercicio 3: Otra manera de pasar por parametro una función

let inicio = function (valor,callback) {
  //la función anónima aquí se le llama "parametro callback" y recibe el valor del parametro valor en la linea 123,
  //y la linea 123, lo recibe de la linea 128, donde escribes el nombre
  callback(valor);
}
inicio("fulanito",function(valor){
  console.log(`Bienvenido ${valor}`)
})

-------------------------------------------------------------------------------
Ejercicio 4 de un callback recibiendo parametros, mientras se ejecuta dentro de la función
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
------------------------------------------------------------------------
Ejercicio 5: callback por evento
Para esto creamos un boton en html que tenga un id

//función que sirve para que puedas seleccionar un id, clase o etiqueta html
document.querySelector('#btn').addEventListener('click',()=>{
	console.log("Has dado click y se ha activado ka función callback que dispara este console.log")
})

----------------------------------------------------------------------------
Ejercicio 6: callback por evento, ejemplo 2
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
Ejercicio 7: probando como no siempre las funciones callback tardan lo mismo

console.time("prueba");
setTimeout(()=> console.timeEnd("prueba"),3000)

---------------------------------------------------------------------------------------
Ejercicio 8: creando un callback utilizando funciones predefinidas del lenguaje
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
Ejercicio 9: creando nuestro propio forEach
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
Ejercicio 10: creo una función callback que reciba 2 dígitos y los sume

const sum = (a,b,callback) => {
  callback(a + b);
};

sum(1,2,(result)=>{
  console.log("result: ",result)
})
------------------------------------------------------------------
Ejercicio 11: Haz que el alumno encuentre el error para que imprima los datos(obvio se necesita un callback)
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
Ejercicio 12: hacer un callback que muestre el dato en el dom

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
Ejercicio 13: Crea una función callback que reciba objetos y los recorra,
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
Ejercicio 14: ejemplo de callback hell
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
Ejercicio 15: crea una función callback que multiplique 2 valores y use una función flecha resumida

let operacion = (num1,num2,callback) => {
  return callback(num1,num2)
}
console.log(operacion(2,4,(a,b)=> a*b))
---------------------------------------------------------------------------

-Las funciones son ciudadanos de primera clase
-que es una high order function

------------------------------------------------------------------------------------------


CALLBACKS


*/

