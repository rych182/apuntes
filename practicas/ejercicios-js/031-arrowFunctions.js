/*

3hrs 1cap de 31min de John Mircha



 Ejercicio 1
 Hacer una función que cree un objeto
 let crearObjeto = (nombre, edad) => {
     return {
         name: nombre,
         age: edad
     };
 }
 console.log(crearObjeto("Ric", 33));


 Ejercicio 2
 Resumir el codigo del ejercicio 26
 let crearObjeto = (nombre, edad) => {
     return {
         nombre,
         edad
     };
 }
 console.log(crearObjeto("Ric", 33));


 EJERCICIO 3
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


 Ejercicio 4
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