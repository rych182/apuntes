/*-Hacer varios ejercicios de arrgelos
-Deben de contener: strings, numbers, booleans, arrays y funciones
-Después vemos como las muestras o ejecutas pero ve haciendolas
-Ten un archivo de practica donde las puedas ver todas y ten un archivo donde solo codies como con los ejercicios de php

Nota: Es muy raro tener 3 niveles de arrays
*/



/*
Ejercicio 1 
Array que tenga strings
let animales = ['Perro', 'Gato', 'Pez'];
console.log(animales[2]);

Ejercicio 2
Array que tenga strings y números
let datos = [19, 'Gato', 22];
console.log(datos[0]);

Ejercicio 3
Array que tenga strings, números y boleanos
let datos = [19, 'Gato', true];
console.log(datos[2]);

Ejercicio 4
Array que tenga strings, números, boleanos y nulos
let datos = [19, 'Gato', true, null];
console.log(datos[3]);

Ejercicio 5
Array que tenga strings, números, boleanos, nulos y funciones
let datos = [19, 'Gato', true, null, function name() {}];
console.log(datos[4]);

Ejercicio 6
Array que tenga strings, números, boleanos, nulos, funciones y un array con datos anteriores 
let datos = [19,
    'Gato',
    true,
    null,
    function name() {},
    ["Canada", "Suiza", "Germany"]
];
console.log(datos[5][1]);


Ejercicio 7
Usa el metodo "length" que te dice cuantos cupos hay en el array
let mascotas = ["perro", "gato", "perico"];
console.log(mascotas.length);

Ejercicio 8
Usa el metodo .push() que te agrega un nuevo dato a tu array al final(agrega un objeto de preferencia)
let mascotas = ["perro", "gato", "perico"];
mascotas.push("Pez");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 9
Te agrega un nuevo dato a tu array pero al inicio
let mascotas = ["perro", "gato", "perico"];
mascotas.unshift("Caracol");
console.log(mascotas.length);
console.log(mascotas);

Ejercicio 10
Borrar el último dato de tu array
let mascotas = ["perro", "gato", "perico"];
let borrado = mascotas.pop();
console.log(mascotas.length);
console.log(mascotas);
console.log("La mascota que se borro fue: " + borrado);

Ejercicios 11
Elimina el rango de elementos que tu le digas, dentro de un array
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let elementosBorrados = mascotas.splice(1, 4);
console.log(mascotas.length);
console.log(mascotas);
console.log(elementosBorrados);

Ejercicio 12
Te dice el lugar en donde se encuentra el dato que buscas, OJO: debes ponerlo exacto, mayúsculas y minúsculas
let mascotas = ["perro", "gato", "perico", "pez", "hamster", "mapache"];
let indice = mascotas.indexOf("pez");
console.log(indice);

Ejercicio 13
Crear un objeto y mostrar su contenido
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

Ejercicio 14
Crear un objeto y mostrar su contenido Y BORRAR una propiedad del objeto
Crear un objeto y mostrar su contenido
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

Ejercicio 15
Convertir todo un objeto en un array
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

const entriesPares = Object.entries(persona);
console.log(entriesPares);

Ejercicio 16
Agregar una nueva propiedad al objeto
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

Ejercicio 17
Crea un objeto y bloquea una modificación usando el metodo Object.freeze, que sirve para congelar tu objeto y se quede como lo dejaste
const persona = {
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
Object.freeze(persona);
Object.freeze(persona.amigos);
persona.amigos[0] = "Andres";
persona.edad = 18;
console.log(persona);

Ejercicio 18
Usa el metodo Object.getOwnPropertyNames(); que te muestra las propiedades que le pusiste a tu objeto, pero en un Array
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

const propiedades = Object.getOwnPropertyNames(persona);
console.log(propiedades);

Ejercicio 19
Muestra en un array los valores que tengas dentro de las propiedades que están dentro de tu objeto, usando Object.value()
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

const valores = Object.values(persona);
console.log(valores);
*/