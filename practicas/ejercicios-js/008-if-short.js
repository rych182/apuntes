/*
las condicionales son un concepto más fundamental y, por lo tanto, es recomendable aprenderlas antes que los bucles.

Esto se debe a que las condicionales son necesarias para tomar decisiones en el código y 
para controlar el flujo de ejecución en función de esas decisiones.
Los bucles, por otro lado, son útiles para repetir tareas varias veces,
pero para ello es necesario tener un control de flujo adecuado, lo que se logra a través del uso de condicionales.

Aprender condiciones y bucles antes que funciones en JavaScript puede ser beneficioso para evitar confusiones porque
son conceptos más simples y fundamentales en la programación en general.

Las condiciones y bucles se utilizan ampliamente en la programación, independientemente del lenguaje, 
por lo que es importante comprenderlos bien. Por ejemplo, el uso del condicional "if" y del bucle "for" es común
en muchos programas y proyectos.

Por otro lado, aunque las funciones son una parte fundamental de la programación,
a veces pueden ser más abstractas y complicadas de entender para alguien que recién está empezando.
Las funciones pueden involucrar conceptos como ámbito de variables, retorno de valores y parámetros, 
que pueden ser difíciles de comprender sin una base sólida en los conceptos más básicos como las condiciones y bucles.





// '?' es 'if' ,':' es el 'else'
//if (nombre === undefined) { nombre = "visitante" } otra manera de hacer un IF

Ejercicio 1, imprimir la calificación usando el operador ternario(if-else corto)
let calificacion = 65;
const grado = calificacion >= 95 ? "A+" :
    calificacion >= 90 ? "A" :
    calificacion >= 85 ? "B+" :
    calificacion >= 80 ? "B" :
    calificacion >= 75 ? "C+" :
    calificacion >= 70 ? "C" :
    calificacion >= 65 ? "D+" :
    calificacion >= 60 ? "D" : "F";
console.log(calificacion, grado);


EJERCICIO 2
Ejercicio con if-corto

let logueado = true;
console.log(logueado === true ? "SI se logueo" : "NO se logueo");
*/