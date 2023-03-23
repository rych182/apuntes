// '?' es 'if' ,':' es el 'else'
//if (nombre === undefined) { nombre = "visitante" } otra manera de hacer un IF

let saludo = (nombre) => {
    if (nombre === undefined) { nombre = "visitante" }
    return `Hola ${nombre}`;
}
console.log(saludo());



/*
Ejercicio 1, hacer los días de la semana con if-else-else if
let dia = 1;
if (dia === 0) {
    console.log(`Es Domingo`);
} else if (dia === 1) {
    console.log(`Es Lunes`);
} else if (dia === 2) {
    console.log(`Es Martes`);
} else if (dia === 3) {
    console.log(`Es Miercoles`);
} else if (dia === 4) {
    console.log(`Es Jueves`);
} else if (dia === 5) {
    console.log(`Es VIernes`);
} else if (dia === 6) {
    console.log(`Es Sábado`);
}

Ejercicio 2, conseguir la fecha
const hoy = new Date();
console.log(hoy);

Ejercicio 3, conseguir el día de la fecha
const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);



Ejercicio 5, hacer el ejercicio 4 con el metodo "includes"

dia = 1;
apertura = 7;
if ([0, 6].includes(dia)) { //metodo que tienen los arreglos para preguntar si algo existe dentro de ese arreglo
    console.log(`It's weekend!`);
} else {
    console.log(`It's weekday!`);
}
if (apertura >= 8 && apertura <= 21) {
    console.log(`It's open`);
} else {
    console.log(`It's close!`);
}

Ejercicio 10, crear un array que dentro tenga un if corto.
let compa = false;
const amigos = [
    'Urrutia',
    'fulano',
    'sutano',
    'mengano',
    compa ? 'perengano' : "el capi"
];
console.log(amigos);

Ejercicio 11, imprimir la calificación usando el operador ternario(if-else corto)
let calificacion = 65;
const grado = calificacion >= 95 ? "A+" :
    calificacion >= 90 ? "A" :
    calificacion >= 85 ? "B+" :
    calificacion >= 80 ? "B" :
    calificacion >= 75 ? "C+" :
    calificacion >= 70 ? "C" :
    calificacion >= 65 ? "D+" :
    calificacion >= 60 ? "D" : "F";
console.log(calificacion, grado);

Ejercicio 12
Manera distinta de hacer un IF-else
let saludo = (nombre) => {
    if (nombre === undefined) { nombre = "visitante" }
    return `Hola ${nombre}`;
}
console.log(saludo());

EJERCICIO 13
Un programa con if que te salude dependiendo la hora
let hora = "q";
if (hora < 12 && hora >= 5) {
    console.log("BUenos días!");
} else if (hora >= 12 && hora < 19) {
    console.log("BUenas tardes!");
} else if (hora >= 19 && hora <= 24 || hora < 5 && hora > 0) {
    console.log("BUenas noches!");
} else {
    console.log("Hora no valida");
}

EJERCICIO 14
Cuando las 2 opciones son ciertas, se ejecuta la primera solamente
let puntaje = 100;

if (puntaje > 50) {
    console.log("el puntaje es mayor a 50");
} else if (puntaje > 75) {
    console.log("el puntaje es mayor a 75");
}

EJERCICIO 15
Checa si puedes pagar en efecto ó efectivo + crédito o no puedes pagarlo utilizando if
let efectivo = 300;
let credito = 300;
let pago = 200;
let total = efectivo + credito;
let cambio0 = efectivo - pago;
let cambio = (efectivo + credito) - pago;

if (efectivo >= pago) {
    console.log(`Puedo pagar y me sobra de cambio en efectivo ${cambio0}`);
} else if (efectivo < pago && total >= pago) {
    console.log(`No me alcanza, usaré crédito y me sobran ${cambio} de crédito`);
} else if (pago > total) {
    console.log("No puedo comprarlo =/");
} else {
    console.log("Dato no valido");
}

EJERCICIO 16
Ejercicio con if-corto

let logueado = true;
console.log(logueado === true ? "SI se logueo" : "NO se logueo");

EJERCICIO 17
Cualquier edad puede entrar menos 18
let edad = 17;
if (edad != 18) {
    console.log("Puede entrar");
} else {
    console.log("NO Puede entrar!");
}

Ejercicio 18
Comparar las cantidades y decidir si puedes pagar o no 
let efectivo = 500;
let carritoCompras = 300;
if (efectivo > carritoCompras) {
    console.log("Puedes pagar");
} else {
    console.log("Te falt dinero para la compra");
}

EJERCICIO 19
Resumir el código del ejercicio 22 NO SE RECOMIENDA ESTA SINTAXIS
let efectivo = 500;
let carritoCompras = 300;
if (efectivo > carritoCompras)
    console.log("Puedes pagar");
else
    console.log("Te falt dinero para la compra");


EJERCICIO 20
//Ejericio scope global y bloque(dentro de un if)
var a = 'a';
let b = 'b';
const c = 'c';

if (true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: ', a, b, c);
}

console.log('GLOBALES: ', a, b, c);

*/