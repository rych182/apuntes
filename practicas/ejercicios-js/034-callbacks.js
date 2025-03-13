
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
Una función que recibe otra función como valor, pasa como parametro y luego se ejecuta
dentro de la función, para completar algun tipo de rutina

Un Callback puede usarse tanto para un codigo sincrono como asincrono

La mayoría del tiempo, tu no vas a hacer esto, lo van a hacer los paquetes/librerías

CASI TODO EN JAVASCRIPT RECIBE UN CALLBACK
Los Callback se usan mucho en NodeJS(backend)

Los callback sirven para que esperes el resultado por si necesitas algo del proceso anterior
en el siguiente proceso.

Javascript es un lenguaje interpretado y en los lenguajes interpretados se
el código se ejecuta de arriba a abajo y el resultado se devuelve inmediatamente

EXPLICACION JON MIRCHA

Los callback son ciudadanos de "primer ORDEN", porque podemos hacer casi todo:
1-simular la orientacion de objetos a traves de funciones constructoras
2-retornar una funcion como el valor de retorno de otra
3-Pasar como parametros funciones
4-crear funciones autoinvocadas anonimas

El callback es el mecanismo que tiene javascript para poder trabajar con la asincronia

RECURSIVIDAD se ve en la asincronia y callbacks
-Las funciones son ciudadanos de primer orden
-que es una high order function

¿Porque necesitamos los callbacks?
Porque cuando interactuamos con otros dispositivos(computadoras), no siempre tendremos de inmediato la 
respuesta, si no que la vamos a tener después de X cantidad de tiempo

Un ejemplo son los LOADERS en los sitios webs, o los productos terminandose de mostrar en los e-commerce

Callback hell: muchos callback anidados, el problema es que si yo quiero manipular el error
lo tengo que hacer en cada una de las funciones

VARIABLES DE ENTORNO
Dependen de donde se ejecuten, van a tener un valor distinto
Por ejemplo, puede ser que estés en localhost:5173, pero cuando este en 
producción cambie la URL.
EL paquete más famoso se llama DOTENV, estas variables de entorno se guardan
en un archivo .ENV

Dos casos comunes son:
La api key es una llav de acceso
API_KEY=EstaEsMiLlavePrivada
Aqui nosotros hacemos las peticiones
y cambiamos la variable de entorno que sería "localhost"
BASE_URL=http://localhost:123123/cursos/fulano

se recomienda hacer una copia del archivo .env y se llame .env.template
el archvivo .env no se sube, lo agregas a tu archivo .gitignore para
que no se suba a github

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

---------------------------------------------------------------
Ejercicio 0: Hacer un callback "sincrono" sencillo que imprima texto
function texto(params) {
  console.log("soy un callback")
}

function otraFuncion(callback) {
  callback()
}

otraFuncion(texto)
-----------------------------------------------------------------
Ejercicio 1: un callback sincrono, ahora usando funciones flecha

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
Ejercicio 2: otro callback sincrono usando template strings 

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

Para arreglarlo lo hacemos con esot:

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

Ejercicio 4: probando como no siempre las funciones callback tardan lo mismo

console.time("prueba");
setTimeout(()=> console.timeEnd("prueba"),3000)
----------------------------------------------------------------------------

Ejercicio 5:crea 2 funciones, una que sume y otra que reste, 

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
Ejercicio 6: Otra manera de pasar por parametro una función

let inicio = function (valor,callback) {
  callback(valor);
}
inicio("fulanito",function(valor){
  console.log(`Bienvenido ${valor}`)
})
----------------------------------------------------------------
Ejercicio 7: creo una función callback que reciba 2 dígitos y los sume

const sum = (a,b,callback) => {
  callback(a + b);
};

sum(1,2,(result)=>{
  console.log("result: ",result)
})

--------------------------------------------------------------
Ejercicio 8: Hazme una función callback que al iniciarze tarde 5seg en ejecutarsee imprima texto
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

-----------------------------------------------------------------

Ejercicio 9: Hacer el ejercicio anterior pero la función callback debe de
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

--------------------------------------------------------------------------------------------------
Exercise 10:Hacer el ejercicio anterior pero la función callback debe de recibir 3 parametros,
la función, texto y otra función callback. También para ejecutar la función
callback, debes utilizar un setTimeout


function firstAction(callback,message,anotherCallback) {
  console.log(message)
  callback()
  setTimeout(() => {
    anotherCallback()    
  }, 3000);
}

function secondAction(message) {
  console.log(message)
}

function thirdAction(message) {
  console.log(message)
}

setTimeout(() => {
  firstAction( () => {
    secondAction("segunda acción")
  },"primera accion", () =>{
    thirdAction("tercera acción")
    })
}, 3000);
---------------------------------------------------------------------
Ejercicio 11: crea una función callback que multiplique 2 valores y use una función flecha resumida en la ejecución

let operacion = (num1,num2,callback) => {
  return callback(num1,num2)
}
console.log(operacion(2,4,(a,b)=> a*b))

-----------------------------------------------------------------
Ejercicio 12:  Haciendo un función que reciba 2 parametros, un número y una función, esta función
que se recibe debe de elevar al cuadrado el valor que se le paso como parametro, 
después de 3 segundos.

function cuadradoCallback(value,callback) {
  setTimeout(() => {
    callback(value, value * value)
  }, 3000);
}

cuadradoCallback(4,(value,result)=>{
  console.log("inicia callback")
  console.log(`valor: ${result}`)
})

-------------------------------------------------------------------------
Ejercicio 13: creando un callback utilizando funciones predefinidas del lenguaje
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
----------------------------------------------------------------
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

-------------------------------------------------------------------------------------------------------------
Ejercicio 15: hacer el ejercicio pasado imprimiendo los cuadrados de 4 dígitos, ocasionando un callback hell
function cuadradoCallback(value,callback) {
  setTimeout(() => {
    callback(value, value * value)
  }, 3000);
}

cuadradoCallback(4,(value,result)=>{
  console.log("inicia callback")
  console.log(`valor: ${result}`)

  cuadradoCallback(5,(value,result)=>{
    console.log(`valor: ${result}`)
  
    cuadradoCallback(6,(value,result)=>{
      console.log(`valor: ${result}`)
      
      cuadradoCallback(7,(value,result)=>{
        console.log(`valor: ${result}`)
        console.log("Termina el callback hell")
      })
    })
  })
})

-------------------------------------------------------------------------------
Ejercicio 16: Crea un callback que reciba 2 parametros, el primero será un nombre
, el segundo la función callback.
Debe imprimir: "Obteniendo los post de ${usuario}", posteriormente en un segundo renglon 2 segundos después, 
debe de imprimir algún dato dentro de un array
Mientras se ejecuta dentro de la función

NOTA:La mayoría del tiempo, tu no vas a hacer esto, lo van a hacer los paquetes/librerías

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

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

--------------------------------------------------------------------------------------------
Ejercicio 17: creando nuestro propio forEach

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

------------------------------------------------------------------
Ejercicio 18: Haz que el alumno encuentre el error para que imprima los datos(obvio se necesita un callback)
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

----------------------------------------------------------------------
Ejercicio 19: Crea una función callback que reciba objetos y los recorra,
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

----------------------------------------------------------------


*/

