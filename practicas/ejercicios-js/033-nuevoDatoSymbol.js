/**
Symbol es un tipo de dato primitivo, cuando se crea, su valor se va a mantener privado y de uso interno.
Generalmente los Symbol suelen agregarse como caracteristicas de objetos, "como una propiedad".
También nos permite crear identificadores unicos .
Normalmente se usan para mantener datos que no quieres que se cambien, porque internamente los necesitas
Ejemplo:
let id1 = "hola"
let id2 = "hola"
let id3 = Symbol("mundo");
let id4 = Symbol("mundo")
console.log(id3===id4)//Marca que es false por que cada Symbol es UNICO
console.log(typeof id3)
----
La manera en que se usa es esta:

const nombre = Symbol();
const persona = {
    [nombre]: "ric", //No aparece el nombre de la propiedad si no la referencia
    apellido: "garrido",
    edad: 38
}
----
Y como es privado el dato, no se podrá ver en un for in

const persona = {
    [nombre]: "ric", //No aparece el nombre de la propiedad si no la referencia
    apellido: "garrido",
    edad: 38
}

for (const key in persona) {
        console.log(persona[key]);
}

----
Incluso aunque quieras sobre escribir esa propiedad, no lo podrás hacer
persona.nombre = "ricardo"
console.log(persona)

//Para mandar llamar a la propiedad symbol
console.log(persona[nombre])

//Para crear un metodo symbol pero después de ser creado el objeto, primero declaras y luego creas el metodo:
const saludar = Symbol();
persona[saludar] = function() {
    console.log("Hola mundo")
}
Y para ejecutarla:
persona[saludar]()

---------

Fijate que no recorre los Symbols:
for (const key in persona) {
    console.log(key)
    console.log(persona[key])
}

Si quieres recorrerlos, se puede hacer con:
console.log(Object.getOwnPropertySymbols(persona))

Te creará un Array con tus Symbols
 */

let id1 = "hola"
let id2 = "hola"
let id3 = Symbol("mundo");
let id4 = Symbol("mundo")

const nombre = Symbol();
const saludar = Symbol();

const persona = {
    [nombre]: "ric", //No aparece el nombre de la propiedad si no la referencia
    apellido: "garrido",
    edad: 38
}

const persona2 = {
    nombre: "ric", //No aparece el nombre de la propiedad si no la referencia
    apellido: "garrido",
    edad: 38
}

persona.nombre = "ricardo"

persona[saludar] = function() {
    console.log("Hola mundo")
}

//Ahora, si tu recorres los Symbols dentro de un objeto, solo detectara las "propiedades", no los metodos

console.log(Object.getOwnPropertySymbols(persona))