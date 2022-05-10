/*Código Asincrono no Bloqueante*/
//El setTimeOut es una tarea aunque el tiempo sea 0, 
//Console.log es una tarea sincrona inmediata

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 3000)
}



cuadradoCallback(1, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
        console.log("Inicia Callback");
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(3, (value, result) => {
            console.log("Inicia Callback");
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(4, (value, result) => {
                console.log("Inicia Callback");
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(5, (value, result) => {
                    console.log("Inicia Callback");
                    console.log(`Callback: ${value}, ${result}`);
                })
            })
        })
    })

})





/*
  Codigo Asincrono bloqueante 
(() => {
    console.log("Codigo SIncrono");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
})();

===============================================EJERCICIO 1===================================
RECUERDA: La función va dentro deñ "setTimeOut"
function uno(dos) {
    setTimeout(() => {
        console.log("PRIMERO");
        dos();
    }, 3000);
}

function dos() {
    console.log("SEGUNDO");
}

uno(dos);



===============================================EJERCICIO 2===================================
function callback() {
    console.log("Soy un callback")
}

function mensaje(fn) {
    fn();
}
mensaje(callback);



*/

/*
setTimeout: recibe un callback(una funcion) y un tiempo expresado en milisegundos

setInterval: Recibe una funcion y un intervalo de tiempo, si le pones 1seg, se ejecutara cada segundo

DEFINICIONES




Herramienta:
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


Ejercicio 3
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 3000)
}

cuadradoCallback(3, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(4, (value, result) => {
        console.log("Inicia Callback");
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(5, (value, result) => {
            console.log("Inicia Callback");
            console.log(`Callback: ${value}, ${result}`);
            //se met la función uno dentro de otra porque si no se imprimirian al mismo tiempo
            //El callback no se ejecuta hasta que no termine el anterior
            //Esto resuelve que si necesitas un dato de un paso anterior, no se ejecute hasta que no tengas ese dato
            //Se usa mucho con el addEventListener ya que recibe de parametro una callback
            //Cuando concatenas varias peticiones asincronas porque para manipular un error tendrias que hacerlo en cada una de las funciones
            //Esto se arregla modularizandolo y usando promesas, generadores o funciones asincronas.
        });
    });
});

-Javascript es un lenguaje "single thread"(lenguaje de un solo hilo), solo puede hacer una cosa a la vez.
-No se pueden hacer operaciones largas como el acceso a la red, sin que se bloque el hilo principal
-Imaginate que pides datos a una API, dependiendo de la red o servidor, puede tardar mucho/poco tiempo y mientras el hilo principal se puede bloquear 
-La asincronía permite realizarlargas solicitudes de red sin bloquear el hila principal
-JAVASCRIPT trabaja dentro de un modelo, ASINCRONO y NO BLOQUEANTE, y tiene un loop de eventos implementados de UN SOLO HILO para operaciones de ENTRADA Y SALIDA, gracias a esto JS es un lenguaje altamente concurrente, 




*/