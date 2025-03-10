function cuadradoPromise(value) {
  if(typeof value !== "number"){
    return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
  } 

  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve({ //Aquí yo creo un objeto, para tener los 2 valores
        value,
        result: value * value
      })
    }, 3000);
  })
}

async function funcionAsincrona() {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(9)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(27)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(36)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    console.log("Fin Async function")
    
  } catch (error) {
    console.log(error)
  }
}

funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(9)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(27)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(36)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    console.log("Fin Async function")
    
  } catch (error) {
    console.log(error)
  }
}
/*

TEORIA:
FUNCIONES ASYNCRONAS
-LAS "PROMESAS ASINCRONAS" no vienen a sustituir a las "promesas", trabajan en conjunto
-Las funciones asincronas van a esperar a que algo se cumpla para poder seguir ejecutando el proceso
que estemos trabajando.
-Una función "async" siempre va a devolver una "promesa"
-Async Await se pueden usar en conjunto con las promesas
-El async await nos evita usar muchos .then() y no tener problemas con las llaves
-Si se te olvida declarar una función como "async", no podrás usar el await


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

ejercicio 1: consumir API jsonplaceholder usando async await
debe de publicar un post pasandole el valor por parametro
tip: crear una función 

async function getArticleById(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!response.ok) {
    throw "Algo salio mal"
  }
  let data = await response.json();
  console.log(data)
}
getArticleById(2)

--------------------------------------------------------
Ejercicio 2: reestructurar este código con async await

function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        if (response.ok) {
            return response.json()
        }
        throw "Ocurrió un error";
        
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

getUser(3)
.----------- CODIGO REESTRUCTURADO

async function getUser(id) {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response)=>{
      if (response.ok) {
          return response.json()
      }
      throw "Ocurrió un error";
      
  }).then((data)=>{
      console.log(data)
  }).catch((error)=>{
      console.log(error)
  })
}

----------------------------------
cÓDIGO REESTRUCTURADO DE NUEVO, SE RECOMIENDA ASIGNAR CADA PASO A UNA VARIABLE, 
COMO LO HARÍAS A UNA FUNCIÓN ASINCRONA TRADICIONAL

async function getArticleById(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!response.ok) {
    throw "Algo salio mal"
  }
  let data = await response.json();
  console.log(data)
}
getArticleById(2)

--------------------OTRA MANERA DE HACER EL EJERCICIO (try-catch)

async function getArticleByIdErrors(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
      throw 'hubo un error'
    }
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.warn(error);
  }
}

getArticleByIdErrors(9)

---------MISMO EJERCICIO MEZCLANDO PROMESAS Y ASYNC-AWAIT

async function getArticleByIdErrors(id) {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response)=>{
        return response.json()
      })
      console.log(data)
  } catch (error) {
    console.warn(error);
  }
}

getArticleByIdErrors(9)

------------------------------------------------------------------------------

EJERCICIO 3: reestructurar el ejercicio de número al cuadrado que usa promesas

function cuadradoPromise(value) {
  if(typeof value !== "number"){
    return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
  } 

  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve({ //Aquí yo creo un objeto, para tener los 2 valores
        value,
        result: value * value
      })
    }, 3000);
  })
}

-------------CODIGO REESTRUCTURADO 

NOTA: si tu pones un tipo de dato que no sea número, marcará error y no ejecutará las operaciones siguientes

function cuadradoPromise(value) {
  if(typeof value !== "number"){
    return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
  } 

  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve({ //Aquí yo creo un objeto, para tener los 2 valores
        value,
        result: value * value
      })
    }, 3000);
  })
}

async function funcionAsincrona() {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(9)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(27)
    console.log(`Async function: ${obj.value} , ${obj.result}`);

    obj = await cuadradoPromise(36)
    console.log(`Async function: ${obj.value} , ${obj.result}`);
    
    console.log("Fin Async function")
  } catch (error) {
    console.log(error)
  }
}

funcionAsincrona()
-----------------------------------------------
    */