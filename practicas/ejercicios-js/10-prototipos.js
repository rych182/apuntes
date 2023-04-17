/*
JON MIRCHA
Prototipos: es de las cosas más importantes de Javascript
Lenguaje multiparadigma, quiere decir que podemos utilizar programación funcional, orientada a objetos etc.
A partir del año 2015 ya existen las clases, pero el compilador de javascript que lo interpreta, 
osea el navegador de javascript, "lo convierte a funciones prototipicas", por eso le llaman azucar sintactica.
Las clases solo nos ayudan a hacer más fácil la escritura de los prototipos

JavaScript es un lenguaje orientado a objetos PERO "orientado a prototipos" NO clases, tras bambalinas el motor del navegador o Node(si es backend)
transforma la clase a una "funcion prototypal".

La herencia se da por la cadena de prototipos, es decir, hace una copia del prototipo en el cual esta basado


POO(tiene 4 caracterosticas)
1-Clases:Son modelos a seguir, sirve como un machote,para de ahí podernos basar y crear instancias
2-Objetos: Es la instancia de una clase, UNA COPIA DE ESE MODELO
    -Atributos: variables dentro de un objeto
    -Metodos: funciones dentro de un objeto

EJERCICIO 1: para explicar prototipos
Cuando en la consola vemos este objeto: __proto__ , es el prototipo más primario, fundamental "es un objeto",
 nos damos cuenta que tiene su constructor, getters, setters
const perro = {
    nombre: 'Oscar',
    sonido() {
        console.log("gua gua");
    }
}
console.log(perro);



*/
const perro = {
    nombre: 'Oscar',
    sonido() {
        console.log("gua gua");
    }
}
console.log(perro);