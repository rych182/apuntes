/*
const numbers = [1, 5, 3, 2, 4];
const max = Math.max(...numbers);
console.log(max); // Output: 5

EJERCICIO 16: Crea una función que sume digitos usando el parametro REST
function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}
console.log(suma(1, 2, 3, 4));

Ejercicio 17:
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);

EJERCICIO 7
Quien sabe que hacia esto aquí
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
//parametro spread: Cuando utilizas los tres puntos fuera de una funcion(EN CUALQUIER LUGAR), es un parametro SPREAD y simboliza, "separa los elementos", la ventaja es que rompe la referencia de Javascript y así podemos trabajar con objetos y hacer igualaciones que apunten a diferentes espacios en memoria
//parametro rest: Es una sintaxis, cuando lo pongo como argumento dentro de una función, ES UN PARAMETRO REST, y quiere decir "Une todos los argumentos en una sola variable y transformalo como un areglo"

*/