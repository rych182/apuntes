
async function getTheAnswer() {
  return 42
}

async function logAnswer() {
  let answer = await getTheAnswer()
  console.log(answer)
}
logAnswer()


/*

TEORIA:
FUNCIONES ASYNCRONAS
-LAS "PROMESAS ASINCRONAS" no vienen a sustituir a las "promesas", trabajan en conjunto
-Las funciones asincronas van a esperar a que algo se cumpla para poder seguir ejecutando el proceso
que estemos trabajando.
-Una función "async" siempre va a devolver una "promesa"
-

EJEMPLO 0: 

async function getTheAnswer() {
  return 42
}
let answer = getTheAnswer();
console.log(answer)

Y puedes comprobarlo al ejecutar esa promesa con .then()

answer.then((data)=>{
  console.log(data)
})
--------------
UNA MANERA DE EJECUTARLO SERÍA: 

async function getTheAnswer() {
  return 42
}

async function logAnswer() {
  let answer = await getTheAnswer()
  console.log(answer)
}
logAnswer()


Las promesas "SI" vinieron a reemplazar a las callbacks pero las funciones asincronas no vinieron
a reemplazar a las promesas, si no que trabajan en conjunto 

Con la palabra reservada "async" ya decimos que esa función es asincrona y puedo empezar a trabajar 
las peticiones asincronas que generalmente van a ser dadas de una "promesa".

Para el manejo de errores lo que nos conviene es trabajar un bloque "try-catch"

---
-Las promesas y async/await son más fáciles de entender que los prototipos y las clases.
Las promesas y async/await se utilizan comúnmente para trabajar con tareas asíncronas en JavaScript,
lo que puede ser más fácil de entender que los conceptos más avanzados de los prototipos y las clases.

-Aprender promesas y async/await puede ayudarte a comprender mejor el flujo de control asíncrono en JavaScript,
lo que es fundamental para trabajar en cualquier tipo de proyecto web moderno. 
Los conceptos de los prototipos y las clases pueden ser más complicados y no es necesario comprenderlos al principio
para construir aplicaciones web básicas.
------------------------------------------------


    */