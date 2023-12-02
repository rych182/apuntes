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


/*

las condicionales son un concepto más fundamental y, por lo tanto, es recomendable aprenderlas antes que los bucles.

Esto se debe a que las condicionales son necesarias para tomar decisiones en el código y
para controlar el flujo de ejecución en función de esas decisiones. 
Los bucles, son útiles para repetir tareas varias veces,
pero para ello es necesario tener un control de flujo adecuado, lo que se logra a través del uso de condicionales.

Aprender condiciones y bucles antes que funciones en JavaScript puede ser beneficioso para evitar confusiones porque
son conceptos más simples y fundamentales en la programación en general.

Las condiciones y bucles se utilizan ampliamente en la programación, independientemente del lenguaje,
por lo que es importante comprenderlos bien. Por ejemplo, el uso del condicional "if" y del bucle "for" es común
en muchos programas y proyectos.

Por otro lado, aunque las funciones son una parte fundamental de la programación,
a veces pueden ser más abstractas y complicadas de entender para alguien que recién está empezando.
Las funciones pueden involucrar conceptos como ámbito de variables, retorno de valores y parámetros,
que pueden ser difíciles de comprender sin una base sólida en los conceptos más básicos como las condiciones y bucles.

*/

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

EJERCICIO 2
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


EJERCICIO 3
Cuando las 2 opciones son ciertas, se ejecuta la primera solamente
let puntaje = 100;

if (puntaje > 50) {
    console.log("el puntaje es mayor a 50");
} else if (puntaje > 75) {
    console.log("el puntaje es mayor a 75");
}


EJERCICIO 4
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


EJERCICIO 5
Cualquier edad puede entrar menos 18
let edad = 17;
if (edad != 18) {
    console.log("Puede entrar");
} else {
    console.log("NO Puede entrar!");
}


Ejercicio 6 (IMPORTANTE) IF-ELSE COMO PHYTON
Comparar las cantidades y decidir si puedes pagar o no 
let efectivo = 500;
let carritoCompras = 300;
if (efectivo > carritoCompras) {
    console.log("Puedes pagar");
} else {
    console.log("Te falt dinero para la compra");
}

CODIGO RESUMIDO IF-ELSE COMO PHYTON
let efectivo = 500;
let carritoCompras = 300;
if (efectivo > carritoCompras)
    console.log("Puedes pagar");
else
    console.log("Te falt dinero para la compra");

EJERCICIO 7
Ejericio scope global y bloque(dentro de un if)
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