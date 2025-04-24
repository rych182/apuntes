/*

ejercicio 0: consumir API jsonplaceholder usando async await
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

--------------------------------------------------------------------------------------

Ejercicio 1: diferencia entre promesas y async await 

function traditionalFn() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response)=>{
        return response.json();
    }).then((data)=>{
        console.log('traditional Fetch',data)
    })
    console.log('Traditional Message')
}
//traditionalFn()

//una función asincrónica que espera a que se resuelva el código asincrónico antes de continuar
async function asyncfn() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log('Asyncs Fetch',data);
    });
    console.log('Async Message')
}
asyncfn()
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
.----------- CODIGO REESTRUCTURADO Utilizando async-await y comprobando, que recibimos una promesa

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

---------MISMO EJERCICIO MEZCLANDO PROMESAS Y ASYNC-AWAIT USANDO TRY-CATCH

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


*/