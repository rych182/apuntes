/*const persona = {
    nombre: "rick",
    apellido: "Garrido",
    edad: 45,
    direccion: {
        ciudad: "Cuernavaca",
        cp: 62550,
    }
};
const persona2 = {...persona };

console.log(persona2);
*/

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);
/*
Ejercicio 1 : SPREAD, copiar un array y ponerlo dentro de otro

const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);

Ejercicio2: 

*/