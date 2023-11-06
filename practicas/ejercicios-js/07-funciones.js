//try catch cuando no quieres que se detenga la ejecución de tu programa
//Usalo cuando las funciones no sabes si vayan a tener datos, si llegan vacias, no llenes tu codigo de try catch



//let suma = (a, b) => a + b;





/*



Ejercicio 8
Crea una función con un número aleatorio del 0 al 1, con funciones flechas y resumidas
let numero = () => Math.random();
console.log(numero());

Ejercicio 8.1
Crea una función con un número aleatorio del 0 al 100, con funciones flechas y resumidas
let numero = () => Math.random()* 100;
console.log(numero());


Ejercicio 9.1: resumir una función, sin parenteses(solo se puede cuando es una cosa, no 2 como en el ejercicio anterior)
const saludo = texto => {
    console.log(texto);
}
saludo("Hola mundo");

Ejercicio 9.2: resumir una función sin usar "return"
const suma = (a, b) => a + b;
console.log(suma(9, 9));

Ejercicio 9.3: Recorrer array con un .forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((elemento, index) => {
    console.log(`El elemento ${elemento} esta en la posicion ${index}`);
});

Ejercicio 9.4: Resume el codigo de arriba quitandole las llaves
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((elemento, index) => console.log(`El elemento ${elemento} esta en la posicion ${index}`));


Ejercicio 10 PROTIP
Crear una función con parametros REST, el argumento rest no puede llevar nada despues de el, solo antes

let persona = (nombre, ...args) => {
    return [nombre, args];
}
console.log(persona("Ricardo", true, 32, ["Perro", "Canada"]));

Ejercicio 11 PROTIP
Deestructuración: sirve para darle nombres a los valores que tiene un arreglo, en vez de crear una variable por cada posicion del arreglo. Ejemplo
let persona = (...args) => {
    return args;
}

const [nombre, soltero, edad, aficiones] = persona("Ricardo", true, 32, ["Perro", "Canada"]);
console.log(aficiones);

Ejercicio 12 PROTIP
Deestructuración con un objeto RESUMIDO
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre } = persona('Ricardo', 'Garrido');
console.log({ nombre });

Ejercicio 13 PROTIP
Destructuración con un objeto resumido, cambiandole el nombre a la propiedad del objeto
const persona = (nombre, apellido) =>
    ({ nombre, apellido })

const { nombre: nombreNuevo } = persona('Ricardo', 'Garrido');
console.log({ nombreNuevo });

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

Ejercicio 15: Cuantos caracteres tiene un array
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras`);
})

Ejercicio 16: resumir el ejercicio 15
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`)

EJERCICIO 17
Crea una funcion dentro del valor de un objeto y usala
let saludar = {
    accion: function saludar(a) {
        return `Hola ${a}`;
    },
    otraAccion: function hablar(b) {
        return `${b}`;
    }
}
console.log(saludar.otraAccion("Blablabla"));

Ejercicio 18
Crea una función con una variable por default si alguna vez alguien no rellena el dato
let saludar = (nombre = "visitante") => {
    return `Hola ${nombre}`;
}
console.log(saludar("Sutano"));


EJERCICIO 29: Escribirle un metodo prototipado a la función heredada del javascript viejito

function animal(nombre, genero) {
    Propiedades
    this.nombre = nombre;
    this.genero = genero;
}

Metodos agregados desde afuera, esto evita la duplicidad de metodos en la función constructora
animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}

function perro(nombre, genero, tamanio) {
    //super sirve para invocar al constructor padre
    this.super = animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}
perro.prototype = new animal();
perro.prototype.constructor = perro;
al igualarlo al mismo constructor, obtendra todo lo que hay en la funcion perro
incluso los prototipos, como el .sonar que tiene

perro.prototype.ladrar = function() {
    console.log("Wof!! wof!!");
}

perro.prototype.ladrar();


EJERCICIO 30: Crear una funcion anónima autoinvocada
(function() {
    console.log("Soy una función autoinvocada");
})()

EJERCICIO 31: Crear una funcion anónima autoinvocada que reciba parametros
(function(w, d, c) {
    console.log("Soy una función autoinvocada");
    console.log(w);
    console.log(d);
    console.log(c);
    c.log("Estoy usando console.log recibiendo el console como un parametro");
})(window, document, console)

EJERCICIO 32: Crear las 4 funciones anónimas autoinvocadas

//clasica
(function() {
    console.log("Soy una función anónima autoejecutable CLASICA");
})();

//Crockford
((function() {
    console.log("Soy una función anónima autoejecutable CROCKFORD");
})());

//UNARIA
+

function() {
    console.log("Soy una función anónima autoejecutable UNARIA");
}();

//FACEBOOk
! function() {
    console.log("Soy una función anónima autoejecutable ESTILO FACEBOOK");
}
-------------------------------------------------------------------------------------
        Arrays con funciones
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


-------------------------------------------------------------------------------------
        Objetos con funciones

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


Ejercicio 4 Crear un objeto con diferentes tipos de datos y mostrar su contenido
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


Ejercicio 5:  Crear un objeto e inicializar un metodo interior que tenga
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

Ejercicio 4.02 ejecutar una variable pasandole un valor por defecto 
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

Ejercicio 4.03 ejecutar una variable pasandole un valor por defecto PARA SUMAR
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


Ejercicio 4.04: crear un objeto e imprime una datos que estén dentro usando THIS

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






*/