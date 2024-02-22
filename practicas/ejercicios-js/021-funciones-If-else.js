/*
Ejercicio 1, programa que imprima si es fin de semana ó entre semana Y si está abierto o cerrado 
dia = 0;
apertura = 9;
if (dia === 6 || dia === 0) {
    console.log(`It's weekend!`);
} else {
    console.log(`It's weekday!`);
}

if (apertura >= 8 || apertura <= 21) {
    console.log(`It's open`);
} else {
    console.log(`It's close!`);
}


Ejercicio 2
Manera distinta de hacer un IF-else
let saludo = (nombre) => {
    if (nombre === undefined) { nombre = "visitante" }
    return `Hola ${nombre}`;
}
console.log(saludo());


Ejercicio 3, imprime el número mayor con el operador ternario(if-else corto)
const numeroMayor = (a, b) => {
    //el IF es la "a", el ELSE es la "b"
    return (a > b) ? a : b;
}
console.log(numeroMayor(7, 15));

Ejercicio 4, reducir el código del ejercicio 7 
const numeroMayor = (a, b) => (a > b) ? a : b;
console.log(numeroMayor(7, 9));


Ejercicio 5, un programa que tenga una función corta te diga si la persona es miembro o no con un valor booleano
const tieneMembresia = (miembro) => (miembro) ? '2usd' : "cobrele 10usd por puto";
console.log(tieneMembresia(true));


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