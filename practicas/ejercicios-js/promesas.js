/**
Definicion Callbacks: Es un función que se pasa como argumento a un operación asincrona, con la espectativa de que
dicha función sea ejecutada una vez esta termine
new Promise: sintaxis para crear una promesa, eso genera un nuevo objeto de tipo promesa
 */

//haciendo el ejemplo de código facilito con funciones flecha

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola mundo");
        return reject(new Error("Hubo un error"));
    }, 2000)
});

promise.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})



/*
Explicación de una promesa
Se crea una promesa como si fuera una función pero lleva "new Promise" y dentro de sus parentensis va una funcion
con 2 parametros, uno llamado "resolve y otro reject", para ejecutar la promesa


Ejercicio1
Has una promesa sencilla
const promesa = new Promise((resolve, reject) => {
    reject();
});

promesa.then(() => {
    alert("Exito!");
});

promesa.catch(() => {
    alert("No funciono!");
});

Ejercicio 2
Crea una promesa un poco más en forma
const promesa = new Promise((resolve, reject) => {
    $caja = true;
    if ($caja) {
        resolve();
    } else {
        reject();
    }
});

promesa.then(() => {
    alert("Exito!");
});

promesa.catch(() => {
    alert("No funciono!");
});

Ejercicio 3
Resume la promesa del ejercicio 2
const promesa = new Promise((resolve, reject) => {
    $caja = false;
    if ($caja) {
        resolve();
    } else {
        reject();
    }
});

promesa.then(() => {
    alert("Exito!");
}).catch(() => {
    alert("No funciono!");
});


Ejercicio 4
Crea una promesa utilizando la función setTimeOut
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        let caja = true;
        if (caja) {
            resolve();
        } else {
            reject();
        }
    }, 4000);

});

promesa.then(() => {
    alert("Exito!");
});

promesa.catch(() => {
    alert("No funciono!");
});

Ejercicio 5
Crea una promesa utilizando la función setTimeOut y mandando mensajes por los parentesis
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        let caja = false;
        if (caja) {
            resolve('Genial!Si funciono!');
        } else {
            reject('No funciono este rollo =( ');
        }
    }, 4000);

});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});

Ejercicio 6
Comprueba que tipo de dato es new Promise();
let promesa = new Promise((resolve, reject) => {

});
console.log(typeof promesa);

Ejercicio 7
Hacer una promesa al estilo Código Facilito
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola mundo");
        return reject(new Error("Hubo un error"));
    }, 2000)
});

promise.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
})


*/