//javascript es un lenguaje single thread que solo ejecuta una cosa a la vez

/*

Ejercicio 8: TEORIA
javascript es un lenguaje single thread que solo ejecuta una cosa a la vez
simplifican la ecritura de codigo porque no tenemos que preocuparnos por los problemas de concurrencia, recolector de basura.

Todo esto lo hace internamente el lenguaje de programación.
    Todo esto significa que no puedes hacer operaciones largas como el acceso a la red sin que se bloqueo el hilo 
   principal, esto es una de las principales preocupaciones en un lenguaje que trabaja en un solo hilo.
	Por ejemplo, imaginate que solicitas datos a una API, todo depende de la situación del servidor o del internet, esto puede tardar poco o mucho tiempo en procesar la solicitud, mientras el hilo principal de tu código se quedaría bloqueado, y esto haría y esto haría que la página web no respondiera.
	Aquí es donde entra LA ASINCRONÍA, que puede hacer grandes solicitudes de red sin bloquear el hilo.
	Javascript fue diseñado para funcionar en navegadores, trabajar con peticiones hacia la red y procesar
	las interacciones con el usuario y hacer que tenga una interfaz fluida.
	
Javascript trabaja con un modelo "asincrono no bloqueante",
"Tiene un looop de eventos implementados de un solo hilo para operaciones de entrada y salida", gracias a esto
javascript es altamente concurrente a pesar de tener un solo hilo



concurrencia: 
 la capacidad de un programa para ejecutar múltiples tareas de manera simultánea o en un orden no determinista. Esto permite que diferentes partes del programa se ejecuten de forma independiente y concurrente, lo que puede mejorar el rendimiento y la eficiencia del sistema.
 
 En un entorno concurrente, pueden ocurrir varias tareas al mismo tiempo, pero no necesariamente de manera simultánea en el sentido físico.en un sistema de una sola CPU, la concurrencia se puede lograr mediante la ejecución intercalada de diferentes hilos de ejecución.
 Cada hilo puede estar asociado con una tarea específica y ejecutarse de manera independiente de los demás.
 
 La concurrencia es importante en situaciones donde hay múltiples procesos o tareas que pueden ejecutarse de manera independiente y podrían beneficiarse de compartir recursos o ejecutarse en paralelo. Algunos ejemplos comunes de aplicaciones concurrentes incluyen servidores web, sistemas operativos, videojuegos y aplicaciones de escritorio que realizan múltiples operaciones de entrada y salida de manera simultánea.


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
    
    RECOLECTOR DE BASURA
    El recolector de basura (también conocido como garbage collector en inglés) es un componente fundamental en muchos lenguajes de programación que manejan la gestión automática de la memoria. Su función principal es liberar la memoria que ya no está en uso por parte del programa, lo que ayuda a prevenir fugas de memoria y simplifica el proceso de desarrollo al eliminar la necesidad de gestionar manualmente la asignación y desasignación de memoria.

En el contexto de la concurrencia, el recolector de basura sigue teniendo la misma función fundamental: liberar la memoria que ya no se necesita. Sin embargo, cuando se trabaja con múltiples hilos de ejecución, se presentan desafíos adicionales para el recolector de basura.

Uno de los desafíos principales es la posibilidad de que varios hilos estén accediendo y manipulando los mismos objetos en memoria al mismo tiempo. Esto puede complicar la tarea del recolector de basura, ya que necesita garantizar que ningún hilo esté utilizando un objeto mientras intenta liberar su memoria. Para abordar este problema, los recolectores de basura suelen implementar técnicas de sincronización para coordinar la liberación de memoria con el acceso a los objetos por parte de los hilos.

Además, en entornos concurrentes, es importante que el recolector de basura sea eficiente y minimice el impacto en el rendimiento del programa. Esto significa que debe diseñarse para trabajar de manera eficiente en sistemas con múltiples hilos de ejecución, evitando bloqueos innecesarios y maximizando la utilización de recursos.

En resumen, el recolector de basura en el contexto de la concurrencia sigue siendo responsable de liberar la memoria no utilizada, pero debe adaptarse para manejar los desafíos únicos asociados con la ejecución concurrente de múltiples hilos.


*/