/*

let nombre = "hola mundo";
//nombre = 123; //el tipo de dato number no puede ser asignado a la variable nombre porque solo recibe strings
const nombre1: string = "ricardo!!!" //asignandole el tipo de dato que debe de recibir
console.log(nombre1)
//MARCA ERROR PORQUE TYPESCRIPT PIENSA QUE 'NOMBRE1' va a chocar con 'NOMBRE1' de app.js
const hero = {
    name: "ironman",
    age: 45
}
// hero.age = "23" me marca error porque no me permite sobreescribir el tipo de dato que no sea el mismo
//Hace la transpilación porque typescript piensa que "yo se lo que estpy haciendo"
//este error nos ubieramos dado cuenta hasta que ejecutaramos nuestro códig
console.log(hero.age +1)


 * TIPOS DE DATOS
 * 
 * Strings:
 * Números:
 * Booleanos:
 * Tipo any:
 * Arreglos:
 * Tuplas:
 * Enumeraciones:
 * Retorno void
 * Null:
 * Undefined;
 */

//ACOSTUMBRATE A PONER EL TIPO DE DATO, BUENA PRACTICA
//Así se ve más claro
const a:number = 10; //para typescript este es tipo de dato "10" PORQUE NO LO PODEMOS CAMBIAR, ES UNA CONSTANTE
//let b; si lo dejas así se pone el tipo de dato ANY, significa "cualquier cosa"

let b:number = 10; //SI PUEDE CAMBIAR, por lo tanto le ponemos number

function name(msg:string) {
    console.log(msg)
}

(function () {
    let a:number = 10;
    console.log(a)
})()