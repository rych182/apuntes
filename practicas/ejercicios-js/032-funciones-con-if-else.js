/*

Ejercicio 12
Manera distinta de hacer un IF-else
let saludo = (nombre) => {
    if (nombre === undefined) { nombre = "visitante" }
    return `Hola ${nombre}`;
}
console.log(saludo());


Ejercicio 1, imprime el número mayor con el operador ternario(if-else corto)
const numeroMayor = (a, b) => {
    //el IF es la "a", el ELSE es la "b"
    return (a > b) ? a : b;
}
console.log(numeroMayor(7, 15));

Ejercicio 2, reducir el código del ejercicio 7 
const numeroMayor = (a, b) => (a > b) ? a : b;
console.log(numeroMayor(7, 9));


Ejercicio 3, un programa que tenga una función corta te diga si la persona es miembro o no con un valor booleano
const tieneMembresia = (miembro) => (miembro) ? '2usd' : "cobrele 10usd por puto";
console.log(tieneMembresia(true));




*/