

/*
JON MIRCHA: LISTO

--------------------------OBJETOS--------------------------------------
***EJERCICIO 0: declara un objeto e imprimelo
let unPinshiObjeto = {
    nombre: 'Pedro',
    apellido: "Martinez",
    edad: 24
}
console.log(unPinshiObjeto);


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
-------------------------------------------------

EJERCICIO 5 Modifica objeto dentro de un array const desde afuera(es la unica manera en la que se puede).
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos[1].modelo = "Mercedez Benz";
console.log(autos[1].modelo);

----------------------------------------------------------

Ejercicio 6: modificar un valor de una constante
const persona = {
  nombre: "ric",
  edad: 37
}

persona.edad = 36;
console.log(persona.edad);
------------------------------------------------------------------
--------------------------------------------------------------------
Ejercicio 7: agregarlo datos a un objeto dentro de una constante
const persona = {
  nombre: "ric",
  edad: 37
}

persona.sexo = "masculino";
console.log(persona.sexo);
--------------------------------------------------------------------------
Ejercicio 8
Borrar un dato de un objeto dentro de una constante
const persona = {
  nombre: "ric",
  edad: 37
}

persona.sexo = "masculino";
delete persona.nombre;
console.log(persona);
-----------------------------------------------------------------
Ejercicio 9: congelar un objeto para que no sea modificado
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

Tampoco permite eliminar

Object es un objeto incorporado que proporciona un conjunto de métodos y propiedades
para trabajar con objetos.Aunque Object es un objeto en sí mismo,
es más preciso describirlo como una función constructora que puede crear objetos.
*/