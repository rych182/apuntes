// '?' es 'if' ,':' es el 'else'
//if (nombre === undefined) { nombre = "visitante" } otra manera de hacer un IF



/*
Ejercicio 1, hacer los días de la semana con if-else-else if

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

Ejercicio 4, programa que imprima si es fin de semana ó entre semana
Y si está abierto o cerrado 
const dia = 0;
const horaActual = 7;
let horaApertura;
let mensaje;

if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log("Entre semana")
    horaApertura = 9;
}

if (horaActual >= horaApertura) {
    mensaje = "Esta abierto";
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}
console.log(horaApertura, mensaje);

Ejercicio 5, hacer el ejercicio 4 con el metodo "includes"

const dia = 0;
const horaActual = 7;
let horaApertura;
let mensaje;

if ([0, 6].includes(dia)) { //metodo que tienen los arreglos para preguntar si algo existe dentro de ese arreglo
    console.log('Fin de semana'); //Osea, verifica si es fin de semana o entre semana 
    horaApertura = 9;
} else {
    console.log("Entre semana")
    horaApertura = 9;
}

if (horaActual >= horaApertura) {
    mensaje = "Esta abierto";
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}
console.log(horaApertura, mensaje);

Ejercicio 6, resumir el ejercicio 4 y 5 con if corto(se llama en si, operador condicional ternario)
Regla, fin de semana abrimos 9am, entre semana 11am

const dia = 5;
const horaActual = 7;
let horaApertura;
let mensaje;
// '?' es 'if' ,':' es el 'else'
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? "Esta abierto" : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log(horaApertura, mensaje);

Ejercicio 7, imprime el número mayor con el operador ternario(if-else corto)
const numeroMayor = (a, b) => {
    return (a > b) ? a : b;
}
console.log(numeroMayor(7, 5));

Ejercicio 8, reducir el código del ejercicio 7 
const numeroMayor = (a, b) => (a > b) ? a : b;
console.log(numeroMayor(7, 9));

Ejercicio 9, un programa que te diga si la persona es miembro o no con un valor booleano
const tieneMembresia = (miembro) => (miembro) ? '2usd' : "cobrele 10usd por puto";
console.log(tieneMembresia(true));

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


*/