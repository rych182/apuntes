/*
 ¿Que es un closure?
Es una función que tiene acceso al ámbito de su función externa 
incluso después de que esta haya regresado. Esto significa que un cierre puede recordar y
acceder a las variables y 
argumentos de su función externa incluso después de que la función haya finalizado.

Explica como funciona un "closure"
Cuando creas una función dentro de otra función, 
la función interna tiene acceso no solo a sus propias variables y a las variables globales, 
sino también a las variables de la función externa en la que fue definida.

 */

function externa() {
    let variableExterna = "soy la variable externa";

    function interna() {
        console.log(variableExterna)
    }
    //si comento el return, me debe arrojar undifined, por el return implicito
    return interna;
}


const closure = externa();
console.log(typeof closure)
closure()