let saludo = function() {
    console.log("Hola mundo");
}

saludo();

/*
Ejercicio 1: Imprime una función utilizando parametro REST
const mostrarDatos = (...datos) => {
    console.log(...datos);
}
mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');

Ejercicio 2: Imprime datos de la función utilizando parametro spreade
const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);

EJERCICIO 3: Crea una función que sume digitos usando el parametro REST
function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(suma(1, 2, 3, 4));

EJERCICIO 4: Unir 2 arreglos usando SPREAD

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(typeof(arr3));
*/