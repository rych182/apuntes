/*-Hacer varios ejercicios de arrgelos
-Deben de contener: strings, numbers, booleans, arrays y funciones
-Después vemos como las muestras o ejecutas pero ve haciendolas
-Ten un archivo de practica donde las puedas ver todas y ten un archivo donde solo codies como con los ejercicios de php

La deestruccturacion de objetos y arreglos se usan mucho en frameworks y librerias

Nota: Es muy raro tener 3 niveles de arrays
*/

let datos = [19,
    'Gato',
    true,
    null,
    function cadena() {},
    ["Canada", "Suiza", "Germany"]
];
console.log(datos[5][1]);





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

***Ejercicio 3: Agregar datos a un objeto desde una variable
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

----------------------------ARRAYS--------------------------------------------------

Ejercicio 1 : Array que tenga strings
let animales = ['Perro', 'Gato', 'Pez'];
console.log(animales[2]);


Ejercicio 2
Array que tenga strings y números
let datos = [19, 'Gato', 22];
console.log(datos[0]);

Ejercicio 3: Array que tenga strings, números y boleanos
let datos = [19, 'Gato', true];
console.log(datos[2]);

Ejercicio 4: Array que tenga strings, números, boleanos y nulos
let datos = [19, 'Gato', true, null];
console.log(datos[3]);

Ejercicio 5: Array que tenga strings, números, boleanos, nulos y funciones
let datos = [19, 'Gato', true, null, function name() {}];
console.log(datos[4]);

Ejercicio 5.1: Imprimir la función que esté en el array
let datos = [19, 'Gato', true, null, function name() { return "hola" }];
console.log(datos[4].name);

Ejercicio 6: Array que tenga strings, números, boleanos, nulos, funciones y un array con datos anteriores 
let datos = [19,
    'Gato',
    true,
    null,
    function name() {},
    ["Canada", "Suiza", "Germany"]
];
console.log(datos[5][1]);


Ejercicio 7: Usa el metodo "length" que te dice cuantos cupos hay en el array
let mascotas = ["perro", "gato", "perico"];
console.log(mascotas.length);



Ejercicio 13 Crear un objeto con diferentes tipos de datos y mostrar su contenido
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

Ejercicio 13.01:  Crear un objeto e inicializar un metodo interior que tenga
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

Ejercicio 13.02: crear un objeto e imprime una datos que estén dentro usando THIS

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

EJERCICIO 13.03: Obtener los nombres de las propiedades del objeto

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
console.log(Object.keys(ric));


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

Ejercicio 14 Crear un objeto y mostrar su contenido Y BORRAR una propiedad del objeto ,Crear un objeto y mostrar su contenido
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



Ejercicio 16 Agregar una nueva propiedad al objeto
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

--------------------------------------------------------------------------------------------




*/