//try catch cuando no quieres que se detenga la ejecución de tu programa
//Usalo cuando las funciones no sabes si vayan a tener datos, si llegan vacias, no llenes tu codigo de try catch



//let suma = (a, b) => a + b;

let objeto ={

animal: function(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}
}
console.log(objeto.animal("hola","mundo"));




/*

Ejercicio 8
Crea una función con un número aleatorio del 0 al 1, con funciones flechas y resumidas
let numero = () => Math.random();
console.log(numero());

Ejercicio 8.1
Crea una función con un número aleatorio del 0 al 100, con funciones flechas y resumidas
let numero = () => Math.random()* 100;
console.log(numero());

-------------------------------------------------------------------------------------------------------------

Ejercicio 15: Cuantos caracteres tiene un array
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras`);
})

Ejercicio 16: resumir el ejercicio 15
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`)
-------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

EJERCICIO 31: Crear una funcion anónima autoinvocada que reciba parametros
(function(w, d, c) {
    console.log("Soy una función autoinvocada");
    console.log(w);
    console.log(d);
    console.log(c);
    c.log("Estoy usando console.log recibiendo el console como un parametro");
})(window, document, console)

-------------------------------------------------------------------------------------------


EJERCICIO 13.04: Obtener los valores de las propiedades del objeto
let ric = {
    nombre: "Ricardo",
    edad: 33,
    redes: ["Twitter", "Instagram", "GitHub"],
    amigos: {
        secu: "Urrutia",
        prepa: "Nacho",
        uni: "Lau",
        vida: "Diego"
    },
    accion: function saludar() {
        console.log("Hello World");
    },
    otraAccion: function() {
        console.log(`MI nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
console.log(Object.values(ric));






*/