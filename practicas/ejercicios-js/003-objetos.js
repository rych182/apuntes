/*
--------------------------OBJETOS--------------------------------------
***EJERCICIO 0: declara un objeto e imprimelo
let unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
console.log(unPinshiObjeto);


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


***EJERCICIO 2: Agrega datos a una constante objeto
const unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
unPinshiObjeto.correo = "correo@correo.com";
console.log(unPinshiObjeto);


Ejercicio 3 Crear un objeto, mostrar su contenido Y BORRAR una propiedad del objeto 
let persona = {
    nombre: "Ricardo",
    edad: 33,
    vivo: true,
    amigos: ["El capi",
        "Luis",
        "Nacho"
    ],
    otrosAmigos: {
        unila: ["Ruben",
            "Jessica"
        ],
        secu1: "Urrutia",
        uni: {
            elMorro: "Samuel",
            yuri: "Yuriliana",
            Laurrirrichan: "Laura"
        }
    }
}
delete persona.vivo;
console.log(persona);

Ejercicio 4 Agregar una nueva propiedad al objeto
let persona = {
    nombre: "Ricardo",
    edad: 33,
    vivo: true,
    amigos: ["El capi",
        "Luis",
        "Nacho"
    ],
    otrosAmigos: {
        unila: ["Ruben",
            "Jessica"
        ],
        secu1: "Urrutia",
        uni: {
            elMorro: "Samuel",
            yuri: "Yuriliana",
            Laurrirrichan: "Laura"
        }
    }
}
persona.casado = false;
console.log(persona);

*/