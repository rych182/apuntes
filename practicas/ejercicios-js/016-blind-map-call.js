/*
EJERCICIO 10: imprime los datos del array c

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);


Ejercicio 3: Cuantos caracteres tiene un array
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras`);
})


EJERCICIO 3, usando "for of" lo mismo que el ejercicio 11 pero usando la función .map(), "transforma" los datos en ARRAY la función .entries()
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollo web");

for (const entrada of datos.entries()) {
    console.log(entrada);
}

Ejercicio 4: resumir el ejercicio 15
const nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`)
*/