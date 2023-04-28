/*
-----------------------------"Métodos de objeto" y "Métodos de función" más USADAS para objetos----------------------------------------- 

Algunos de los métodos de objeto más comúnmente utilizados para objetos en JavaScript incluyen:

Object.keys(objeto): devuelve un array con las propiedades del objeto como elementos.
Object.values(objeto): devuelve un array con los valores de las propiedades del objeto como elementos.
Object.entries(objeto): devuelve un array de arrays, cada uno de los cuales representa una propiedad del objeto con dos elementos: el nombre de la propiedad y el valor de la propiedad.
Object.assign(objeto1, objeto2): copia las propiedades de un objeto a otro objeto.
Algunos de los métodos de función más comúnmente utilizados para objetos en JavaScript incluyen:

hasOwnProperty(propiedad): devuelve un booleano que indica si el objeto tiene una propiedad especificada.
Object.getOwnPropertyNames(objeto): devuelve un array con todas las propiedades del objeto, incluyendo las propiedades no enumerables.
Object.defineProperty(objeto, propiedad, descriptor): define una nueva propiedad en el objeto o modifica una propiedad existente con un descriptor específico.
JSON.stringify(objeto): convierte un objeto en una cadena JSON.

---------------------------------------------------------------------------------------------------------------------------

EJERCICIO 1: Obtener los nombres de las propiedades del objeto
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


EJERCICIO 2: Obtener los valores de las propiedades del objeto
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


EJERCICIO 3: Usar el metodo .hasOwnProperty para preguntar si existe una propiedad del metodo, imprimira true or false para decirte si existe o no
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
console.log(ric.hasOwnProperty("nombre"));


Ejercicio 4
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
const entriesPares = Object.entries(persona);
console.log(entriesPares);


Ejercicio 5
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


Ejercicio 6
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


Ejercicio 7
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