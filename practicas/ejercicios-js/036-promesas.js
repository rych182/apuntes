/*

TEORIA

Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla)
de una operación asíncrona y su valor resultante. 
Las promesas son una forma de manejar operaciones asíncronas en JavaScript de manera más legible 
y manejable que el uso tradicional de callbacks, evitando problemas como el "callback hell".

una promesa en JavaScript es un objeto.
Específicamente, una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
  
Características Clave de una Promesa

    Estados de la Promesa:
        Pending (pendiente): Estado inicial, la operación aún no se ha completado.
        Fulfilled (cumplida): La operación se completó con éxito.
        Rejected (rechazada): La operación falló.

    Métodos Principales:
        then(onFulfilled, onRejected): Registra callbacks para manejar los casos en que la promesa se cumple o se rechaza.
        catch(onRejected): Registra un callback para manejar el caso en que la promesa se rechaza.
        finally(onFinally): Registra un callback para manejar la limpieza después de que la promesa se haya cumplido o rechazado, sin importar el resultado.

        
        // Crear una nueva promesa
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simula una condición

  if (success) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Error en la operación.");
  }
});

// Usar la promesa
myPromise
  .then((message) => {
    console.log(message); // Esto se ejecuta si la promesa se cumple
  })
  .catch((error) => {
    console.error(error); // Esto se ejecuta si la promesa se rechaza
  });

----------------------------------------------------------------------------
Ejercicio 0: ejercicio corto de una promesa

// Ejemplo de promesa simple
let miPromesa = new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona
    setTimeout(() => {
        resolve(42); // Resolvemos la promesa con el valor 42
    }, 1000); // Retraso de 1 segundo
});

// Utilizando .then() para manejar la resolución de la promesa
miPromesa.then((resultado) => {
    console.log("La promesa se resolvió con:", resultado); // Imprimirá: La promesa se resolvió con: 42
});

 // dentro de .then() siempre debe haber una función que se ejecutará cuando la promesa
 //se resuelva correctamente. 
 //Esta función toma un parámetro que representa el valor con el que se resolvió la promesa.
-----------------------------------------------------------------------------
Ejercicio 1: ejercicio sencillo de una Promesa:

        // Crear una nueva promesa
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simula una condición

  if (success) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Error en la operación.");
  }
});

// Usar la promesa
myPromise
  .then((message) => {
    console.log(message); // Esto se ejecuta si la promesa se cumple
  })
  .catch((error) => {
    console.error(error); // Esto se ejecuta si la promesa se rechaza
  });
---------------------------------------------------------------------------------
Ejercicio2: ejercicio sencillo de una promesa
  // Creamos una función que devuelve una promesa
function hacerAlgo() {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona
        setTimeout(() => {
            const exito = true; // Supongamos que la operación tuvo éxito
            if (exito) {
                resolve("Operación exitosa"); // Resolvemos la promesa con un mensaje
            } else {
                reject("Operación fallida"); // Rechazamos la promesa con un mensaje de error
            }
        }, 2000); // Simulamos un retardo de 2 segundos
    });
}

// Ejecutamos la función y encadenamos el método .then() para manejar el resultado
hacerAlgo()
    .then((resultado) => {
        console.log("Resultado:", resultado); // Manejamos el resultado exitoso
    })
    .catch((error) => {
        console.error("Error:", error); // Manejamos cualquier error que pueda ocurrir
    });

  ----------------------------------------------------------------------------------------
  Ejercicio 3: ejercicio sencillo de un callback hell arreglado con Promises

  function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera operación completada");
      resolve();
    }, 1000);
  });
}

function secondOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda operación completada");
      resolve();
    }, 1000);
  });
}

function thirdOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera operación completada");
      resolve();
    }, 1000);
  });
}

// Uso de promesas para evitar callback hell
firstOperation()
  .then(() => secondOperation())
  .then(() => thirdOperation())
  .then(() => {
    console.log("Todas las operaciones completadas");
  });
------------------------------------------------------------------------------------
  Ejercicio 4: haciendo un callback con una Promesa

  const asincroniaConCallBack =(num1,num2,callback) => {
  const resultado = num1 + num2;
  return setTimeout( () =>{
    callback(resultado);
  },500)
}

const asincroniaConPromesas = (num3,num4) =>{
  const resultado = num3 + num4;
  return new Promise(resolve =>{//una promesa resumida porque solo recibe un valor por parametro
    setTimeout(() => {
      resolve(resultado);
    },500)
  })
}

asincroniaConCallBack(1,2,(parametro)=>{
  console.log(parametro)
})

asincroniaConPromesas(3,4)
  .then(resultado => console.log(resultado))
------------------------------------------------------------
  */

