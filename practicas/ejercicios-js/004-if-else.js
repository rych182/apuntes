const cadenaDeTexto = "hola";
const numero = 12;
const indefinido = undefined;
const nulo = null;
const vector = [1,"hola"]
const objeto={name:"ric",apellido:"garrido"}
const funcion = function() {
    return 3;
}
if (funcion) {
    console.log("imprime verdadero")
}else{
    console.log("imprime falso")
}

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
let dia = "hola";
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
    console.log(`Es Viernes`);
} else if (dia === 6) {
    console.log(`Es Sábado`);
}else{
    console.log("ese día no existe")
}

EJERCICIO 2
Hacer un programa con if que te salude dependiendo la hora
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


EJERCICIO 4: Hacer este ejercicio
-Solo puedes utilizar if-else, else if , tipos de operadores y console.log
-Crea 4 posibles respuestas, pagar en efectivo, efectivo + crédito, o no te alcanza para pagarlo,
el número no puede ser negativo y el dato no es valido 

let efectivo = 300;
let credito = 300;
let pago = 500;
let total = efectivo + credito;
let cambio = (efectivo + credito) - pago;
let cambio0 = efectivo - pago;


if (pago < 0) {
    console.log("El número no puede ser negativo")
} else if (efectivo >= pago) {
    console.log(`Puedo pagar y me sobra de cambio en efectivo ${cambio0}`);
} else if (efectivo < pago && efectivo + credito >= pago) {
    console.log(`No me alcanza, pagare una parte en efectivo y otra a crédito y me sobran ${cambio} de crédito`);
} else if(pago > total){
    console.log("No puedo comprarlo, no me alcanza =/");
} else {
    console.log("Dato no valido");
}


EJERCICIO 5
Cualquier edad puede entrar menos 18(USANDO el operandor "diferente")
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
    console.log("Te falta dinero para la compra");


EJERCICIO 7
Ejericio scope global y bloque(dentro de un if), sirve para ver lo que imprime y como 
la palabra reservada VAR se vuelve global, entonces imprimira AA tanto en bloque como en global
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


Ejercicio 8
Checa el scope de las variables let, son locales, no globales, por eso en esta función no lo muestra
let edad = 18;
if (edad => 18) {
    let eresAdulto = true;
}
console.log(eresAdulto);


EJERCICIO 9: ver que es lo que me muestra
const cadenaDeTexto = "hola";
const numero = 12;
const indefinido = undefined;
const nulo = null;
const vector = [1,"hola"]
const objeto={name:"ric",apellido:"garrido"}
const funcion = function() {
    return 3;
}
if (funcion) {
    console.log("imprime verdadero")
}else{
    console.log("imprime falso")
}

----------------------------------------------------------

EJERCICIO 11: No hacer esto en un exámen técnico

let autenticado = true;
//de por si da true
if (autenticado === true) {
  console.log("si puedes ver netflix")
}else{
  console.log("No no puedes verlo");
}


*/