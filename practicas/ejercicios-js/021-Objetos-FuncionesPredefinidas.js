

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

METODOS DE FUNCIÓN 

Métodos de función predefinidos:

Function.prototype.call(): Llama a una función con un valor this y argumentos dados.
Function.prototype.apply(): Llama a una función con un valor this y un array de argumentos.
Function.prototype.bind(): Crea una nueva función que, cuando es llamada,
tiene su valor this fijo al valor pasado,
con una secuencia determinada de argumentos precediendo a cualquier otro que
se proporcione cuando se llame a la nueva función.

EJEMPLOS
function sumar(a, b) {
    return a + b;
}

const resultado = sumar.call(null, 5, 3); // Llama a la función sumar con el valor this null y argumentos 5 y 3.
console.log(resultado); // Salida: 8

const sumaDiez = sumar.bind(null, 10); // Crea una nueva función que suma 10 a su argumento.
console.log(sumaDiez(5)); // Salida: 15


---------------------------------------------------------------------------------------------------------------------------
Ejercicio 0

"use strict";
const persona = {
    name: "ric",
    age: 37
}
Object.freeze(persona);
persona.name = "alvin";
console.log(persona.name)


En JavaScript, Object es un objeto incorporado que proporciona un conjunto de métodos
y propiedades para trabajar con objetos en el lenguaje.
freeze() es uno de esos métodos que pertenece al objeto Object.

Object es un objeto incorporado que proporciona un conjunto de métodos y propiedades para trabajar con objetos. Aunque Object es un objeto en sí mismo, es más preciso describirlo como una función constructora que puede crear objetos.

---------------------------------------------------------------------------------
Ejercicio 1: Object.seal() Sirve para sellar el objeto, Permite agregar ni borrar pero si modificar las existentes
"use strict";
const persona = {
    name: "ric",
    age: 37
}
//Sirve para sellar el objeto, Permite agregar ni borrar pero si modificar las existentes
Object.seal(persona);
persona.name = "alvin";
persona.correo = "correo@correo.com";
console.log(persona.correo)
-----------------------------------------------------------------------------------
Ejercicio 2: comprobar que un objeto esté sellado o no con

"use strict";
const persona = {
    name: "ric",
    age: 37
}

Object.seal(persona);
console.log(Object.isSealed(persona));
--------------------------------------------------------------------------------
EJERCICIO 3: Obtener los nombres de las propiedades del objeto y te regresa los valores dentro de un array
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
------------------------------------------------------------------------------------------------------

EJERCICIO 4: Obtener los valores de las propiedades del objeto que está dentro del objeto
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
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
};

console.log(Object.keys(ric.amigos));

---------------------------------------------------------------------------------------------
Ejercicio 5: fusionar 2 objetos en 1
let persona = {
    nombre: "ric",
    edad: 3
}

let animal = {
    tipo: "canino",
    raza: "chihuahua"
}

let fusion = Object.assign(persona,animal);
console.log(fusion)
-----------------------------------------------------------------------------------------------


EJERCICIO 6: Usar el metodo .hasOwnProperty para preguntar si existe una propiedad del metodo, imprimira true or false para decirte si existe o no
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
-----------------------------------------------------------------------------------------------------------

Ejercicio 7
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
--------------------------------------------------------------------------------------

Ejercicio 8
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
--------------------------------------------------------------------------------------------------------

Ejercicio 9
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
-----------------------------------------------------------------------------------

Ejercicio 9
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
--------------------------------------------------------------------------------


*/