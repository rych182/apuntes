/*

Ejercicio 1
Imprimir los objetos dentro de un array usando For
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

EJERCICIO 2
Imprimir los objetos dentro del array con for pero imprimiendo nombre y modelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + ' del año ' + autos[i].anio);
}


EJERCICIO 3
Hacer el ejercicio 30 pero imprimiendo con interpolacion
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} del año ${autos[i].anio}`);
}


Ejercicio 4
Agregaga un objeto a un array const e imprimelo
const autos = [
    { modelo: "Mustang", anio: 1962 },
    { modelo: "360z", anio: 2010 },
    { modelo: "Civic", anio: 2007 }
];

autos.push({ modelo: "Mercedez Benz", anio: 2016 });
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo + 'del año' + autos[i].anio);
}


*/