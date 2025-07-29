
/*


--------------------------------------------------------------------------------------------
-Las promesas y async/await son más fáciles de entender que los prototipos y las clases.
Las promesas y async/await se utilizan comúnmente para trabajar con tareas asíncronas en JavaScript,
lo que puede ser más fácil de entender que los conceptos más avanzados de los prototipos y las clases.

-Aprender promesas y async/await puede ayudarte a comprender mejor el flujo de control asíncrono en JavaScript,
lo que es fundamental para trabajar en cualquier tipo de proyecto web moderno. 
Los conceptos de los prototipos y las clases pueden ser más complicados y no es necesario comprenderlos al principio
para construir aplicaciones web básicas.
-------------------------------------------------------------------------------------------

Async: crea una función que retorna una promesa
Await: crea una función "asincrona" que espera una promesa
Permite que tu escribas "código asincrono" de una "manera sincrona"
Todo lo que sigue a await se coloca en una cola de eventos


TEORIA:
FUNCIONES ASYNCRONAS
-LAS "PROMESAS ASINCRONAS" no vienen a sustituir a las "promesas", trabajan en conjunto
-Las funciones asincronas van a esperar a que algo se cumpla para poder seguir ejecutando el proceso
que estemos trabajando.
-Una función "async" siempre va a devolver una "promesa"
-Async Await se pueden usar en conjunto con las promesas
-El async await nos evita usar muchos .then() y no tener problemas con las llaves
-Si se te olvida declarar una función como "async", no podrás usar el await



Las promesas "SI" vinieron a reemplazar a las callbacks pero las funciones asincronas no vinieron
a reemplazar a las promesas, si no que trabajan en conjunto 

Con la palabra reservada "async" ya decimos que esa función es asincrona y puedo empezar a trabajar 
las peticiones asincronas que generalmente van a ser dadas de una "promesa".

Para el manejo de errores lo que nos conviene es trabajar un bloque "try-catch"






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

------------------------------------------------------------------------------

EJERCICIO 1: reestructurar el ejercicio de número al cuadrado que usa promesas

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
    
Ejercicio 2: 


function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("Tu paseaste al perro")
      } else {
        reject("No paseaste al perro")
      }
    }, 1500);
  })
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = true;

      if (cleanedKitchen) {
        resolve("Limpiaste la cocina")
      } else {
        reject("No has hecho nada")
      }
    }, 1500);
  })
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookOutTrash = false;

      if (tookOutTrash) {
        resolve("sacaste la basura")
      } else {
        reject("no has hecho nada")
      }
    }, 1500);
  })
}

async function doChores() {

  try {
  const walkDogResult = await walkDog();
  console.log(walkDogResult) 

  const cleanKitchenResult = await cleanKitchen()
  console.log(cleanKitchenResult)

  const takeOutTrashResult = await takeOutTrash()
  console.log(takeOutTrashResult)

  console.log("Termine todo")
  } catch (error) {
    console.error(error)
  }
}

doChores()
 Así se ejecutaría la promesa
walkDog().then(value =>{console.log(value); return cleanKitchen()})
          .then(value =>{console.log(value); return takeOutTrash()})
          .then(value =>{console.log(value); console.log("Terminaste todo")})
          .catch(error => console.error(error))
--------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------
Ejercicio 3: ejercicio de async-await con función flecha 

Hace la petición
Si no poner el "async" y el "await" el estado de la promesa marca PENDING

Al usar async-await le estamos diciendo que esta funciópn no está coordinada con el tiempo
y que NO se va a ejecutar "EN ORDEN SECUENCIAL"
La palara "await" significa que tenemos que esperar por esa respuesta, para continuar con el
flujo natural.

const sumar = (num1,num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let suma = num1 + num2
      if (suma >100) {
        resolve(suma)
      } else {
        reject(`Error al procesar los datos ó el número es menor a 100`)
      }
    }, 2000);
  })
}


const llamarFuncion = async() =>{
  try {
    const res = await sumar(12,8);
    console.log(res) 
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

llamarFuncion()

-------------------------------------------------
Ejercicio 4: función asincrona con mala practica

let productos = [
  {
    nombre: "Computadora Gaming",
    marca: "Asus",
    precio: 1200
  },
  {
    nombre: "Tablet",
    marca: "Samsung",
    precio: 300
  },
  {
    nombre: "Camara Reflex",
    marca: "Canon",
    precio: 600
  }
]

function conseguirProductos() {
  return new Promise((resolve, reject) => {
    console.log("Cargando productos...") 
    setTimeout(() => {
      resolve(productos)
    }, 3500); 
  })
}

async function getMisProductos() {
  let mis_productos = await conseguirProductos()
  console.log(mis_productos)  
}

getMisProductos()

          */


