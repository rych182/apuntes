/*

TEORIA:
FUNCIONES ASYNCRONAS
LAS "PROMESAS ASINCRONAS" no vienen a sustituir a las "promesas", trabajan en conjunto

Las funciones asincronas van a esperar a que algo se cumpla para poder seguir ejecutando el proceso
que estemos trabajando.

Las promesas "SI" vinieron a reemplazar a las callbacks pero las funciones asincronas no vinieron
a reemplazar a las promesas, si no que trabajan en conjunto 

Con la palabra reservada "async" ya decimos que esa función es asincrona y puedo empezar a trabajar 
las peticiones asincronas que generalmente van a ser dadas de una "promesa".

Para el manejo de errores lo que nos conviene es trabajar un bloque "try-catch"



------------------------------------------------
Ejercicio 1: reestructurar el código del ejercicio 8 de promesas del archivo 036-promesas.js
y la voy a trabajar con una "función asincrona"


function cuadradoPromise(value) {
    //revisa si el tipo de dato es diferente a un número, rechaza la promesa entonces retornara el
    // constructor PROMISE y usamos el metodo reject que manda este mensaje
    if(typeof value !== "number"){
      //Este error te sirve
     return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
    } 
      //retorna una instancia del objeto Promise
      //Una promesa recibe una función con 2 valores(resolve, reject)
      return new Promise( (resolve,reject) => {
        setTimeout(() => {
          //resolve es como el return positivo de la promesa en caso de que se cumpla
          //reject es como el return negativo
          resolve({ //Aquí yo creo un objeto, para tener los 2 valores
            //value: value,
            value,
            result: value * value
          })
        }, 3000);
      })
    }
    
    //Le pones 0 porque es el primer número
    cuadradoPromise(0) //Si quieres que marque ERROR, pon algo que no sea un número
    //.then es el siguiente bloque se va a ejecutar una vez que se cumpla la función inicial
    //puedes resumir esta linea quitandole los parentesis al parametro
    //Podemos tener tantos metodos .then como necesitemos
    //el .then() recibe una función que recibe la parte positiva de la promesa, osea el resolve
    //y en el resolve hemos construido un objeto, por eso puse como parametro "miObjeto"
      .then( (miObjeto) => {
        //console.log(miObjeto);
        console.log("Inicio Promise");
        console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
        return cuadradoPromise(4) //retorna la ejecución de "cuadradoPromise" solo que con otro valor
      })
      //Los parentesis no son necesarios por que solo es 1 parametro: "miObjeto"
      //Aquí los .then() se encuentran al mismo nivel, no como los callback que tienen su callbackhell
      .then( (miObjeto) =>{
        console.log("Inicio Promise");
        console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
        return cuadradoPromise(5)
      })
      .then( (miObjeto) =>{
        console.log("Inicio Promise");
        console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
        return cuadradoPromise("hola")
      })
      .then( (miObjeto) =>{
        console.log("Inicio Promise");
        console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
        return cuadradoPromise(7)
      })
      //el metodo .catch es el que captura el error, resultante del reject
      .catch('error')


*/

function cuadradoPromise(value) {
    if(typeof value !== "number"){
     return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
    } 
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
          resolve({
            value,
            result: value * value
          })
        }, 3000);
      })
    }


//con esto ya puedo trabajar las funciones asincronas dadas de una promesa
async function funcionAsincronaDeclarada() {
    try {
      console.log('Inicio Async Function');
      let obj = cuadradoPromise(0)//la función "devuelve un OBJETO"
    } catch (error) {
      
    }
}


    