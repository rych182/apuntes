//javascript es un lenguaje single thread que solo ejecuta una cosa a la vez

console.log("Inicio");

// Tarea asíncrona
setTimeout(function() {
    console.log("Tarea asíncrona completada.");
}, 0);
console.log("Fin");



/*
JON MIRCHA: 

Ejercicio 8: TEORIA
javascript es un lenguaje single thread que solo ejecuta una cosa a la vez
simplifican la ecritura de codigo porque no tenemos que preocuparnos por los problemas de concurrencia, recolector de basura.
(Mas adelante se explica que son "problemas de concurrencia y recolector de basura".)

Lenguajes multihilo:
    Java
    C#
    C++ (utilizando bibliotecas como pthreads o std::thread)
    Python (con bibliotecas como threading o multiprocessing)
    JavaScript (mediante Web Workers)
    Go
    Rust
    Scala
    Kotlin
    Swift

EJEMPLO PRACTICO REAL DE ASINCRONIA (Todo esto lo hace internamente el lenguaje de programación.)
Todo esto significa que no puedes hacer operaciones largas como el acceso a la red sin que se bloqueo el hilo 
principal, esto es una de las principales preocupaciones en un lenguaje que trabaja en un solo hilo.

Por ejemplo, imaginate que solicitas datos a una API, todo depende de la situación del servidor o del internet, 
esto puede tardar poco o mucho tiempo en procesar la solicitud, mientras el hilo principal de tu código se quedaría bloqueado,
y esto haría y esto haría que la página web no respondiera.
	
Aquí es donde entra LA ASINCRONÍA, que puede hacer grandes solicitudes de red sin bloquear el hilo.
Javascript fue diseñado para funcionar en navegadores, trabajar con peticiones hacia la red y procesar
las interacciones con el usuario y hacer que tenga una interfaz fluida.
	
Javascript trabaja con un modelo "asincrono no bloqueante",
"Tiene un looop de eventos implementados de un solo hilo para operaciones de entrada y salida", gracias a esto
javascript es altamente concurrente a pesar de tener un solo hilo

----------------------------------------------------------------------------------------------------------------------
EVENTLOOP

El *event loop* en JavaScript es un mecanismo que permite que JavaScript maneje operaciones asíncronas,
como la ejecución de *callbacks*, la resolución de *promises*, y la gestión de eventos del DOM. 
Cómo funciona:


1. **Call Stack**: JavaScript es un lenguaje de un solo hilo, lo que significa que solo puede ejecutar una tarea a la vez.
El *call stack* es una pila de tareas donde se apilan las funciones que se van a ejecutar. 
Cuando una función se llama, se coloca en la cima del *call stack*, y se retira una vez que termina su ejecución.

2. **Web APIs/Node APIs**: Estas son funciones que proporcionan los navegadores o Node.js para manejar operaciones
como solicitudes HTTP, temporizadores (e.g., `setTimeout`), y otros eventos. Cuando se ejecuta una operación asíncrona,
como una llamada a `setTimeout`, la función que la maneja se envía a una de estas APIs para su ejecución y
no bloquea el *call stack*.

3. **Callback Queue (Cola de Tareas)**: Cuando una operación asíncrona completa su ejecución
(por ejemplo, cuando un temporizador de `setTimeout` expira),
el *callback* asociado con esa operación se coloca en la *callback queue*, esperando a ser ejecutado.

4. **Event Loop**: El *event loop* es el mecanismo que monitorea tanto el *call stack* como la *callback queue*.
Si el *call stack* está vacío, el *event loop* toma el primer *callback* de la *callback queue*
y lo coloca en el *call stack* para su ejecución.

### Ejemplo Simple

```javascript
console.log('Primero');

setTimeout(() => {
  console.log('Segundo');
}, 0);

console.log('Tercero');
```

#### Resultado:

```
Primero
Tercero
Segundo
```

### Explicación:

1. `console.log('Primero')` se ejecuta inmediatamente y se muestra en la consola.
2. `setTimeout` configura un *callback* que debe ejecutarse después de un tiempo (en este caso, 0 milisegundos), pero en lugar de ejecutarlo inmediatamente, se envía a la *callback queue*.
3. `console.log('Tercero')` se ejecuta inmediatamente después, porque sigue en la pila de llamadas.
4. Cuando el *call stack* está vacío, el *event loop* mueve el *callback* de `setTimeout` desde la *callback queue* al *call stack*, y finalmente se ejecuta `console.log('Segundo')`.

El *event loop* permite a JavaScript realizar tareas de manera no bloqueante y manejar múltiples operaciones asíncronas de manera eficiente, lo que es especialmente útil en aplicaciones web donde la experiencia del usuario es clave.

-------------------------------------------------------------------------------------------------------------------------
CONCURRENCIA Y RECOLECTOR DE BASURA

CONCURRENCIA: 
La capacidad de un programa para ejecutar múltiples tareas de manera simultánea o en un orden no determinista. 
Esto permite que diferentes partes del programa se ejecuten de forma independiente y concurrente,
lo que puede mejorar el rendimiento y la eficiencia del sistema.
 
En un entorno concurrente:
PUEDEN OCURRIR ocurrir varias tareas al mismo tiempo, pero no necesariamente de manera simultánea en el sentido físico
en un sistema de una sola CPU, la concurrencia se puede lograr mediante la ejecución intercalada de diferentes hilos de ejecución.
Cada hilo puede estar asociado con una tarea específica y ejecutarse de manera independiente de los demás.
 
La concurrencia es importante en situaciones donde hay múltiples procesos o tareas que pueden ejecutarse de manera independiente y podrían beneficiarse de compartir recursos o ejecutarse en paralelo. Algunos ejemplos comunes de aplicaciones concurrentes incluyen servidores web, sistemas operativos, videojuegos y aplicaciones de escritorio que realizan múltiples operaciones de entrada y salida de manera simultánea.

    
RECOLECTOR DE BASURA
El recolector de basura (también conocido como garbage collector en inglés) es un componente fundamental 
en muchos lenguajes de programación que manejan la gestión automática de la memoria.
Su función principal es liberar la memoria que ya no está en uso por parte del programa, 
lo que ayuda a prevenir fugas de memoria y simplifica el proceso de desarrollo al eliminar la necesidad
de gestionar manualmente la asignación y desasignación de memoria.

CONCURRENCIA
En el contexto de la concurrencia, el recolector de basura sigue teniendo la misma función fundamental:
liberar la memoria que ya no se necesita. 
Sin embargo, cuando se trabaja con múltiples hilos de ejecución, se presentan desafíos adicionales para el recolector
de basura.

Uno de los desafíos principales es la posibilidad de que varios hilos estén accediendo y manipulando los mismos objetos
en memoria al mismo tiempo. Esto puede complicar la tarea del recolector de basura, 
ya que necesita garantizar que ningún hilo esté utilizando un objeto mientras intenta liberar su memoria. 
Para abordar este problema, los recolectores de basura suelen implementar técnicas de sincronización
para coordinar la liberación de memoria con el acceso a los objetos por parte de los hilos.

Además, en entornos concurrentes, es importante que el recolector de basura sea eficiente y minimice el impacto en el
rendimiento del programa.
Esto significa que debe diseñarse para trabajar de manera eficiente en sistemas con múltiples hilos de ejecución,
evitando bloqueos innecesarios y maximizando la utilización de recursos.

En resumen, el recolector de basura en el contexto de la concurrencia sigue siendo responsable de liberar la memoria
no utilizada, pero debe adaptarse para manejar los desafíos únicos asociados con la ejecución concurrente de múltiples hilos.

------------------------------------------------------------------------------------------------------------------
  CONCEPTO EVENTLOOP
    Primero hay que entender estos 5 conceptos:
    -Procesamiento Single THread y multithread.
    -Operaciones de CPU y operaciones de I/O.
    -Operaciones concurrentes y paralelas.
    -Operaciones bloqueantes y no bloqueantes
    -Operaciones sincronas y asicronas
   
   Los hilos son las unidades básicas de ejecución de cada proceso que realiza nuestra maquina.
   Por ejemplo: cada que tu abres el navegador y/o tu editor de código se levanta un proceso, e internamente
   esos procesos, pueden correr varios hilos o un solo hilo, que es lo que ejecuta su funcionalidad.
   Entonces, dependiendo de las caracteristicas del lenguaje, van a haber lenguajes que trabajan en un solo hilo
   y lenguajes que trabajan en multi hilos.(JAVASCRIPT tiene un solo hilo de ejecución).
   
   Imagen: asincronia-01
   El "CALL STACK" son las peticiones que va haciendo la aplicación, o incluso las interacciones del usuario, 
   estas van trabajando en este unico hilo(el hilo es el circulo de color amarillo)y tenemos una cola de eventos o de mensajes(event queue), que "van apilando esas tareas" y conforme van terminando, van enviando los mensajes y todos se van comunicando "en un mismo hilo"
   
   Imagen: asincronia-02-eventloop(este diagrama es más al estilo NOde JS)
   
   Tanto en los navegadores(frontend) como en los servidores(node js backend) js se comporta de la misma manera.
   
   javascript tiene diferentes mecanismos para trabajar la asincronias
   EL primer mecanismo que tenemos para trabajar la asincronía son las funciones "callback"
   
   , en el "intensive operation" se van registrando las funciones, dependiendo del tipo de petición
   que vayamos a hacer, por ejemplo, acceso a los ficheros de los sistemas, solicitar datos de una
   base de datos, hacer procesamiento, etc , 
   obvio en el navegador no tenemos acceso al file system , pero podría ser:
   
   -el consumo de una API, 
   -archivos JSON, 
   -ó esperar la respuesta de una operación aritmetica
   
   Conforme estas "terminen" REGRESAN AL EVENTLOOP que le manda un DISPARADOR(trigger) que le manda una 
   "notificación" al usuario .
   
   DE ESTO SE TRATA EL EVENTLOOP.
   
   ===CONCEPTO CALL STACK===
   Va apilando las tareas , dependiendo si son "sincronas" o "asincronas", podemos ver como cada una se va 
   liberando.
   
   Javascript trabaja bajo la filosofía LIFO(Last In, First Out) osea, "la última en entrar es la primera en 		salir" , es la manera en la que se va ejecutando las operaciones.

   asincronia-04(este diagrama va más a los navegadores)
   
   en la imagen son web API's y se van apilando las tareas(el rectangulo con cuadrados de colores), aquí está la petición del usuario(la lista de cosas de la web API) y el eventloop va solicitando las NOTIFICACIONES conforme
   se van terminando
   
   
   OPERACIONES DE CPU Y OPERACIONES DE I/O(entrada y salida)
   
   OPERACIONES DE CPU

   Operaciones de CPU son las que la mayoría del tiempo van a estar consumiendo los procesos, 
   de nuestro CPU, por ejemplo:

    
   Los loops , si caemos en un error lógico y se vuelve lógico, eso empezará a consumir la 
   memoria de nuestro navegador y esto ocasionará que se trave, ESTO ES UNA OPERACIÓN DE CPU
   porque consume mas rendimiento de la maquina.
   
   OPERACIONES DE I/O
   
   Son aquellas que pasan la mayor parte del tiempo esperando la peticion del recurso que han
   solicitado y por recurso me refiero a:
   -enviar un formulario que se procese en un servidor que envie una notificacion de que se a procesado tu información 
   -cuando haces un "pago en linea"y esperas la notificación de el pago
   -cuando haces una petición a una API y esperas a que esa API te envíe una información en un
   archivo JSON.
   
   Javascript se comporta haciendo operaciones de I/O
   -------------------------------------------------------------------------------
   --------------------------------------------------------------------------------------------------------
   CONCURRENCIA Y PARALELISMO
   
   CONCURRENCIA
   La concurrencia es cuando 2 o más tareas PROGRESAN SIMULTANEAMENTE, es decir, se estpan ejecutando al 
   mismo tiempo y van avanzando simultaneamente.
   Podemos tener concurrencia en un entorno sincrono y asincrono
   
   PARALELISMO
   Es cuando 2 o más tareas se "ejecutan" al mismo tiempo
   También existe paralelismo en single thread(asincrono), porque la gente piensa que solo es en multi thread.
   aunque "single thread" esta más relacionado a "concurrencia", "no bloqueante" y "asincrono PERO
   JAVASCRIPT ES SINGLE THREAD Y PODEMOS TENER OPERACIONES SINCRONAS Y ASINCRONAS  
-----------------------------------------------------------------------------------------------------

	OPERACION BLOQUEANTE Y NO BLOQUEANTE
	
	Se refiere a la "fase de espera" cada que se va ejecutando una operación de nuestro código, esto
	se refiere a como toma esa fase de espera.
	
	OPERACION BLOQUEANTE
	Es aquella que no va a devolver el control a la aplicación hasta que haya terminado toda su tarea,
	Osea no van a devolver la ejecución al hilo principal hasta que haya terminado sus tareas  
	
	NO BLOQUEANTE
	Significa que las operaciones se ejecutan , devuelven inmediatamente el control al hilo principal 
	no importando si ha terminado o no la tarea, en el momento que una tarea no bloqueante se acabe
	va a mandar una notificación entonces ya se avisará al hilo principal y en caso de que se haya 
	terminado devolvera los datos solicitados o mensaje correspondiente, entonces se podrá manejar 
	incluso un código de error
	
----------------------------------------------------------------------------------------------------------
	
	OPERACIONES SINCRONA Y ASINCRONAS
	
	se refiere a cuando tendra lugar la respuesta, pensando en el presente, pasado y futuro, 
	"sincrono" se refiere a cuando la respuesta sucede en el presente, el tiempo inmediato, una 
	operación sincrona espera el resultado en tiempo presente y sigue otra operación y así
	sucesivamente 
	
	ASINCRONO
	
	La respuesta sucede en un futuro, se ejecuta pero no saber cuando va a venir la respuesta, 
	es decir la operación "asincrona" no espera los resultados, es por eso que suelta el control
	y se lo regresa al hilo principal, por eso es que generalmente se suelen asociar estos conceptos de
	BLOQUEANTE CON SINCRONO Y NO BLOQUEANTE CON ASINCRONO .
	
	Incluso puede existir código sincrono "bloqueante y no bloqueante".
	EL código asincrono si va a ser "no bloqueante"
	
	Hablando "particularmente de JAVASCRIPT" con lo anterior explicado, vamos a tener 2 tipos de código
	1- SIncrono bloqueante
	2- asincrono no bloqueante
	
	El código "single thread" y la mayoria de sus "operaciones I/O"
	
	-------------------------------------------------------------------------------
	CODIGO SINCRONO BLOQUEANTE
	( ()=>{
		console.log("codigo sincrono");
		console.log("INicio");
		
		function dos(){
			console.log("DOS")
		}
		
		function uno(){
			console.log("UNO")
			dos();
			console.log("TRES");
		}
		uno();
		console.log("FIN")
	})();
	
	HERRAMIENTA latentflip.com
	 http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
	 
	 QUE NO SEA CODIGO ES6, si no javascript viejito, porque no permite let ni arrow functions
	 
	 Imagen: asincronia-02-eventloop(este diagrama es más al estilo NOde JS)
	 
	 Cuando se ejecuta la "función uno", Se mantiene  en el stack se mantiene todo el
	 conjunto de tareas que está en la función 1.
	 
	 ENtra en función 2 y ejecuta la tarea
	 
	 "cada operacion bloquea el hilo principal del EVENTLOOP DE JS"
	 
	 ---------------------------------------------------------------------------------
	 
	 CODIGO ASINCRONO NO BLOQUEANTE
	 ( ()=>{
	 	console.log("Codigo asincrono");
	 	console.log("Inicio");
	 	
	 	function dos(){
	 		setTimeout(function(){
	 			console.log("Dos")
	 		},1000)
	 	}
	 	
	 	function uno(){
	 		setTimeout(function(){
	 			console.log("Uno")
	 		},0)
	 		dos();
	 		console.log("Tres")
	 	}
	 	
	 	uno();
	 	console.log("FIN");
	})();
	 
	 -El setTimeout es un mecanismo de asincronismo porque va a tardar el tiempo que nosotros
	 le dijimos.
	 -AUnque un setTimeout tenga 0 en tiempo, como es una función, pasa a la fila del call stack
	 -Los console.log tienen preferencia al ejecutarse aunque sea una función
	 -Este ejercicio es una mezcla de codigo sincrono y asincrono y juntos hacen un ejercicio asincrono
	 -Y esto cumple con cualquiera de los diagramas que mostre en las 4 imagenes
	 
	 En resumen:
	 
	 Javascript usa un modelo asincrono y no bloqueante, con un loop de eventos(eventloop)
	 implementados en un solo hilo(single thread) para operaciones de entrada y salida
	 (I/O) 
   
 
*/