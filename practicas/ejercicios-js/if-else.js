// '?' es 'if' ,':' es el 'else'

const dia = 5;
const horaActual = 14;
let horaApertura;
let mensaje;
// '?' es 'if' ,':' es el 'else'
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? "Esta abierto" : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
console.log(horaApertura, mensaje);



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

*/