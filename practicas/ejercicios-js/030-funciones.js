/*


Ejercicio 25
Hacer una función que cree un objeto
let crearObjeto = (nombre, edad) => {
    return {
        name: nombre,
        age: edad
    };
}
console.log(crearObjeto("Ric", 33));


Ejercicio 26
Resumir el codigo del ejercicio 26
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad
    };
}
console.log(crearObjeto("Ric", 33));


EJERCICIO 27
Agregar una funcion dentro del objeto del ejercicio 26 y ejecutarla
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        imprimir: () => {
            return `My name is ${nombre} y tengo ${edad}`;
        }
    };
}
console.log(crearObjeto("Ric", 33).imprimir());


Ejercicio 28
Resumir la función dentro del objeto del ejercicio 27
let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        imprimir() {
            return `My name is ${nombre} y tengo ${edad}`;
        }
    };
}
console.log(crearObjeto("Ric", 33).imprimir());



*/