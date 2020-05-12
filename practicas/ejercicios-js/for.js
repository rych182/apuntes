//Hacer un for anidado https://www.youtube.com/watch?v=IbOGEvOV6BA




/*
APUNTES:
-Cada let i declarada en un FOR, vive en ese lapso de tiempo del ciclo
-Cuando hacer un ciclo dentro de otro ciclo se acostumbra cambiar la variable de nombre
Ejercicio 1, Hacer un for que imprima mis amigos
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < 5; i++) {
    console.log(countries[i]);
}

Ejercicio 2, Hacer el ejercicio 1 pero con una función que cuente cuantos espacios tiene el array y que los imprima
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

Ejercicio 3, haz el ejercicio 1 pero usando FOR IN, 
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i in countries) {
    console.log(countries[i]);
}

Ejercicio 4, hacer el ejercicio 1 con FOR OF
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i of countries) {
    console.log(i);
}

Pero se acostumbra poner el sengular del nombre del array
for (let country of countries) {
    console.log(country);
}

EJERCICIO 5, usar un IF dentro de un FOR
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        continue;
    }
    console.log(i);
}

EJERCICIO 6, detener el FOR en el número 5
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Voy en el ${i}`);
        break;
    }
    console.log(i);
}

Ejercicio 7, imprime si el número es par o inpar
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`El ${i} es par`);
    } else {
        console.log(`El ${i} es inpar`);
    }
}


Ejercicio 8, imprimir un arreglo usando forEach(), perro es el index, osea la posición en el arreglo, es una caracteristica que tiene la función forEach()
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
countries.forEach((country, perro) => {
    console.log(`${perro} ${country}`);
})

Ejercicio 9: extrae información de objetos dentro de un arreglo usando la función map, para crear un nuevo arreglo(que es lo que hace la función .map)
let carrito = [
    { id: 1, producto: 'libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitarra' },
    { id: 4, producto: 'Tablet' }
];

const nombreProducto = carrito.map((carrito) => {
    return carrito.producto;
})
console.log(nombreProducto);

EJERCICIO 10: Recorrer un objeto utilizando FOR IN
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: "Chevrolet"
}
for (const auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`);
}

EJERCICIO 11, imprime con un for, arrays creados con la función .entries(), usando los espacios de memoria y datos de 1 solo array
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

EJERCICIO 12, lo mismo que el ejercicio 11 pero usando la función .map(), "transforma" los datos en ARRAY la función .entries()
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.entries()) {
    console.log(entrada);
}

EJERCICIO 13, cada espacio del array lo convierte en un array
const ordenes = new Set([123, 231, 131, 102]);
for (const iterator of ordenes.entries()) {
    console.log(iterator);
}

Ejercicio 14, imprime los valores de un array usando FOR OF y la función .values()
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.values()) {
    console.log(entrada);
}

EJERCICIO 15, nos regresa solo los valores del Map, pero no los indices(llaves fue lo que dijo el profe)
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.values()) {
    console.log(entrada);
}

Ejercicio 16, usamos la función .keys() con FOR OF para conseguir el indice(o key dijo el profe)
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

Ejercicio 17, nos va a regresar nuestro indice pero en este caso el índice es nombre y profesión PORQUE ES UN OBJETO
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.keys()) {
    console.log(entrada);
}
*/