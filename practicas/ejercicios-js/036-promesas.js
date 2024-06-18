/*
function leerArchivo(nombreArchivo, callback) {
    // Simulamos la lectura del archivo después de 2 segundos
    setTimeout(function() {
      console.log("Lectura del archivo '" + nombreArchivo + "' completada.");
      // Llamamos al callback una vez que la lectura del archivo está completa
      callback();
    }, 2000);
  }
  
  // Definimos una función de callback
  function callbackLecturaCompleta() {
    console.log("Operación de callback completada.");
  }
  
  // Llamamos a la función leerArchivo y pasamos la función de callback
  leerArchivo("ejemplo.txt", callbackLecturaCompleta);
  
  console.log("Operación principal continúa mientras se lee el archivo.");
  ----------------------------------------------------------------------------------------
  Ejercicio 1: ejercicio sencillo de un callback

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


  */

