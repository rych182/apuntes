let operacion = () => Math.random();
console.log(operacion());

/*
Ejercicio 1
Imprimir mi nombre con una función flecha
let nombre = () => {
    console.log("Ricardo");
}
nombre();

Ejercicio2
Imprimir mi nombre en una función flecha, asignandole el nombre en los parentesis
Imprimir mi nombre con una función flecha
let nombre = (nombre1) => {
    console.log(nombre1);
}
nombre("Ricardo");

Ejercicio3
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha
let operacion = (num1, num2) => {
    console.log(num1 + num2);
}

Ejercicio4
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO usando return
let operacion = (num1, num2) => {
    return num1 + num2;
}
console.log(operacion(2, 3));

Ejercicio 5
Hace una suma de 2 números asignandoselos en el parentesis, con una función flecha PERO resumiendo la sintaxis
let operacion = (num1, num2) => num1 + num2;
console.log(operacion(2, 3));

Ejercicio 6
Toda función devuelve "UNDIFINED", porque todas las funciones tienen un "return aunque no este escrito"
cuando se tiene una función y no tiene un return "específico", devolverá "undifined"
Demuestra esto
let nombre = (nombre) => {
    console.log(nombre);
    return 1000;
}
const almacen = nombre("Ricardo");
console.log(almacen);

Ejercicio 7
Regresar 2 valores en un return, primero la manera mala y luego la buena
MALA
let nombre = (nombre) => {
    console.log(nombre);
    return 1, 2;
}
const almacen = nombre("Ricardo");
console.log(almacen);

BUENA(volverlo un array)
let nombre = (nombre) => {
    console.log(nombre);
    return [1, 2];
}
const almacen = nombre("Ricardo");
console.log(almacen[0], almacen[1]);

Ejercicio 8
Crea una función con un número aleatorio del 0 al 1, con funciones flechas y resumidas
*/