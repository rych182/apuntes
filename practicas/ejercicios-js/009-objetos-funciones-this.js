/*

***Ejercicio 1: Resumir la escritura del ejercicio anterior

let nombre = "ric";
let edad = 33;

const persona = {
    nombre,
    edad,
    frase() {
        console.log("Eres un crack!");
    }
}

console.log(persona.nombre);
persona.frase();

Ejercicio 1:  Crear un objeto e inicializar un metodo interior que tenga
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
    }
}
ric.accion();


Ejercicio 2: crear un objeto e imprime una datos que estén dentro usando THIS
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
ric.otraAccion();


*/