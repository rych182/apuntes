/*
Ejercicio 20 Imprimir los objetos dentro de un array usando For
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

EJERCICIO 21 Imprimir los objetos dentro del array con for pero imprimiendo nombre y modelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + ' del año ' + autos[i].anio);
}

EJERCICIO 22 Hacer el ejercicio 30 pero imprimiendo con interpolacion
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} del año ${autos[i].anio}`);
}

Ejercicio 23 Agregaga un objeto a un array const e imprimelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos.push({ modelo: "Mercedez Benz", anio: 2016 });
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + 'del año' + autos[i].anio);
}

EJERCICIO 24 Modifica objeto dentro de un array const desde afuera(es la unica manera en la que se puede).
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos[1].modelo = "Mercedez Benz";
console.log(autos[1].modelo);

Ejercicio 29: extrae información de objetos dentro de un arreglo usando la función map, para crear un nuevo arreglo(que es lo que hace la función .map)
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
*/