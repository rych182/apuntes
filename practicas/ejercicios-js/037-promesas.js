


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

Una promesa solo puede tener éxito o fracazar una unica vez.
No puede tener éxito o fallar por una 2da vez,
ni cambiar de éxito a fallo posteriormente o viceversa


Una promesa la podemos ver como un if-else, el "resolve" es como un "return positivo" y el "reject"
es como un "return negativo".
Tanto el metodo resolve como el metodo reject son metodos estaticos, significa que no necesito crear
una instancia para poder utilizarlos

LA PROMESA SE PUEDE COMPORTAR COMO UNA CLASE: 

JON MIRCHA: Las promesas ya nos convienen cuando tenemos una concatenacion de varios procesos asincronos.

Hoy en día muchas API'S trabajando retornando promesas.
Fetch es la forma moderna de "hacer AJAX", todo lo trabaja internamente en un objeto de PROMESA de tal manera que 
para ir trabajando todos los datos que te devuelve una petición ajax mediante FETCH, vas a tener que utilizar estos
metodos ".then" y ".catch"

Para acceder a un valor de la promesa, primero debes de ejecutar el metodo .then
LOS ".THEN()" SON FUNCIONES SINCRONAS, SI QUIERES DEVOLVER ALGO ASINCRONO DEBES "RETORNAR" UNA PROMESA

.then es el siguiente bloque que se va a ejecutar una vez que se cumpla la función inicial
puedes resumir esta linea quitandole los parentesis al parametro
Podemos tener tantos metodos .then como necesitemos
Aquí los .then() se encuentran al mismo nivel, no como los callback que tienen su callbackhell al anidarlos

Si solo me quedo en un nivel, conviene el callback.
Las "promesas" solo convienen cuando tenemos una concatenación de varios procesos

.catch() es el metodo que va a capturar el error resultante del reject


LA EVOLUCION de las promesas.
Es un código mejor ordenado y sobre todo tiene
UNA MEJOR MANIPULACIÓN DE LOS ERRORES y no tienes que estar repitiendo la validación del error
En los "callbacks" en cada ejecución tienes que estar validando el error
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


BUENAS PRACTICAS:
-No concatenar más de 10 promesas
-No usar reject sin el catch
-Si tu función retorna una promesa, siempre PONER EL RETURN, si no , no funcionara

TIPS:
-puede haber varios catch si quieres que el error que arroje sea distinto

CALLBACKS
-Encadenar operaciones es mas difícil y desordenado

La ventaja de las promesas sobre async await, es que se puede reutilizar más y vamos a avanzar más rápido
Las promesas se pueden ir encadenando, osea promesas que devuelvan otras promesas, para hacer más sencillo el manejo de errores
El setTimeout, lo usamos para simular "llamadas al servidor" ó "escribimos en base de datos" porque tardan un poco en respondernos

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
  
-Las promesas y async/await son más fáciles de entender que los prototipos y las clases.
Las promesas y async/await se utilizan comúnmente para trabajar con tareas asíncronas en JavaScript,
lo que puede ser más fácil de entender que los conceptos más avanzados de los prototipos y las clases.

-Aprender promesas y async/await puede ayudarte a comprender mejor el flujo de control asíncrono en JavaScript,
lo que es fundamental para trabajar en cualquier tipo de proyecto web moderno. 
Los conceptos de los prototipos y las clases pueden ser más complicados y no es necesario comprenderlos al principio
para construir aplicaciones web básicas.

Consumir apis
https://www.youtube.com/watch?v=FJ-w0tf3d_w
-----------------------------------------------------------------------------------------------------------------

Características Clave de una Promesa

    Estados de la Promesa:
        Pending (pendiente): Estado inicial, la operación aún no se ha completado.
        Fulfilled (cumplida): La operación se completó con éxito.
        Rejected (rechazada): La operación falló.
        Settled - Ya se ha determinado si la promesa fue fulfilled o reject

    Métodos Principales:
        then(onFulfilled, onRejected): Registra callbacks para manejar los casos en que la promesa se cumple o se rechaza.
        catch(onRejected): Registra un callback para manejar el caso en que la promesa se rechaza.
        finally(onFinally): Registra un callback para manejar la limpieza después de que la promesa se haya cumplido o rechazado, sin importar el resultado.


    //Promise.all nos permite "sincronizar" la respuesta de las promesas y que solo tarde una fracción del tiempo
    //porque se ejecutan simultaneamente, la segunda no depende de la primera
    //si una ejecución es más larga que la otra, tardará lo que tarde el proceso más largo
        
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

EJERCICIO 0: arregla el código que falla porque no me da el dato:

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
console.log(datos())

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

Ejercicio 1: ejercicio corto de una promesa

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
Ejercicio 2: ejercicio sencillo de una Promesa:

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
-----------------------------------------------------------------------------------------------
EJERCICIO 3: Encadenamiento de promesas, puedes ir utilizando el resultado de la promesa anterior

let count = new Promise((resolve, reject) => {
  resolve(1)
})

count.then( function (num) {
  console.log(num)
  return num +1;
}).then( function (num) {
  console.log(num)
  return num +1;
}).then( function (num) {
  console.log(num)
  return num +1;
})

-----------------------------------------------------------------------------------
Ejercicio 4: Otra manera de crear una promesa, no es muy usada, pero hay programadores que lo hacen

new Promise((resolve, reject) => {
  if (Math.random() < 0.5 ) {
    reject("Es menor a 0.5")
  }
  resolve("Es mayor a 0.5")
}).then(function (answer) {
  console.log(answer)
}).catch( function (error) {
  console.log(error)
} )

---------------------------------------------------------------------------------
Ejercicio 5: Crea una función que retorne una promesa, tenga un retraso de 2 segundos y quiero que tenga resolve y catch
  // Creamos una función que devuelva una promesa
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
EJERCICIO 6: resolve y reject de una manera distinta, utilizando un segundo parametro en el .then()
MALA PRACTICA
function getWeather() {
  return new Promise(function(resolve,reject) {
    reject('Sunny')
  })
}
//no necesitamos guardar la ejecución de la función en una variable
const promise = getWeather()
promise.then(
  function (data) {
    console.log(`first param ${data}`)
  },
  function (data) {
    console.log(`second param ${data}`)
  }
)
--------------------------------------------------------------------------------------------------
Ejercicio 7: reestructurando código del ejercicio anterior

//Ejercicio anterior(lo copiare porque luego cambio de lugar mis ejercicios y los reenumero)
MALA PRACTICA
function getWeather() {
  return new Promise(function(resolve,reject) {
    reject('Sunny')
  })
}
//no necesitamos guardar la ejecución de la función en una variable
const promise = getWeather()
promise.then(
  function (data) {
    console.log(`first param ${data}`)
  },
  function (data) {
    console.log(`second param ${data}`)
  }
)

============AQUÍ LA REESTRUCTURACION=========

function getWeather() {
  return new Promise(function(resolve,reject) {
    reject('Sunny')
  })
}

function onSuccesss(data){
  console.log(`first param ${data}`)
}

function onError(error){
  console.log(`Error: ${error}`)
}

getWeather().then(onSuccesss,onError)

---------------------------------------------------------------------------------------------
EJERCICIO 8: PROMESA USANDO SWITCH y ENCADENAMIENTO DE PROMESAS
Hay importantes beneficios de "legibilidad"

-Crea 4 funciones
-La primera debe retornar una promesa, con un setTimeout de 1s de retraso, la cual recibirá el clima(lluvioso, despejado etc)
-La segunda tendrá un parametro, retornada una promesa con un retrazo de 1s y usarás switch para las opciones, cada caso devolverá un icono
-En la función 3 y 4 , la 3 imprimira si fue exitoso y la 4 si fallo
-Ejecutarás unicamente usando .then() 2 veces
-Si encuentra el clima, debe imprimirte "exito y mostrar el ícono", si falla, "no se encontro el icono"
-link para los iconos https://emojipedia.org/
-TIP1: una ejecución lleva 2 aparametros
-TIP2: tu no tienes que escribir el valor del parametro dentro de ningún parentesis.


function getWeather() {
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      resolve('Partly cloudy')  
    }, 100);
  })
}

function getWeatherIcon(weather) {
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      switch (weather) {
        case 'Sunny':
          resolve('🌞')
          break;
      
        case 'Cloudy':
          resolve('⛅')
          break;
        
        case 'Rainy':
          resolve('🌧️')
          break;

        default:
          reject('NO ICON FOUND')
      }

    }, 100);
  })
}

function onSuccesss(data){
  console.log(`Success ${data}`)
}

function onError(error){
  console.log(`Error: ${error}`)
}

getWeather()
  .then(getWeatherIcon)
  .then(onSuccesss,onError)


------------------------------------------------------------------------------------------
Ejercicio 9:Ejemplo de como .then(onError) ejecutaría el error aunque no lo fuera, PORQUE EL ENCADENAMIENTO DE PROMESAS,
POR ESO SE USA EL .catch()

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('404')
    }, 1000);
  })
}

function fun2() {
  //console.log('Function 2')//no llega a ejecutar aquí el segundo parametro .then()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resuelto')
    }, 1000);
  })
}

function onSuccesss(data) {
  console.log(`Success: ${data}`)
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`)
}

fun1()
  .then(fun2)
  .then(onSuccesss)
  .catch(onError)//.then(onError) ejecutaría el error aunque no lo fuera, porque está encadenado

----------DEMOSTRACIÓN:
-Primero se ejecuta fun1(), que es un reject, por lo tanto, se ejecutará EL SEGUNDO PARAMETRO DEL "PRIMER" .then() que es "onError"
-en el primer .then() se ejecuta la función "onError". que espera un dato en un parametro, el parametro "data" recibira el 404 que esta dentro del reject,
-después de todo eso, se ejecuta "el segundo .then()" porque el error no lo hicimos con un .catch() si no con un .then() ENTONCES NO SE DETIENE

-SI TODO ESTA CORRECTO en la fun1() , se ejecuta fun2() en el primer .then(), y el texto dentro del resolve() se va a pasar como parametro en la
función "onSuccess"

en resumen: NO HACER ESTO, SE MANEJA ERRORES CON .CATCH()

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('404')
    }, 1000);
  })
}

function fun2() {
  //console.log('Function 2')//no llega a ejecutar aquí el segundo parametro .then()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resuelto')
    }, 1000);
  })
}

function onSuccesss(data) {
  console.log(`Success: ${data}`)
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`)
}

fun1()
  .then(fun2,onError)
  .then(onSuccesss)
  .catch(onError)//.then(onError) ejecutaría el error aunque no lo fuera, porque está encadenado

=====ASÍ ESTÁ BIEN EL CÓDIGO==========

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('404')
    }, 1000);
  })
}

function fun2() {
  //console.log('Function 2')//no llega a ejecutar aquí el segundo parametro .then()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resuelto')
    }, 1000);
  })
}

function onSuccesss(data) {
  console.log(`Success: ${data}`)
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`)
}

fun1()
  .then(fun2)
  .then(onSuccesss)
  .catch(onError)
------------------------------------------------------------------------------------------------

Ejercicio 10: haciendo un callback con una Promesa(y la promesa solo recibe un valor)

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
Ejercicio 11: ejercicio sencillo de un callback hell arreglado con Promises, debe imprimir un mensaje cada segundo durante 3 segundos

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

----------------------------------------------------------
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

---------------------------------------------------------------------------------------------

Ejercicio 12: Explicación de asincronia con Promesas

//Imagina que lo quieres ejecutar en forma secuencial, ¿Como lo haces con promesas?

( function () {
  function getUsers() {
    setTimeout(() => {
      console.log("Users are ready!!")
    }, 3000);
  }

  function getProjects(params) {
    setTimeout(() => {
      console.log("Projects are ready!!")
    }, 1000);
  }

  function getIssues(params) {
    setTimeout(() => {
      console.log("Issues are ready!!")
    }, 2000);
  }
  
  getUsers();
  getProjects();
  getIssues();

} )()

..............
=======SOLUCIÓN=========
PREGUNTA
¿Como atraparías la respuesta del primer resolver que tiene el array [1,2,3,4]

( function () {
  function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Users are ready!!")
        resolve([1,2,3,4])//aquí podrías regresar una clase de JS, un objeto, un arreglo de valores, un valor de variable
      }, 3000);
    })
  }

  function getProjects(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Projects are ready!!")
        reject()
      }, 1000);
    })
  }

  function getIssues(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Issues are ready!!")
        resolve()
      }, 2000);
    })
  }
  
  getUsers()
    .then(function (response) {
      console.log(response)//Cuando quiera atrapar la respuesta, esto puede representar un llamado, una escritura al file system, una conexión nueva a BD
      //throw "error exception"; //Una vez que se ejecuta esto, ya no se ejecuta lo de abajo
      return getProjects();
    })
    .then(getIssues)
    .catch( function(error) {
      console.log("Hubo un error"); 
    })
} )()
------------------------------------------------------------------------------------

Ejercicio 13: Ejercicio de Jon Mircha(explicación de evolución de los callbacks a las promesas)
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

-------------CÓDIGO SIN COMENTARIOS

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

cuadradoPromise(0)
  .then( (miObjeto) => {
    console.log("Inicio Promise");
    console.log(`Promise: Valor: ${miObjeto.value} , valor al cuadrado: ${miObjeto.result} `)
    return cuadradoPromise(4)
  })
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
  .catch('error')

-----------------------------------------------------------------------------------------

EJERCICIO 14: crear 2 funciones que retornen promesas, cada una con un retrazo de 2 segundos, 
una promesa debe de ejecutar a la otra y una de esas funciones debe devolver un texto que diga hola mundo
const miPromesa = new Promise((resolve, reject) => {
  console.log("Estás haciendo algo")
  setTimeout(() => {
    resolve(Mipromesa2())
  }, 2000);
})

const Mipromesa2 = () => {
  return new Promise((resolve, reject) => {
    console.log("Estoy haciendo algo más")
    setTimeout(() => {
      resolve("Se ha terminado todo")
    }, 2000);
  })
}

miPromesa.then( resultado =>{
  console.log(resultado)
}).catch( message =>{
  console.log(message)
} )
----------------------------------------------------------------------
EJERCICIO 15: 

Crea 2 funciones que retornen promesas, la primer funcion al ejecutarse, debe de retornar un objeto con 2 parametros con texto cada uno. 
pero al ejecutarse, ese objeto que retorno, debe de usarse como valor en la ejecución de la segunda funcion, y esa segunda función debe de escribir texto
y concatenar algún parametro del objeto de la primera función que retorna la primer promesa.

function mostrarPhone(mensaje) {
  return new Promise((resolve, reject) => {
    if (mensaje) {
      resolve("obtuviste un "+ mensaje.brand)
    } else {
      reject("Error");
    }
  })
}

function miPromesa() {
  return new Promise((resolve, reject) => {
    let tarea = true;
    if (tarea === true) {
      let phone = {
        color: "negro",
        brand: "iPhone"
      }
      resolve(phone);
    } else {
      reject("No obtuviste un iPhone")
    }
  })
}

miPromesa().then(function(mensaje) {
  return mostrarPhone(mensaje)
}).then(function(respuesta){
  console.log(respuesta)
}).catch(function(error) {
  console.log(error);
})

------------------------------------------------------------------------------------
EJERCICIO 16: Crea una promesa que después de 2 segundos cuente una palabra que tu le hayas ingresado y te diga si tiene más de 20 caracteres o no

const contar = (palabra) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nletras = String(palabra).length;
      if (nletras<20) {
        resolve("OK")
      } else {
        reject("Error")
      }
    }, 2000);
  })
}

 let respuesta = contar("programacion");
 respuesta.then( (resolve)=>{
  console.log(resolve)
 }).catch( (error)=>{
  console.log(error)
 } )

 -----------------------------------------------------------------------------------------------------
EJERCICIO 17: MODIFICA EL EJERCICIO ANTERIOR, la promesa debe procesar un objeto y convertirlo en JSON, 
y cuando ejecutes la promesa, debes hacer que el objeto JSON se convierta de nuevo a un objeto
 
const contar = (palabra) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nletras = String(palabra).length;
      if (nletras<20) {
        let data={
          'respuesta': 'ok'
        };
        //convierte el objeto a JSON
        resolve(JSON.stringify(data))
      } else {
        reject("Error")
      }
    }, 2000);
  })
}

 let respuesta = contar("programacion");
 respuesta.then( (res)=>{
  return res
 }).then((res)=>{
  //convertir la respuesta JSON en un objeto
  const data = JSON.parse(res)
  console.log(data)
 })
 .catch( (error)=>{
  console.log(error)
 } )

 ---------------------------------------------------------------------------------------
EJERCICIO 18: crea una promesa que reciba un número y que cuando se ejecute la promesa se le sume 5, y en un segundo .then() me muestre el resultado 
const p1 = Promise.resolve(1)//promesa que se resuelve inmediatamente
console.log(p1)
p1
  .then(x => x + 5) // el valor de aquí es distinto porque se encuentran el clousures distintos
  .then(x => console.log(x))

-------------------------------------------------------------------------------------------------------
EJERCICIO 19:crea una función que reciba un númer y que cuando se ejecute la promesa se le sume 5
y se vuelva a ejecutar, pero en la segunda ejecución, ejecuta una promesa que también sume OTRA VEZ 5
const p1 = Promise.resolve(1)//promesa que se resuelve inmediatamente
console.log(p1)
p1
  .then(x => x + 5) // el valor de aquí es distinto porque se encuentran el clousures distintos
  .then(x => Promise.resolve(x+5))
  .then(x => console.log(x))
------------------------------------------------------------------------------------------------------------
Ejercicio 20:
Promesa de manera SINCRONA 
ejemplo de como NO SE EJECUTA NADA después del catch y que puedes "ejecutar una promesa con un catch" dentro de un .then
ESTO ES SUMAMENTE ÚTIL cuando manejas efectos, queremos llamar una API, o queremos escribir en base de datos
de manera que podemos optimizar todo lo que queremos que haga nuestra aplicación

const p1 = Promise.resolve(1)//promesa que se resuelve inmediatamente
console.log(p1)
p1
  .then(x => x + 5) // el valor de aquí es distinto porque se encuentran el clousures distintos
  .then(x => Promise.resolve(x+5))
  .then(x => Promise.reject('Error, algo sucedio'))
  .then(x => console.log('Esto no se va a ejecutar'))
  .catch(e => console.log(e))

-----------------------------------------------------------------------------------------------------------------------
EJERCICIO 21: Crea una función que retorne una promesa y que tenga un retraso de 2seg.
Ejecuta esa promesa dandole un valor, al que después se le sumara 7.
Primer deben de pasar 2 segundos y se ejecutara el primer valor que le dijiste, pasaran otros 2 segundos y se sumara el valor + 7

const delayed = (x) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 2000);
  })
}

delayed(7)
  .then( x =>{
    console.log(x)
    return delayed(x +7)
  })
  .then(x => console.log(x))

AQUÍ ES LA OPERACIÓN EJECUTANDO UN ERROR

const delayed = (x) =>{
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(x)
    }, 2000);
  })
}

delayed(7)
  .then( x =>{
    console.log(x)
    return delayed(x +7)
  })
  .then(x => console.log(x))
  .then(x => Promise.reject("hubo un error"))
  .catch(e => console.log(e))

-------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 22: ENCADENAMIENTO DE PROMESAS, puedo usar el resultado de la primer promesa en el segundo .then
quiero que me crees una función que genere una promesa que te de como resultado un número, cuando se ejecute por primera ves esa promesa, quiero que me multipliques
ese número X 2, y que me muestre ese resultado en la consola

function generadora() {
  return new Promise((resolve, reject) => {
    console.log("Me ejecuto asincronicamente");
    setTimeout(() => {
      resolve(42)
    }, 2000);
  })
}

generadora().then( (res)=>{
  console.log("Termina mi promesa con", res)
  return 2 * res
} ).then( (res)=>{
  console.log("Termina mi promesa con", res)
})

console.log("estoy al final del codigo")
---------------------------------------------------------------------------------------------------------------------------
EJERCICIO 23: 
Crea dos funciones que retornen una promesa cada 1, ejecuta una promesa que te diga si existe un ID y que te diga si exite el número de teléfono y la persona

let usuarios = [{
  id:1,
  nombre:'Marcos'
},
{
  id:2,
  nombre:'Lena'
}];

let telefonos = [{
  id:1,
  telefono: 12345678
},{
id:2,
telefono:87654321
}];

const obtenerUsuarios = id =>{
  return new Promise((resolve, reject) => {
    if (usuarios.find( usuario => usuario.id === id )) {
      console.log('el Usuario existe!')
      resolve(obtenerTelefono(id))
    } else {
      reject('El usuario no existe')
    }
  })
}

const obtenerTelefono = id =>{
  return new Promise((resolve, reject) => {
    if (telefonos.find(telefono => telefono.id === id)) {
      resolve('El telefono existe!');
    } else {
      reject('el telefono no existe')
    }
  })
};

obtenerUsuario(1)
  .then( res =>{
    console.log(res)
  })
  .then(mensaje =>{
    console.log(mensaje)
  })
  .catch( error =>{
    console.log(error)
  })

  --------------------------------------------------------
  LO MISMO PERO CON UNA ESTRUCTURA MAS COMPLEJA QUE UNO DEBE DE EVITAR

  obtenerUsuarios(2)
  .then( res =>{
    //console.log(res)
    obtenerTelefono(2)
    .then(mensaje =>{
      console.log(mensaje)
    })
    .catch(err =>{
      console.log(err)
    })
  })
  .catch( error =>{
    console.log(error)
  })
  
---------------------------------------------------------------------------
Ejercicio 24: DEMOSTRAR COMO EL .THEN() ES SINCRONO Y NO ASINCRONO, PARA SER ASINCRONO, NECESITAS USAR UNA PROMESA

function generadora() {
  return new Promise((resolve, reject) => {
    console.log("Me ejecuto asincronicamente");
    setTimeout(() => {
      resolve(42)
    }, 2000);
  })
}

generadora().then( (res)=>{
  console.log("Termina mi promesa con", res)
  return 2 * res//este return es código SINCRONO, si quieres hacer codigo ASINCRONO, necesitas devolver una promesa
} ).then( (res)=>{
  console.log("Termina mi promesa con", res)
})

console.log("estoy al final del codigo")

--------------------------------------------------------------
RETURN con código ASINCRONO

function generadora() {
  return new Promise((resolve, reject) => {
    console.log("Me ejecuto asincronicamente");
    setTimeout(() => {
      resolve(42)
    }, 2000);
    //reject("Ya valio")
  })
}

generadora().then( (res)=>{
  console.log("Termina mi promesa con", res)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res *2)
    }, 2000);
  })
} ).then( (res)=>{
  console.log("Termina mi promesa con", res)
})

console.log("estoy al final del codigo")
---------------------------------------------------------------
EJERCICIO 25: REFACTORIZAR ESTE CALLBACK HELL y PASALO A PROMESA

const usuarios = [
  {id:1,nombre:'ricardo',profesion_id:1},
  {id:2,nombre:'alejandro',profesion_id:1},
  {id:3,nombre:'diego',profesion_id:1}
]

const profesion = {
  1: 'programador',
  2: 'diseñador'
}

function getUsuarios(callback) {
  setTimeout(() => {
    callback(null,usuarios)
  }, 200);
}

function getUsuario(id,callback) {
  setTimeout(() => {
    callback(null,usuarios.filter(usuario=> usuario.id === id)[0])
  }, 200);
}

function getProfesion(id,callback) {
  setTimeout(() => {
    callback(null,profesion[id])
  }, 200);
}

getUsuarios( (err,usuarios)=>{
  const alejandroId = usuarios[1].id;
  
  getUsuario(alejandroId , (err,usuario)=>{
    const profesionId = usuario.profesion_id;

    getProfesion(profesionId, (err,profesion) =>{
      console.log('La profesion de alejadro es: ', profesion)
    })
  } )
} )
¡============================
REFACTORIZADO A PROMESA

const usuarios = [
  {id:1,nombre:'ricardo',profesion_id:1},
  {id:2,nombre:'alejandro',profesion_id:1},
  {id:3,nombre:'diego',profesion_id:1}
]

const profesion = {
  1: 'programador',
  2: 'diseñador'
}
//consejo, hacer que no dependas de una función callback
function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios)
    }, 2000);  
  })
}

function getUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios.filter(usuario=> usuario.id === id)[0])
    }, 2000);
  })
}

function getProfesion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(profesion[id])
    }, 2000);
  })
}

//Pasan 6 segundos y se muestra el resultado
getUsuarios()
  .then((usuarios)=> getUsuario(usuarios[1].id))
  .then( (usuario)=> getProfesion(usuario.profesion_id))
  .then( (profesion)=> console.log('La profesion de alejadro es: ', profesion))

  ==========

  CODIGO MÁS RESUMIDO(quite funciones que no necesito)


const usuarios = [
  {id:1,nombre:'ricardo',profesion_id:1},
  {id:2,nombre:'alejandro',profesion_id:1},
  {id:3,nombre:'diego',profesion_id:1}
]

const profesion = {
  1: 'programador',
  2: 'diseñador',
  3: 'comunity manager',
  4: 'Marketer'
}


function getProfesion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(profesion[id])
    }, 2000);
  })
}


getProfesion(1) //aquí esperamos 2s
  .then( (profesion) => console.log(profesion))
  .then( ()=> getProfesion(2)) //aquí esperamos 2s
  .then( (profesion)=> console.log(profesion) )
--------------------------------------------------------------------------------
EJERCICIO 26

const usuarios = [
  {id:1,nombre:'ricardo',profesion_id:1},
  {id:2,nombre:'alejandro',profesion_id:1},
  {id:3,nombre:'diego',profesion_id:1}
]

const profesion = {
  1: 'programador',
  2: 'diseñador',
  3: 'comunity manager',
  4: 'Marketer'
}

function getProfesion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(profesion[id])
    }, 2000);
  })
}

//Promise.all nos permite "sincronizar" la respuesta de las promesas y que solo tarde una fracción del tiempo
//porque se ejecutan simultaneamente, la segunda no depende de la primera
//si una ejecución es más larga que la otra, tardará lo que tarde el proceso más largo
Promise.all([getProfesion(1),getProfesion(2),getProfesion(3),getProfesion(4)])
  .then( (respuesta)=>{
    console.log(respuesta)
    console.log(respuesta[1])
  } )


//el problema de este código es que se esperan 2s 
getProfesion(1) //aquí esperamos 2s
  .then( (profesion) => console.log(profesion))
  .then( ()=> getProfesion(2)) //aquí esperamos 2s
  .then( (profesion)=> console.log(profesion) )

//  PERO PODEMOS PEDIR LAS 2 SIMULTANEAMENTE PARA NO ESPERAR MÁS
---------------------------------------------------------------------------------------------

EJERCICIO 27


    */