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

---------------------------------------------------------------------------------------------------



*/