/*
EJERCICIO 1: Agrega datos a una constante objeto
const unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
unPinshiObjeto.correo = "correo@correo.com";
console.log(unPinshiObjeto);

----------------------------------------------------------
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
--------------------------------------------

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
-----------------------------------------------
Ejercicio 5:imprimir la posicion4, Array que tenga strings, números, boleanos, nulos y funciones
let datos = [19, 'Gato', true, null, function name() {}];
console.log(datos[4]);
----------------------------------------------------

Ejercicio 6: Imprimir la función que esté en el array
let datos = [19, 'Gato', true, null, function name() { return "hola" }];
console.log(datos[4].name);
--------------------------------------------------------

Ejercicio 7: Array que tenga strings, números, boleanos, nulos, funciones y un array con datos anteriores 
Imprime la función
let datos = [19,
    'Gato',
    true,
    null,
    function name() {},
    ["Canada", "Suiza", "Germany"]
];
console.log(datos[5][1]);
---------------------------------------------------------------------
-------------------------------------------------------------------------------------
        Objetos con funciones

***Ejercicio 8: Agregar datos a un objeto desde una variable
let nombre = "ric";
let edad = 33;

const persona = {
    nombre: nombre,
    edad: edad,
    frase: function() {
        console.log("Eres un crack!");
    }
}
console.log(persona.edad);


Ejercicio 9:
Crear un objeto con diferentes tipos de datos y mostrar su contenido
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
console.log(persona.otrosAmigos.unila[1]);
-------------------------------------------------
Ejercicio 10:  Crear un objeto e inicializar un metodo interior que tenga
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
-------------------------------------------------------------------
Ejercicio 11 ejecutar una variable pasandole un valor por defecto 
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
    accion2: function nombre(name) {
        console.log("Mi nombre es" + name);
    },
    accion3: function suma(num1, num2) {
        console.log(num1 + num2)
    }
}
ric.accion3(2, 3);


Ejercicio 12 ejecutar una variable pasandole un valor por defecto PARA SUMAR
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
    accion2: function nombre(name) {
        console.log("Mi nombre es" + name);
    },
    accion3: function suma(num1, num2) {
        console.log(num1 + num2)
    }
}
ric.accion3(2, 3);
------------------------------------------------------------------------------------------------------

Ejercicio 14 PROTIP: Reestructuracion de argumentos en un objeto cuando hace falta un valor .
MANERA 1
const persona = {
    nombre: 'Ricardo',
    apellido: 'Garrido',
    //edad: 32,
    hobbies: ['ver series', 'no hace nada']
}

const imprimirPropiedades = ({ nombre, apellido, edad, hobbies }) => {
    edad = edad || 0;
    console.log({ nombre });
    console.log({ apellido });
    console.log({ edad });
    console.log({ hobbies });
}

imprimirPropiedades(persona);

MANERA 2 (esto se le llama "asignarle un valor por defecto", es la más viable)
const persona = {
    nombre: 'Ricardo',
    apellido: 'Garrido',
    //edad: 32,
    hobbies: ['ver series', 'no hace nada']
}

const imprimirPropiedades = ({ nombre, apellido, edad = 32, hobbies }) => {
    console.log({ nombre });
    console.log({ apellido });
    console.log({ edad });
    console.log({ hobbies });
}

imprimirPropiedades(persona);

*/