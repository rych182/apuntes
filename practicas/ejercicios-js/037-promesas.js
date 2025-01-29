




/*
LAS PROMESAS REQUIEREN MUCHA PRACTICA

1-instanciar(se mete una función dentro)
2-un if-else para el resolve y reject
3-ejecutar la promesa con un .then o .catch


function miOperacionConCallback(callback) {
  // Simulamos una operación asíncrona
  setTimeout(() => {
    callback(42); // Llamamos al callback con el valor 42
  }, 1000); // Retraso de 1 segundo
}

// Uso del callback
miOperacionConCallback((resultado) => {
  console.log("Resultado:", resultado); // Imprime: Resultado: 42
});


---------------------------------------------------------------------------------------------------------
TEORIA

Ania Kubów
"¡¡¡¡¡una promesa en JavaScript es un objeto!!!!!"" Que representa la finalización o el fracazo
de una operación asincrona".


CHILENO:
Espera 2 respuestas, que cumplas tu promesa o que no la cumplas
Es un objeto que representa la terminación o el fracaso de una operacion asincrona


Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla)
de una operación asíncrona y su valor resultante. 
Las promesas son una forma de manejar operaciones asíncronas en JavaScript de manera más legible 
y manejable que el uso tradicional de callbacks, evitando problemas como el "callback hell".


Una promesa la podemos ver como un if-else, el "resolve" es como un "return positivo" y el "reject"
es como un "return negativo".
Tanto el metodo resolve como el metodo reject son metodos estaticos, significa que no necesito crear
una instancia para poder utilizarlos

JON MIRCHA: Las promesas ya nos convienen cuando tenemos una concatenacion de varios procesos asincronos.

Hoy en día muchas API'S trabajando retornando promesas.
Fetch es la forma moderna de "hacer AJAX", todo lo trabaja internamente en un objeto de PROMESA de tal manera que 
para ir trabajando todos los datos que te devuelve una petición ajax mediante FETCH, vas a tener que utilizar estos
metodos ".then" y ".catch"


.then es el siguiente bloque que se va a ejecutar una vez que se cumpla la función inicial
puedes resumir esta linea quitandole los parentesis al parametro
Podemos tener tantos metodos .then como necesitemos
el .then() recibe una función que recibe la parte positiva de la promesa, osea el resolve
//y en el resolve hemos construido un objeto, por eso puse como parametro "miObjeto"
Aquí los .then() se encuentran al mismo nivel, no como los callback que tienen su callbackhell


Si solo me quedo en un nivel, conviene el callback.
Las "promesas" solo convienen cuando tenemos una concatenación de varios procesos


.catch() es el metodo que va a capturar el error resultante del reject


LA EVOLUCION de las promesas.
Un código mejor ordenado y sobre todo
UNA MEJOR MANIPULACIÓN DE LOS ERRORES y no tienes que estar repitiendo la validación del error
En los "callbacks" en cada ejecución tienen que estar validando el error
Las promesas ya tienen su propio mecanismo para rechazar en cualquier parte del flujo
donde se de un error, mandarlo y trabajarlo

DIFERENCIAS ENTRE PROMESAS Y CALLBACKS

PROMESAS:
-Hechas ESPECIFICAMENTE para "operaciones asincronas"
-Puedes encadenar operaciones usando el metodo .then()
-las devoluciones siempre se llaman en orden estricto en el que
se colocan en una cola de eventos
-el manejo de errores es mucho más fácil al usar .catch()
-evitan la inversion de control a las devoluciones de llamada que
pierden el control total de como se ejecutaran las funciones al pasar
una devolucion de llamada a un tercero

CALLBACKS
-Encadenar operaciones es mas difícil y desordenado


EJEMPLO: 

fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)            AQUÍ SE VALIDA EL ERROR
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)          AQUÍ SE VALIDA EL ERROR
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)                  AQUÍ SE VALIDA EL ERROR
            })
          }.bind(this))
        }
      })
    })
  }
})
-----------------------------------------------------------------------------------------------------------------

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
EXPLICACIÓN DE PORQUE USAR PROMESAS CUANDO HAY UN RETRAZO DE INFORMACIÓN
(GENERANDO UN ERROR)

const estudiantes = [
  {
    name: "fulano",
    age: 25
  },
  {
    name: "mengana",
    age: 28
  }
]

const datos = () => {
  setTimeout(() => {
    return students
    //hay un retrazo pequeñisimo, pero el console.log se ejecuta al instante
  }, 50);
  
  return estudiantes
}

//sale "undifine" porque hay un retrazo al usar el setTimeout, y el console.log se ejecuta al instante
//POR LO TANTO, AUN NO TIENE LOS DATOS DE LA EJECUCION y por eso sale undifine
//Si quitas el setTimeout, si te muestra los datos
console.log(datos())

===
AQUÍ ESTA EL CÓDIGO RESUELTO

const estudiantes = [
  {
    name: "fulano",
    age: 25
  },
  {
    name: "mengana",
    age: 28
  }
]

const datos = () => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve(estudiantes) 
      //hay un retrazo pequeñisimo, pero el console.log se ejecuta al instante
    }, 50);
  } )
}

datos()
  .then( (datos)=>{
    console.log(datos)
  })


------------------------------------------------------------------------------------

Ejercicio 0: ejercicio corto de una promesa

COMO SERIA EN CALLBACK

function miOperacionConCallback(callback) {
  // Simulamos una operación asíncrona
  setTimeout(() => {
    callback(42); // Llamamos al callback con el valor 42
  }, 1000); // Retraso de 1 segundo
}

// Uso del callback
miOperacionConCallback((resultado) => {
  console.log("Resultado:", resultado); // Imprime: Resultado: 42
});

=======================================

// Ejemplo de promesa simple que se ejecute después de 2segundos
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

 // dentro de .then() SIEMPRE debe haber una función que se ejecutará cuando la promesa
 //se resuelva correctamente. 
 //Esta función toma un parámetro que representa el valor con el que se resolvió la promesa.

ASÍ SERÍA EL CÓDIGO SI LA OPERACIÓN DIERA UN RESULTADO NEGATIVO 

let miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona
  setTimeout(() => {
      reject(42); 
  }, 1000); 
});

//console.log(miPromesa)
miPromesa.catch( ()=>{
  console.log("hubo un error")
})

ASI SERÍA LA OPERACIÓN COMPLETA

function miOperacionConPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; 
      if (exito) {
        resolve(42); 
      } else {
        reject("Ocurrió un error"); 
      }
    }, 1000);
  });
}


miOperacionConPromesa()
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


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

  Ejercicio 3: haciendo un callback con una Promesa(y la promesa solo recibe un valor)

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

  ----------------------------------------------------------------------------------------------------------
  Ejercicio 4: ejercicio sencillo de un callback hell arreglado con Promises, debe imprimir un mensaje cada segundo durante 3 segundos

  EL CALLBACK HELL
function firstOperation(callback) {
  setTimeout(() => {
    console.log("Primera operación completada");
    callback();
  }, 1000);
}

function secondOperation(callback) {
  setTimeout(() => {
    console.log("Segunda operación completada");
    callback();
  }, 1000);
}

function thirdOperation(callback) {
  setTimeout(() => {
    console.log("Tercera operación completada");
    callback();
  }, 1000);
}

// Uso de callbacks anidados (callback hell)
firstOperation(() => {
  secondOperation(() => {
    thirdOperation(() => {
      console.log("Todas las operaciones completadas");
    });
  });
});

-----------------------------------------------------------------------
  CON PROMESAS 

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

---------------------------------------------------------------------------------------------------------------------------------------


------------------------------------------------------------------------------------------------------------------

Ejercicio 8: Ejercicio de Jon Mircha(explicación de evolución de los callbacks a las promesas)
Ejercicio donde atrapamos el error en cualquiera de las ejecuciones
Esto es la evolución de las promesas, un código mejor ordenado y sobre todo
UNA MEJOR MANIPULACIÓN DE LOS ERRORES y no tienes que estar repitiendo la validación del error
En los "callbacks" en cada ejecución tienen que estar validando el error.
Las promesas ya tienen su propio mecanismo para rechazar en cualquier parte del flujo
donde se de un error, mandarlo y trabajarlo

EJEMPLO: 

fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)  AQUÍ SE VALIDA EL ERROR
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err) AQUÍ SE VALIDA EL ERROR
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)  AQUÍ SE VALIDA EL ERROR
            })
          }.bind(this))
        }
      })
    })
  }
})



//Ejercicio de Jon Mircha 
//ya no necesitamos el segundo parametro(que era una funcion callback por si lo olvido en el futuro)
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
//Si quieres que marque ERROR, pon algo que no sea un número
cuadradoPromise(0)
//.then es el siguiente bloque se va a ejecutar una vez que se cumpla la función inicial
//puedes resumir esta linea quitandole los parentesis al parametro
//Podemos tener tantos metodos .then como necesitemos
//el .then() recibe una función que recibe la parte positiva de la promesa, osea el "resolve"
//y en el resolve hemos construido un objeto, por eso puse como parametro "miObjeto"
  .then( (miObjeto) => {
    //console.log(miObjeto);
    console.log("Inicio Promise");
    console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
    //retorna la ejecución de "cuadradoPromise" solo que con otro valor
    return cuadradoPromise(4)
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