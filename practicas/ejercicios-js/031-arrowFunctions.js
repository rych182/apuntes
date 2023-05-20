const perro = {
    nombre: "docky",
    saludar() { //esta forma de expresar los metodos si reconoce el contexto de donde se encuentran
        console.log(this);
    }
}
perro.saludar();
/*
Arrow functions: 
-Es una nueva forma de declarar "funciones anónimas expresadas"(las que van dentro de variables)
-Capturan el objeto dentro del contexto en el que se encuentren
-NOTA: hay que tener mucho cuidado con utilizar arrow functions para declarar metodos dentro de objetos literales
porque tendriamos el problema del this que toma el contexto del objeto, pero a su vez es una ventaja por que
hereda el contexto de donde se encuentra "su objeto padre"
-NOTA: Las arrow functions son muy importantes en react, por ejemplo si creamos un componente basado en clases, y 
generamos metodos, que queremos asociar a algún evento de ese componente, no encuentra el this hay que hacer un proceso
que se llama "enlazar el contexto" a travez de "bind,call,apply"(que son funciones que nos permiten enlazar otros 
contextos)a un metodo o un objeto y ahí es muy comodo que para no estar usando "bind" en cada uno de los metodos 
en el constructor de la clase, es más fácil usar arrow functions 

Ejemplo(con función antigua)
function saludar() { //el objeto this se vuelve "window" del navegador
    console.log(this); 
}
saludar();

Ejemplo(con un objeto de javascript que dentro tiene una función vieja)
const perro = { //aquí el this nos devuelve el objeto
    nombre: "docky",
    saludar: function() {
        console.log(this);
    }
}
perro.saludar();


Ejemplo(objeto con arrow function)
const perro = { //Aquí nos devuelve el objeto "windows" del navegador
    nombre: "docky", //Las arrow functions capturan el contexto del objeto en el que se encuentran
    saludar: () => {
        console.log(this);
    }
}
perro.saludar();


Ejercicio 0
funcion flecha más básica pasando parametros
const saludar = () => console.log("ric");
saludar();

Ejercicio 0.1
funcion flecha más básica pasando parametros
const saludar = (name) => console.log(name);
saludar("ric");

Ejercicio 0.2
funcion flecha más básica pasando parametros y reduciendo el código
const saludar = name => console.log(name);//Esto es un return implicito
saludar("ric");

Ejercicio 0.3
Función flecha, suma sin return
let suma =(a,b)=>a +b;
suma(2,3);


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