//Ejercicios con funsiones y lógica booleana

const soyUndifined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';
//evalua primero que sea true y como si es true, pasa al segundo valor y lo imprime,osea se le asigna ese valor, EL UÚLTIMO VALOR 
const a2 = true && 'Hola mundo' && 150;
//Se le asigna el último valor, que no sea negativo
const a3 = true && 'hola mundo' && 150 && soyNull;
const a4 = true && 'hola mundo' && 150 && soyUndifined;
//Pero si hay un valor falso, lo imprime aunque no sea el último
const a5 = true && 'hola mundo' && soyFalso && 150 && soyUndifined;
//Pero si es con OR, buscará al menos un true o un valor sin detenerse en el primer valor aunque sea false, e imprimira el último valor
const a6 = soyFalso || 'Ya no soy falso';
//Imprime el último valor aunque sea un null o undifined
const a7 = soyFalso || soyUndifined;
const a8 = soyFalso || soyUndifined || soyNull;
//Pero si encuentra un valor anterior al true, DISTINTO de null o undifined, pondrá ese valor
const a9 = soyFalso || "texto" || true;

console.log(a9);


/*
Algebra
Multiplicaciones y divisiones primero, luego sumas y restas

Ejercicio 1: Sacar el residuo de una división
const num1 = 20;
const num2 = 30;
const resultado = num2 % num1;
console.log(resultado);

Ejercicio 2, Math.PI te imprime 3.1416
let resultado = Math.PI;
console.log(resultado);

Ejercicio 3, Math.round() redondea hacia arriba o abajo
let resultado1 = Math.round(2.49);
console.log(resultado1);

Ejercicio 4 Math.ceil() redondea hacia arriba
let resultado1 = Math.floor(2.49);
console.log(resultado1);

Ejercicio 5 Math.floor() redondea hacia abajo
let resultado1 = Math.floor(2.49);
console.log(resultado1);

Ejercicio 6 Math.sqrt() saca la raíz cuadrada
let resultado1 = Math.sqrt(144);
console.log(resultado1);

Ejercicio 6 Math.abs() te devuelve el número absoluto(lo negativo lo vuelve positivo)
let resultado1 = Math.abs(-3);
console.log(resultado1);

Ejercicio 7 Math.pow() te eleva el número a la potencia que le digas
let resultado1 = Math.pow(2,4);
console.log(resultado1);

Ejercicio 8 Math.min(2,4,5,6,7,9) te dice el valor mas pequeño de los números que pusiste
let resultado1 = Math.min(2,4,5,6,7,9);
console.log(resultado1);

Ejercicio 9 Math.random() te da un valor aleatorio del 0 al 0.99
let resultado1 = Math.random();
console.log(resultado1);

Ejercicio 10, te transforma el string en un número
let caja = '2435';
console.log(typeof Number(caja));

Ejercicio 11 te transforma el número en String
let caja = 2435;
console.log(typeof String(caja));

Ejercicio 12 te transforma el número en string
let caja = 2435;
console.log(typeof caja.toString());

Ejercicio 13 imprimir una función con "template string ó template literals"(así se llama)
let caja = (num1, num2) => {
    return num1 + num2;
}
console.log(`${caja(4, 5)}`);

Ejercicio 13: Comprobar si es realmente un array
let meses = new Array('Enero', 'Febrero', 'Marzo');
console.log(Array.isArray(meses));

Ejercicio 14: Elimina la primera posición de un arreglo
let meses = new Array('Enero', 'Febrero', 'Marzo');
meses.shift();
console.log(meses);

Ejercicio 15: unir 2 arreglos en 1
let meses = new Array('Enero', 'Febrero', 'Marzo');
let numeros = [1, 2, 3];
console.log(meses.concat(numeros));

Ejercicio 15: unir 2 varios arreglos en 1
let meses = new Array('Enero', 'Febrero', 'Marzo');
let numeros = [1, 2, 3];
let numeros1 = [4, 5, 6];
let numeros2 = [7, 8, 9];
console.log(meses.concat(numeros, numeros1, numeros2));

Ejercicio 16: Ordena el array en orden alfabetico
let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'JUnio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'DIciembre');
meses.sort();
console.log(meses);

Ejercicio 17: Acomodar los números del array de menor a mayor
let meses = new Array(1, 2, 44, 56, 78, 98, 90, 9);
meses.sort(function(x, y) {
    return x - y;
});
console.log(meses);

Ejercicio 18: Acomodar los números del array de mayor a menor
let meses = new Array(1, 2, 44, 56, 78, 98, 90, 9);
meses.sort(function(x, y) {
    return y - x;
});
console.log(meses);

Ejercicio 19: obtener el año completo
let fecha = new Date().getFullYear();
console.log(fecha);


*/