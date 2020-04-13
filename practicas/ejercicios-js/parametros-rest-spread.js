const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);

/*
Ejercicio 1
Imprime una función utilizando parametro REST
const mostrarDatos = (...datos) => {
    console.log(...datos);
}
mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');

Ejercicio 2
Imprime datos de la función utilizando parametro spreade
const mostrarDatos = (...arreglo) => {
    console.log(arreglo);
}
let arreglo = ['Carlos', 23, 'correo@correo.com', 'Mexico'];
mostrarDatos(...arreglo);
*/