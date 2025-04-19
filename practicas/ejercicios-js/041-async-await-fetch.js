/*

Ejercicio 0: diferencia entre promesas y async await 

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

*/