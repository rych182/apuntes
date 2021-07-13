/*Código Asincrono no Bloqueante*/
//El setTimeOut es una tarea aunque el tiempo sea 0, 
//Console.log es una tarea sincrona inmediata


(() => {
    console.log("Código Asincrono No Bloqueante");
    console.log("Inicio");

    function dos() {
        setTimeout(() => {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(() => {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin");
})();

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

*/

/*
setTimeout: recibe un callback(una funcion) y un tiempo expresado en milisegundos

setInterval: Recibe una funcion y un intervalo de tiempo, si le pones 1seg, se ejecutara cada segundo

DEFINICIONES

-Procesamiento Single thread y multi thread
Single thread: solo puede ejecutar una cosa a la vez

-Operaciones de CPU y Operaciones de I/O
Operaciones de CPU: siempre están procesando como un FOR en el navegador
Operaciones de I/O: Están esperando una respuesta como cuando se procesa un pago en linea
-Operaciones concurrentes y paralelas
Concurrencia: 2 o más tareas progresan simultaneamente(una empezo antes y otra después), se ejecutan al mismo tiempo
Paralelismo: 2 o más tareas se ejecutan al mismo tiempo(al unisono)
-Operaciones bloqueantes y No bloqueantes(se refiere a la fase de espera cada que se va ejecutando una operación de nuestro codigo)
Bloqueante: es aquella que no va  a devolverle el control a la aplicacion hasta que termine su tarea.
No Bloqueante: se ejecutan y devuelven inmediatamente el control al hilo principal sin importar si  han terminado la tarea
-Operaciones Sincronas y Asincronas(se refiere a cuando tendra lugar la respuesta)
Sincrono: sucede en el tiempo inmediato, una funcion sincrona espera el resultado y sigue con otra operacion
Asincrono: la respuesta sucede en el futuro, no va a esperar el resultado, suelta el control del hilo

JS es asincrono y no bloqueante, no se bloquea el unico hilo, JS ees altamente concurrente
JS tiene un solo hilo de ejecucion
JS la ultima tarea en entrar es la primera en salir. LIFO(last in-First out)

En JS hay 2 tipos de codigo:
-Sincrono bloqueante: cada operacion se hace de una vez bloqueando el flujo del hilo principal, una vez se procese pasa a la sig operacion hasta que se terminen las operaciones
-Asincrono no bloqueante: se manda la labor a la fila de tareas y sigue con otra y no bloquea el flujo del hilo

Herramienta:
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

*/