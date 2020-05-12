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

Ejercicio 5, imprimir un arreglo usando forEach(), perro es el index, osea la posición en el arreglo, es una caracteristica que tiene la función forEach()
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
countries.forEach((country, perro) => {
    console.log(`${perro} ${country}`);
})

Ejercicio 6: extrae información de objetos dentro de un arreglo usando la función map, para crear un nuevo arreglo(que es lo que hace la función .map)
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

EJERCICIO 7: Recorrer un objeto utilizando FOR IN
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: "Chevrolet"
}
for (const auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`);
}

EJERCICIO 8, imprime con un for, arrays creados con la función .entries(), usando los espacios de memoria y datos de 1 solo array
const ciudades = ['Mexico', 'Canada', 'USA', 'Groelandia', 'Brasil'];
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

EJERCICIO 9, lo mismo que el ejercicio 8 pero usando la función .map(), "transforma" los datos en ARRAY
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.entries()) {
    console.log(entrada);
}

*/